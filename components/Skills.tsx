import { FC } from "react";

type Props = {
  sectionHeading: string;
  data: {
    name: string;
    details: string[];
  }[];
};

const Skills: FC<Props> = ({ sectionHeading, data }) => {
  return (
    <div className="bg-base-100 space-y-5 md:space-y-10">
      <div className="divider text-base-content/60 m-0">{sectionHeading}</div>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data.map(({ name, details }) => (
          <div key={name}>
            <div className="text-lg font-medium">{name}</div>
            <div className="">
              {details.map((skill) => (
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
