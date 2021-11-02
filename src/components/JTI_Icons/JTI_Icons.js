//   IMPORT
// React
import React from "react";
// Next
import Image from "next/image";
import Link from "next/link";
// Components
import { jti_iconsData } from "./JTI_IconsData";
// MUI
import ArrowRightRoundedIcon from "@mui/icons-material/ArrowRightRounded";
// Styles
import styles from "./JTI_Icons.module.scss";
// Functional components
export default function JTI_Icons() {
  // Return
  return (
    <div className={styles.icon_container}>
      <h2 className={styles.h2}> Hvordan kan JTI hjelpe deg?</h2>
      {jti_iconsData.map((icon, id) => {
        return (
          <Link href="/jti">
            <a className={styles.icon} key={icon.id}>
              <div className={styles.icon_image}>
                <Image src={icon.src} height="100" width="100" />
              </div>
              <h3 className={styles.icon_title}>{icon.title}</h3>
              <p className={styles.icon_description}>{icon.description}</p>
              <div className={styles.icon_readMore_container}>
                <p>Les mer</p>
                <ArrowRightRoundedIcon />
              </div>
            </a>
          </Link>
        );
      })}
      <Link href="/jti">
        <a className={styles.button_container}>
          <button className={styles.button}>Lær mer om JTI</button>
        </a>
      </Link>
    </div>
  );
}
