'use client';

import React, { useMemo, useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './SingleBlogPost.module.css';

const DUMMY_IMAGE = 'https://via.placeholder.com/800x500/f0f3f8/808080?text=Blog+Post';

/**
 * Slugify text for use as heading id (unique per occurrence).
 */
function slugify(text) {
  return String(text)
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
}

/**
 * Extract main headings (h1, h2 only) from HTML content for Table of Contents.
 * Returns array of { level: 1|2, text, id }.
 */
function extractHeadings(html) {
  if (!html || typeof html !== 'string') return [];
  const headings = [];
  const used = new Set();
  const regex = /<h([12])[^>]*>([\s\S]*?)<\/h\1>/gi;
  let m;
  while ((m = regex.exec(html)) !== null) {
    const level = parseInt(m[1], 10);
    const rawText = m[2].replace(/<[^>]*>/g, '').trim();
    if (!rawText) continue;
    let id = slugify(rawText);
    if (used.has(id)) {
      let n = 1;
      while (used.has(id + '-' + n)) n++;
      id = id + '-' + n;
    }
    used.add(id);
    headings.push({ level, text: rawText, id });
  }
  return headings;
}

/**
 * Inject id attributes into h1/h2 in HTML so TOC links work.
 */
function injectHeadingIds(html, headings) {
  if (!headings || headings.length === 0) return html;
  let index = 0;
  return html.replace(/<h([12])([^>]*)>([\s\S]*?)<\/h\1>/gi, (match, level, attrs, inner) => {
    const head = headings[index++];
    if (!head) return match;
    const hasId = /id\s*=/i.test(attrs);
    const newAttrs = hasId ? attrs : (attrs.trim() ? attrs + ' ' : '') + `id="${head.id}"`;
    return `<h${level}${newAttrs}>${inner}</h${level}>`;
  });
}

function CalendarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

/** Format seconds as m:ss */
function formatTime(seconds) {
  if (!Number.isFinite(seconds) || seconds < 0) return '0:00';
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, '0')}`;
}

/**
 * Dark-themed audio player for post MP3. Uses HTML5 Audio API; fully functional.
 */
function DarkAudioPlayer({ src }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);

  useEffect(() => {
    const el = audioRef.current;
    if (!el) return;
    const onTimeUpdate = () => setCurrentTime(el.currentTime);
    const onDurationChange = () => setDuration(el.duration);
    const onLoadedMetadata = () => setDuration(el.duration);
    const onEnded = () => setIsPlaying(false);
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    el.addEventListener('timeupdate', onTimeUpdate);
    el.addEventListener('durationchange', onDurationChange);
    el.addEventListener('loadedmetadata', onLoadedMetadata);
    el.addEventListener('ended', onEnded);
    el.addEventListener('play', onPlay);
    el.addEventListener('pause', onPause);
    return () => {
      el.removeEventListener('timeupdate', onTimeUpdate);
      el.removeEventListener('durationchange', onDurationChange);
      el.removeEventListener('loadedmetadata', onLoadedMetadata);
      el.removeEventListener('ended', onEnded);
      el.removeEventListener('play', onPlay);
      el.removeEventListener('pause', onPause);
    };
  }, []);

  const togglePlay = () => {
    const el = audioRef.current;
    if (!el) return;
    if (el.paused) el.play().catch(() => {});
    else el.pause();
  };

  const handleSeek = (e) => {
    const el = audioRef.current;
    if (!el || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const pct = Math.max(0, Math.min(1, x / rect.width));
    el.currentTime = pct * duration;
  };

  const handleVolumeChange = (e) => {
    const v = parseFloat(e.target.value);
    setVolume(v);
    if (audioRef.current) audioRef.current.volume = v;
  };

  return (
    <div className={styles.audioPlayer}>
      <audio ref={audioRef} preload="metadata" src={src} />
      <button
        type="button"
        className={styles.audioPlayBtn}
        onClick={togglePlay}
        aria-label={isPlaying ? 'Pause' : 'Play'}
      >
        {isPlaying ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <rect x="6" y="4" width="4" height="16" rx="1" />
            <rect x="14" y="4" width="4" height="16" rx="1" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
      </button>
      <div className={styles.audioMain}>
        <span className={styles.audioTime}>{formatTime(currentTime)} / {formatTime(duration)}</span>
        <div
          className={styles.audioProgress}
          role="progressbar"
          aria-valuenow={duration ? (currentTime / duration) * 100 : 0}
          aria-valuemin={0}
          aria-valuemax={100}
          onClick={handleSeek}
        >
          <div className={styles.audioProgressFill} style={{ width: duration ? `${(currentTime / duration) * 100}%` : '0%' }} />
        </div>
      </div>
      <div className={styles.audioVolume}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
        </svg>
        <input
          type="range"
          min="0"
          max="1"
          step="0.05"
          value={volume}
          onChange={handleVolumeChange}
          className={styles.audioVolumeRange}
          aria-label="Volume"
        />
      </div>
    </div>
  );
}

export default function SingleBlogPost({ post }) {
  const headings = useMemo(() => extractHeadings(post.content || ''), [post.content]);
  const contentWithIds = useMemo(
    () => injectHeadingIds(post.content || '', headings),
    [post.content, headings]
  );

  const summary = post.summary || '';
  const imageUrl = post.imageUrl || DUMMY_IMAGE;
  const imageAlt = post.imageAlt || post.title || 'Blog post';

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.wrap}>
          {/* Left column – Summary (only if API provides it) & Table of Contents */}
          <aside className={styles.sidebar}>
            {summary ? (
              <div className={styles.box}>
                <h2 className={styles.boxTitle}>Summary</h2>
                <p className={styles.summaryText}>{summary}</p>
              </div>
            ) : null}

            <div className={`${styles.box} ${styles.boxToc}`}>
              <h2 className={styles.boxTitle}>Table of Content</h2>
              {headings.length > 0 ? (
                <ul className={styles.tocList}>
                  {headings.map((h) => (
                    <li key={h.id} className={styles.tocItem}>
                      <a href={`#${h.id}`} className={`${styles.tocLink} ${h.level === 2 ? styles.tocLinkH2 : ''}`}>
                        {h.text}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className={styles.summaryText}>No headings in this post.</p>
              )}
            </div>
          </aside>

          {/* Right column – Breadcrumb, meta, title, image, content */}
          <div className={styles.main}>
            <nav aria-label="breadcrumb" className={styles.breadcrumb}>
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link href="/">Home</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link href="/blog">Blog</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  {post.title}
                </li>
              </ol>
            </nav>
            <div className={styles.meta}>
              <span className={styles.metaIcon} aria-hidden>
                <span className={styles.metaIconSvg}>
                  <CalendarIcon />
                </span>
                {post.formattedDate}
              </span>
              <span className={styles.metaIcon}>
                <span className={styles.metaIconSvg}>
                  <ClockIcon />
                </span>
                {post.readingTimeMinutes} min read
              </span>
            </div>

            <h1 className={styles.pageTitle}>{post.title}</h1>

            {post.imageUrl && (
              <div className={styles.featuredImageWrap}>
                <img src={imageUrl} alt={imageAlt} loading="eager" />
              </div>
            )}

            {post.audioUrl ? (
              <div className={styles.audioPlayerWrap}>
                <DarkAudioPlayer src={post.audioUrl} />
              </div>
            ) : null}

            <div
              className={styles.content}
              dangerouslySetInnerHTML={{ __html: contentWithIds }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
