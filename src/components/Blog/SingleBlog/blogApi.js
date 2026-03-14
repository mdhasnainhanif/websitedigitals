/**
 * Blog API helpers – fetch single post by slug and normalize for the single blog page.
 */

const WP_API_BASE = 'https://www.websitedigitals.com/wordpress-blogs/wp-json/wp/v2/posts';
const DUMMY_IMAGE = 'https://via.placeholder.com/800x500/f0f3f8/808080?text=Blog+Post';

function stripHtml(html) {
  if (typeof html !== 'string') return '';
  return html.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
}

/**
 * Extract first MP3 (audio/mpeg) source URL from HTML content.
 * @param {string} html - Post content HTML
 * @returns {{ url: string | null, contentWithoutAudio: string }} URL if found, and content with first <audio> block removed
 */
export function extractAudioFromContent(html) {
  if (!html || typeof html !== 'string') return { url: null, contentWithoutAudio: html || '' };
  // Match <source ... src="..."> with type="audio/mpeg" or src ending in .mp3 (attribute order may vary)
  const sourceMatch = html.match(/<source[^>]+src\s*=\s*["']([^"']+)["'][^>]*type\s*=\s*["']audio\/mpeg["']/i)
    || html.match(/<source[^>]+type\s*=\s*["']audio\/mpeg["'][^>]+src\s*=\s*["']([^"']+)["']/i)
    || html.match(/<source[^>]+src\s*=\s*["']([^"']+\.mp3[^"']*)["'][^>]*>/i);
  const url = sourceMatch ? sourceMatch[1].trim() : null;
  // Remove first full <audio>...</audio> block so we can render a single custom player
  const contentWithoutAudio = url
    ? html.replace(/<audio[\s\S]*?<\/audio>/i, '').trim()
    : html;
  return { url, contentWithoutAudio };
}

/**
 * Fetches all post slugs from the WordPress API (for static export generateStaticParams).
 * @param {number} perPage - Max posts per request (default 100)
 * @returns {Promise<Array<{ slug: string }>>}
 */
export async function fetchAllSlugs(perPage = 100) {
  const url = `${WP_API_BASE}?per_page=${perPage}&_fields=slug`;
  const res = await fetch(url, { cache: 'no-store' });
  if (!res.ok) return [];
  const data = await res.json();
  if (!Array.isArray(data)) return [];
  return data.map((p) => ({ slug: p.slug || '' })).filter((p) => p.slug);
}

/**
 * Fetches a single post by slug from the WordPress API.
 * @param {string} slug - Post slug (e.g. 'single-blog')
 * @returns {Promise<object|null>} Raw API post object or null if not found
 */
export async function fetchPostBySlug(slug) {
  if (!slug || typeof slug !== 'string') return null;
  const url = `${WP_API_BASE}?slug=${encodeURIComponent(slug.trim())}&_embed`;
  const res = await fetch(url, { cache: 'no-store' });
  if (!res.ok) return null;
  const data = await res.json();
  if (!Array.isArray(data) || data.length === 0) return null;
  return data[0];
}

/**
 * Normalizes raw WordPress post for the single blog page.
 * @param {object} p - Raw post from API
 * @returns {object} Normalized post: title, slug, date, formattedDate, excerpt, content, imageUrl, imageAlt, readingTimeMinutes
 */
export function normalizeSinglePost(p) {
  if (!p) return null;

  const media = p._embedded?.['wp:featuredmedia']?.[0];
  const imageUrl = media?.source_url || null;
  const imageAlt = media?.alt_text || stripHtml(p.title?.rendered) || 'Blog post';

  const title = stripHtml(p.title?.rendered) || 'Untitled';
  const rawContent = p.content?.rendered || '';
  const { url: audioUrl, contentWithoutAudio } = extractAudioFromContent(rawContent);
  const content = contentWithoutAudio;

  // Summary from API (summary.raw or summary.rendered); only set if present
  const summaryRaw = typeof p.summary?.raw === 'string' ? p.summary.raw.trim() : '';
  const summaryRendered = stripHtml(p.summary?.rendered || '');
  const summary = summaryRaw || summaryRendered || null;

  // Reading time: ~200 words per minute (use raw content for word count)
  const wordCount = (rawContent && stripHtml(rawContent).split(/\s+/).length) || 0;
  const readingTimeMinutes = Math.max(1, Math.ceil(wordCount / 200));

  return {
    id: p.id,
    slug: p.slug || '',
    title,
    date: p.date || '',
    formattedDate: formatDate(p.date),
    summary,
    content,
    audioUrl: audioUrl || null,
    imageUrl,
    imageAlt,
    readingTimeMinutes,
  };
}

function formatDate(dateStr) {
  if (!dateStr) return '';
  try {
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  } catch {
    return dateStr;
  }
}
