// app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { defaultMeta, siteName, baseUrl } from '@/lib/seo';
import { organizationSchema, personSchema } from '@/lib/schema';
import { Inter } from 'next/font/google';

// Load the Inter font with the default weights. The CSS variable will
// automatically be applied to the root element via the className below.
const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = defaultMeta;

/**
 * The root layout applied to all pages. It includes global font classes,
 * metadata, a skip link via the Navbar and inserts structured data for the
 * organization and person. An analytics placeholder is included as a comment
 * for future configuration.
 */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgSchema = organizationSchema({
    name: siteName,
    url: baseUrl,
    logo: `${baseUrl}/images/og-default.png`,
    sameAs: [
      'https://twitter.com',
      'https://www.linkedin.com',
      'https://www.instagram.com',
    ],
  });
  const person = personSchema({
    name: 'Adam Ferguson',
    url: baseUrl,
    jobTitle: 'Public Speaker & Community Advocate',
    sameAs: [
      'https://twitter.com',
      'https://www.linkedin.com',
      'https://www.instagram.com',
    ],
  });
  return (
    <html lang="en" className={`${inter.variable} font-sans`}>        
      <head>
        {/* Theme colors for light and dark modes */}
        <meta
          name="theme-color"
          content="hsl(var(--muted))"
          media="(prefers-color-scheme: light)"
        />
        <meta
          name="theme-color"
          content="hsl(var(--muted))"
          media="(prefers-color-scheme: dark)"
        />
        {/* Structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
        />
        {/* TODO: Insert analytics script here */}
      </head>
      <body>
        <Navbar />
        <main id="content" className="min-h-screen focus:outline-none">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}