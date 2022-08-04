import type {
  Brand,
  Degree,
  Job,
  MySkills,
  PersonalInfo,
  Placement,
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
import {
  Barcelona,
  Lleida,
  Rome,
  Salamanca,
  Valladolid,
  Vigo,
} from "./locations";

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
  location: Salamanca,
  email: "anibalsantosgo@gmail.com",
  linkedin: "https://www.linkedin.com/in/ansango/",
  github: "https://github.com/ansango",
  phone: "+34 645 227 483",
  site: "https://ansango.com",
};

const career: Job[] = [
  {
    company: "No Solo Software",
    role: "Frontend Engineer",
    location: Valladolid,
    tasks: [
      "Developer and consultant for professional projects. Development for Palm NFT Studio.",
    ],
    stack: ["Typescript", "React", "Redux", "Chakra UI", "Storybook", "Jest"],
    startDate: "2022-07-04",
    endDate: "today",
  },
  {
    company: "Axpe Consulting",
    role: "Frontend Consultant",
    location: Barcelona,
    tasks: [
      "Mid Frontend developer and consultant for professional projects. Development and improvement for Stradivarius Ecommerce.",
    ],
    stack: ["Javascript", "React", "Redux Toolkit", "Less"],
    startDate: "2022-04-30",
    endDate: "2022-07-04.",
  },
  {
    company: "Metropolis Coop",
    role: "Mid Frontend Developer",
    location: Vigo,
    tasks: ["Frontend developer and consultant for professional projects."],
    stack: [
      "Nuxt",
      "Next.js",
      "Tailwindcss",
      "Bulma",
      "Jest",
      "Typescript",
      "Express",
    ],
    startDate: "2020-09-01",
    endDate: "today",
  },
  {
    company: "Minsait",
    role: "Frontend Developer",
    location: Valladolid,
    tasks: [
      "Mid Frontend developer and consultant for professional projects. Development of internal applications for Inditex",
    ],
    stack: ["Typescript", "React", "CSS Modules", "Sass", "Express", "Jest"],
    startDate: "2021-08-10",
    endDate: "2021-04-30",
  },
  {
    company: "Everis",
    role: "Frontend Developer",
    location: Salamanca,
    tasks: ["Frontend Developer in Iberdrola Commercial Web project."],
    stack: ["HTML5", "CSS3", "Javascript", "jQuery", "Bootstrap"],
    startDate: "2020-01-19",
    endDate: "2021-08-05",
  },
  {
    company: "Freelance",
    role: "Frontend Developer",
    location: Salamanca,
    tasks: [
      "Professional project development for internal management application with user roles.",
    ],
    stack: ["HTML5", "CSS3", "Javascript", "jQuery", "Sass", "Material UI"],
    startDate: "2020-04-01",
    endDate: "2020-09-31",
  },
  {
    company: "Yowi TV",
    role: "Junior Frontend Developer",
    location: Salamanca,
    tasks: [
      "Development and implementation of functional designs for online TV application.",
    ],
    stack: ["Vue", "Nuxt", "Vuetify", "Bootstrap"],
    startDate: "2018-03-01",
    endDate: "2020-01-02",
  },
];

const degrees: Degree[] = [
  {
    school: {
      name: "Universitat Oberta de Catalunya",
      location: Barcelona,
    },

    degree: "Master's Degree In Web Development",
    gpa: "9.1/10",
    description: [
      "Studies structured in three main areas: Fundamentals of web design and layouts (HTML and CSS and interface design), Web development (JavaScript development, front-end development and back-end development) and Tools for design and development.",
    ],
    startDate: "2020-09-01",
    endDate: "2022-06-01",
  },
  {
    school: {
      name: "Ilerna FP Online",
      location: Lleida,
    },

    degree: "HNC In Application Development",
    gpa: "8.83/10",
    description: [
      "Development of cross-platform applications with access to databases using languages, libraries and tools appropriate to the specifications. Development of graphic user interfaces, with visual components.",
    ],
    startDate: "2016-09-01",
    endDate: "2018-06-01",
  },
  {
    school: {
      name: "Rome Tre University",
      location: Rome,
    },

    degree: "Law Degree",
    gpa: "8.3/10",
    description: [
      "Training on the concepts of the Science of Law, and a theoretical and practical knowledge of the structure of the national, community and international legal order, and in particular of the normative contents of the different branches of law.",
    ],
    startDate: "2011-09-01",
    endDate: "2012-06-01",
  },
  {
    school: {
      name: "Salamanca University",
      location: Salamanca,
    },

    degree: "Law Degree",
    gpa: "7.2/10",
    description: [
      "Training on the concepts of the Science of Law, and a theoretical and practical knowledge of the structure of the national, community and international legal order, and in particular of the normative contents of the different branches of law.",
    ],
    startDate: "2007-09-01",
    endDate: "2012-06-01",
  },
];

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
