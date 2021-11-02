//   IMPORT
// React
import React from "react";
// Next
import Image from "next/image";
// Assets
import video from "../../../public/images/video.png";
// Styles
import styles from "./Video.module.scss";
export default function Video() {
  return (
    <div className={styles.video_container}>
      <div className={styles.video}>
        <Image src={video} width="1400" />
      </div>
    </div>
  );
}
