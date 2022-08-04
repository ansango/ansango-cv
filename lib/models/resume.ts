import { LanguageSkill } from "./atoms";
import type {
  SectionProfile,
  SectionEducation,
  SectionExperience,
  SectionReference,
  SectionBrands,
  SectionProjects,
} from "./sections";

export type Resume = {
  language: LanguageSkill["language"]["iso"];
  sectionProfile: SectionProfile;
  sectionReference?: SectionReference;
  sectionExperience: SectionExperience;
  sectionProjects?: SectionProjects;
  sectionBrands?: SectionBrands;
  sectionEducation: SectionEducation;
};
