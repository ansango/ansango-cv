import type { Language, LanguageLevel } from "./lang";

export type ProgrammingSkill =
  | "Javascript"
  | "Typescript"
  | "Python"
  | "PHP"
  | "Rust";

export type FrontendSkill =
  | "HTML5"
  | "CSS3"
  | "jQuery"
  | "React"
  | "Next.js"
  | "Angular"
  | "Vue"
  | "Nuxt"
  | "Svelte"
  | "Redux"
  | "Redux Toolkit"
  | "Sass"
  | "Less"
  | "Tailwindcss"
  | "Chakra UI"
  | "Bootstrap"
  | "Bulma";

export type BackendSkill =
  | "Node.js"
  | "Express"
  | "Laravel"
  | "Socket.io"
  | "Server Sent Events"
  | "Passport"
  | "JWT"
  | "Axios"
  | "SQL"
  | "MongoDB"
  | "Mongoose"
  | "Prisma"
  | "Firebase";

export type QASkill = "Jest" | "Enzyme" | "Mocha" | "Storybook" | "Cypress";

export type ToolSkill =
  | "Git"
  | "GitHub"
  | "GitLab"
  | "Prettier"
  | "Webpack"
  | "ESLint"
  | "Stylelint"
  | "Grunt"
  | "Babel"
  | "Vite"
  | "Rollup"
  | "SWC"
  | "PostCSS";

export type ProductSkill = "Sketch" | "Figma" | "Jira" | "Confluence";

export type IndustrySkill =
  | "Ecommerce"
  | "TV"
  | "Marketplace"
  | "Electrical"
  | "Retail";

export type LanguageSkill = {
  language: Language;
  level: LanguageLevel;
};

export type OtherSkill = "Notion";

export type Skill =
  | ProgrammingSkill
  | FrontendSkill
  | BackendSkill
  | QASkill
  | ToolSkill
  | ProductSkill
  | LanguageSkill
  | OtherSkill;

export type PrimarySkill =
  | ProgrammingSkill
  | FrontendSkill
  | BackendSkill
  | QASkill;

export type SecondarySkill =
  | ProgrammingSkill
  | FrontendSkill
  | BackendSkill
  | QASkill
  | ToolSkill;

export type TechnologiesSkill =
  | ProgrammingSkill
  | FrontendSkill
  | BackendSkill
  | QASkill
  | ToolSkill;

export type PrimarySkills = PrimarySkill[];
export type SecondarySkills = SecondarySkill[];
export type TechnologiesSkills = TechnologiesSkill[];
export type IndustriesSkills = IndustrySkill[];
export type LanguagesSkills = LanguageSkill[];
