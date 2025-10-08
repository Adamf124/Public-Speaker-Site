// lib/seo.ts
import type { Metadata } from 'next';

/**
 * Shared SEO configuration for the site. Use these helpers to populate the
 * metadata objects exported from each page component. Keeping these values
 * centralized makes it easy to adjust titles and descriptions in one place.
 */

export const siteName = 'Larry C. Jones Jr. | Speaker & Advocate';
export const siteDescription =
  'Inspiring change through personal stories and community action. Book Larry C. Jones Jr. for keynotes, workshops and events focused on dialogue, storytelling and measurable impact.';
export const baseUrl = 'https://example.com'; // replace with the eventual production domain

export const defaultMeta: Metadata = {
  title: {
    default: siteName,
    template: `%s | Larry C. Jones Jr.`,
  },
  description: siteDescription,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: siteName,
    description: siteDescription,
    url: baseUrl,
    siteName,
    images: [
      {
        url: `${baseUrl}/images/og-default.png`,
        width: 1200,
        height: 630,
        alt: 'Abstract background representing community connection',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteName,
    description: siteDescription,
    images: [`${baseUrl}/images/og-default.png`],
  },
  metadataBase: new URL(baseUrl),
};

/**
 * Merges a partial metadata object with the default metadata. Use this in
 * page components to extend the default values with page‑specific titles and
 * descriptions.
 */
export function buildMetadata(partial: Metadata): Metadata {
  return {
    ...defaultMeta,
    ...partial,
    title: {
      ...defaultMeta.title,
      ...(typeof partial.title === 'string'
        ? { default: partial.title, template: defaultMeta.title?.template }
        : partial.title),
    },
    description: partial.description ?? defaultMeta.description,
    openGraph: {
      ...defaultMeta.openGraph,
      ...partial.openGraph,
    },
    twitter: {
      ...defaultMeta.twitter,
      ...partial.twitter,
    },
  };
}