// components/CTA.tsx
import Button from './Button';

interface CTAProps {
  heading: string;
  subheading?: string;
  buttonLabel: string;
  buttonHref: string;
}

/**
 * A call‑to‑action panel inviting visitors to take a next step. Typically
 * includes a heading, optional subheading and a prominent button.
 */
export default function CTA({
  heading,
  subheading,
  buttonLabel,
  buttonHref,
}: CTAProps) {
  return (
    <div className="rounded-lg bg-brand p-8 text-white shadow-moderate">
      <h2 className="text-2xl font-bold">{heading}</h2>
      {subheading && <p className="mt-2 text-sm">{subheading}</p>}
      <div className="mt-6">
        <Button href={buttonHref} variant="secondary" className="text-white border-white hover:bg-white/10">
          {buttonLabel}
        </Button>
      </div>
    </div>
  );
}