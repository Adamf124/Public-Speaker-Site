// app/blog/page.tsx
import { buildMetadata } from '@/lib/seo';
import type { Metadata } from 'next';
import Section from '@/components/Section';
import BlogList from '@/components/BlogList';
import { posts } from '@/content/posts';
import CTA from '@/components/CTA';

export const metadata: Metadata = buildMetadata({
  title: 'Blog',
  description:
    'Insights, behind‑the‑scenes moments, and tools for making a difference. Read the latest articles by Adam Ferguson.',
});

export default function BlogPage() {
  return (
    <>
      <Section>
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">Blog</h1>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Insights, behind‑the‑scenes moments, and tools for making a difference.
          </p>
        </div>
      </Section>
      <Section>
        <BlogList posts={posts} />
      </Section>
      <Section>
        <CTA
          heading="Stay updated"
          subheading="Follow on social media for more stories and resources."
          buttonLabel="Connect"
          buttonHref="https://twitter.com"
        />
      </Section>
    </>
  );
}