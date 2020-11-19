import React, { useState, MouseEvent } from "react";
import { SkillsItems, SkillsItem, Skill } from "SkillsType";
import { SkillGauge } from "components/_common";
import { skillsItems } from "constants/skills";
import { classNames } from "helpers/functions";
import styles from "./Skills.scss";

const sortSkillList = (list: SkillsItems): Array<Skill> => {
  const skillList = list
    .map((item: SkillsItem) => {
      return item.skills.map((skill) => ({ ...skill, color: item.color }));
    })
    .flat(1);
  const sortedList = [...skillList]
    .sort((a, b) => {
      if (a.name < b.name) return -1;
      else if (a.name > b.name) return 1;
      return 0;
    })
    .sort((a, b) => {
      if (a.score < b.score) return 1;
      else if (a.score > b.score) return -1;
      return 0;
    });
  return sortedList;
};

const Skills: React.FC = () => {
  const [skillSelected, setSkillSelected] = useState("all");
  const [skillList, setSkillList] = useState<Array<Skill>>(sortSkillList(skillsItems));

  const handleOnClickSkill = (e: MouseEvent<HTMLDivElement>) => {
    const newSkillSelected = e.currentTarget.id.toLowerCase();
    setSkillSelected(newSkillSelected);

    if (newSkillSelected === "all") {
      setSkillList(sortSkillList(skillsItems));
    } else {
      const filterSkillList = skillsItems.filter(
        (item) => item.title.toLowerCase() === newSkillSelected
      );
      setSkillList(sortSkillList(filterSkillList));
    }
  };

  return (
    <div className={classNames(styles.wrapper, styles.fadeIn)}>
      <div className={styles.btnContainer}>
        <div
          id={"ALL"}
          className={skillSelected === "all" ? styles.skillSelected : ""}
          onClick={handleOnClickSkill}
        >
          {"ALL"}
        </div>
        {skillsItems.map((item) => (
          <div
            id={item.title}
            key={item.title}
            className={skillSelected === item.title.toLowerCase() ? styles.skillSelected : ""}
            onClick={handleOnClickSkill}
          >
            {item.title}
          </div>
        ))}
      </div>
      <div className={styles.skillContainer}>
        {skillList.map((skill) => (
          <SkillGauge key={skill.name} title={skill.name} score={skill.score} color={skill.color} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
