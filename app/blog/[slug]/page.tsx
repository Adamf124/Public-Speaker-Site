// app/blog/[slug]/page.tsx
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { posts } from "@/content/posts";
import { buildMetadata } from "@/lib/seo";
import { articleSchema } from "@/lib/schema";
import Section from "@/components/Section";

interface Params {
  slug: string;
}

/**
 * Generates page‑specific metadata for each blog post based on its content.
 */
export function generateMetadata({ params }: { params: Params }): Metadata {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
    },
  });
}

export default function BlogPostPage({ params }: { params: Params }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) {
    return notFound();
  }
  const articleLd = articleSchema({
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    url: `${new URL("/", "https://example.com").toString()}blog/${post.slug}`,
    authorName: "Larry C. Jones Jr.",
  });
  return (
    <>
      <Section>
        <article className="space-y-4">
          <header className="space-y-2">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
              {post.title}
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </header>
          {post.content.map((paragraph, idx) => (
            <p key={idx} className="text-base text-gray-700 dark:text-gray-300">
              {paragraph}
            </p>
          ))}
        </article>
      </Section>
      {/* Structured data for the article */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
    </>
  );
}
