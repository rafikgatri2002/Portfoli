import type { LS } from "../i18n/types";

/** A skill is either a language-neutral tech name, or a localized phrase. */
export type SkillItem = string | LS;

export interface SkillGroup {
  title: LS;
  items: SkillItem[];
}

// Grouped exactly as on the CV
export const skillGroups: SkillGroup[] = [
  {
    title: { fr: "Langages & Frameworks", en: "Languages & Frameworks" },
    items: [
      "Angular",
      "React",
      "React Native",
      "Node.js",
      "JavaScript / TypeScript",
      "Python (FastAPI, Chalice)",
      "C++",
      "VB",
    ],
  },
  {
    title: { fr: "Bases de données", en: "Databases" },
    items: ["SQL", "MariaDB", "PostgreSQL", "MongoDB"],
  },
  {
    title: { fr: "Cloud & DevOps", en: "Cloud & DevOps" },
    items: [
      "AWS",
      "Microsoft Azure",
      "Docker",
      "CI/CD (GitHub Actions)",
      "Windows Server",
      "IIS",
      "Ubuntu",
    ],
  },
  {
    title: { fr: "Systèmes & Réseau", en: "Systems & Network" },
    items: [
      { fr: "Admin. Windows Server", en: "Windows Server admin" },
      "VMware ESXi",
      "DNS",
      "Zabbix",
      "PowerShell",
      { fr: "Sécurité des postes", en: "Endpoint security" },
    ],
  },
  {
    title: { fr: "Outils & Méthodes", en: "Tools & Methods" },
    items: [
      "Git",
      { fr: "API REST", en: "REST API" },
      "OAuth2 / Exchange",
      { fr: "IA générative & prompt engineering", en: "Generative AI & prompt engineering" },
    ],
  },
];
