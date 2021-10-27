import React from "react";
import Image from "next/image";
import { kursInfoData } from "./KursInfoData";
import styles from "./KursInfo.module.scss";
export default function KursInfo() {
  return (
    <div className={styles.kursInfo}>
      <h2 className={styles.kursInfo_title}>Hva inneholder kursene?</h2>
      {kursInfoData.map((kurs, id) => {
        return (
          <div key={kurs.id} className={kurs.className}>
            <h2 className={styles.kursInfo_h2}>{kurs.title}</h2>
            {/* <div className={styles.kursInfo_main}> */}
            <p className={styles.kursInfo_p}>{kurs.description}</p>
            <div className={styles.kursInfo_img}>
              <Image src={kurs.img} width="300" height="300" />
              {/* </div> */}
            </div>
          </div>
        );
      })}
    </div>
  );
}
