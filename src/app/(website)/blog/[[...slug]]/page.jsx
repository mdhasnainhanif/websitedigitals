import BlogPageClient from '@/components/Blog/BlogPageClient';

/**
 * Only /blog is pre-rendered at build. All paths under /blog/* are served
 * by the same HTML (via server rewrite); BlogPageClient fetches from WordPress at runtime.
 */
export async function generateStaticParams() {
  return [{ slug: [] }];
}

export default function BlogCatchAllPage() {
  return <BlogPageClient />;
}
