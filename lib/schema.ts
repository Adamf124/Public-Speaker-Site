// lib/schema.ts

/**
 * Utility functions to generate JSON‑LD schemas for common entities used
 * throughout the site. These schemas improve SEO by providing structured
 * metadata that search engines can parse.
 */

export function organizationSchema({
  name,
  url,
  logo,
  sameAs,
}: {
  name: string;
  url: string;
  logo: string;
  sameAs?: string[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name,
    url,
    logo,
    ...(sameAs ? { sameAs } : {}),
  };
}

export function personSchema({
  name,
  url,
  image,
  jobTitle,
  sameAs,
}: {
  name: string;
  url: string;
  image?: string;
  jobTitle?: string;
  sameAs?: string[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name,
    url,
    ...(image ? { image } : {}),
    ...(jobTitle ? { jobTitle } : {}),
    ...(sameAs ? { sameAs } : {}),
  };
}

export function eventSchema({
  name,
  startDate,
  endDate,
  description,
  url,
  location,
}: {
  name: string;
  startDate: string;
  endDate?: string;
  description?: string;
  url: string;
  location?: {
    name: string;
    address: string;
  };
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name,
    startDate,
    ...(endDate ? { endDate } : {}),
    ...(description ? { description } : {}),
    url,
    ...(location
      ? {
          location: {
            '@type': 'Place',
            name: location.name,
            address: location.address,
          },
        }
      : {}),
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  };
}

export function articleSchema({
  headline,
  description,
  datePublished,
  dateModified,
  url,
  authorName,
}: {
  headline: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  url: string;
  authorName: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline,
    description,
    datePublished,
    ...(dateModified ? { dateModified } : {}),
    url,
    author: {
      '@type': 'Person',
      name: authorName,
    },
  };
}