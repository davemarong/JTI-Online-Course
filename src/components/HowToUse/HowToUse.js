import React from "react";
import { howToUseData } from "./HowToUseData";
import styles from "./HowToUse.module.scss";
export default function HowToUse() {
  return (
    <div className={styles.step_container}>
      <h2 className={styles.h2}>Hvordan funker det?</h2>
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
