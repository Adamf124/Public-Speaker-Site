// components/Hero.tsx
"use client";
import Image from "next/image";
import Button from "./Button";
import { useState, useEffect } from "react";

import type { ReactNode } from "react";

interface HeroImage {
  src: string;
  alt?: string;
}

interface HeroProps {
  title: string;
  subtitle: string;
  ctaLabel: string;
  ctaHref: string;
  images: HeroImage[];
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
  images,
  children,
}: HeroProps) {
  const [current, setCurrent] = useState(0);
  // autopplay
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 -z-10 h-full w-full">
        <Image
          src={images[current].src}
          alt={images[current].alt || ""}
          fill
          className="object-cover object-center transition-opacity duration-1000"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-white dark:from-black/60 dark:to-black/80"></div>
        {/* navigation dots */}
        <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 space-x-2">
          {images.map((_, idx) => (
            <button
              key={idx}
              className={`h-2 w-2 rounded-full transition-all ${
                current === idx ? "bg-primary" : "bg-gray-300 dark:bg-gray-700"
              }`}
              onClick={() => setCurrent(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
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
