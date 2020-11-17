import React, { useState, MouseEvent } from "react";
import AboutMe from "../_subComponents/AboutMe";
import { bannerDetails, infoType } from "constants/info";
import { classNames } from "helpers/functions";
import styles from "./Info.scss";

const Info: React.FC = () => {
  const [selected, setSelected] = useState("aboutMe");

  const handleOnClickType = (infoKey: string) => () => setSelected(infoKey);

  return (
    <div className={styles.wrapper}>
      <div className={styles.banner}>
        <div>{bannerDetails.title}</div>
        <div>{bannerDetails.description}</div>
      </div>
      <div className={styles.infoMenu}>
        {infoType.map((item, idx) => (
          <div
            key={`${idx}-${item.key}`}
            className={styles.infoDetail}
            title={item.key}
            onClick={handleOnClickType(item.key)}
          >
            <span className={classNames(selected === item.key && styles.selected)}>
              {item.value}
            </span>
            <div className={classNames(selected === item.key && styles.showUnderline)} />
          </div>
        ))}
      </div>
      <div className={styles.infoDetails}>
        <AboutMe />
      </div>
    </div>
  );
};

export default Info;
