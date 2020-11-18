import React from "react";
import { SkillGauge } from "components/_common";
import { skillsItems } from "constants/skills";
import { classNames } from "helpers/functions";
import styles from "./Skills.scss";

const Skills: React.FC = () => {
  return (
    <div className={classNames(styles.wrapper, styles.fadeIn)}>
      {skillsItems.map((item, idx) => {
        return (
          <div key={`${idx}-${item.title}`} className={styles.skillContainer}>
            <img className={styles.icon} src={item.icon} alt={item.title} />
            <span className={styles.title}>{item.title}</span>
            {item.skills.map((skill) => (
              <SkillGauge title={skill.name} score={skill.score} color={item.color} />
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default Skills;
