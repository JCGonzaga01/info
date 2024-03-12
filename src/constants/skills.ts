import { SkillsItems } from "SkillsType";
import assets from "assets";

export const skillsItems: SkillsItems = [
  {
    title: "WEB",
    icon: assets.web,
    color: "rgb(146 158 228)",
    skills: [
      {
        name: "ReactJS",
        score: 9,
      },
      {
        name: "JavaScript",
        score: 9,
      },
      {
        name: "HTML",
        score: 9,
      },
      {
        name: "CSS / SASS / SCSS",
        score: 9,
      },
      {
        name: "React/ContextAPI",
        score: 9,
      },
      {
        name: "TypeScript",
        score: 8,
      },
      {
        name: "Reach-Hook-Form",
        score: 9,
      },
      {
        name: "Tanstack/React-Query",
        score: 8,
      },
      {
        name: "NextJS",
        score: 7,
      },
      {
        name: "Vue",
        score: 6,
      },
      {
        name: "Webpack",
        score: 6,
      },
      {
        name: "NodeJS",
        score: 5,
      },
      {
        name: "ExpressJS",
        score: 5,
      },
      {
        name: "AngularJS",
        score: 4,
      },
    ],
  },
  {
    title: "DATABASE",
    icon: assets.database,
    color: "rgb(119 191 147)",
    skills: [
      {
        name: "Redis",
        score: 8,
      },
      {
        name: "Firebase",
        score: 7,
      },
      {
        name: "MySQL",
        score: 5,
      },
      {
        name: "PostgreSQL",
        score: 5,
      },
      {
        name: "MongoDB",
        score: 4,
      },
    ],
  },
  {
    title: "METHODOLOGIES",
    icon: assets.scrum,
    color: "rgb(212 214 107)",
    skills: [
      {
        name: "SCRUM-AGILE",
        score: 10,
      },
      {
        name: "SAFe (Scaled Agile Framework)",
        score: 10,
      },
    ],
  },
  {
    title: "OTHER TOOLS",
    icon: assets.otherTools,
    color: "rgb(234 146 174)",
    skills: [
      {
        name: "GIT",
        score: 10,
      },
      {
        name: "Docker",
        score: 5,
      },
      {
        name: "VS Code Remote Container",
        score: 5,
      },
      {
        name: "Heroku",
        score: 4,
      },
    ],
  },
];
