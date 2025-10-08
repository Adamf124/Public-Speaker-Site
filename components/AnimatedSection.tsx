"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  // threshold and rootMargin mirror IntersectionObserver options
  threshold?: number;
  rootMargin?: string;
  // if true, animate only the first time element enters viewport
  once?: boolean;
}

/**
 * AnimatedSection
 * - Wraps content and applies a simple slide-up + fade-in when it enters the viewport.
 * - Respects prefers-reduced-motion (will show content immediately).
 * - No external deps.
 *
 * Usage:
 * <AnimatedSection><div>...</div></AnimatedSection>
 */
export default function AnimatedSection({
  children,
  className = "",
  threshold = 0.2,
  rootMargin = "0px 0px -10% 0px",
  once = true,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    // Respect prefers-reduced-motion
    if (typeof window !== "undefined" && window.matchMedia) {
      const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
      if (mq.matches) {
        setInView(true);
        return;
      }
    }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            if (once) observer.disconnect();
          } else if (!once) {
            setInView(false);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  // Tailwind utility classes:
  // - initial: translate-y-6 + opacity-0
  // - inView: translate-y-0 + opacity-100
  return (
    <div
      ref={ref}
      className={[
        className,
        "transform transition-all duration-700 ease-out will-change-transform",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
      ].join(" ")}
      aria-hidden={!inView ? "true" : undefined}
    >
      {children}
    </div>
  );
}
