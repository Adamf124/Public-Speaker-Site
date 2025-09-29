// app/legal/privacy/page.tsx
import { buildMetadata } from '@/lib/seo';
import type { Metadata } from 'next';
import Section from '@/components/Section';

export const metadata: Metadata = buildMetadata({
  title: 'Privacy Policy',
  description: 'Read how we handle your personal information and data on this site.',
});

export default function PrivacyPolicyPage() {
  return (
    <Section>
      <div className="prose max-w-none dark:prose-invert">
        <h1>Privacy Policy</h1>
        <p>
          We respect your privacy. Any personal information you provide through forms on this site
          will be used solely to respond to your inquiries and will not be shared with third
          parties. We use basic analytics to understand how visitors use our site so we can
          improve the experience. No personally identifiable information is collected.
        </p>
        <p>
          By using this website, you consent to the collection and use of information in
          accordance with this policy. If you have any questions, please contact us.
        </p>
      </div>
    </Section>
  );
}