import type { LS, LSList } from "../i18n/types";

export interface Profile {
  name: string;
  title: LS;
  location: LS;
  availability: LS;
  /** One-line pitch (hero headline). */
  pitch: LS;
  /** Technical one-liner under the pitch — language-neutral tech names. */
  stackLine: string;
  /** Short bio (About). */
  bio: LSList;
  contact: {
    email: string;
    phone: string;
    phoneHref: string;
    github: string;
    githubLabel: string;
    linkedin: string;
    linkedinLabel: LS;
  };
  cvPath: string;
  cvFileName: string;
}

export const profile: Profile = {
  name: "Rafik Gatri",
  title: {
    fr: "Développeur Full Stack & Systèmes",
    en: "Full-Stack & Systems Developer",
  },
  location: {
    fr: "Tunis, Tunisie",
    en: "Tunis, Tunisia",
  },
  availability: {
    fr: "Disponible · freelance & temps partiel",
    en: "Available · freelance & part-time",
  },

  // One-line pitch (hero)
  pitch: {
    fr: "Je conçois et je livre des applications de gestion complètes — du modèle de données à la production (CI/CD, Windows Server, cloud).",
    en: "I design and ship complete management apps — from the data model to production (CI/CD, Windows Server, cloud).",
  },

  stackLine: "Python/FastAPI · Angular · React & React Native · Node.js",

  // Short bio (About, 3–4 lines) — adapted from the CV « Profil »
  bio: {
    fr: [
      "Développeur full-stack avec une solide base en systèmes et réseaux, actuellement en BTS Informatique de Gestion (parcours Réseaux & Sécurité) à Tunis.",
      "Je construis des applications de gestion de bout en bout et je les mène jusqu'à la production — pipelines CI/CD, Windows Server et cloud (Azure / AWS).",
      "À l'aise sur toute la stack : Angular, React & React Native côté front, Python/FastAPI et Node.js côté back, avec des bases SQL et NoSQL.",
      "Je cherche aujourd'hui des missions full-stack à temps partiel et en freelance, où je peux porter des fonctionnalités de bout en bout.",
    ],
    en: [
      "Full-stack developer with a strong systems & networking background, currently in a BTS Informatique de Gestion (Network & Security track) in Tunis.",
      "I build end-to-end management applications and take them all the way to production — CI/CD pipelines, Windows Server, and cloud (Azure / AWS).",
      "Comfortable across the whole stack: Angular, React & React Native on the front, Python/FastAPI and Node.js on the back, with SQL and NoSQL databases.",
      "Now looking for part-time and freelance full-stack work where I can own features end to end.",
    ],
  },

  contact: {
    email: "rafik.gatri.2002@gmail.com",
    phone: "+216 54 035 246",
    phoneHref: "+21654035246",
    github: "https://github.com/rafikgatri2002",
    githubLabel: "github.com/rafikgatri2002",
    // Placeholder — update once the profile is live
    linkedin: "https://www.linkedin.com/in/REPLACE-ME",
    linkedinLabel: { fr: "LinkedIn (bientôt)", en: "LinkedIn (coming soon)" },
  },

  // CV lives in /public; stays in French on purpose
  cvPath: "/cv-rafik-gatri.pdf",
  cvFileName: "CV-Rafik-Gatri.pdf",
};
