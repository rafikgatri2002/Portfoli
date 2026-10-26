export interface SkillGroup {
  title: string;
  items: string[];
}

// Grouped exactly as on the CV
export const skillGroups: SkillGroup[] = [
  {
    title: "Langages & Frameworks",
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
    title: "Bases de données",
    items: ["SQL", "MariaDB", "PostgreSQL", "MongoDB"],
  },
  {
    title: "Cloud & DevOps",
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
    title: "Systèmes & Réseau",
    items: [
      "Admin. Windows Server",
      "VMware ESXi",
      "DNS",
      "Zabbix",
      "PowerShell",
      "Sécurité des postes",
    ],
  },
  {
    title: "Outils & Méthodes",
    items: [
      "Git",
      "API REST",
      "OAuth2 / Exchange",
      "IA générative & prompt engineering",
    ],
  },
];
