// app/legal/terms/page.tsx
import { buildMetadata } from '@/lib/seo';
import type { Metadata } from 'next';
import Section from '@/components/Section';

export const metadata: Metadata = buildMetadata({
  title: 'Terms of Use',
  description: 'Understand the terms and conditions for using this website.',
});

export default function TermsPage() {
  return (
    <Section>
      <div className="prose max-w-none dark:prose-invert">
        <h1>Terms of Use</h1>
        <p>
          By accessing and using this website, you agree to comply with and be bound by the following
          terms and conditions. All content provided on this site is for informational purposes only
          and may not be reproduced without permission.
        </p>
        <p>
          We reserve the right to modify these terms at any time. Continued use of the site
          constitutes your acceptance of any changes. If you do not agree to these terms, please do
          not use the site.
        </p>
      </div>
    </Section>
  );
}