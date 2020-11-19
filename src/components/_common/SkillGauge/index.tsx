import React from "react";
import styles from "./SkillGauge.scss";

type Props = {
  title: string;
  score: number;
  color?: string;
};

const SkillGauge: React.FC<Props> = ({ title, score, color = "00adff" }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>{title}</div>
      <div
        className={styles.gauge}
        style={{
          backgroundColor: color,
          width: `${score * 10}%`,
        }}
      />
      <div className={styles.score}>{`${score}/10`}</div>
    </div>
  );
};

export default SkillGauge;
