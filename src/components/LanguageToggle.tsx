import { useLang } from "../i18n/LanguageProvider";
import { ui } from "../i18n/strings";

export function LanguageToggle() {
  const { lang, toggleLang, t } = useLang();
  const target = lang === "fr" ? "en" : "fr";
  const label = target === "en" ? t(ui.language.toEn) : t(ui.language.toFr);

  return (
    <button
      type="button"
      onClick={toggleLang}
      aria-label={label}
      title={label}
      className="inline-flex h-9 items-center gap-1 rounded-lg border border-brand-200/70 bg-white/60 px-2.5 font-mono text-xs transition-colors hover:bg-brand-50 dark:border-brand-700/60 dark:bg-brand-900/60 dark:hover:bg-brand-800"
    >
      <span
        className={
          lang === "fr"
            ? "font-semibold text-brand-800 dark:text-white"
            : "text-brand-400 dark:text-brand-500"
        }
      >
        FR
      </span>
      <span className="text-brand-300 dark:text-brand-600" aria-hidden="true">
        /
      </span>
      <span
        className={
          lang === "en"
            ? "font-semibold text-brand-800 dark:text-white"
            : "text-brand-400 dark:text-brand-500"
        }
      >
        EN
      </span>
    </button>
  );
}
