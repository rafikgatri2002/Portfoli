import { Section } from "./ui/Section";
import { Reveal } from "./ui/Reveal";
import { experiences } from "../data/experience";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Where I've worked"
      intro="Internships and roles across full-stack development, mobile, and IT — delivering real applications for companies and clients."
    >
      <ol className="relative border-l border-brand-200 pl-6 sm:pl-8 dark:border-brand-800">
        {experiences.map((exp, i) => (
          <Reveal as="li" key={`${exp.org}-${exp.period}`} delay={i * 70} className="relative mb-10 last:mb-0">
            {/* Timeline node */}
            <span className="absolute -left-[31px] top-1.5 flex h-3.5 w-3.5 items-center justify-center sm:-left-[39px]">
              <span className="h-3.5 w-3.5 rounded-full border-2 border-white bg-brand-600 shadow-sm dark:border-brand-950 dark:bg-brand-400" />
            </span>

            <div className="rounded-2xl border border-brand-200/70 bg-white p-5 shadow-sm transition-colors hover:border-brand-300 sm:p-6 dark:border-brand-800/70 dark:bg-brand-900/40 dark:hover:border-brand-700">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="font-serif text-lg font-semibold text-brand-800 dark:text-white">
                  {exp.role}
                </h3>
                <span className="shrink-0 text-sm font-medium text-brand-500 dark:text-brand-300">
                  {exp.period}
                </span>
              </div>

              <p className="mt-0.5 text-sm font-semibold text-brand-600 dark:text-brand-200">
                {exp.org}
                <span className="font-normal text-brand-400 dark:text-brand-400">
                  {" "}· {exp.location}
                  {exp.context ? ` · ${exp.context}` : ""}
                </span>
              </p>

              <ul className="mt-4 space-y-2">
                {exp.points.map((point, j) => (
                  <li
                    key={j}
                    className="flex gap-2.5 text-sm leading-relaxed text-brand-600/90 text-pretty dark:text-brand-200/80"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400 dark:bg-brand-500" />
                    {point}
                  </li>
                ))}
              </ul>

              {exp.tags && (
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {exp.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-md bg-brand-50 px-2 py-0.5 text-xs font-medium text-brand-500 ring-1 ring-inset ring-brand-100 dark:bg-brand-800/50 dark:text-brand-300 dark:ring-brand-700/50"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
