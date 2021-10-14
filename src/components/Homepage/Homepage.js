import React from "react";
// MUI
import Button from "@mui/material/Button";

import styles from "./Homepage.module.scss";
export default function Homepage() {
  return (
    <div>
      <div className={styles.topSection}>
        <h1 className={styles.topSection_h1}>
          Hvordan forstå styrkene til menneskene rundt deg?
        </h1>
        <p className={styles.topSection_p}>
          {/* Bruk JTI til å optimalisere og effektivisere samspill på din
          arbeidsplass */}
        </p>
        <button className={styles.topSection_button}>SE KURS</button>
      </div>
    </div>
  );
}
