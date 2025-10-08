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
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = buildMetadata({
  title: "Inspiring Change, One Conversation at a Time",
  description:
    "Home page of Larry C. Jones Jr. — public speaker and community advocate. Discover his approach to empowering communities through dialogue and storytelling.",
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
      <AnimatedSection>
        <Hero
          title="Larry C. Jones Jr. – Inspiring Change, One Conversation at a Time"
          subtitle="Bridging personal stories and community action to ignite real‑world impact."
          ctaLabel="Book Me to Speak"
          ctaHref="/events"
          images={[
            {
              src: "/images/sanfranbanner.png",
              alt: "Oakland city street map",
            },
            { src: "/images/dalycity.png", alt: "Daly city street map" },
            {
              src: "/images/excelsiorbanner.png",
              alt: "Excelsior city street map",
            },
            {
              src: "/images/emeryvillebanner.png",
              alt: "Emeryville street map",
            },
            {
              src: "/images/oaklandbanner.png",
              alt: "Oakland city street map",
            },
          ]}
        />
      </AnimatedSection>
      {/* Core message */}
      <AnimatedSection>
        <Section>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
              Empowering Changemakers
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              I speak to empower people to believe in their ability to create
              change — in their lives, their communities, and the causes they
              care about most. My talks combine real‑life experience with
              actionable steps that move audiences from inspiration to action.
            </p>
          </div>
        </Section>
      </AnimatedSection>
      {/* Proof bar */}
      <AnimatedSection>
        <Section className="bg-white dark:bg-gray-900">
          <LogoCloud logos={logos} title="Trusted By" />
        </Section>
      </AnimatedSection>
      {/* Speaking topics preview */}
      <AnimatedSection>
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
      </AnimatedSection>
      {/* Impact story preview */}
      <AnimatedSection>
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
      </AnimatedSection>
      {/* Call to action */}
      <AnimatedSection>
        <Section>
          <CTA
            heading="Ready to inspire your audience?"
            subheading="Let’s work together to create a program tailored to your community."
            buttonLabel="Book Me to Speak"
            buttonHref="/events"
          />
        </Section>
      </AnimatedSection>
    </>
  );
}
