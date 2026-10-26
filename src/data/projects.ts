/**
 * Project link states — cards degrade gracefully when a link is missing:
 *  - { type: "live", href }  → active button (paste the real URL here)
 *  - { type: "soon" }        → clearly-marked "coming soon" placeholder (fill or remove later)
 *  - { type: "private" }     → confidential / company-owned, intentionally unavailable
 *  - { type: "none" }        → button hidden entirely
 */
export type ProjectLink =
  | { type: "live"; href: string }
  | { type: "soon" }
  | { type: "private" }
  | { type: "none" };

export interface Project {
  title: string;
  org: string;
  tagline: string;
  description: string;
  tech: string[];
  /** Shown as a small note under the card (e.g. confidentiality) */
  note?: string;
  links: {
    demo: ProjectLink;
    github: ProjectLink;
    screenshots: ProjectLink;
  };
}

export const projects: Project[] = [
  {
    title: "Biometric Attendance Management",
    org: "KAMA CI",
    tagline: "Fingerprint-based presence tracking with automated reporting.",
    description:
      "An end-to-end attendance system connected to fingerprint door controllers across the company's floors and departments. It records each employee's first badge of the day (with late detection) and keeps their last badge updated to compute precise working time, sends status-aware email alerts for lateness (OAuth2 / Exchange), and generates period and per-employee reports exportable to Excel & PDF — with an HR file per employee. Deployed via GitHub Actions CI/CD on Windows Server (IIS, NSSM).",
    tech: ["FastAPI", "Angular", "MariaDB", "CI/CD", "Windows Server"],
    note: "Internship project — company-owned & confidential. Shown at a high level with mock visuals; repository stays private.",
    links: {
      demo: { type: "private" },
      github: { type: "private" },
      screenshots: { type: "none" },
    },
  },
  {
    title: "Material-Request & Payment Workflow",
    org: "KAMA CI",
    tagline: "Digitizing a paper, multi-level validation circuit.",
    description:
      "A workflow app that replaces a paper-based, hierarchical approval circuit with a strictly sequential digital flow: each validator is notified by email with a direct action link and only receives a request once the previous approver has signed off. Requests carry attachments and purchase orders through the whole chain, a second circuit handles payment validation (finance, accounting, cashier), and the complete file can be printed or exported faithfully to the company's official documents.",
    tech: ["FastAPI", "React", "MariaDB", "Email notifications"],
    note: "Internship project — company-owned & confidential. Shown at a high level with mock visuals; repository stays private.",
    links: {
      demo: { type: "private" },
      github: { type: "private" },
      screenshots: { type: "none" },
    },
  },
  {
    title: "LOGIN Challenge — Smart Hospitality App",
    org: "Client: Iberostar Hotels",
    tagline: "A connected mobile app for sustainable, guest-friendly dining.",
    description:
      "Mobile front end for a real client challenge: food-waste tracking, room service with allergy management, and a social meal-sharing feed — all tied to a connected electronic wristband and a loyalty-points system. Built as part of a team delivering against a real brief from Iberostar.",
    tech: ["React Native", "Mobile UI", "REST API"],
    links: {
      demo: { type: "soon" },
      github: { type: "soon" },
      screenshots: { type: "soon" },
    },
  },
  {
    title: "AI Automated Code-Review Platform",
    org: "Allence Tunisie",
    tagline: "AI-assisted code review with project & merge-request tracking.",
    description:
      "A web platform for automated, AI-assisted code review: project management interfaces, merge-request tracking, REST API integrations, and serverless back-end logic running on AWS Lambda. Contributed across the front end and cloud functions while growing into DevOps practices (CI/CD, Docker).",
    tech: ["Angular", "Python (Chalice)", "AWS Lambda", "REST API"],
    links: {
      demo: { type: "soon" },
      github: { type: "soon" },
      screenshots: { type: "none" },
    },
  },
];
