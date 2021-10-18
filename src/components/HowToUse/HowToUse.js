//   IMPORT
// React
import React from "react";
// Components
import { howToUseData } from "./HowToUseData";
// Styles
import styles from "./HowToUse.module.scss";
// Functional components
export default function HowToUse() {
  // Return
  return (
    <div className={styles.step_container}>
      <h2 className={styles.h2}>Hvordan funker det?</h2>
      <div className={styles.trackbar}>
        <span className={styles.trackbar_step}></span>
        <span className={styles.trackbar_step}></span>
        <span className={styles.trackbar_step}></span>
      </div>
      {howToUseData.map((step, id) => {
        return (
          <div className={styles.step} key={step.id}>
            <h3 className={styles.step_step}>Steg {step.step}</h3>
            <h4 className={styles.step_title}>{step.title}</h4>
            <p className={styles.step_description}>{step.description}</p>
          </div>
        );
      })}
    </div>
  );
}
