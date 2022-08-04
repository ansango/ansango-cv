import {
  frontendSkills,
  backendSkills,
  otherSkills,
  productSkills,
  qaSkills,
  toolSkills,
} from "lib/data/skills";
import useTranslation from "next-translate/useTranslation";
import { FC } from "react";

const Skills: FC = () => {
  const { t } = useTranslation("skills");
  const sectionHeading = t("skills.sectionHeading");
  const data = [
    {
      name: t("skills.frontend.name"),
      skills: frontendSkills,
    },
    {
      name: t("skills.backend.name"),
      skills: backendSkills,
    },
    {
      name: t("skills.qa.name"),

      skills: qaSkills,
    },
    { name: t("skills.tools.name"), skills: toolSkills },
    {
      name: t("skills.product.name"),
      skills: productSkills,
    },
    {
      name: t("skills.other.name"),
      skills: otherSkills,
    },
  ];
  return (
    <div className="bg-base-100 space-y-5 md:space-y-10">
      <div className="divider text-base-content/60 m-0">{sectionHeading}</div>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data.map(({ name, skills }) => (
          <div key={name}>
            <div className="text-lg font-medium">{name}</div>
            <div className="">
              {skills.map((skill) => (
                <span className="badge badge-accent mr-2 mb-2" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
