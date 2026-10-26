import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageToggle } from "./LanguageToggle";
import { profile } from "../data/profile";
import { useLang } from "../i18n/LanguageProvider";
import { ui } from "../i18n/strings";

const links = [
  { href: "#about", key: "about" },
  { href: "#skills", key: "skills" },
  { href: "#projects", key: "projects" },
  { href: "#experience", key: "experience" },
  { href: "#contact", key: "contact" },
] as const;

const sectionIds = ["home", ...links.map((l) => l.href.slice(1))];

export function Navbar() {
  const { t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Scrollspy — highlight the section currently in view
  useEffect(() => {
    const els = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (els.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5] }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-brand-200/70 bg-white/85 backdrop-blur-md dark:border-brand-800/70 dark:bg-brand-950/85"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-4 sm:px-6">
        <a
          href="#home"
          className="group flex items-center gap-2.5 font-serif text-lg font-semibold text-brand-800 dark:text-white"
        >
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-brand-800 font-mono text-xs font-bold text-white shadow-sm ring-1 ring-brand-900/10 transition-transform group-hover:scale-105 dark:bg-brand-700">
            RG
          </span>
          <span className="hidden sm:inline">Rafik Gatri</span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-0.5 md:flex">
          {links.map((l) => {
            const isActive = active === l.href.slice(1);
            return (
              <a
                key={l.href}
                href={l.href}
                aria-current={isActive ? "true" : undefined}
                className={`relative rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "text-brand-900 dark:text-white"
                    : "text-brand-600 hover:text-brand-900 dark:text-brand-300 dark:hover:text-white"
                }`}
              >
                {t(ui.nav[l.key])}
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-signal-500 transition-opacity dark:bg-signal-400 ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                />
              </a>
            );
          })}
          <a
            href={profile.cvPath}
            download={profile.cvFileName}
            className="ml-2 inline-flex items-center gap-1.5 rounded-lg bg-brand-800 px-3.5 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-900 dark:bg-brand-700 dark:hover:bg-brand-600"
          >
            {t(ui.cvShort)}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 3v12M7 10l5 5 5-5M5 21h14" />
            </svg>
          </a>
          <div className="ml-1.5 flex items-center gap-1.5">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <LanguageToggle />
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-brand-200/70 text-brand-700 dark:border-brand-700/60 dark:text-brand-200"
          >
            {open ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path d="M3 12h18M3 6h18M3 18h18" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          id="mobile-menu"
          className="border-t border-brand-200/60 bg-white/95 backdrop-blur-md md:hidden dark:border-brand-800/60 dark:bg-brand-950/95"
        >
          <div className="mx-auto flex w-full max-w-5xl flex-col px-4 py-3 sm:px-6">
            {links.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 rounded-lg px-3 py-3 text-base font-medium text-brand-700 hover:bg-brand-50 dark:text-brand-100 dark:hover:bg-brand-900"
              >
                <span className="font-mono text-xs text-signal-600 tabular-nums dark:text-signal-400">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {t(ui.nav[l.key])}
              </a>
            ))}
            <a
              href={profile.cvPath}
              download={profile.cvFileName}
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-lg bg-brand-800 px-3.5 py-3 text-base font-semibold text-white hover:bg-brand-900 dark:bg-brand-700 dark:hover:bg-brand-600"
            >
              {t(ui.downloadCv)}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 3v12M7 10l5 5 5-5M5 21h14" />
              </svg>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
