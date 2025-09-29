// components/LogoCloud.tsx
import Image from "next/image";

export interface LogoItem {
  src: string;
  alt: string;
  height?: string; // Tailwind height class like "h-12"
  width?: string; // Tailwind width class like "w-20"
}

interface LogoCloudProps {
  logos: LogoItem[];
  title?: string;
}

/**
 * A simple horizontal grid of logos. Used to showcase organizations or events
 * that Adam has been featured at. The images are rendered with next/image
 * for optimal performance.
 */
export default function LogoCloud({
  logos,
  title,
}: {
  logos: any[];
  title: string;
}) {
  return (
    <div className="flex flex-col items-center">
      <h3 className="text-xl font-semibold mb-6">{title}</h3>
      <div className="flex flex-wrap justify-center gap-8">
        {logos.map((logo) => (
          <img
            key={logo.alt}
            src={logo.src}
            alt={logo.alt}
            className={`${logo.height ?? "h-16"} ${
              logo.width ?? "w-auto"
            } object-contain p-2 rounded shadow`}
          />
        ))}
      </div>
    </div>
  );
}
