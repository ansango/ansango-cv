import Container from "components/Container";
import Structure from "components/Structure";
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";

import { allData } from "contentlayer/generated";
import { pick } from "contentlayer/client";
import ExternalLink from "components/ExternalLink";
import useTypeWriter from "lib/hooks/useTypewriter";
import Image from "next/image";
import avatar from "public/avatar.jpeg";
import formatDate from "lib/utils/formatDate";
import useTranslation from "next-translate/useTranslation";
export const getStaticProps: GetStaticProps = ({ locale }) => {
  const data = allData
    .filter(({ lang }) => lang === locale)
    .map((data) => {
      return pick(data, [
        "publishedAt",
        "profile",
        "contact",
        "education",
        "work",
        "skills",
        "projects",
      ]);
    })[0];
  return { props: { data } };
};

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  data,
}) => {
  const { profile, contact, education, work, skills, projects } = data;
  const { word, isEnd } = useTypeWriter(profile.currentPosition);

  const { t } = useTranslation("common");
  return (
    <Container>
      <Structure>
        <div className="space-y-10">
          <div className="bg-base-200 p-2 md:p-5 w-full">
            <div className="mockup-code">
              <ul className="space-y-2">
                <li className="ml-[2ch] flex items-center space-x-4">
                  <code className="opacity-50">1</code>
                  <h1
                    className="font-bold text-2xl sm:text-3xl tracking-tight bg-gradient-to-r bg-clip-text text-transparent 
            from-accent to-secondary
            animate-text flex items-center gap-2"
                  >
                    <div className="avatar">
                      <div className="mask mask-circle bg-base-content h-10 w-10 bg-opacity-10 p-px">
                        <Image
                          src={avatar}
                          alt="Avatar Tailwind CSS Component"
                          className="mask mask-circle"
                        />
                      </div>
                    </div>
                    <span>{profile.fullName}</span>
                  </h1>
                </li>
                <li className={isEnd ? "bg-success text-success-content" : ""}>
                  <div className="ml-[2ch] flex items-center space-x-4">
                    <code className="opacity-50">2</code>
                    <code className="sm:flex sm:items-center sm:h-7 sm:text-xl">
                      {word}
                    </code>
                  </div>
                </li>

                <li className="ml-[2ch] flex space-x-4 transition-all">
                  <code className="opacity-50">3</code>
                  <code className="w-full">{profile.about}</code>
                </li>

                <li className="ml-[2ch] flex space-x-4 transition-all">
                  <code className="opacity-50">4</code>
                  <code className="w-full">{profile.location}</code>
                </li>
              </ul>
            </div>
          </div>

          {/* <div>
          <ExternalLink href={contact.email}>
            <span className="flex items-center gap-2 text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              {contact.email}
            </span>
          </ExternalLink>
          <ExternalLink href={contact.site}>
            <span className="flex items-center gap-2 text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                />
              </svg>
              anibalsantosgomez
            </span>
          </ExternalLink>
          <ExternalLink href={contact.github}>
            <span className="flex items-center gap-2 text-primary">
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 fill-current mx-0.5"
              >
                <title>GitHub</title>
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
              GitHub
            </span>
          </ExternalLink>
          <ExternalLink href={contact.linkedin}>
            <span className="flex items-center gap-2 text-primary">
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 fill-current mx-0.5"
              >
                <title>LinkedIn</title>
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              Linkedin
            </span>
          </ExternalLink>
        </div> */}

          <div className="bg-base-100 space-y-5 md:space-y-10">
            <div className="divider text-base-content/60 m-0">
              {work.sectionHeading}
            </div>
            <div className="grid gap-5">
              {work.data.map(
                (
                  { title, description, company, location, startDate, endDate },
                  index
                ) => {
                  return (
                    <div key={index}>
                      <div className="text-lg font-extrabold">{title}</div>
                      <p>{company}</p>
                      <p>{description}</p>
                      <p>{location}</p>
                      <p>
                        {formatDate(startDate, t("date-locale"))} -{" "}
                        {formatDate(endDate, t("date-locale"))}
                      </p>
                    </div>
                  );
                }
              )}
            </div>
          </div>

          <div className="bg-base-100 space-y-5 md:space-y-10">
            <div className="divider text-base-content/60 m-0">
              {skills.sectionHeading}
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {skills.data.map(({ name, details }) => (
                <div key={name}>
                  <div className="text-lg font-medium">{name}</div>
                  <div className="">
                    {details.map((skill) => (
                      <span
                        className="badge badge-accent mr-1 mb-2"
                        key={skill}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-base-100 space-y-5 md:space-y-10">
            <div className="divider text-base-content/60 m-0">
              {education.sectionHeading}
            </div>
            <div className="grid gap-5">
              {education.data.map(
                (
                  {
                    degree,
                    location,
                    school,
                    description,
                    gpa,
                    startDate,
                    endDate,
                  },
                  index
                ) => (
                  <div key={index}>
                    <div className="text-lg font-semibold">{school}</div>
                    <div className="md:flex justify-between mb-5">
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
        </div>
      </Structure>
    </Container>
  );
};

export default Home;
