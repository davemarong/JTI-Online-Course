import React from "react";
import styles from "./VideoFooter.module.scss";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
export default function VideoFooter({ videoTitle }) {
  return (
    <div className={styles.videoFooter}>
      <div className={styles.videoFooter_description_container}>
        <h3 className={styles.videoFooter_description_title}>{videoTitle}</h3>
        <p className={styles.description_sigridØyen}>Sigrid Øyen</p>
      </div>
      <div className={styles.videoFooter_buttons_container}>
        <button className={styles.videoFooter_buttons_last}>
          <ArrowBackIosNewRoundedIcon fontSize="small" />
          Forrige
        </button>
        <button className={styles.videoFooter_buttons_next}>
          Neste
          <ArrowForwardIosRoundedIcon fontSize="small" />
        </button>
      </div>
    </div>
  );
}
