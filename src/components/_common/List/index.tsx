import React, { useState } from "react";
import styles from "./List.scss";

type Props = {
  items: Array<string>;
  isEllipted?: boolean;
  minItems?: number;
};

const List: React.FC<Props> = ({ items, isEllipted = false, minItems = 0 }) => {
  const [isHideItem, setIsHideItem] = useState(isEllipted);
  const handleOnClickEllipsis = () => setIsHideItem(!isHideItem);

  return (
    <div className={styles.wrapper}>
      {items.map((item, idx) =>
        isEllipted && idx >= minItems ? "" : <li key={`${idx}-${item}`}>{item}</li>
      )}
      {isEllipted &&
        items.map((item, idx) => {
          const inlineStyle = isHideItem
            ? {}
            : {
                transition: `opacity 1s ease-in-out ${(idx - minItems) * 0.2}s`,
              };
          return (
            idx >= minItems && (
              <li
                key={`${idx}-${item}`}
                className={isHideItem ? styles.hideItem : styles.showItem}
                style={{ ...inlineStyle }}
              >
                {item}
              </li>
            )
          );
        })}
      {isEllipted && items.length > minItems && (
        <div className={styles.ellipsis} onClick={handleOnClickEllipsis}>
          <span>{`Show ${isHideItem ? "More" : "Less"}`} </span>
        </div>
      )}
    </div>
  );
};

export default List;
