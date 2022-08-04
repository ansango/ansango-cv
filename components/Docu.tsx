import {
  Page,
  Text,
  View,
  Document,
  PDFDownloadLink,
  PDFViewer,
} from "@react-pdf/renderer";
import formatDate from "lib/utils/formatDate";

import createTw from "react-pdf-tailwind";

const tw = createTw({
  theme: {
    fontFamily: {
      sans: ["Comic Sans"],
    },
    extend: {
      colors: {
        custom: "#bada55",
      },
    },
  },
});

const profile = {
  sectionHeading: "Profile",
  data: {
    fullName: "Aníbal Santos Gómez",
    currentPosition: "Frontend Engineer",
    about: "Passionate about user experience and the Javascript ecosystem.",
    location: "Salamanca, Spain 🇪🇸",
  },
};
const contact = {
  sectionHeading: "Contact",
  data: {
    email: "anibalsantosgo@gmail.com",
    linkedin: "https://www.linkedin.com/in/ansango/",
    github: "https://github.com/ansango",
    phone: "+34 645 227 483",
    site: "https://ansango.com",
  },
};
const education = {
  sectionHeading: "Education",
  data: [
    {
      school: "Universitat Oberta de Catalunya",
      location: "Barcelona, Spain",
      degree: "Master's Degree In Web Development",
      gpa: "9.1/10",
      description:
        "Studies structured in three main areas: Fundamentals of web design and layouts (HTML and CSS and interface design), Web development (JavaScript development, front-end development and back-end development) and Tools for design and development.",
      startDate: "2020-09-01",
      endDate: "2022-06-01",
    },
    {
      school: "Ilerna FP Online",
      location: "Lleida, Spain",
      degree: "HNC In Application Development",
      gpa: "8.83/10",
      description:
        "Development of cross-platform applications with access to databases using languages, libraries and tools appropriate to the specifications. Development of graphic user interfaces, with visual components.",
      startDate: "2016-09-01",
      endDate: "2018-06-01",
    },
    {
      school: "Roma Tre University",
      location: "Rome, Italy",
      degree: "Law Degree",
      gpa: "8.3/10",
      description:
        "Training on the concepts of the Science of Law, and a theoretical and practical knowledge of the structure of the national, community and international legal order, and in particular of the normative contents of the different branches of law.",
      startDate: "2011-09-01",
      endDate: "2012-06-01",
    },
    {
      school: "Salamanca University",
      location: "Salamanca, Spain",
      degree: "Law Degree",
      gpa: "7.2/10",
      description:
        "Training on the concepts of the Science of Law, and a theoretical and practical knowledge of the structure of the national, community and international legal order, and in particular of the normative contents of the different branches of law.",
      startDate: "2007-09-01",
      endDate: "2012-06-01",
    },
  ],
};
const work = {
  sectionHeading: "Work Experience",
  data: [
    {
      company: "No Solo Software",
      title: "Frontend Engineer",
      location: "Valladolid, Spain",
      description:
        "Developer and consultant for professional projects. Development for Palm NFT Studio.",
      skills: [
        "TypeScript",
        "React",
        "Redux",
        "Chakra UI",
        "Storybook",
        "Jest",
      ],
      startDate: "2022-07-04",
      endDate: "today",
    },
    {
      company: "Axpe Consulting",
      title: "Frontend Mid Developer",
      location: "Barcelona, Spain",
      description:
        "Mid Frontend developer and consultant for professional projects. Development and improvement for StraViewarius Ecommerce.",
      skills: ["JavaScript", "React", "Redux Toolkit", "Less"],
      startDate: "2022-04-30",
      endDate: "2022-07-04.",
    },
    {
      company: "Metropolis Coop",
      title: "Frontend Mid Developer",
      location: "Vigo, Spain",
      description:
        "Frontend developer and consultant for professional projects.",
      skills: [
        "Vue",
        "Nuxt",
        "React",
        "Next",
        "Tailwindcss",
        "Bulma",
        "Sass",
        "Jest",
        "TypeScript",
        "Node",
        "Express",
        "Jest",
      ],
      startDate: "2020-09-01",
      endDate: "today",
    },
    {
      company: "Minsait",
      title: "Frontend Developer",
      location: "Valladolid, Spain",
      description:
        "Mid Frontend developer and consultant for professional projects. Development of internal applications for Inditex",
      skills: [
        "TypeScript",
        "React",
        "CSS Modules",
        "Sass",
        "Node",
        "Express",
        "Jest",
      ],
      startDate: "2021-08-10",
      endDate: "2021-04-30",
    },
    {
      company: "Everis",
      title: "Frontend Developer",
      location: "Salamanca, Spain",
      description: "Frontend Developer in Iberdrola Commercial Web project.",
      skills: ["HTML5", "CSS3", "JavaScript ES6 >+", "jQuery", "Bootstrap"],
      startDate: "2020-01-19",
      endDate: "2021-08-05",
    },
    {
      company: "Freelance",
      title: "Frontend Developer",
      location: "Salamanca, Spain",
      description:
        "Professional project development for internal management application with user roles.",
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript ES6 >+",
        "jQuery",
        "Sass",
        "Material Lite",
      ],
      startDate: "2020-04-01",
      endDate: "2020-09-31",
    },
    {
      company: "Yowi TV",
      title: "Frontend Junior Developer",
      location: "Salamanca, Spain 🇪🇸",
      description:
        "Development and implementation of functional designs for online TV application.",
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript ES6 >+",
        "Vue",
        "Nuxt",
        "Vuetify",
        "Bootstrap",
      ],
      startDate: "2018-03-01",
      endDate: "2020-01-02",
    },
  ],
};
const skills = {
  sectionHeading: "Skills",
  data: [
    {
      name: "Frontend",
      details: [
        "HTML5",
        "CSS3",
        "JavaScript ES6 >+",
        "jQuery",
        "TypeScript",
        "React",
        "Next.js",
        "Angular",
        "Vue",
        "Nuxt",
        "Svelte",
        "Redux",
        "Redux Toolkit",
        "Sass",
        "Less",
        "Tailwindcss",
        "Bootstrap",
        "Bulma",
      ],
    },
    {
      name: "Backend",
      details: [
        "Node.js",
        "Express",
        "Laravel",
        "Mongoose",
        "Socket.io",
        "Server Sent Events",
        "Passport",
        "JWT",
        "SQL",
        "MongoDB",
      ],
    },
    {
      name: "QA",
      details: ["Jest", "Enzyme", "Mocha", "Storybook", "Cypress"],
    },
    {
      name: "Tools",
      details: [
        "Git",
        "Git Flow",
        "Prettier",
        "ESlint",
        "Stylelint",
        "Grunt",
        "Parcel",
        "Webpack",
        "Vite",
        "Rollup",
        "SWC",
        "PostCSS",
      ],
    },
    { name: "UX/UI", details: ["Sketch", "Figma"] },
    { name: "Mobile", details: ["React Native", "Flutter"] },
    { name: "Other", details: ["Notion"] },
  ],
};

const data = [profile, education, work, skills];

// const a = () => <View style={tw(""></View>;

const Docu = () => (
  <PDFViewer style={tw("h-screen w-full")}>
    <Document
      author="Anibal Santos Gomez"
      creator="Anibal Santos Gomez"
      language="en"
    >
      <Page size="A4" style={tw("p-10")}>
        <View style={tw("text-xs")}>
          <Text style={tw("mb-3")}>{work.sectionHeading}</Text>
          {work.data.map(
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
            ) => (
              <View key={index} style={tw("mb-5")}>
                <View style={tw("text-lg font-semibold")}>{company}</View>
                <View style={tw("flex flex-row justify-between mb-3")}>
                  <View>
                    <Text style={tw("font-medium")}>{title}</Text>
                    <Text style={tw("")}>{}</Text>
                  </View>
                  <View style={tw("flex flex-column items-end")}>
                    <Text>{location}</Text>
                    <Text>
                      {formatDate(startDate, "en-US")} -{" "}
                      {formatDate(endDate, "en-US")}
                    </Text>
                  </View>
                </View>
                <View style={tw("flex flex-row flex-wrap max-w-md")}>
                  {skills &&
                    skills.map((skill, index) => (
                      <Text
                        key={index}
                        style={tw(
                          "px-1 py-0.5 bg-red-200 rounded-md mr-2 mb-2"
                        )}
                      >
                        {skill}
                      </Text>
                    ))}
                </View>
                <Text>{description}</Text>
              </View>
            )
          )}
        </View>
        <View style={tw("text-xs")}>
          <Text style={tw("mb-3")}>{skills.sectionHeading}</Text>
          {skills.data.map(({ name, details }, index) => (
            <View key={index} style={tw("mb-5")}>
              <View style={tw("text-lg font-semibold")}>{name}</View>
              <View style={tw("flex flex-row flex-wrap max-w-md")}>
                {details &&
                  details.map((detail, index) => (
                    <Text
                      key={index}
                      style={tw("px-1 py-0.5 bg-red-200 rounded-md mr-2 mb-2")}
                    >
                      {detail}
                    </Text>
                  ))}
              </View>
            </View>
          ))}
        </View>
        <View style={tw("text-xs")}>
          <Text style={tw("mb-3")}>{education.sectionHeading}</Text>
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
              <View key={index} style={tw("mb-5")}>
                <View style={tw("text-lg font-semibold")}>{school}</View>
                <View style={tw("flex flex-row justify-between mb-3")}>
                  <View>
                    <Text style={tw("font-medium")}>{degree}</Text>
                    <Text style={tw("")}>{gpa}</Text>
                  </View>
                  <View style={tw("flex flex-column items-end")}>
                    <Text>{location}</Text>
                    <Text>
                      {formatDate(startDate, "en-US")} -{" "}
                      {formatDate(endDate, "en-US")}
                    </Text>
                  </View>
                </View>

                <Text>{description}</Text>
              </View>
            )
          )}
        </View>
      </Page>
    </Document>
  </PDFViewer>
);

export default Docu;
