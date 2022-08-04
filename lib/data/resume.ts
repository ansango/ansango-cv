import type {
  Brand,
  Degree,
  Job,
  MySkills,
  PersonalInfo,
  Profile,
  Project,
  Resume,
  SectionBrands,
  SectionEducation,
  SectionExperience,
  SectionProfile,
  SectionProjects,
  SectionReference,
} from "lib/models";

const profile: Profile = {
  fullName: "Aníbal Santos Gómez",
  currentPosition: "Frontend Engineer",
  about: "Passionate about user experience and the Javascript ecosystem.",
  avatar: "",
};

const mySkills: MySkills = {
  primarySkills: [
    "React",
    "Next.js",
    "Typescript",
    "Tailwindcss",
    "Redux Toolkit",
    "Jest",
  ],
  secondarySkills: ["Vue", "Nuxt", "Svelte", "CSS3", "Node.js", "Prisma"],
  industries: ["Electrical", "Ecommerce", "Retail", "Marketplace", "TV"],
  languages: [
    {
      language: { name: "Spanish", code: "es", iso: "es-ES" },
      level: "Native",
    },
    {
      language: { name: "English", code: "en", iso: "en-US" },
      level: "Intermediate",
    },
    {
      language: { name: "Italian", code: "it", iso: "it-IT" },
      level: "Advanced",
    },
  ],
};
const personalInfo: PersonalInfo = {
  location: {
    city: "Salamanca",
    country: "Spain",
    flag: "🇪🇸",
  },
  email: "anibalsantosgo@gmail.com",
  linkedin: "https://www.linkedin.com/in/ansango/",
  github: "https://github.com/ansango",
  phone: "+34 645 227 483",
  site: "https://ansango.com",
};

const career: Job[] = [];
const degrees: Degree[] = [];
const certifications: string[] | undefined = undefined;
const brands: Brand[] | undefined = undefined;
const projects: Project[] | undefined = undefined;

const sectionProfile: SectionProfile = { profile, mySkills, personalInfo };
const sectionExperience: SectionExperience = { career };
const sectionEducation: SectionEducation = { degrees, certifications };
const sectionBrands: SectionBrands | undefined = undefined;
const sectionProjects: SectionProjects | undefined = undefined;
const sectionReference: SectionReference | undefined = undefined;

const resumeEN: Resume = {
  language: "en-US",
  sectionProfile,
  sectionExperience,
  sectionEducation,
  sectionBrands,
  sectionProjects,
  sectionReference,
};

// const resumeES: Resume = {};
// const resumeIT: Resume = {};

export const resume = {
  // es: resumeES,
  en: resumeEN,
  // it: resumeIT,
};
