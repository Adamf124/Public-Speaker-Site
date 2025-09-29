// components/BlogList.tsx
import Link from 'next/link';
import type { BlogPostMeta } from '@/content/posts';

interface BlogListProps {
  posts: BlogPostMeta[];
}

/**
 * Renders a list of blog post previews. Each entry links to the full
 * article and displays its publish date and excerpt.
 */
export default function BlogList({ posts }: BlogListProps) {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      {posts.map((post) => (
        <article key={post.slug} className="py-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
            <Link
              href={`/blog/${post.slug}`}
              className="hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {post.title}
            </Link>
          </h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
          <p className="mt-2 text-gray-700 dark:text-gray-300">{post.excerpt}</p>
        </article>
      ))}
    </div>
  );
}