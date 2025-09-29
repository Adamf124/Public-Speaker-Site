// app/events/page.tsx
import { buildMetadata } from '@/lib/seo';
import type { Metadata } from 'next';
import Section from '@/components/Section';
import EngagementCard from '@/components/EngagementCard';
import BookingForm from '@/components/BookingForm';
import { upcomingEvents } from '@/content/config';

export const metadata: Metadata = buildMetadata({
  title: 'Events & Booking',
  description:
    'See upcoming events and book Adam Ferguson for your next conference, workshop or gathering.',
});

export default function EventsPage() {
  return (
    <>
      <Section>
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">Events & Booking</h1>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Join Adam at an upcoming event or begin the conversation about hosting your own.
          </p>
        </div>
      </Section>
      {/* Upcoming events */}
      {upcomingEvents.length > 0 && (
        <Section>
          <h2 className="mb-6 text-2xl font-semibold text-gray-900 dark:text-gray-100">
            Upcoming Event
          </h2>
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {upcomingEvents.map((ev) => (
              <EngagementCard
                key={ev.name}
                name={ev.name}
                title={ev.name}
                location={ev.location}
                year={parseInt(ev.date.split('-')[0])}
                logo={ev.logo}
                description={ev.description}
              />
            ))}
          </div>
        </Section>
      )}
      {/* Booking form */}
      <Section>
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Book Adam</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Let’s make an impact together. Fill out the form below to get started.
          </p>
          <BookingForm />
        </div>
      </Section>
    </>
  );
}