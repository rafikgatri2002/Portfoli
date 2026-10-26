import type { ReactNode } from "react";
import { Section } from "./ui/Section";
import { Reveal } from "./ui/Reveal";
import { projects, type Project, type ProjectLink } from "../data/projects";

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
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="11" width="18" height="11" rx="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

/* ---------- Link renderer (graceful degradation) ---------- */

interface LinkConfig {
  link: ProjectLink;
  label: string;
  icon: ReactNode;
  projectTitle: string;
}

function ProjectLinkButton({ link, label, icon, projectTitle }: LinkConfig) {
  if (link.type === "none") return null;

  const base =
    "inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium transition-colors";

  if (link.type === "live") {
    return (
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${label} — ${projectTitle} (opens in a new tab)`}
        className={`${base} bg-brand-700 text-white hover:bg-brand-800`}
      >
        {icon}
        {label}
      </a>
    );
  }

  if (link.type === "private") {
    return (
      <span
        title="Private — company-owned project"
        aria-label={`${label} — private, company-owned project`}
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
      title="Link coming soon"
      aria-label={`${label} — coming soon`}
      className={`${base} cursor-default border border-dashed border-brand-300/80 text-brand-400 dark:border-brand-700 dark:text-brand-500`}
    >
      {icon}
      {label}
      <span className="ml-0.5 text-xs font-normal opacity-70">(soon)</span>
    </span>
  );
}

/* ---------- Mock visual header (no real screenshots) ---------- */

function MockVisual({ project, index }: { project: Project; index: number }) {
  const isPrivate = project.links.demo.type === "private";
  const initials = project.org
    .replace(/[^A-Za-z ]/g, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  // Subtle per-card variation
  const gradients = [
    "from-brand-700 to-brand-900",
    "from-brand-600 to-brand-800",
    "from-brand-800 to-brand-950",
    "from-brand-500 to-brand-700",
  ];

  return (
    <div
      aria-hidden="true"
      className={`relative h-36 w-full overflow-hidden bg-gradient-to-br ${gradients[index % gradients.length]}`}
    >
      {/* grid + glow */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
      <div className="absolute inset-0 flex items-center justify-between px-6">
        <span className="font-serif text-4xl font-semibold tracking-tight text-white/90">
          {initials || "·"}
        </span>
        {isPrivate && (
          <span className="inline-flex items-center gap-1 rounded-full bg-black/25 px-2.5 py-1 text-xs font-medium text-white/90 backdrop-blur-sm">
            <LockIcon />
            Confidential
          </span>
        )}
      </div>
      <span className="absolute bottom-3 left-6 text-xs font-medium uppercase tracking-wider text-white/70">
        {project.org}
      </span>
    </div>
  );
}

/* ---------- Card ---------- */

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-brand-200/70 bg-white shadow-sm transition-all hover:-translate-y-1 hover:border-brand-300 hover:shadow-lg dark:border-brand-800/70 dark:bg-brand-900/40 dark:hover:border-brand-700">
      <MockVisual project={project} index={index} />

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-serif text-xl font-semibold text-brand-800 dark:text-white">
          {project.title}
        </h3>
        <p className="mt-1 text-sm font-medium text-brand-500 dark:text-brand-300">
          {project.tagline}
        </p>

        <p className="mt-4 text-sm leading-relaxed text-brand-600/90 text-pretty dark:text-brand-200/80">
          {project.description}
        </p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <li
              key={t}
              className="rounded-md bg-brand-50 px-2.5 py-1 text-xs font-medium text-brand-600 ring-1 ring-inset ring-brand-100 dark:bg-brand-800/60 dark:text-brand-200 dark:ring-brand-700/50"
            >
              {t}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-1 flex-col justify-end">
          <div className="flex flex-wrap gap-2">
            <ProjectLinkButton link={project.links.demo} label="Live demo" icon={<ExternalIcon />} projectTitle={project.title} />
            <ProjectLinkButton link={project.links.github} label="GitHub" icon={<GithubIcon />} projectTitle={project.title} />
            <ProjectLinkButton link={project.links.screenshots} label="Screenshots" icon={<ImageIcon />} projectTitle={project.title} />
          </div>

          {project.note && (
            <p className="mt-4 flex items-start gap-1.5 text-xs leading-relaxed text-brand-400 dark:text-brand-500">
              <span className="mt-0.5 shrink-0">
                <LockIcon />
              </span>
              {project.note}
            </p>
          )}
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Selected work"
      intro="A few projects I've built end to end. Some were delivered inside companies and stay confidential — they're described at a high level, with repositories kept private."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={(i % 2) * 90} className="h-full">
            <ProjectCard project={project} index={i} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
