import formatDate from "lib/utils/formatDate";
import useTranslation from "next-translate/useTranslation";
import { FC } from "react";

type Props = {
  sectionHeading: string;
  data: {
    degree: string;
    location: string;
    school: string;
    description: string;
    gpa: string;
    startDate: string;
    endDate: string;
  }[];
};

const Education: FC<Props> = ({ data, sectionHeading }) => {
  const { t } = useTranslation("common");
  return (
    <div className="bg-base-100 space-y-5 md:space-y-10">
      <div className="divider text-base-content/60 m-0">{sectionHeading}</div>
      <div className="grid gap-5">
        {data.map(
          (
            { degree, location, school, description, gpa, startDate, endDate },
            index
          ) => (
            <div key={index}>
              <div className="text-lg font-semibold">{school}</div>
              <div className="md:flex justify-between mb-3">
                <div>
                  <p className="font-medium">{degree}</p>
                  <p className="md:hidden">{location}</p>
                  <p className="md:hidden">
                    {formatDate(startDate, t("date-locale"))} -{" "}
                    {formatDate(endDate, t("date-locale"))}
                  </p>
                  <p className="badge badge-secondary">{gpa}</p>
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
          )
        )}
      </div>
    </div>
  );
};

export default Education;
