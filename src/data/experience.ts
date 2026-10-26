export interface Experience {
  role: string;
  org: string;
  period: string;
  location: string;
  context?: string;
  points: string[];
  tags?: string[];
}

// Reverse-chronological, matching the CV
export const experiences: Experience[] = [
  {
    role: "Full-Stack & Systems Developer — Intern",
    org: "KAMA CI",
    period: "Jun 2026 – Jul 2026",
    location: "Abidjan, Côte d'Ivoire",
    context: "Information Systems Department (DSI)",
    points: [
      "Designed and built a biometric attendance management app (FastAPI · Angular · MariaDB) connected to fingerprint controllers: badging, late detection, automated email notifications (OAuth2 / Exchange), Excel & PDF reports.",
      "Developed a material-request & payment validation workflow app (FastAPI · React): multi-level sequential approval, email notifications, attachments, export faithful to official documents.",
      "Set up CI/CD (GitHub Actions) on Windows Server (IIS, NSSM) and Microsoft Azure (Docker); wrote a PowerShell script blocking unauthorized USB devices, supervised through Zabbix.",
      "Handled network & system administration within the DSI and a full handover of the projects to the IT team.",
    ],
    tags: ["FastAPI", "Angular", "React", "MariaDB", "CI/CD", "Windows Server", "Azure", "PowerShell"],
  },
  {
    role: "Full-Stack Web Developer",
    org: "Allence Tunisie",
    period: "Jul 2025 – Feb 2026",
    location: "Tunis",
    context: "Intern, then employed",
    points: [
      "Built an AI automated code-review web app (Angular · Python Chalice / AWS Lambda): project management interfaces, merge-request tracking, REST API integration, Lambda functions.",
      "Grew DevOps skills (CI/CD, Docker) alongside delivery.",
      "In parallel, produced tech content (filming, video editing) for the company's social media.",
    ],
    tags: ["Angular", "Python", "AWS Lambda", "Docker", "CI/CD"],
  },
  {
    role: "Mobile Developer",
    org: "LOGIN Challenge",
    period: "May 2025",
    location: "Real client: Iberostar Hotels",
    points: [
      "Mobile front end (React Native): food-waste tracking, room service with allergy management, and a meal-sharing social feed.",
      "Connected solution tied to an electronic wristband and a loyalty-points system.",
    ],
    tags: ["React Native", "Mobile"],
  },
  {
    role: "IT Department — Intern",
    org: "SOTETEL",
    period: "Jul 2024",
    location: "Charguia, Tunis",
    points: [
      "Troubleshooting and maintenance of the company's IT fleet.",
    ],
    tags: ["IT Support", "Maintenance"],
  },
];
