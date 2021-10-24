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
}) {
  // State
  return (
    <>
      <Nav isLogged={isLogged} />
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
            <VideoDescription currentVideo={currentVideo} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
