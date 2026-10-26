import { Section } from "./ui/Section";
import { Reveal } from "./ui/Reveal";
import { skillGroups, type SkillItem } from "../data/skills";
import { useLang } from "../i18n/LanguageProvider";
import { ui } from "../i18n/strings";

export function Skills() {
  const { t } = useLang();
  const resolve = (item: SkillItem) => (typeof item === "string" ? item : t(item));

  return (
    <Section
      id="skills"
      index="02"
      spine={t(ui.nav.skills)}
      title={t(ui.sections.skills.title)}
      intro={t(ui.sections.skills.intro)}
    >
      <Reveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.title.en}
              className="h-full rounded-2xl border border-brand-200/70 bg-white p-5 shadow-sm transition-colors hover:border-brand-300 dark:border-brand-800/70 dark:bg-brand-900/40 dark:hover:border-brand-700"
            >
              <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-brand-800 dark:text-white">
                <span aria-hidden="true" className="h-3 w-0.5 rounded-full bg-signal-500 dark:bg-signal-400" />
                {t(group.title)}
              </h3>
              <ul className="flex flex-wrap gap-1.5">
                {group.items.map((item) => {
                  const label = resolve(item);
                  return (
                    <li
                      key={label}
                      className="rounded-md bg-brand-50 px-2.5 py-1 font-mono text-xs font-medium text-brand-600 ring-1 ring-inset ring-brand-100 dark:bg-brand-800/60 dark:text-brand-200 dark:ring-brand-700/50"
                    >
                      {label}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
