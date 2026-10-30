import type { LS } from "./types";

/**
 * All interface chrome strings (labels, buttons, headings, a11y text).
 * Content strings (bio, projects, experience…) live beside their data in src/data/*.
 */
export const ui = {
  skipToContent: { fr: "Aller au contenu", en: "Skip to content" },

  nav: {
    about: { fr: "Profil", en: "About" },
    skills: { fr: "Stack", en: "Stack" },
    projects: { fr: "Travaux", en: "Work" },
    experience: { fr: "Parcours", en: "Experience" },
    contact: { fr: "Contact", en: "Contact" },
  } satisfies Record<string, LS>,

  cvShort: { fr: "CV", en: "CV" },
  downloadCv: { fr: "Télécharger le CV", en: "Download CV" },

  theme: {
    toLight: { fr: "Passer en mode clair", en: "Switch to light mode" },
    toDark: { fr: "Passer en mode sombre", en: "Switch to dark mode" },
  },

  language: {
    // aria-label describes the action (switch to the OTHER language)
    toEn: { fr: "Switch to English", en: "Switch to English" },
    toFr: { fr: "Passer en français", en: "Passer en français" },
  },

  hero: {
    nowLabel: { fr: "Actuellement", en: "Currently" },
    viewProjects: { fr: "Voir les travaux", en: "View work" },
    getInTouch: { fr: "Me contacter", en: "Get in touch" },
    // Compact spec panel (recruiter 5-second scan)
    specTitle: { fr: "Fiche", en: "At a glance" },
    spec: {
      role: { fr: "Rôle", en: "Role" },
      location: { fr: "Lieu", en: "Based in" },
      status: { fr: "Dispo.", en: "Status" },
      stack: { fr: "Stack", en: "Stack" },
      focus: { fr: "Focus", en: "Focus" },
    },
    statusValue: {
      fr: "Freelance & temps partiel",
      en: "Freelance & part-time",
    },
    focusValue: {
      fr: "Mise en production & DevOps",
      en: "Shipping to production & DevOps",
    },
  },

  sections: {
    about: {
      title: {
        fr: "Un développeur full-stack qui livre en production",
        en: "A full-stack developer who ships to production",
      },
    },
    skills: {
      title: { fr: "Les outils que j'utilise", en: "Tools I build with" },
      intro: {
        fr: "Du front-end aux serveurs et à la supervision — la stack avec laquelle je mène un projet de l'idée au service en production.",
        en: "From front-end frameworks to servers and supervision — the stack I use to take a project from idea to running service.",
      },
    },
    projects: {
      title: { fr: "Travaux sélectionnés", en: "Selected work" },
      intro: {
        fr: "Quelques projets menés de bout en bout. Certains ont été livrés en entreprise et restent confidentiels — ils sont décrits à un niveau général, dépôts gardés privés.",
        en: "A few projects I've built end to end. Some were delivered inside companies and stay confidential — they're described at a high level, with repositories kept private.",
      },
    },
    experience: {
      title: { fr: "Mon parcours", en: "Where I've worked" },
      intro: {
        fr: "Stages et postes en développement full-stack, mobile et IT — des applications réelles livrées pour des entreprises et des clients.",
        en: "Internships and roles across full-stack development, mobile, and IT — delivering real applications for companies and clients.",
      },
    },
    contact: {
      title: { fr: "Travaillons ensemble", en: "Let's work together" },
      intro: {
        fr: "Ouvert aux missions à temps partiel et en freelance. Le plus rapide pour me joindre reste l'email ou le téléphone — je réponds généralement sous 24 h.",
        en: "Open to part-time and freelance full-stack work. The fastest way to reach me is email or phone — I usually reply within a day.",
      },
    },
  },

  about: {
    highlights: [
      {
        value: { fr: "Bout en bout", en: "End-to-end" },
        label: { fr: "Du modèle de données à la production", en: "Data model → production" },
      },
      {
        value: { fr: "Full-stack", en: "Full-stack" },
        label: { fr: "Web & mobile", en: "Web & mobile" },
      },
      {
        value: { fr: "DevOps", en: "DevOps" },
        label: { fr: "CI/CD · Docker · Cloud", en: "CI/CD · Docker · Cloud" },
      },
      {
        value: { fr: "Systèmes", en: "Systems" },
        label: { fr: "Windows Server · Réseau", en: "Windows Server · Network" },
      },
    ],
  },

  projects: {
    status: {
      live: { fr: "En ligne", en: "Live" },
      confidential: { fr: "Confidentiel", en: "Confidential" },
      soon: { fr: "Bientôt", en: "In progress" },
    },
    links: {
      demo: { fr: "Démo", en: "Live demo" },
      github: { fr: "GitHub", en: "GitHub" },
      screenshots: { fr: "Captures", en: "Screenshots" },
    },
    soonSuffix: { fr: "(bientôt)", en: "(soon)" },
    // a11y helpers
    opensNewTab: { fr: "(ouvre un nouvel onglet)", en: "(opens in a new tab)" },
    privateAria: {
      fr: "privé, projet propriété de l'entreprise",
      en: "private, company-owned project",
    },
    comingSoonAria: { fr: "bientôt disponible", en: "coming soon" },
    stackLabel: { fr: "Stack", en: "Stack" },
    closeImage: { fr: "Fermer l’aperçu", en: "Close preview" },
  },

  contact: {
    labels: {
      email: { fr: "Email", en: "Email" },
      phone: { fr: "Téléphone", en: "Phone" },
      github: { fr: "GitHub", en: "GitHub" },
      linkedin: { fr: "LinkedIn", en: "LinkedIn" },
    },
    copy: { fr: "Copier", en: "Copy" },
    copied: { fr: "Copié !", en: "Copied!" },
    copyAria: { fr: "Copier l'adresse email", en: "Copy email address" },
    copiedAria: { fr: "Adresse email copiée", en: "Email address copied" },
    formNote: {
      fr: "Vous préférez un formulaire ? Un formulaire de contact (ex. Formspree) pourra être ajouté ici — pour l'instant, l'email et le téléphone sont les plus rapides.",
      en: "Prefer a form? A contact form (e.g. Formspree) can be added here later — for now, email and phone are the quickest ways to reach me.",
    },
  },

  footer: {
    builtWith: {
      fr: "Conçu avec React, Vite & Tailwind CSS.",
      en: "Built with React, Vite & Tailwind CSS.",
    },
    top: { fr: "Haut", en: "Top" },
    github: { fr: "GitHub", en: "GitHub" },
    email: { fr: "Email", en: "Email" },
  },
} as const;
