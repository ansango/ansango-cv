import type { Placement } from ".";

export type School = {
  name: string;
  location: Placement;
};

export type Degree = {
  school: School;
  degree: string;
  gpa: string;
  description: string[];
  startDate: string;
  endDate: string;
};
