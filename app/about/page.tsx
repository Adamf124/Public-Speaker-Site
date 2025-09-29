// app/about/page.tsx
import { buildMetadata } from '@/lib/seo';
import type { Metadata } from 'next';
import Section from '@/components/Section';

export const metadata: Metadata = buildMetadata({
  title: 'About',
  description:
    'Learn more about Adam Ferguson’s journey as a community advocate, storyteller and speaker.',
});

export default function AboutPage() {
  return (
    <>
      <Section>
        <div className="space-y-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">About Adam</h1>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            I’m Adam Ferguson — a community advocate, storyteller, and speaker with a passion for
            equipping people with the tools to lead change.
          </p>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
            Professional Background
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            Over the last decade, I’ve spoken at conferences, universities, and grassroots gatherings,
            working alongside nonprofit leaders, educators, and organizers. My work spans small group
            workshops to keynote presentations, all aimed at fostering understanding and action.
          </p>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Community Impact</h2>
          <p className="text-gray-700 dark:text-gray-300">
            My collaborations have helped launch mentorship programs, expand voter outreach campaigns,
            and build bridges between diverse groups in challenging environments. The impact is
            tangible: young leaders equipped with skills, coalitions formed across divides, and
            communities mobilized to make a difference.
          </p>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Personal Note</h2>
          <p className="text-gray-700 dark:text-gray-300">
            When I’m not on stage, I’m in the garden, reminding myself that growth always starts
            small — but with care, it can change the landscape. The same is true for communities:
            nurturing ideas and people can transform our world.
          </p>
        </div>
      </Section>
    </>
  );
}