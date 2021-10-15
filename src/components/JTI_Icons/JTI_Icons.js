import React from "react";
import { jti_iconsData } from "./JTI_IconsData";
import Image from "next/image";
import styles from "./JTI_Icons.module.scss";
export default function JTI_Icons() {
  return (
    <div className={styles.icon_container}>
      <h2 className={styles.h2}> Hvordan kan JTI hjelpe deg?</h2>
      {jti_iconsData.map((icon, id) => {
        return (
          <div className={styles.icon} key={icon.id}>
            <div className={styles.icon_image}>
              <Image src={icon.src} height="100" width="100" />
            </div>
            <h3 className={styles.icon_title}>{icon.title}</h3>
            <p className={styles.icon_description}>{icon.description}</p>
          </div>
        );
      })}
      <div className={styles.button_container}>
        <button className={styles.button}>Lær mer om JTI</button>
      </div>
    </div>
  );
}
