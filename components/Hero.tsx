"use client";

import Image from "next/image";
import Button from "./Button";
import { useEffect, useRef, useState } from "react";
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
  autoplayIntervalMs?: number; // optional override
  children?: ReactNode;
}

/**
 * Slideshow hero: renders all images stacked, toggles opacity for a smooth crossfade,
 * supports autoplay and clickable navigation dots.
 *
 * Important: Image with `fill` requires the immediate parent to have size.
 * We ensure a min-height for the backdrop container.
 */
export default function Hero({
  title,
  subtitle,
  ctaLabel,
  ctaHref,
  images,
  autoplayIntervalMs = 5000,
  children,
}: HeroProps) {
  const [current, setCurrent] = useState(0);
  const slideCount = images?.length ?? 0;
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (slideCount <= 1) return;

    const start = () => {
      stop();
      intervalRef.current = window.setInterval(() => {
        setCurrent((prev) => (prev + 1) % slideCount);
      }, autoplayIntervalMs);
    };

    const stop = () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };

    start();
    return stop;
  }, [slideCount, autoplayIntervalMs]);

  const goTo = (idx: number) => {
    setCurrent(idx);
    // reset autoplay timer
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (slideCount > 1) {
      intervalRef.current = window.setInterval(() => {
        setCurrent((prev) => (prev + 1) % slideCount);
      }, autoplayIntervalMs);
    }
  };

  if (!images || images.length === 0) {
    return (
      <section className="relative overflow-hidden bg-muted">
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

  return (
    <section className="relative overflow-hidden ">
      {/* Backdrop container - absolute so it sits behind content */}
      <div className="absolute inset-0 -z-10 h-full w-full">
        {/* Ensure a relative container with an explicit min-height so Image fill has a reference box */}
        <div className="relative h-full w-full min-h-[420px]">
          {images.map((img, idx) => {
            const isActive = idx === current;
            // Decide if this slide should be priority. Using the currently visible slide
            // as priority avoids the priority+loading conflict and limits preloads.
            const isPriority = isActive;

            return (
              <div
                key={idx}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  isActive ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
                aria-hidden={!isActive}
              >
                {/* Conditionally include priority OR loading (never both) */}
                <Image
                  src={img.src}
                  alt={img.alt ?? ""}
                  fill
                  sizes="100vw"
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  {...(isPriority ? { priority: true } : { loading: "lazy" })}
                />
              </div>
            );
          })}

          {/* Gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-white dark:from-black/60 dark:to-black/80" />
        </div>
      </div>

      {/* Navigation dots (clickable + hover) */}
      {slideCount > 1 && (
        <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 space-x-2">
          {images.map((_, idx) => {
            const isActive = idx === current;
            return (
              <button
                key={idx}
                type="button"
                aria-label={`Go to slide ${idx + 1}`}
                aria-pressed={isActive}
                onClick={() => goTo(idx)}
                className={`h-3 w-3 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary ${
                  isActive
                    ? "bg-primary"
                    : "bg-gray-300 dark:bg-gray-600 hover:bg-primary/80"
                }`}
                style={{ cursor: "pointer" }}
              />
            );
          })}
        </div>
      )}

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
