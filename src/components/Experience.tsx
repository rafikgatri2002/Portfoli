import { Section } from "./ui/Section";
import { Reveal } from "./ui/Reveal";
import { experiences } from "../data/experience";
import { useLang } from "../i18n/LanguageProvider";
import { ui } from "../i18n/strings";

export function Experience() {
  const { t, tl } = useLang();

  return (
    <Section
      id="experience"
      index="04"
      spine={t(ui.nav.experience)}
      title={t(ui.sections.experience.title)}
      intro={t(ui.sections.experience.intro)}
    >
      <ol className="relative border-l border-brand-200 pl-6 sm:pl-8 dark:border-brand-800">
        {experiences.map((exp, i) => (
          <Reveal as="li" key={`${exp.org}-${exp.period.en}`} delay={i * 60} className="relative mb-9 last:mb-0">
            {/* Timeline node */}
            <span className="absolute -left-[31px] top-2 flex h-3.5 w-3.5 items-center justify-center sm:-left-[39px]">
              <span className="h-3.5 w-3.5 rounded-full border-2 border-white bg-signal-500 shadow-sm dark:border-brand-950 dark:bg-signal-400" />
            </span>

            <div className="rounded-2xl border border-brand-200/70 bg-white p-5 shadow-sm transition-colors hover:border-brand-300 sm:p-6 dark:border-brand-800/70 dark:bg-brand-900/40 dark:hover:border-brand-700">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="font-serif text-lg font-semibold text-brand-800 dark:text-white">
                  {t(exp.role)}
                </h3>
                <span className="shrink-0 font-mono text-xs text-brand-500 tabular-nums dark:text-brand-400">
                  {t(exp.period)}
                </span>
              </div>

              <p className="mt-0.5 text-sm font-semibold text-brand-600 dark:text-brand-200">
                {exp.org}
                <span className="font-normal text-brand-400 dark:text-brand-400">
                  {" "}· {t(exp.location)}
                  {exp.context ? ` · ${t(exp.context)}` : ""}
                </span>
              </p>

              <ul className="mt-4 space-y-2">
                {tl(exp.points).map((point, j) => (
                  <li
                    key={j}
                    className="flex gap-2.5 text-sm leading-relaxed text-brand-600/90 text-pretty dark:text-brand-200/80"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-signal-500/70 dark:bg-signal-400/70" />
                    {point}
                  </li>
                ))}
              </ul>

              {exp.tags && (
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {exp.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-md bg-brand-50 px-2 py-0.5 font-mono text-xs font-medium text-brand-500 ring-1 ring-inset ring-brand-100 dark:bg-brand-800/50 dark:text-brand-300 dark:ring-brand-700/50"
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
