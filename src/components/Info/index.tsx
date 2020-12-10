import React, { useState, MouseEvent, useEffect } from "react";
import banner from "assets/banner.jpg";
import { AboutMe, Skills } from "../_subComponents";
import { bannerDetails, infoType } from "constants/info";
import { classNames } from "helpers/functions";
import styles from "./Info.scss";

const setSelectedInfoType = (infoType: string) => window.localStorage.setItem("infoType", infoType);

const Info: React.FC = () => {
  const [selected, setSelected] = useState("");

  useEffect(() => {
    const infoTypeStorage = window.localStorage.getItem("infoType");
    if (!infoTypeStorage) setSelectedInfoType(infoType[0].key);
    setSelected(infoTypeStorage || infoType[0].key);
  }, []);

  const handleOnClickType = (e: MouseEvent<HTMLDivElement>) => {
    setSelected(e.currentTarget.id);
    setSelectedInfoType(e.currentTarget.id);
  };

  return (
    <div
      className={styles.wrapper}
      style={{
        background: `url(${banner}) center center / cover no-repeat fixed`,
      }}
    >
      <div className={styles.bannerWrapper}>
        <div className={styles.bannerContainer}>
          <div className={styles.title}>{bannerDetails.title}</div>
          <div className={styles.desc}>{bannerDetails.description}</div>
        </div>
      </div>
      <div className={styles.infoMenu}>
        {infoType.map((item, idx) => (
          <div
            id={item.key}
            key={`${idx}-${item.key}`}
            className={styles.infoDetail}
            onClick={handleOnClickType}
          >
            <span className={classNames(selected === item.key && styles.selected)}>
              {item.value}
            </span>
            <div className={classNames(selected === item.key && styles.showUnderline)} />
          </div>
        ))}
      </div>
      <div className={styles.infoDetails}>
        {/* Due to unable to pass component dynamically because of ReactHooks rule,
         /* Specify all created _subComponents here 
         */}
        {{
          skills: <Skills />,
          aboutMe: <AboutMe />,
        }[selected] || <AboutMe />}
      </div>
    </div>
  );
};

export default Info;
