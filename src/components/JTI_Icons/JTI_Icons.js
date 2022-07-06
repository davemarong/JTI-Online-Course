//   IMPORT
// React
import React, { useState } from "react";
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
  const [open, setOpen] = useState("none");
  const accordion = () => {
    if (open === "block") {
      setOpen("none");
    } else {
      setOpen("block");
    }
  };
  // Return
  return (
    <div className={styles.icon_container}>
      <h2 className={styles.h2}> Hvordan kan JTI hjelpe deg?</h2>
      {jti_iconsData.map((icon, id) => {
        return (
          // <Link href="/jti">
          <>
            <a className={styles.icon} key={icon.id}>
              <div className={styles.icon_image}>
                <Image src={icon.src} height="100" width="100" />
              </div>
              <h3 className={styles.icon_title}>{icon.title}</h3>
              <p className={styles.icon_description}>{icon.description}</p>
              {/* <div className={styles.icon_readMore_container}>
                <p>Les mer</p>
                <ArrowRightRoundedIcon />
              </div> */}
              <button className={styles.accordion} onClick={accordion}>
                Les mer
              </button>
              <div className={styles.panel} style={{ display: open }}>
                <ul className={styles.ul} style={{ padding: 0 }}>
                  <li>Finn dine preferanser</li>
                  <li>JTI belyser styrker og forskjeller</li>
                  <li>Basert på forskning</li>
                </ul>
                <button>Se mer</button>
              </div>
            </a>
          </>

          // </Link>
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
