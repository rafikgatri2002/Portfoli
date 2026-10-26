import { Section } from "./ui/Section";
import { Reveal } from "./ui/Reveal";
import { profile } from "../data/profile";
import { useLang } from "../i18n/LanguageProvider";
import { ui } from "../i18n/strings";

export function About() {
  const { t, tl } = useLang();

  return (
    <Section
      id="about"
      index="01"
      spine={t(ui.nav.about)}
      title={t(ui.sections.about.title)}
    >
      <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:gap-14">
        <Reveal>
          <div className="space-y-4 text-lg leading-relaxed text-brand-700/90 text-pretty dark:text-brand-200/85">
            {tl(profile.bio).map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {ui.about.highlights.map((h) => (
              <div
                key={h.value.en}
                className="rounded-xl border border-brand-200/70 border-l-2 border-l-signal-500/70 bg-paper/70 p-4 transition-colors hover:border-brand-300 dark:border-brand-800/70 dark:border-l-signal-400/60 dark:bg-brand-900/40 dark:hover:border-brand-700"
              >
                <p className="font-serif text-lg font-semibold text-brand-800 dark:text-white">
                  {t(h.value)}
                </p>
                <p className="mt-1 text-sm text-brand-500 dark:text-brand-300">{t(h.label)}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
