// IMPORT

// NEXT
import Image from "next/image";

// COMPONENTS

// UTILS

// STYLES
import styles from "./JTI_Icons_long.module.scss";

// DATA
import { jti_iconsData } from "../JTI_Icons/JTI_IconsData";

// FUNCTIONAL COMPONENTS
export const JTI_Icons_long = () => {
  // STATE

  // FUNCTIONS

  // RETURN
  return (
    <div className={styles.container} style={{ gap: 20 }}>
      {jti_iconsData.map((item) => {
        return (
          <ul className={styles.ul}>
            <h3 style={{ textAlign: "center" }}> {item.title}</h3>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Image src={item.src} height="100" width="100" />
            </div>
            {item.listItems.map((listItem) => {
              return <li>{listItem}</li>;
            })}
          </ul>
        );
      })}
    </div>
  );
};
