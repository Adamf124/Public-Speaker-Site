// app/speaking/page.tsx
import { buildMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import Section from "@/components/Section";
import FeatureCards from "@/components/FeatureCards";
import CTA from "@/components/CTA";
import { speakingTopics } from "@/content/config";

export const metadata: Metadata = buildMetadata({
  title: "Speaking Topics",
  description:
    "Explore keynote talks, workshops and panel appearances offered by Larry C. Jones Jr., tailored to empower your audience.",
});

export default function SpeakingPage() {
  return (
    <>
      <Section>
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
            Speaking Topics
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            I offer keynote talks, workshops, and panel appearances tailored to
            the needs of each audience. Whether you’re planning a corporate
            retreat or a grassroots gathering, together we can design a session
            that meets your goals.
          </p>
        </div>
      </Section>
      <Section>
        <FeatureCards
          features={speakingTopics.map((topic) => ({
            title: topic.title,
            description: topic.description,
            audience: topic.audience,
            outcome: topic.outcome,
          }))}
        />
      </Section>
      <Section>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
            Custom Workshops
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            Have a unique challenge or goal? I create customized sessions to
            meet your needs. Let’s collaborate to design an experience that
            delivers lasting impact.
          </p>
        </div>
      </Section>
      <Section>
        <CTA
          heading="Bring Larry to Your Next Event"
          subheading="Get in touch to discuss how we can create a powerful experience for your audience."
          buttonLabel="Start the Conversation"
          buttonHref="/events"
        />
      </Section>
    </>
  );
}
