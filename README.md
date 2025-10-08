# Larry C. Jones Jr. — Speaker & Community Advocate Website

This project is a fully functional website built with **Next.js 14**, **TypeScript** and **Tailwind CSS**. It showcases the work of public speaker and community advocate **Larry Ferguson**, including past engagements, speaking topics, case studies, a blog and a booking form.

## Getting Started

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Run the development server**

   ```bash
   npm run dev
   ```

   Then open [http://localhost:3000](http://localhost:3000) in your browser to view the site.

3. **Build for production**

   ```bash
   npm run build
   npm start
   ```

   The site will be compiled and optimized. Ensure all environment variables (if any) are configured before deploying.

## Project Structure

This repository is organized as follows:

```
public-speaker-site/
├── app/                    # Next.js app router pages
│   ├── api/book/          # Dummy API route for booking form
│   ├── about/             # About page
│   ├── blog/              # Blog index and individual posts
│   ├── case-studies/      # Case studies page
│   ├── contact/           # Contact form
│   ├── engagements/       # Past engagements page
│   ├── events/            # Events and booking page
│   ├── legal/             # Privacy and terms pages
│   ├── speaking/          # Speaking topics page
│   └── layout.tsx         # Root layout (includes metadata, fonts, navbar, footer)
├── components/            # Reusable UI components
├── content/               # Configuration and data (navigation, posts, etc.)
├── lib/                   # SEO defaults and JSON‑LD helpers
├── public/                # Static assets (images, logos)
├── tailwind.config.ts     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration with path aliases
└── package.json
```

## Accessibility & SEO

- Semantic HTML elements and ARIA attributes are used throughout the site.
- A skip‑to‑content link is provided for keyboard users.
- Focus rings are visible when navigating via keyboard.
- Color choices meet WCAG AA contrast requirements.
- Default metadata includes Open Graph and Twitter card support, and structured data (JSON‑LD) is embedded for the organization, person, events and articles.

## Customization

Colours, typography and spacing are controlled via CSS variables defined in `globals.css` and referenced in `tailwind.config.ts`. To update the brand palette, adjust the HSL values there. Navigation, footer links, speaking topics and other content can be modified by editing the files in the `content/` directory.

## TODO

- Integrate analytics (e.g. Google Analytics, Plausible) by inserting the appropriate script in `app/layout.tsx` where indicated.
