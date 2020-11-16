import React from "react";
import { aboutMeItems } from "constants/aboutMe";
import { classNames } from "helpers/functions";
import styles from "./AboutMe.scss";

const AboutMe: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      {aboutMeItems.map((item, idx) => {
        const isOdd = (idx + 1) % 2;
        return (
          <div
            key={`${idx}-${item.title}`}
            className={classNames(styles.itemDetails, isOdd && styles.isOdd)}
          >
            <img src={item.icon} alt={item.title} />
            <div className={styles.title}>{item.title}</div>
            <div>
              {item.details.map((detail, idx) => (
                <li key={`${idx}-${detail}`}>{detail}</li>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AboutMe;
