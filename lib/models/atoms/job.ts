import type { Placement } from ".";
import type { TechnologiesSkills } from "./skill";

export type Role =
  | "Junior Frontend Developer"
  | "Frontend Developer"
  | "Mid Frontend Developer"
  | "Frontend Consultant"
  | "Frontend Engineer"
  | "Senior Frontend Developer"
  | "Frontend Architect"
  | "Frontend Specialist"
  | "Frontend Team Lead";

export type Task = string;

export type Job = {
  company: string;
  role: Role;
  location: Placement;
  tasks: Task[];
  stack: TechnologiesSkills;
  startDate: string;
  endDate: string;
};

export type Brand = {
  name: string;
  logo: string;
};
