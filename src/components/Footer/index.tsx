import React from "react";
import assets from "assets";
import { footerDetails } from "constants/footer";
import styles from "./Footer.scss";

const Footer: React.FC = () => (
  <div className={styles.wrapper}>
    <div className={styles.imgContainer}>
      {footerDetails.linkItems.map((item, idx) => (
        <a key={`${idx}=${item.name}`} href={item.link} target={item.target}>
          <img src={item.icon} alt={item.name} />
        </a>
      ))}
    </div>
    <div className={styles.myName}>{footerDetails.name}</div>
  </div>
);

export default Footer;
