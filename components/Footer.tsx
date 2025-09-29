// components/Footer.tsx
import Link from 'next/link';
import { footerLinks, socialLinks } from '@/content/config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faLinkedin,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

const iconMap: Record<string, any> = {
  twitter: faTwitter,
  linkedin: faLinkedin,
  instagram: faInstagram,
};

/**
 * The site footer displays navigation, social links and legal notices. It
 * adapts to multiple columns on larger screens and stacks on small screens.
 */
export default function Footer() {
  return (
    <footer className="bg-muted border-t border-gray-200 dark:border-gray-700">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                {section.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-600 dark:text-gray-400 hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {/* Social column */}
          <div className="sm:col-span-2 md:col-span-1">
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300">Connect</h3>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
              Follow along for updates, insights and behind‑the‑scenes stories.
            </p>
            <div className="mt-4 flex space-x-4">
              {socialLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="text-gray-600 dark:text-gray-400 hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <FontAwesomeIcon icon={iconMap[item.icon]} size="lg" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-gray-200 pt-6 text-sm text-gray-500 dark:border-gray-700 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} Adam Ferguson. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}