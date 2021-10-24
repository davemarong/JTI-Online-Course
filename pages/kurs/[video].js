import React from "react";
// Next
import { useRouter } from "next/router";
// Components
import Nav from "../../src/components/Nav/Nav";
import Video from "../../src/components/Video/Video";
import VideoMeny from "../../src/components/VideoMeny/VideoMeny";
import VideoFooter from "../../src/components/Video/VideoFooter";
import VideoDescription from "../../src/components/VideoDescription/VideoDescription";
import Footer from "../../src/components/Footer/Footer";
// Styles
import styles from "../../src/styles/pages/Kurs.module.scss";
// FUNCTIONAL COMPONENT
export default function videoPage({
  setCurrentVideo,
  currentVideo,
  jwt,
  isLogged,
}) {
  const router = useRouter();
  const { video } = router.query;
  return (
    <>
      <Nav isLogged={isLogged} />
      <div className={styles.body}>
        <div className={styles.videoPlayer}>
          <Video />
        </div>
        <div className={styles.videoFooter}>
          <VideoFooter
            currentVideo={currentVideo}
            videoTitle={video}
            setCurrentVideo={setCurrentVideo}
          />
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
