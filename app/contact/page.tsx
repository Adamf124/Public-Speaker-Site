// app/contact/page.tsx
import { buildMetadata } from '@/lib/seo';
import type { Metadata } from 'next';
import Section from '@/components/Section';
import BookingForm from '@/components/BookingForm';

export const metadata: Metadata = buildMetadata({
  title: 'Contact',
  description:
    'Get in touch with Adam Ferguson — whether you’re planning a conference, workshop or community event.',
});

export default function ContactPage() {
  return (
    <>
      <Section>
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">Contact</h1>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            I’d love to hear from you — whether you’re planning a conference, workshop, or community
            event. Please send a message using the form below.
          </p>
          <BookingForm />
        </div>
      </Section>
    </>
  );
}