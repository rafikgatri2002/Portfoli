import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { Lang, LS, LSList } from "./types";

interface LanguageContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggleLang: () => void;
  /** Resolve a localized string to the current language. */
  t: (s: LS) => string;
  /** Resolve a localized string list to the current language. */
  tl: (s: LSList) => string[];
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "lang";

/**
 * French is the primary language (recruiter audience in TN / FR / CI).
 * The initial <html lang> is set by an inline script in index.html to match,
 * so screen readers get the right language before React hydrates.
 */
function getInitialLang(): Lang {
  if (typeof document !== "undefined") {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === "fr" || stored === "en") return stored;
    } catch {
      /* storage unavailable (private mode) — fall through to default */
    }
  }
  return "fr";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(getInitialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* ignore */
    }
  }, [lang]);

  const setLang = useCallback((l: Lang) => setLangState(l), []);
  const toggleLang = useCallback(
    () => setLangState((l) => (l === "fr" ? "en" : "fr")),
    []
  );
  const t = useCallback((s: LS) => s[lang], [lang]);
  const tl = useCallback((s: LSList) => s[lang], [lang]);

  const value = useMemo(
    () => ({ lang, setLang, toggleLang, t, tl }),
    [lang, setLang, toggleLang, t, tl]
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLang(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLang must be used within a LanguageProvider");
  }
  return ctx;
}
