import React from "react";
import styles from "./VideoDescription.module.scss";
export default function VideoDescription({ currentVideo }) {
  return (
    <div className={styles.description}>
      <h3 className={styles.description_h3}>Beskrivelse av episode</h3>
      <p className={styles.description_p}>{currentVideo.description}</p>
    </div>
  );
}
