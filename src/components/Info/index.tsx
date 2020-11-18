import React, { useState, FC } from "react";
import banner from "assets/banner.jpg";
import { AboutMe, Skills } from "../_subComponents";
import { bannerDetails, infoType } from "constants/info";
import { classNames } from "helpers/functions";
import styles from "./Info.scss";

const Info: React.FC = () => {
  const [selected, setSelected] = useState("skills");
  const [selectedComp, setSelectedComp] = useState<React.FC>(Skills);

  const handleOnClickType = (infoKey: string, comp: React.FC) => () => {
    setSelected(infoKey);
    setSelectedComp(comp);
  };

  return (
    <div
      className={styles.wrapper}
      style={{
        background: `url(${banner}) center center / cover no-repeat fixed`,
      }}
    >
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
            onClick={handleOnClickType(item.key, item.component)}
          >
            <span className={classNames(selected === item.key && styles.selected)}>
              {item.value}
            </span>
            <div className={classNames(selected === item.key && styles.showUnderline)} />
          </div>
        ))}
      </div>
      <div className={styles.infoDetails}>{selectedComp}</div>
    </div>
  );
};

export default Info;
