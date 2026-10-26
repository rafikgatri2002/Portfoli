import { useState, type ReactNode } from "react";
import { Section } from "./ui/Section";
import { Reveal } from "./ui/Reveal";
import { profile } from "../data/profile";

const { contact } = profile;

function CopyEmailButton() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable — fall back to selecting via prompt-free no-op
      setCopied(false);
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={copied ? "Email address copied" : "Copy email address"}
      className="inline-flex items-center gap-2 rounded-lg border border-brand-200 bg-white px-3 py-2 text-sm font-medium text-brand-700 transition-colors hover:bg-brand-50 dark:border-brand-700 dark:bg-brand-900/50 dark:text-brand-100 dark:hover:bg-brand-800"
    >
      {copied ? (
        <>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M20 6 9 17l-5-5" />
          </svg>
          Copied!
        </>
      ) : (
        <>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="9" y="9" width="13" height="13" rx="2" />
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
          </svg>
          Copy
        </>
      )}
    </button>
  );
}

interface ContactRowProps {
  icon: ReactNode;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
  action?: ReactNode;
  muted?: boolean;
}

function ContactRow({ icon, label, value, href, external, action, muted }: ContactRowProps) {
  const valueEl = href ? (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`font-medium transition-colors hover:text-brand-800 hover:underline underline-offset-4 dark:hover:text-white ${
        muted ? "text-brand-400 dark:text-brand-500" : "text-brand-700 dark:text-brand-100"
      }`}
    >
      {value}
    </a>
  ) : (
    <span className={`font-medium ${muted ? "text-brand-400 dark:text-brand-500" : "text-brand-700 dark:text-brand-100"}`}>
      {value}
    </span>
  );

  return (
    <div className="flex items-center gap-4 rounded-xl border border-brand-200/70 bg-white p-4 dark:border-brand-800/70 dark:bg-brand-900/40">
      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600 dark:bg-brand-800/60 dark:text-brand-200">
        {icon}
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-xs font-semibold uppercase tracking-wide text-brand-400 dark:text-brand-500">
          {label}
        </p>
        <p className="break-words">{valueEl}</p>
      </div>
      {action}
    </div>
  );
}

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's work together"
      intro="Open to part-time and freelance full-stack work. The fastest way to reach me is email or phone — I usually reply within a day."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Reveal>
          <ContactRow
            label="Email"
            value={contact.email}
            href={`mailto:${contact.email}`}
            action={<CopyEmailButton />}
            icon={
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            }
          />
        </Reveal>

        <Reveal delay={80}>
          <ContactRow
            label="Phone"
            value={contact.phone}
            href={`tel:${contact.phoneHref}`}
            icon={
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            }
          />
        </Reveal>

        <Reveal delay={120}>
          <ContactRow
            label="GitHub"
            value={contact.githubLabel}
            href={contact.github}
            external
            icon={
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 .5C5.73.5.5 5.73.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.79 2.73 1.27 3.4.97.1-.75.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.25 5.69.42.37.8 1.1.8 2.22v3.29c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
              </svg>
            }
          />
        </Reveal>

        <Reveal delay={160}>
          <ContactRow
            label="LinkedIn"
            value={contact.linkedinLabel}
            muted
            icon={
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
              </svg>
            }
          />
        </Reveal>
      </div>

      <Reveal delay={120}>
        <p className="mt-6 text-sm text-brand-400 dark:text-brand-500">
          Prefer a form? A contact form (e.g. Formspree) can be added here later — for now, email and
          phone are the quickest ways to reach me.
        </p>
      </Reveal>
    </Section>
  );
}
