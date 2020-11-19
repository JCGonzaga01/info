import React, { useState } from "react";
import assets from "assets";
import { classNames } from "helpers/functions";
import styles from "./Header.scss";

const Header: React.FC = () => {
  const [headerImg, setheaderImg] = useState(assets.jcgHeader);

  const headerHoverLogo = (isHover: boolean) => () =>
    setheaderImg(isHover ? assets.jcgHeaderHover : assets.jcgHeader);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <a href={"/"} target={"_self"}>
          <img
            src={headerImg}
            alt={"John Christopher Gonzaga"}
            className={styles.headerLogo}
            onMouseEnter={headerHoverLogo(true)}
            onMouseLeave={headerHoverLogo(false)}
          />
        </a>
        <div className={styles.menu}>
          <a href={"/"} target={"_self"}>
            {"Home"}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
