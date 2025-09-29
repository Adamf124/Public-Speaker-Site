// components/EngagementCard.tsx
import Image from 'next/image';

interface EngagementCardProps {
  name: string;
  title: string;
  location: string;
  year: number;
  logo: string;
  description: string;
}

/**
 * Displays a past engagement with its title, year, location, description and
 * associated logo. Used on the engagements page.
 */
export default function EngagementCard({
  name,
  title,
  location,
  year,
  logo,
  description,
}: EngagementCardProps) {
  return (
    <article className="rounded-lg border border-gray-200 bg-white p-6 shadow-subtle dark:border-gray-700 dark:bg-gray-800">
      <div className="flex items-center space-x-4">
        <Image src={logo} alt={`${name} logo`} width={64} height={64} className="object-contain" />
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {name} · {location} · {year}
          </p>
        </div>
      </div>
      <p className="mt-4 text-sm text-gray-700 dark:text-gray-300">{description}</p>
    </article>
  );
}