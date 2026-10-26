import { Section } from "./ui/Section";
import { Reveal } from "./ui/Reveal";
import { profile } from "../data/profile";

const highlights = [
  { value: "End-to-end", label: "Data model → production" },
  { value: "Full-stack", label: "Web & mobile" },
  { value: "DevOps", label: "CI/CD · Docker · Cloud" },
  { value: "Systems", label: "Windows Server · Network" },
];

export function About() {
  return (
    <Section id="about" eyebrow="About" title="A full-stack developer who ships to production">
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-14">
        <Reveal>
          <div className="space-y-4 text-lg leading-relaxed text-brand-700/90 text-pretty dark:text-brand-200/85">
            {profile.bio.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {highlights.map((h) => (
              <div
                key={h.label}
                className="rounded-2xl border border-brand-200/70 bg-brand-50/50 p-4 transition-colors hover:border-brand-300 dark:border-brand-800/70 dark:bg-brand-900/40 dark:hover:border-brand-700"
              >
                <p className="font-serif text-lg font-semibold text-brand-800 dark:text-white">
                  {h.value}
                </p>
                <p className="mt-1 text-sm text-brand-500 dark:text-brand-300">{h.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
