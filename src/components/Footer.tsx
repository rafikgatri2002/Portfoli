import { profile } from "../data/profile";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-brand-200/60 bg-brand-50/40 dark:border-brand-800/60 dark:bg-brand-950">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6">
        <div className="flex items-center gap-2 text-sm text-brand-500 dark:text-brand-400">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-brand-700 text-xs font-bold text-white">
            RG
          </span>
          <span>
            © {year} {profile.name}
          </span>
        </div>

        <div className="flex items-center gap-4 text-sm">
          <a
            href={profile.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-500 transition-colors hover:text-brand-800 dark:text-brand-400 dark:hover:text-white"
          >
            GitHub
          </a>
          <a
            href={`mailto:${profile.contact.email}`}
            className="text-brand-500 transition-colors hover:text-brand-800 dark:text-brand-400 dark:hover:text-white"
          >
            Email
          </a>
          <a
            href={profile.cvPath}
            download={profile.cvFileName}
            className="text-brand-500 transition-colors hover:text-brand-800 dark:text-brand-400 dark:hover:text-white"
          >
            CV
          </a>
          <a
            href="#home"
            className="inline-flex items-center gap-1 text-brand-500 transition-colors hover:text-brand-800 dark:text-brand-400 dark:hover:text-white"
          >
            Top
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="m18 15-6-6-6 6" />
            </svg>
          </a>
        </div>
      </div>
      <p className="pb-6 text-center text-xs text-brand-400/80 dark:text-brand-600">
        Built with React, Vite &amp; Tailwind CSS.
      </p>
    </footer>
  );
}
