import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

interface SectionProps {
  id: string;
  /** Ledger index, e.g. "01". */
  index: string;
  /** Short spine label, e.g. "Profil". */
  spine: string;
  title: string;
  intro?: string;
  children: ReactNode;
  className?: string;
}

/**
 * Section shell with a left "ledger spine" (index + label + hairline) and the
 * heading block. The spine is the organizing device of the Production Ledger
 * layout — a numbered table-of-contents down the left margin.
 */
export function Section({ id, index, spine, title, intro, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`py-20 sm:py-28 ${className}`}>
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
        <div className="lg:grid lg:grid-cols-[5.5rem_1fr] lg:gap-12">
          {/* Ledger spine */}
          <div className="mb-7 flex items-center gap-3 lg:mb-0 lg:block lg:sticky lg:top-28 lg:self-start">
            <span className="font-mono text-sm font-medium tabular-nums text-signal-600 dark:text-signal-400">
              {index}
            </span>
            <span className="font-mono text-xs text-brand-400 dark:text-brand-500 lg:mt-1.5 lg:block">
              / {spine}
            </span>
            <span
              aria-hidden="true"
              className="h-px w-8 bg-signal-500/45 lg:mt-5 lg:h-14 lg:w-px dark:bg-signal-400/35"
            />
          </div>

          {/* Content */}
          <div>
            <Reveal>
              <div className="mb-10 max-w-2xl">
                <h2 className="font-serif text-3xl font-semibold leading-tight tracking-tight text-balance text-brand-800 sm:text-4xl dark:text-white">
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
        </div>
      </div>
    </section>
  );
}
