// components/Testimonial.tsx
interface TestimonialProps {
  quote: string;
  author?: string;
}

/**
 * Displays a short testimonial or impact story. Used on the home page
 * to preview real‑world change inspired by Larry’s speaking engagements.
 */
export default function Testimonial({ quote, author }: TestimonialProps) {
  return (
    <blockquote className="rounded-md border-l-4 border-brand bg-white p-6 shadow-subtle dark:bg-gray-800">
      <p className="text-base italic text-gray-800 dark:text-gray-200">
        “{quote}”
      </p>
      {author && (
        <cite className="mt-4 block text-sm font-semibold text-gray-700 dark:text-gray-400">
          — {author}
        </cite>
      )}
    </blockquote>
  );
}
