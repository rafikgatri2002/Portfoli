import type { LS, LSList } from "../i18n/types";

export interface Experience {
  role: LS;
  /** Company — language-neutral proper noun. */
  org: string;
  period: LS;
  location: LS;
  context?: LS;
  points: LSList;
  /** Language-neutral tech names. */
  tags?: string[];
}

// Reverse-chronological, matching the CV
export const experiences: Experience[] = [
  {
    role: {
      fr: "Développeur Full-Stack & Systèmes — Stagiaire",
      en: "Full-Stack & Systems Developer — Intern",
    },
    org: "KAMA CI",
    period: { fr: "Juin 2026 – Juil. 2026", en: "Jun 2026 – Jul 2026" },
    location: { fr: "Abidjan, Côte d'Ivoire", en: "Abidjan, Côte d'Ivoire" },
    context: {
      fr: "Direction des Systèmes d'Information (DSI)",
      en: "Information Systems Department (DSI)",
    },
    points: {
      fr: [
        "Conçu et développé une application de gestion de présence biométrique (FastAPI · Angular · MariaDB) reliée aux contrôleurs d'empreinte : badge, détection des retards, notifications email automatiques (OAuth2 / Exchange), rapports Excel & PDF.",
        "Développé une application de workflow de demande de matériel & validation de paiement (FastAPI · React) : approbation séquentielle multi-niveaux, notifications email, pièces jointes, export fidèle aux documents officiels.",
        "Mis en place la CI/CD (GitHub Actions) sur Windows Server (IIS, NSSM) et Microsoft Azure (Docker) ; écrit un script PowerShell bloquant les périphériques USB non autorisés, supervisé via Zabbix.",
        "Assuré l'administration réseau & système au sein de la DSI et un transfert complet des projets à l'équipe informatique.",
      ],
      en: [
        "Designed and built a biometric attendance management app (FastAPI · Angular · MariaDB) connected to fingerprint controllers: badging, late detection, automated email notifications (OAuth2 / Exchange), Excel & PDF reports.",
        "Developed a material-request & payment validation workflow app (FastAPI · React): multi-level sequential approval, email notifications, attachments, export faithful to official documents.",
        "Set up CI/CD (GitHub Actions) on Windows Server (IIS, NSSM) and Microsoft Azure (Docker); wrote a PowerShell script blocking unauthorized USB devices, supervised through Zabbix.",
        "Handled network & system administration within the DSI and a full handover of the projects to the IT team.",
      ],
    },
    tags: ["FastAPI", "Angular", "React", "MariaDB", "CI/CD", "Windows Server", "Azure", "PowerShell"],
  },
  {
    role: { fr: "Développeur Web Full-Stack", en: "Full-Stack Web Developer" },
    org: "Allence Tunisie",
    period: { fr: "Juil. 2025 – Fév. 2026", en: "Jul 2025 – Feb 2026" },
    location: { fr: "Tunis", en: "Tunis" },
    context: { fr: "Stagiaire, puis employé", en: "Intern, then employed" },
    points: {
      fr: [
        "Développé une application web de revue de code automatisée par IA (Angular · Python Chalice / AWS Lambda) : interfaces de gestion de projet, suivi des merge requests, intégration d'API REST, fonctions Lambda.",
        "Monté en compétences DevOps (CI/CD, Docker) en parallèle des livraisons.",
        "En parallèle, produit du contenu tech (tournage, montage vidéo) pour les réseaux sociaux de l'entreprise.",
      ],
      en: [
        "Built an AI automated code-review web app (Angular · Python Chalice / AWS Lambda): project management interfaces, merge-request tracking, REST API integration, Lambda functions.",
        "Grew DevOps skills (CI/CD, Docker) alongside delivery.",
        "In parallel, produced tech content (filming, video editing) for the company's social media.",
      ],
    },
    tags: ["Angular", "Python", "AWS Lambda", "Docker", "CI/CD"],
  },
  {
    role: { fr: "Développeur Mobile", en: "Mobile Developer" },
    org: "LOGIN Challenge",
    period: { fr: "Mai 2025", en: "May 2025" },
    location: { fr: "Client réel : Iberostar Hotels", en: "Real client: Iberostar Hotels" },
    points: {
      fr: [
        "Front-end mobile (React Native) : suivi du gaspillage alimentaire, room service avec gestion des allergies et fil social de partage de repas.",
        "Solution connectée reliée à un bracelet électronique et à un système de points de fidélité.",
      ],
      en: [
        "Mobile front end (React Native): food-waste tracking, room service with allergy management, and a meal-sharing social feed.",
        "Connected solution tied to an electronic wristband and a loyalty-points system.",
      ],
    },
    tags: ["React Native", "Mobile"],
  },
  {
    role: { fr: "Service Informatique — Stagiaire", en: "IT Department — Intern" },
    org: "SOTETEL",
    period: { fr: "Juil. 2024", en: "Jul 2024" },
    location: { fr: "Charguia, Tunis", en: "Charguia, Tunis" },
    points: {
      fr: ["Dépannage et maintenance du parc informatique de l'entreprise."],
      en: ["Troubleshooting and maintenance of the company's IT fleet."],
    },
    tags: ["IT Support", "Maintenance"],
  },
];
