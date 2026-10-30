import { useEffect, useRef, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { Section } from "./ui/Section";
import { Reveal } from "./ui/Reveal";
import { projects, type Project, type ProjectLink } from "../data/projects";
import { useLang } from "../i18n/LanguageProvider";
import { ui } from "../i18n/strings";

/* ---------- Icons ---------- */

function GithubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.73.5.5 5.73.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.79 2.73 1.27 3.4.97.1-.75.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.25 5.69.42.37.8 1.1.8 2.22v3.29c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
    </svg>
  );
}
function ExternalIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    </svg>
  );
}
function ImageIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="9" cy="9" r="2" />
      <path d="m21 15-3.09-3.09a2 2 0 0 0-2.82 0L6 21" />
    </svg>
  );
}
function LockIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="11" width="18" height="11" rx="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

/* ---------- Status ---------- */

type Status = "live" | "confidential" | "soon";

/** Derive a single status for the entry from its primary (demo) link. */
function deriveStatus(project: Project): Status {
  const demo = project.links.demo.type;
  if (demo === "private") return "confidential";
  if (demo === "live") return "live";
  return "soon";
}

function StatusChip({ status }: { status: Status }) {
  const { t } = useLang();
  const base =
    "inline-flex shrink-0 items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ring-1 ring-inset";

  if (status === "confidential") {
    return (
      <span className={`${base} bg-brand-50 text-brand-500 ring-brand-200 dark:bg-brand-800/60 dark:text-brand-300 dark:ring-brand-700`}>
        <LockIcon />
        {t(ui.projects.status.confidential)}
      </span>
    );
  }
  if (status === "live") {
    return (
      <span className={`${base} bg-emerald-50 text-emerald-700 ring-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-300 dark:ring-emerald-500/30`}>
        <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
        {t(ui.projects.status.live)}
      </span>
    );
  }
  return (
    <span className={`${base} bg-signal-50 text-signal-700 ring-signal-200 dark:bg-signal-400/10 dark:text-signal-300 dark:ring-signal-400/30`}>
      <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-signal-500 dark:bg-signal-400" />
      {t(ui.projects.status.soon)}
    </span>
  );
}

/* ---------- Link renderer (graceful degradation preserved) ---------- */

interface LinkConfig {
  link: ProjectLink;
  label: string;
  icon: ReactNode;
  projectTitle: string;
}

function ProjectLinkButton({ link, label, icon, projectTitle }: LinkConfig) {
  const { t } = useLang();
  if (link.type === "none") return null;

  const base =
    "inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium transition-colors";

  if (link.type === "live") {
    return (
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${label} — ${projectTitle} ${t(ui.projects.opensNewTab)}`}
        className={`${base} bg-brand-800 text-white hover:bg-brand-900 dark:bg-brand-700 dark:hover:bg-brand-600`}
      >
        {icon}
        {label}
      </a>
    );
  }

  if (link.type === "private") {
    return (
      <span
        aria-label={`${label} — ${t(ui.projects.privateAria)}`}
        className={`${base} cursor-not-allowed border border-brand-200/70 text-brand-400 dark:border-brand-700/60 dark:text-brand-500`}
      >
        <LockIcon />
        {label}
      </span>
    );
  }

  // "soon" — clearly-marked placeholder to fill or remove later
  return (
    <span
      aria-label={`${label} — ${t(ui.projects.comingSoonAria)}`}
      className={`${base} cursor-default border border-dashed border-brand-300/80 text-brand-400 dark:border-brand-700 dark:text-brand-500`}
    >
      {icon}
      {label}
      <span className="ml-0.5 text-xs font-normal opacity-70">{t(ui.projects.soonSuffix)}</span>
    </span>
  );
}

/* ---------- Dossier entry ---------- */

function ProjectCard({ project }: { project: Project }) {
  const { t } = useLang();
  const status = deriveStatus(project);
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);
  const touchX = useRef<number | null>(null);
  const gallery = project.gallery ?? [];
  const go = (d: number) =>
    setIdx((i) => (gallery.length ? (i + d + gallery.length) % gallery.length : 0));

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      else if (e.key === "ArrowLeft") go(-1);
      else if (e.key === "ArrowRight") go(1);
    };
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [open]);

  return (
    <>
    <article className="group flex h-full flex-col rounded-2xl border border-brand-200/70 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-brand-300 hover:shadow-lg dark:border-brand-800/70 dark:bg-brand-900/40 dark:hover:border-brand-700">
      <div className="flex items-center justify-between gap-3">
        <span className="font-mono text-xs text-brand-400 dark:text-brand-500">{project.org}</span>
        <StatusChip status={status} />
      </div>

      <h3 className="mt-3 font-serif text-xl font-semibold leading-snug text-brand-800 text-balance dark:text-white">
        {t(project.title)}
      </h3>
      <p className="mt-1 text-sm font-medium text-brand-500 dark:text-brand-300">
        {t(project.tagline)}
      </p>

      <p className="mt-4 text-sm leading-relaxed text-brand-600/90 text-pretty dark:text-brand-200/80">
        {t(project.description)}
      </p>

      <div className="mt-5">
        <span className="font-mono text-[0.7rem] text-brand-400 dark:text-brand-500">
          {t(ui.projects.stackLabel)}
        </span>
        <ul className="mt-1.5 flex flex-wrap gap-1.5">
          {project.tech.map((tech) => (
            <li
              key={tech}
              className="rounded-md bg-brand-50 px-2 py-0.5 font-mono text-xs font-medium text-brand-600 ring-1 ring-inset ring-brand-100 dark:bg-brand-800/60 dark:text-brand-200 dark:ring-brand-700/50"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>

      {gallery.length > 0 && (
        <div className="mt-5">
          <div
            className="relative flex items-center justify-center"
            onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
            onTouchEnd={(e) => {
              if (touchX.current == null) return;
              const dx = e.changedTouches[0].clientX - touchX.current;
              if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
              touchX.current = null;
            }}
          >
            {gallery.length > 1 && (
              <>
                <button
                  type="button"
                  aria-hidden="true"
                  tabIndex={-1}
                  onClick={() => go(-1)}
                  className="absolute inset-y-0 left-0 z-0 w-1/2 cursor-pointer"
                />
                <button
                  type="button"
                  aria-hidden="true"
                  tabIndex={-1}
                  onClick={() => go(1)}
                  className="absolute inset-y-0 right-0 z-0 w-1/2 cursor-pointer"
                />
              </>
            )}
            <img
              key={gallery[idx]}
              src={gallery[idx]}
              alt={`${t(project.title)} ${t(ui.projects.links.screenshots)}`}
              loading="lazy"
              onClick={() => setOpen(true)}
              className="relative z-10 h-56 w-auto cursor-zoom-in rounded-xl border border-brand-200/70 shadow-sm dark:border-brand-800/70"
            />
            {gallery.length > 1 && (
              <>
                <button
                  type="button"
                  aria-label={t(ui.projects.prevImage)}
                  onClick={() => go(-1)}
                  className="absolute left-1.5 top-1/2 z-20 flex -translate-y-1/2 items-center justify-center rounded-full bg-white/85 p-1.5 text-brand-700 shadow ring-1 ring-brand-200 backdrop-blur transition hover:bg-white dark:bg-brand-900/85 dark:text-brand-100 dark:ring-brand-700"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg>
                </button>
                <button
                  type="button"
                  aria-label={t(ui.projects.nextImage)}
                  onClick={() => go(1)}
                  className="absolute right-1.5 top-1/2 z-20 flex -translate-y-1/2 items-center justify-center rounded-full bg-white/85 p-1.5 text-brand-700 shadow ring-1 ring-brand-200 backdrop-blur transition hover:bg-white dark:bg-brand-900/85 dark:text-brand-100 dark:ring-brand-700"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg>
                </button>
              </>
            )}
          </div>
          {gallery.length > 1 && (
            <div className="mt-2.5 flex justify-center gap-1.5">
              {gallery.map((g, i) => (
                <button
                  key={g}
                  type="button"
                  aria-label={`${t(ui.projects.links.screenshots)} ${i + 1}`}
                  onClick={() => setIdx(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === idx ? "w-4 bg-brand-500" : "w-1.5 bg-brand-300 dark:bg-brand-700"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      )}

      <div className="mt-6 flex flex-1 flex-col justify-end">
        <div className="flex flex-wrap gap-2">
          <ProjectLinkButton link={project.links.demo} label={t(ui.projects.links.demo)} icon={<ExternalIcon />} projectTitle={t(project.title)} />
          <ProjectLinkButton link={project.links.github} label={t(ui.projects.links.github)} icon={<GithubIcon />} projectTitle={t(project.title)} />
          <ProjectLinkButton link={project.links.screenshots} label={t(ui.projects.links.screenshots)} icon={<ImageIcon />} projectTitle={t(project.title)} />
        </div>

        {project.note && (
          <p className="mt-4 flex items-start gap-1.5 text-xs leading-relaxed text-brand-400 dark:text-brand-500">
            <span className="mt-0.5 shrink-0">
              <LockIcon />
            </span>
            {t(project.note)}
          </p>
        )}
      </div>
    </article>
    {open && createPortal(
      <div
        role="dialog"
        aria-modal="true"
        onClick={() => setOpen(false)}
        className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm sm:p-6"
      >
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label={t(ui.projects.closeImage)}
          className="absolute right-3 top-3 z-10 rounded-full bg-white/10 p-2 text-white ring-1 ring-inset ring-white/30 transition-colors hover:bg-white/20 sm:right-5 sm:top-5"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>
        {gallery.length > 1 && (
          <>
            <button
              type="button"
              aria-label={t(ui.projects.prevImage)}
              onClick={(e) => {
                e.stopPropagation();
                go(-1);
              }}
              className="absolute left-2 top-1/2 z-10 flex -translate-y-1/2 items-center justify-center rounded-full bg-white/10 p-2 text-white ring-1 ring-inset ring-white/30 transition-colors hover:bg-white/20 sm:left-4"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg>
            </button>
            <button
              type="button"
              aria-label={t(ui.projects.nextImage)}
              onClick={(e) => {
                e.stopPropagation();
                go(1);
              }}
              className="absolute right-2 top-1/2 z-10 flex -translate-y-1/2 items-center justify-center rounded-full bg-white/10 p-2 text-white ring-1 ring-inset ring-white/30 transition-colors hover:bg-white/20 sm:right-4"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg>
            </button>
          </>
        )}
        <img
          key={gallery[idx]}
          src={gallery[idx]}
          alt={t(project.title)}
          onClick={(e) => e.stopPropagation()}
          onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (touchX.current == null) return;
            const dx = e.changedTouches[0].clientX - touchX.current;
            if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
            touchX.current = null;
          }}
          className="max-h-[90vh] max-w-[95vw] rounded-lg object-contain shadow-2xl"
        />
        {gallery.length > 1 && (
          <div className="absolute bottom-4 left-1/2 z-10 -translate-x-1/2 rounded-full bg-black/40 px-2.5 py-1 text-xs font-medium text-white/90">
            {idx + 1} / {gallery.length}
          </div>
        )}
      </div>,
      document.body
    )}
    </>
  );
}

export function Projects() {
  const { t } = useLang();

  return (
    <Section
      id="projects"
      index="03"
      spine={t(ui.nav.projects)}
      title={t(ui.sections.projects.title)}
      intro={t(ui.sections.projects.intro)}
    >
      <Reveal>
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title.en} project={project} />
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
