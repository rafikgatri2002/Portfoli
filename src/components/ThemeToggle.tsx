import { useTheme } from "../hooks/useTheme";
import { useLang } from "../i18n/LanguageProvider";
import { ui } from "../i18n/strings";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const { t } = useLang();
  const isDark = theme === "dark";
  const label = isDark ? t(ui.theme.toLight) : t(ui.theme.toDark);

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
      className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-brand-200/70 bg-white/60 text-brand-700 transition-colors hover:bg-brand-50 dark:border-brand-700/60 dark:bg-brand-900/60 dark:text-brand-200 dark:hover:bg-brand-800"
    >
      {isDark ? (
        // Sun
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
        </svg>
      ) : (
        // Moon
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}
    </button>
  );
}
