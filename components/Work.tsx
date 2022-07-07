import formatDate from "lib/utils/formatDate";
import useTranslation from "next-translate/useTranslation";
import React, { FC } from "react";

type Props = {
  sectionHeading: string;
  data: {
    title: string;

    description: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string;
    skills: string[];
  }[];
};

const Work: FC<Props> = ({ sectionHeading, data }) => {
  const { t } = useTranslation("common");
  return (
    <div className="bg-base-100 space-y-5 md:space-y-10">
      <div className="divider text-base-content/60 m-0">{sectionHeading}</div>
      <div className="grid gap-5">
        {data.map(
          (
            {
              title,
              description,
              company,
              location,
              startDate,
              endDate,
              skills,
            },
            index
          ) => {
            return (
              <div key={index}>
                <div className="text-lg font-semibold">{company}</div>
                <div className="md:flex justify-between mb-3">
                  <div>
                    <p className="font-medium">{title}</p>
                    <p className="md:hidden">{location}</p>
                    <p className="md:hidden">
                      {formatDate(startDate, t("date-locale"))} -{" "}
                      {formatDate(endDate, t("date-locale"))}
                    </p>
                    {skills &&
                      skills.map((skill, index) => (
                        <p
                          key={index}
                          className="badge badge-primary mr-2 mb-2"
                        >
                          {skill}
                        </p>
                      ))}
                  </div>
                  <div className="hidden md:block md:text-right">
                    <p>{location}</p>
                    <p>
                      {formatDate(startDate, t("date-locale"))} -{" "}
                      {formatDate(endDate, t("date-locale"))}
                    </p>
                  </div>
                </div>

                <p>{description}</p>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default Work;
