// IMPORT

// React
import React, { useState } from "react";
// Components
import Nav from "../../src/components/Nav/Nav";
import Video from "../../src/components/Video/Video";
import VideoDescription from "../../src/components/VideoDescription/VideoDescription";
import VideoMeny from "../../src/components/VideoMeny/VideoMeny";
import Footer from "../../src/components/Footer/Footer";
// Styles
import styles from "../../src/styles/pages/Kurs.module.scss";
export default function index({
  isLogged,
  setCurrentVideo,
  currentVideo,
  jwt,
  admin,
}) {
  // State
  return (
    <>
      <Nav isLogged={isLogged} admin={admin} />
      <div className={styles.body}>
        <div className={styles.videoPlayer}>
          <Video />
        </div>
        <div className={styles.videoData_container}>
          <div className={styles.videoData_meny}>
            <VideoMeny
              setCurrentVideo={setCurrentVideo}
              currentVideo={currentVideo}
            />
          </div>
          <div className={styles.videoData_description}>
            <h2 style={{ margin: 0 }}>Beskrivelse av kurs: </h2>
            <p>
              Velkommen til Online kurs i JTI av Sigrid Øyen. I løpet av dette
              kurset vil du lære alt du trenger å vite for å kunne bruke JTI i
              din egen hverdag
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
