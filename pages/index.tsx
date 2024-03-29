import Container from "components/Container";
import Structure from "components/Structure";
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import { allData } from "contentlayer/generated";
import { pick } from "contentlayer/client";
import Terminal from "components/Terminal";
import Skills from "components/Skills";
import Work from "components/Work";
import Education from "components/Education";

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
  const { profile, education, work } = data;

  const terminalProps = {
    fullName: profile.fullName,
    currentPosition: profile.currentPosition,
    about: profile.about,
    location: profile.location,
  };

  const educationProps = {
    sectionHeading: education.sectionHeading,
    data: education.data,
  };
  const workProps = {
    sectionHeading: work.sectionHeading,
    data: work.data,
  };

  return (
    <Container>
      <Structure>
        <div className="space-y-10">
          <Terminal {...terminalProps} />
          <Work {...workProps} />
          <Skills />
          <Education {...educationProps} />
        </div>
      </Structure>
    </Container>
  );
};

export default Home;
