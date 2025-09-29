// tailwind.config.ts
import type { Config } from 'tailwindcss';

/**
 * Tailwind configuration with a custom design system.
 * The palette uses HSL-based CSS variables defined in globals.css
 * so that colors can be adjusted consistently across the application.
 */
const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
    './content/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: 'hsl(var(--brand) / <alpha-value>)',
        muted: 'hsl(var(--muted) / <alpha-value>)',
        accent: 'hsl(var(--accent) / <alpha-value>)',
        ring: 'hsl(var(--ring) / <alpha-value>)',
      },
      borderRadius: {
        sm: '0.25rem',
        md: '0.5rem',
        lg: '0.75rem',
        xl: '1rem',
        full: '9999px',
      },
      boxShadow: {
        subtle: '0 1px 2px 0 rgb(0 0 0 / 0.04)',
        moderate: '0 1px 3px 0 rgb(0 0 0 / 0.1)',
      },
      spacing: {
        // A custom spacing rhythm to maintain vertical rhythm throughout the layout
        '4.5': '1.125rem',
        '5.5': '1.375rem',
      },
    },
  },
  plugins: [],
};

export default config;