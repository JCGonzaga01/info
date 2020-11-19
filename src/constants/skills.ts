import { SkillsItems } from "SkillsType";
import assets from "assets";

export const skillsItems: SkillsItems = [
  {
    title: "WEB",
    icon: assets.web,
    color: "rgb(188 198 281)",
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
        name: "TypeScript",
        score: 8,
      },
      {
        name: "Webpack",
        score: 8,
      },
      {
        name: "NodeJS",
        score: 7,
      },
      {
        name: "ExpressJS",
        score: 7,
      },
      {
        name: "Vue",
        score: 4,
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
    color: "rgb(162 238 192)",
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
    color: "rgb(199 218 95)",
    skills: [
      {
        name: "SCRUM-AGILE",
        score: 9,
      },
      {
        name: "SAFe (Scaled Agile Framework)",
        score: 7,
      },
    ],
  },
  {
    title: "OTHER TOOLS",
    icon: assets.otherTools,
    color: "rgb(255 158 188)",
    skills: [
      {
        name: "GIT",
        score: 9,
      },
      {
        name: "Docker",
        score: 8,
      },
      {
        name: "VS Code Remote Container",
        score: 7,
      },
      {
        name: "Heroku",
        score: 4,
      },
    ],
  },
];
