// app/engagements/page.tsx
import { buildMetadata } from '@/lib/seo';
import type { Metadata } from 'next';
import Section from '@/components/Section';
import EngagementCard from '@/components/EngagementCard';
import { pastEngagements } from '@/content/config';
import CTA from '@/components/CTA';

export const metadata: Metadata = buildMetadata({
  title: 'Past Engagements',
  description:
    'Explore previous speaking engagements where Adam Ferguson has collaborated with thought leaders, educators and community changemakers.',
});

export default function EngagementsPage() {
  return (
    <>
      <Section>
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">Past Engagements</h1>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            I’ve shared the stage with thought leaders, educators, and community changemakers across
            the country. Here are a few recent highlights.
          </p>
        </div>
      </Section>
      <Section>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {pastEngagements.map((eng) => (
            <EngagementCard key={eng.title} {...eng} />
          ))}
        </div>
      </Section>
      <Section>
        <CTA
          heading="Interested in partnering?"
          subheading="Let’s create your next memorable event together."
          buttonLabel="Book Adam"
          buttonHref="/events"
        />
      </Section>
    </>
  );
}