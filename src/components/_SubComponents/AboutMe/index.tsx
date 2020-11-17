import React from "react";
import { List } from "components/_common";
import { aboutMeItems } from "constants/aboutMe";
import styles from "./AboutMe.scss";

const AboutMe: React.FC = () => {
  return (
    <div>
      {aboutMeItems.map((itemRow, idx) => (
        <div key={idx} className={styles.wrapper}>
          {itemRow.map((item, idx) => (
            <div key={`${idx}-${item.title}`} className={styles.itemDetails}>
              <div>
                <img src={item.icon} alt={item.title} />
                <div className={styles.title}>{item.title}</div>
                <List items={item.details} isEllipted minItems={3} />
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default AboutMe;
