import React, { useState } from "react";
import styles from "./List.scss";

type Props = {
  items: Array<string>;
  isEllipted?: boolean;
  minItems?: number;
};

const List: React.FC<Props> = ({ items, isEllipted = false, minItems = 0 }) => {
  const [isShowMore, setisShowMore] = useState(isEllipted);

  const handleOnClickEllipsis = () => setisShowMore(!isShowMore);
  return (
    <div className={styles.wrapper}>
      {items.map((item, idx) => {
        return isShowMore && idx >= minItems ? "" : <li key={`${idx}-${item}`}>{item}</li>;
      })}
      {isEllipted && (
        <div className={styles.ellipsis} onClick={handleOnClickEllipsis}>{`Show ${
          isShowMore ? "More" : "Less"
        }`}</div>
      )}
    </div>
  );
};

export default List;
