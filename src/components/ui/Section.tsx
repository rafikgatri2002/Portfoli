import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

interface SectionProps {
  id: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  children: ReactNode;
  className?: string;
}

/** Standard section shell: anchor id, consistent heading block, width + padding. */
export function Section({ id, eyebrow, title, intro, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`py-20 sm:py-28 ${className}`}>
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
        <Reveal>
          <div className="mb-12 max-w-2xl">
            {eyebrow && (
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-brand-500 dark:text-brand-300">
                {eyebrow}
              </p>
            )}
            <h2 className="font-serif text-3xl font-semibold leading-tight text-balance text-brand-800 sm:text-4xl dark:text-white">
              {title}
            </h2>
            {intro && (
              <p className="mt-4 text-base leading-relaxed text-brand-600/90 text-pretty dark:text-brand-200/80">
                {intro}
              </p>
            )}
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
