// app/page.tsx
import { buildMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import FeatureCards from "@/components/FeatureCards";
import Testimonial from "@/components/Testimonial";
import CTA from "@/components/CTA";
import LogoCloud from "@/components/LogoCloud";
import { speakingTopics, impactStoryPreview } from "@/content/config";

export const metadata: Metadata = buildMetadata({
  title: "Inspiring Change, One Conversation at a Time",
  description:
    "Home page of Adam Ferguson — public speaker and community advocate. Discover his approach to empowering communities through dialogue and storytelling.",
});

export default function HomePage() {
  const logos = [
    { src: "/images/logos/tedx.png", alt: "TEDx", height: "h-12" },
    { src: "/images/logos/gsu.png", alt: "Georgia State University" },
    {
      src: "/images/logos/nylf.png",
      alt: "National Youth Leadership Forum",
      height: "h-36",
      width: "w-auto",
    },
    {
      src: "/images/logos/urbanimpact.png",
      alt: "Urban Impact Conference",
      height: "h-36",
      width: "w-auto",
    },
    {
      src: "/images/logos/communitycatalyst.png",
      alt: "Community Catalyst Summit",
      height: "h-36",
      width: "w-auto",
    },
  ];

  return (
    <>
      <Hero
        title="Adam Ferguson – Inspiring Change, One Conversation at a Time"
        subtitle="Bridging personal stories and community action to ignite real‑world impact."
        ctaLabel="Book Me to Speak"
        ctaHref="/events"
        imageSrc="/images/sanfranbanner.png"
        imageAlt="Abstract background representing community connection"
      />
      {/* Core message */}
      <Section>
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            Empowering Changemakers
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            I speak to empower people to believe in their ability to create
            change — in their lives, their communities, and the causes they care
            about most. My talks combine real‑life experience with actionable
            steps that move audiences from inspiration to action.
          </p>
        </div>
      </Section>
      {/* Proof bar */}
      <Section className="bg-white dark:bg-gray-900">
        <LogoCloud logos={logos} title="Trusted By" />
      </Section>
      {/* Speaking topics preview */}
      <Section>
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            Speaking Topics
          </h2>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            Discover the conversations that inspire transformation.
          </p>
        </div>
        <FeatureCards
          features={speakingTopics.map((topic) => ({
            title: topic.title,
            description: topic.description,
            audience: topic.audience,
            outcome: topic.outcome,
          }))}
        />
      </Section>
      {/* Impact story preview */}
      <Section>
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            Impact Stories
          </h2>
          <Testimonial
            quote={impactStoryPreview.quote}
            author={impactStoryPreview.author}
          />
        </div>
      </Section>
      {/* Call to action */}
      <Section>
        <CTA
          heading="Ready to inspire your audience?"
          subheading="Let’s work together to create a program tailored to your community."
          buttonLabel="Book Me to Speak"
          buttonHref="/events"
        />
      </Section>
    </>
  );
}
