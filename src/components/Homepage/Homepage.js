import React from "react";
// Next
import Link from "next/link";
// MUI
import Button from "@mui/material/Button";
// Styles
import styles from "./Homepage.module.scss";
// Functional components
export default function Homepage() {
  // Return
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
        <Link href="/bli-medlem">
          <a className={styles.topSection_button_container}>
            <button className={styles.topSection_button}>SE KURS</button>
          </a>
        </Link>
      </div>
    </div>
  );
}
