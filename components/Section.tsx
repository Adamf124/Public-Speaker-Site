// components/Section.tsx
import type { ReactNode } from 'react';
import Container from './Container';

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
}

/**
 * Semantic wrapper for a page section. Provides vertical spacing and ensures
 * that content is constrained within the Container component. Pass an id
 * prop to enable anchor linking.
 */
export default function Section({ id, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`py-12 md:py-16 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}