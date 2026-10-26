import { profile } from "../data/profile";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      {/* Decorative background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-50/80 via-white to-white dark:from-brand-900/40 dark:via-brand-950 dark:to-brand-950" />
        <div className="absolute -top-24 right-[-10%] h-[28rem] w-[28rem] rounded-full bg-brand-200/40 blur-3xl dark:bg-brand-700/20" />
        <div className="absolute left-[-10%] top-40 h-72 w-72 rounded-full bg-brand-100/60 blur-3xl dark:bg-brand-800/20" />
        <div
          className="absolute inset-0 opacity-[0.035] dark:opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(var(--color-brand-700) 1px, transparent 1px), linear-gradient(90deg, var(--color-brand-700) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, #000 40%, transparent 80%)",
            WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, #000 40%, transparent 80%)",
          }}
        />
      </div>

      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-200/80 bg-white/70 px-3.5 py-1.5 text-sm font-medium text-brand-600 shadow-sm dark:border-brand-700/60 dark:bg-brand-900/60 dark:text-brand-200">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {profile.availability}
          </span>

          <h1 className="mt-6 font-serif text-5xl font-semibold leading-[1.05] tracking-tight text-balance text-brand-800 sm:text-6xl lg:text-7xl dark:text-white">
            {profile.name}
          </h1>

          <p className="mt-4 text-xl font-medium text-brand-600 sm:text-2xl dark:text-brand-200">
            {profile.title}
          </p>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-brand-600/90 text-pretty dark:text-brand-200/80">
            {profile.pitch}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-700 px-5 py-3 text-base font-semibold text-white shadow-sm transition-all hover:bg-brand-800 hover:shadow-md"
            >
              View Projects
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-brand-200 bg-white px-5 py-3 text-base font-semibold text-brand-700 transition-colors hover:bg-brand-50 dark:border-brand-700 dark:bg-brand-900/50 dark:text-brand-100 dark:hover:bg-brand-800"
            >
              Get in Touch
            </a>
            <a
              href={profile.cvPath}
              download={profile.cvFileName}
              className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-base font-semibold text-brand-600 underline-offset-4 transition-colors hover:text-brand-800 hover:underline dark:text-brand-200 dark:hover:text-white"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 3v12M7 10l5 5 5-5M5 21h14" />
              </svg>
              Download CV
            </a>
          </div>

          <div className="mt-10 flex items-center gap-5 text-sm text-brand-500 dark:text-brand-300">
            <span className="inline-flex items-center gap-1.5">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              {profile.location}
            </span>
            <a
              href={profile.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-brand-800 dark:hover:text-white"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 .5C5.73.5.5 5.73.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.79 2.73 1.27 3.4.97.1-.75.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.25 5.69.42.37.8 1.1.8 2.22v3.29c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
              </svg>
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
