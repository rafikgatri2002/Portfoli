export const profile = {
  name: "Rafik Gatri",
  // Kept in French for brand consistency with the CV
  title: "Développeur Full Stack & Systèmes",
  titleEn: "Full-Stack & Systems Developer",
  location: "Tunis, Tunisia",
  availability: "Open to part-time & freelance work",

  // One-line pitch (hero)
  pitch:
    "I design and ship complete management apps — from the data model to production (CI/CD, Windows Server, cloud).",

  // Short bio (About, 3–4 lines) — adapted from the CV « Profil »
  bio: [
    "Full-stack developer with a strong systems & networking background, currently in a BTS Informatique de Gestion (Network & Security track) in Tunis.",
    "I build end-to-end management applications and take them all the way to production — CI/CD pipelines, Windows Server, and cloud (Azure / AWS).",
    "Comfortable across the whole stack: Angular, React & React Native on the front, Python/FastAPI and Node.js on the back, with SQL and NoSQL databases.",
    "Now looking for part-time and freelance full-stack work where I can own features end to end.",
  ],

  contact: {
    email: "rafik.gatri.2002@gmail.com",
    phone: "+216 54 035 246",
    phoneHref: "+21654035246",
    github: "https://github.com/rafikgatri2002",
    githubLabel: "github.com/rafikgatri2002",
    // Placeholder — update once the profile is live
    linkedin: "https://www.linkedin.com/in/REPLACE-ME",
    linkedinLabel: "LinkedIn (coming soon)",
  },

  // CV lives in /public; stays in French on purpose
  cvPath: "/cv-rafik-gatri.pdf",
  cvFileName: "CV-Rafik-Gatri.pdf",
} as const;
