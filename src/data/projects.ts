import type { LS } from "../i18n/types";

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
  title: LS;
  /** Company / client — language-neutral proper noun. */
  org: string;
  tagline: LS;
  description: LS;
  /** Language-neutral tech names. */
  tech: string[];
  /** Optional inline screenshot gallery — public asset paths, shown as a strip on the card. */
  gallery?: string[];
  /** Optional direct APK download URL — shows a Download button on the card. */
  apk?: string;
  /** Shown as a small note under the entry (e.g. confidentiality). */
  note?: LS;
  links: {
    demo: ProjectLink;
    github: ProjectLink;
    screenshots: ProjectLink;
  };
}

const confidentialNote: LS = {
  fr: "Projet de stage — propriété de l'entreprise & confidentiel. Présenté à haut niveau avec des visuels indicatifs ; le dépôt reste privé.",
  en: "Internship project — company-owned & confidential. Shown at a high level with mock visuals; repository stays private.",
};

export const projects: Project[] = [
  {
    title: {
      fr: "IronLog — Suivi de musculation avec coach IA",
      en: "IronLog — AI-Powered Workout Tracker",
    },
    org: "Projet personnel",
    tagline: {
      fr: "App mobile full-stack de suivi d'entraînement, avec un coach IA agentique.",
      en: "Full-stack mobile training tracker with an agentic AI coach.",
    },
    description: {
      fr: "Une application de fitness que j'ai conçue et développée de bout en bout, et que j'utilise moi-même. Mobile en React Native / Expo : journal des séances, détection automatique des records (PR), graphiques de progression et authentification JWT — distribuée en APK Android via EAS. Back-end FastAPI + MongoDB (Motor), testé avec pytest, conteneurisé (Docker) et déployé sur Microsoft Azure via CI/CD (GitHub Actions). Pièce maîtresse : un coach IA agentique (Google Gemini 2.5 Flash) capable d'enregistrer, planifier et replanifier les entraînements à ma place via function calling — toujours avec une confirmation humaine avant d'agir.",
      en: "A fitness app I designed and built end to end, and use myself. Mobile in React Native / Expo: session logging, automatic PR detection, progress charts, and JWT auth — shipped as an Android APK via EAS. FastAPI + MongoDB (Motor) back end, tested with pytest, containerised with Docker, and deployed to Microsoft Azure via CI/CD (GitHub Actions). The centrepiece: an agentic AI coach (Google Gemini 2.5 Flash) that can log, plan, and reschedule training on my behalf via function calling — always with human confirmation before it acts.",
    },
    tech: ["React Native", "Expo", "FastAPI", "MongoDB", "Docker", "CI/CD", "Azure", "Gemini AI"],
    gallery: [
      "/ironlog/ai-coach.jpg",
      "/ironlog/log-session.jpg",
      "/ironlog/coach-targets.jpg",
      "/ironlog/progress.jpg",
      "/ironlog/progress-chart.jpg",
    ],
    apk: "https://github.com/IronLogEfitness/Efitness_frontend/releases/download/v1.0.5/ironlog.apk",
    links: {
      demo: { type: "live", href: "https://efitness-backend-2530307.azurewebsites.net/docs" },
      github: { type: "live", href: "https://github.com/IronLogEfitness" },
      screenshots: { type: "none" },
    },
  },
  {
    title: {
      fr: "Gestion de présence biométrique",
      en: "Biometric Attendance Management",
    },
    org: "KAMA CI",
    tagline: {
      fr: "Suivi de présence par empreinte digitale et reporting automatisé.",
      en: "Fingerprint-based presence tracking with automated reporting.",
    },
    description: {
      fr: "Un système de présence de bout en bout relié aux contrôleurs d'accès à empreinte digitale répartis sur les étages et les services de l'entreprise. Il enregistre le premier badge de la journée de chaque employé (avec détection des retards) et tient à jour son dernier badge pour calculer un temps de travail précis, envoie des alertes email selon le statut en cas de retard (OAuth2 / Exchange) et génère des rapports par période et par employé, exportables en Excel & PDF — avec un dossier RH par employé. Déployé via GitHub Actions (CI/CD) sur Windows Server (IIS, NSSM).",
      en: "An end-to-end attendance system connected to fingerprint door controllers across the company's floors and departments. It records each employee's first badge of the day (with late detection) and keeps their last badge updated to compute precise working time, sends status-aware email alerts for lateness (OAuth2 / Exchange), and generates period and per-employee reports exportable to Excel & PDF — with an HR file per employee. Deployed via GitHub Actions CI/CD on Windows Server (IIS, NSSM).",
    },
    tech: ["FastAPI", "Angular", "MariaDB", "CI/CD", "Windows Server"],
    gallery: [
      "/kama/kama-01-presence.jpg",
      "/kama/kama-02-retards.jpg",
      "/kama/kama-03-absents.jpg",
      "/kama/kama-04-employes.jpg",
      "/kama/kama-05-bloques.jpg",
      "/kama/kama-06-periode.jpg",
      "/kama/kama-07-email-avertissement.jpg",
      "/kama/kama-08-email-dernier-avert.jpg",
      "/kama/kama-09-email-invitation-rh.jpg",
      "/kama/kama-10-email-rh.jpg",
    ],
    note: confidentialNote,
    links: {
      demo: { type: "private" },
      github: { type: "private" },
      screenshots: { type: "none" },
    },
  },
  {
    title: {
      fr: "Circuit de demande de matériel & paiement",
      en: "Material-Request & Payment Workflow",
    },
    org: "KAMA CI",
    tagline: {
      fr: "Numérisation d'un circuit de validation papier, multi-niveaux.",
      en: "Digitizing a paper, multi-level validation circuit.",
    },
    description: {
      fr: "Une application de workflow qui remplace un circuit d'approbation hiérarchique sur papier par un flux numérique strictement séquentiel : chaque validateur est notifié par email avec un lien d'action direct et ne reçoit une demande qu'une fois l'approbateur précédent ayant signé. Les demandes transportent pièces jointes et bons de commande tout au long de la chaîne, un second circuit gère la validation des paiements (finance, comptabilité, caisse), et le dossier complet peut être imprimé ou exporté fidèlement aux documents officiels de l'entreprise.",
      en: "A workflow app that replaces a paper-based, hierarchical approval circuit with a strictly sequential digital flow: each validator is notified by email with a direct action link and only receives a request once the previous approver has signed off. Requests carry attachments and purchase orders through the whole chain, a second circuit handles payment validation (finance, accounting, cashier), and the complete file can be printed or exported faithfully to the company's official documents.",
    },
    tech: ["FastAPI", "React", "MariaDB", "Email notifications"],
    note: confidentialNote,
    links: {
      demo: { type: "private" },
      github: { type: "private" },
      screenshots: { type: "none" },
    },
  },
  {
    title: {
      fr: "LOGIN Challenge — App hôtelière connectée",
      en: "LOGIN Challenge — Smart Hospitality App",
    },
    org: "Iberostar Hotels",
    tagline: {
      fr: "Une app mobile connectée pour une restauration durable et agréable pour les clients.",
      en: "A connected mobile app for sustainable, guest-friendly dining.",
    },
    description: {
      fr: "Front-end mobile d'un challenge client réel : suivi du gaspillage alimentaire, room service avec gestion des allergies et fil social de partage de repas — le tout relié à un bracelet électronique connecté et à un système de points de fidélité. Réalisé en équipe, en réponse à un vrai brief d'Iberostar.",
      en: "Mobile front end for a real client challenge: food-waste tracking, room service with allergy management, and a social meal-sharing feed — all tied to a connected electronic wristband and a loyalty-points system. Built as part of a team delivering against a real brief from Iberostar.",
    },
    tech: ["React Native", "Mobile UI", "REST API"],
    links: {
      demo: { type: "soon" },
      github: { type: "soon" },
      screenshots: { type: "soon" },
    },
  },
  {
    title: {
      fr: "Plateforme de revue de code assistée par IA",
      en: "AI Automated Code-Review Platform",
    },
    org: "Allence Tunisie",
    tagline: {
      fr: "Revue de code assistée par IA, avec suivi des projets et des merge requests.",
      en: "AI-assisted code review with project & merge-request tracking.",
    },
    description: {
      fr: "Une plateforme web de revue de code automatisée et assistée par IA : interfaces de gestion de projet, suivi des merge requests, intégrations d'API REST et logique back-end serverless sur AWS Lambda. J'ai contribué côté front-end et fonctions cloud, tout en montant en compétences DevOps (CI/CD, Docker).",
      en: "A web platform for automated, AI-assisted code review: project management interfaces, merge-request tracking, REST API integrations, and serverless back-end logic running on AWS Lambda. Contributed across the front end and cloud functions while growing into DevOps practices (CI/CD, Docker).",
    },
    tech: ["Angular", "Python (Chalice)", "AWS Lambda", "REST API"],
    links: {
      demo: { type: "soon" },
      github: { type: "soon" },
      screenshots: { type: "none" },
    },
  },
];
