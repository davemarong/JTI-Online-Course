//   IMPORT
// React
import React from "react";
// Next
import Image from "next/image";
// Assets
import video from "../../../public/images/video.png";
// Styles
import styles from "./Video.module.scss";
export default function Video({
  width = "100%",
  height = "auto",
  src = "https://drive.google.com/uc?id=1APSRoL8XGWQhNkeuC7--84XSoyMkcPrP",
}) {
  return (
    // <div className={styles.video_container}>
    <div className={styles.video}>
      <video
        controls
        src={src}
        type="video/mp4"
        style={{ width: width, height: height }}
      />
    </div>
    // </div>
  );
}
