export * from "./skill";
export * from "./lang";
export * from "./job";
export * from "./project";
export * from "./degree";

export type Placement = {
  city: string;
  country: string;
  flag: string;
};

export type College = {
  name: string;
  position: string;
  company: string;
  avatar?: string;
};
