import { Role } from "./job";
import { TechnologiesSkills } from "./skill";

export type Project = {
  name: string;
  description: string;
  technologies: TechnologiesSkills;
  role: Role;
  avatar?: string;
};
