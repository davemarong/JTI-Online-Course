import React from "react";
// Next
import Image from "next/image";
import styles from "./OmOss.module.scss";
// Assets
import sigrid from "../../../public/images/aboutUs2.jpg";
export default function OmOss() {
  return (
    <div className={styles.aboutUs}>
      <div className={styles.aboutUs_topSection}>
        <h1 className={styles.aboutUs_topSection_h1}>Om oss</h1>
      </div>
      <div className={styles.aboutUs_mainSection}>
        <div className={styles.aboutUs_mainSection_text}>
          <h2>
            JTI ekspert som jobber for å effektivisere sammspill på
            arbeidsplassen.
          </h2>
          <p>
            Mitt navn er sigrid øyen og jeg driver med Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Suspendisse vitae tristique
            lacus. In porttitor mi fermentum consectetur dapibus. Quisque
            molestie mauris in fringilla mattis. Maecenas efficitur fringilla
            porta. In lacinia ligula a nisl vehicula dignissim. Integer ultrices
            facilisis feugiat. Aliquam ex odio, ornare non pretium eu, mollis
            nec nisl. Etiam risus quam, rutrum id interdum quis, tempus ac
            ligula. Vivamus egestas turpis ut diam tempus vulputate.
          </p>
          <h3>Hvorfor meg?</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            vitae tristique lacus. In porttitor mi fermentum consectetur
            dapibus. Quisque molestie mauris in fringilla mattis. Maecenas
            efficitur fringilla porta. In lacinia ligula a nisl vehicula
            dignissim. Integer ultrices facilisis feugiat. Aliquam ex odio,
            ornare non pretium eu, mollis nec nisl. Etiam risus quam, rutrum id
            interdum quis, tempus ac ligula. Vivamus egestas turpis ut diam
            tempus vulputate.
          </p>
          <h3>Min drivkraft</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            vitae tristique lacus. In porttitor mi fermentum consectetur
            dapibus. Quisque molestie mauris in fringilla mattis. Maecenas
            efficitur fringilla porta. In lacinia ligula a nisl vehicula
            dignissim. Integer ultrices facilisis feugiat. Aliquam ex odio,
            ornare non pretium eu, mollis nec nisl. Etiam risus quam, rutrum id
            interdum quis, tempus ac ligula. Vivamus egestas turpis ut diam
            tempus vulputate.
          </p>
        </div>
        <div className={styles.aboutUs_mainSection_img}>
          <Image src={sigrid} height="300" width="450" />
        </div>
      </div>
    </div>
  );
}
