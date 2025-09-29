// components/Hero.tsx
import Image from 'next/image';
import Button from './Button';
import type { ReactNode } from 'react';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaLabel: string;
  ctaHref: string;
  imageSrc: string;
  imageAlt?: string;
  children?: ReactNode;
}

/**
 * A hero section featuring a headline, subheading, call to action and
 * accompanying illustration. This component uses the Next.js Image component
 * for optimal image loading and includes an overlay gradient for text
 * readability on top of images.
 */
export default function Hero({
  title,
  subtitle,
  ctaLabel,
  ctaHref,
  imageSrc,
  imageAlt = '',
  children,
}: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-muted">
      {/* Background image */}
      <div className="absolute inset-0 -z-10 h-full w-full">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-white dark:from-black/60 dark:to-black/80"></div>
      </div>
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            {title}
          </h1>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
            {subtitle}
          </p>
          {children}
          <div className="mt-8">
            <Button href={ctaHref} variant="primary">
              {ctaLabel}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}