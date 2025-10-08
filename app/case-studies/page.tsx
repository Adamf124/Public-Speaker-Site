// app/case-studies/page.tsx
import { buildMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import Section from "@/components/Section";
import CTA from "@/components/CTA";
import { caseStudies } from "@/content/config";

export const metadata: Metadata = buildMetadata({
  title: "Case Studies",
  description:
    "Real change happens when ideas meet action. Explore impact stories from Larry C. Jones Jr.’s collaborations and campaigns.",
});

export default function CaseStudiesPage() {
  return (
    <>
      <Section>
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
            Case Studies
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Real change happens when ideas meet action. The case studies below
            highlight some of the collaborations and initiatives that have made
            a measurable difference.
          </p>
        </div>
      </Section>
      <Section>
        <div className="space-y-8">
          {caseStudies.map((study) => (
            <article
              key={study.name}
              className="rounded-md border-l-4 border-brand bg-white p-6 shadow-subtle dark:bg-gray-800"
            >
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                {study.name}
              </h2>
              <p className="mt-2 text-gray-700 dark:text-gray-300">
                {study.description}
              </p>
            </article>
          ))}
        </div>
      </Section>
      <Section>
        <CTA
          heading="Let’s create your impact story"
          subheading="Together we can craft a case study worth sharing."
          buttonLabel="Start Now"
          buttonHref="/events"
        />
      </Section>
    </>
  );
}
