'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import BlogBanner from '@/components/Blog/BlogBanner';
import BlogListing from '@/components/Blog/BlogListing';
import { fetchPostBySlug, normalizeSinglePost } from '@/components/Blog/SingleBlog/blogApi';
import SingleBlogPost from '@/components/Blog/SingleBlog/SingleBlogPost';
import SingleBlogSkeleton from '@/components/Blog/SingleBlog/SingleBlogSkeleton';

const blogBannerData = {
  breadcrumb: {
    home: { label: 'Home', href: '/' },
    current: { label: 'Blog', href: '/blog' },
  },
  heading: 'Explore Our Latest Blog',
};

/**
 * Handles both /blog (listing) and /blog/[slug] (single post).
 * Fetches from WordPress API at runtime so updates reflect without rebuild.
 */
export default function BlogPageClient() {
  const pathname = usePathname();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);

  const slug = pathname?.startsWith('/blog/')
    ? pathname.replace(/^\/blog\/?/, '').split('/')[0] || ''
    : '';

  const isListing = !slug;
  const isSingle = Boolean(slug);

  useEffect(() => {
    if (!isSingle || !slug) {
      setPost(null);
      setNotFound(false);
      return;
    }

    let cancelled = false;
    setLoading(true);
    setNotFound(false);
    setPost(null);

    fetchPostBySlug(slug)
      .then((raw) => {
        if (cancelled) return;
        if (!raw) {
          setNotFound(true);
          return;
        }
        setPost(normalizeSinglePost(raw));
      })
      .catch(() => {
        if (!cancelled) setNotFound(true);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => { cancelled = true; };
  }, [slug, isSingle]);

  if (isListing) {
    return (
      <div>
        <BlogBanner
          breadcrumb={blogBannerData.breadcrumb}
          heading={blogBannerData.heading}
        />
        <BlogListing />
      </div>
    );
  }

  if (loading) {
    return <SingleBlogSkeleton />;
  }

  if (notFound || !post) {
    return (
      <section className="section-padding" style={{ minHeight: '40vh', display: 'flex', alignItems: 'center' }}>
        <div className="container text-center">
          <h1 style={{ marginBottom: '1rem' }}>Post not found</h1>
          <p style={{ marginBottom: '1.5rem', color: 'var(--gray)' }}>
            The blog post you’re looking for doesn’t exist or was removed.
          </p>
          <Link href="/blog" style={{ color: 'var(--primary)', fontWeight: 600 }}>
            ← Back to Blog
          </Link>
        </div>
      </section>
    );
  }

  return <SingleBlogPost post={post} />;
}
