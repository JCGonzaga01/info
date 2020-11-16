import React, { useState } from "react";
import assets from "assets";
import { classNames } from "helpers/functions";
import styles from "./Header.scss";

const Header: React.FC = () => {
  const [headerImg, setheaderImg] = useState(assets.jcgHeader);

  const headerHover = (isHover: boolean) => () =>
    setheaderImg(isHover ? assets.jcgHeaderHover : assets.jcgHeader);

  const handleOnClickLogo = () => window.open("https://jcgonzaga01.github.io/", "_self");

  const handleOnClickMenu = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <img
          src={headerImg}
          alt={"John Christopher Gonzaga"}
          className={styles.headerLogo}
          onMouseEnter={headerHover(true)}
          onMouseLeave={headerHover(false)}
          onClick={handleOnClickLogo}
        />
        <div className={styles.menu} onClick={handleOnClickMenu}>
          {"Home"}
        </div>
      </div>
    </div>
  );
};

export default Header;
