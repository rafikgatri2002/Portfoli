import { Section } from "./ui/Section";
import { Reveal } from "./ui/Reveal";
import { skillGroups } from "../data/skills";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Tools I build with"
      intro="From front-end frameworks to servers and supervision — the stack I use to take a project from idea to running service."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} delay={i * 80}>
            <div className="h-full rounded-2xl border border-brand-200/70 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-md dark:border-brand-800/70 dark:bg-brand-900/40 dark:hover:border-brand-700">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-brand-500 dark:text-brand-300">
                {group.title}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg bg-brand-50 px-3 py-1.5 text-sm font-medium text-brand-700 ring-1 ring-inset ring-brand-100 dark:bg-brand-800/60 dark:text-brand-100 dark:ring-brand-700/50"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
