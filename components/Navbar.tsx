// components/Navbar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/content/config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

/**
 * The main site navigation. Displays a skip link for accessibility and
 * collapses into a mobile menu on smaller screens. The active link is
 * highlighted based on the current pathname.
 */
export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-muted/80 backdrop-blur-sm shadow-subtle">
      <a href="#content" className="skip-link sr-only focus:not-sr-only">
        Skip to content
      </a>
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
        aria-label="Primary"
      >
        <Link
          href="/"
          className="text-lg font-bold text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          Adam Ferguson
        </Link>
        {/* Mobile menu button */}
        <button
          aria-label="Toggle navigation menu"
          className="flex items-center justify-center p-2 text-brand md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          onClick={() => setOpen(!open)}
        >
          <FontAwesomeIcon icon={open ? faTimes : faBars} size="lg" />
        </button>
        {/* Desktop menu */}
        <ul className="hidden space-x-6 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`py-2 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                  pathname === item.href
                    ? "text-brand"
                    : "text-gray-600 dark:text-gray-300 hover:text-brand"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {/* Mobile menu panel */}
      {open && (
        <div className="md:hidden">
          <ul className="space-y-2 px-4 pb-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-md px-3 py-2 text-base font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                    pathname === item.href
                      ? "bg-brand/10 text-brand"
                      : "text-gray-700 dark:text-gray-200 hover:bg-brand/5 hover:text-brand"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
