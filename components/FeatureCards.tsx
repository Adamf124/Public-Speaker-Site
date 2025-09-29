// components/FeatureCards.tsx
import type { ReactNode } from 'react';

export interface Feature {
  title: string;
  description: string;
  audience?: string;
  outcome?: string;
  icon?: ReactNode;
}

interface FeatureCardsProps {
  features: Feature[];
}

/**
 * Displays a collection of features or topics in a responsive grid. Each card
 * surfaces a title and description along with optional audience and outcome
 * metadata.
 */
export default function FeatureCards({ features }: FeatureCardsProps) {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {features.map((feature) => (
        <article
          key={feature.title}
          className="rounded-lg border border-gray-200 bg-white p-6 shadow-subtle transition-shadow hover:shadow-moderate dark:border-gray-700 dark:bg-gray-800"
        >
          {feature.icon && <div className="mb-4 text-brand">{feature.icon}</div>}
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            {feature.title}
          </h3>
          <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
            {feature.description}
          </p>
          {feature.audience && (
            <p className="mt-3 text-xs text-gray-500 dark:text-gray-400">
              <span className="font-medium">Audience:</span> {feature.audience}
            </p>
          )}
          {feature.outcome && (
            <p className="text-xs text-gray-500 dark:text-gray-400">
              <span className="font-medium">Outcome:</span> {feature.outcome}
            </p>
          )}
        </article>
      ))}
    </div>
  );
}