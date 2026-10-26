import { profile } from "../data/profile";
import { useLang } from "../i18n/LanguageProvider";
import { ui } from "../i18n/strings";

export function Hero() {
  const { t } = useLang();

  const spec: { label: string; value: string }[] = [
    { label: t(ui.hero.spec.role), value: t(profile.title) },
    { label: t(ui.hero.spec.location), value: t(profile.location) },
    { label: t(ui.hero.spec.status), value: t(ui.hero.statusValue) },
    { label: t(ui.hero.spec.stack), value: profile.stackLine },
    { label: t(ui.hero.spec.focus), value: t(ui.hero.focusValue) },
  ];

  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24">
      {/* Restrained background: a quiet warm wash at the top, no decorative blobs/grid */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-paper via-white to-white dark:from-brand-900/30 dark:via-brand-950 dark:to-brand-950" />
      </div>

      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
        <div className="animate-fade-up lg:grid lg:grid-cols-[1fr_19rem] lg:items-center lg:gap-14">
          {/* Statement */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-200/80 bg-white/70 px-3.5 py-1.5 text-sm font-medium text-brand-600 shadow-sm dark:border-brand-700/60 dark:bg-brand-900/60 dark:text-brand-200">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              {t(profile.availability)}
            </span>

            <p className="mt-7 font-serif text-xl font-medium text-brand-500 dark:text-brand-300">
              {profile.name}
            </p>

            <h1 className="mt-2 max-w-2xl font-serif text-[2.1rem] font-semibold leading-[1.08] tracking-tight text-balance text-brand-800 sm:text-5xl lg:text-[3.3rem] dark:text-white">
              {t(profile.pitch)}
            </h1>

            <p className="mt-5 font-mono text-sm text-brand-500 dark:text-brand-400">
              {profile.stackLine}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-xl bg-brand-800 px-5 py-3 text-base font-semibold text-white shadow-sm transition-all hover:bg-brand-900 hover:shadow-md dark:bg-brand-700 dark:hover:bg-brand-600"
              >
                {t(ui.hero.viewProjects)}
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl border border-brand-300 bg-white px-5 py-3 text-base font-semibold text-brand-800 transition-colors hover:border-brand-400 hover:bg-brand-50 dark:border-brand-700 dark:bg-brand-900/50 dark:text-brand-100 dark:hover:bg-brand-800"
              >
                {t(ui.hero.getInTouch)}
              </a>
              <a
                href={profile.cvPath}
                download={profile.cvFileName}
                className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-base font-semibold text-brand-600 underline-offset-4 transition-colors hover:text-brand-900 hover:underline decoration-signal-500 dark:text-brand-200 dark:hover:text-white"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 3v12M7 10l5 5 5-5M5 21h14" />
                </svg>
                {t(ui.downloadCv)}
              </a>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-brand-500 dark:text-brand-400">
              <span className="inline-flex items-center gap-1.5">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                {t(profile.location)}
              </span>
              <a
                href={profile.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-brand-900 dark:hover:text-white"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 .5C5.73.5.5 5.73.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.79 2.73 1.27 3.4.97.1-.75.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.25 5.69.42.37.8 1.1.8 2.22v3.29c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
                </svg>
                GitHub
              </a>
            </div>
          </div>

          {/* Spec panel — the dossier "fiche" */}
          <aside className="mt-12 lg:mt-0">
            <dl className="overflow-hidden rounded-2xl border border-brand-200/80 bg-white/80 shadow-sm backdrop-blur-sm dark:border-brand-800/80 dark:bg-brand-900/40">
              <div className="flex items-center justify-between border-b border-brand-200/70 px-4 py-2.5 dark:border-brand-800/70">
                <span className="font-mono text-[0.7rem] uppercase tracking-wider text-brand-400 dark:text-brand-500">
                  {t(ui.hero.specTitle)}
                </span>
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-signal-500 dark:bg-signal-400" />
              </div>
              {spec.map((row, i) => (
                <div
                  key={row.label}
                  className={`grid grid-cols-[4.5rem_1fr] gap-3 px-4 py-3 ${
                    i !== spec.length - 1 ? "border-b border-brand-100 dark:border-brand-800/50" : ""
                  }`}
                >
                  <dt className="font-mono text-xs text-brand-400 dark:text-brand-500">{row.label}</dt>
                  <dd className="text-sm font-medium text-brand-700 text-pretty dark:text-brand-100">
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </div>
    </section>
  );
}
