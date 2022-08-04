import type {
  IndustriesSkills,
  LanguagesSkills,
  Placement,
  PrimarySkills,
  Role,
  SecondarySkills,
} from "../atoms";

export type Profile = {
  fullName: string;
  currentPosition: Role;
  about: string;
  avatar: string;
};

export type PersonalInfo = {
  email: string;
  phone: string;
  location: Placement;
  site: string;
  linkedin: string;
  github: string;
};

export type MySkills = {
  primarySkills: PrimarySkills;
  secondarySkills: SecondarySkills;
  industries: IndustriesSkills;
  languages: LanguagesSkills;
};

export type SectionProfile = {
  profile: Profile;
  personalInfo: PersonalInfo;
  mySkills: MySkills;
};
