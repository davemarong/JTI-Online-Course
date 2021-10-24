// IMPORT

// React
import React, { useEffect } from "react";
// Next
import Link from "next/link";
import { useRouter } from "next/router";
// Assets
import { videos } from "../../assets/Videos";
// Styles
import styles from "./VideoFooter.module.scss";
// MUI
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
// Functional component
export default function VideoFooter({
  videoTitle,
  currentVideo,
  setCurrentVideo,
}) {
  // Router
  const router = useRouter();
  let { video } = router.query;
  if (video == undefined) {
    video = "01-01";
  }
  // Functions
  const findAllEpisodes = () => {
    let allEpisodes = videos.map((chapter, id) => {
      return chapter.map((episode, id) => {
        return `${episode.chapter}-${episode.id}`;
      });
    });
    return [...allEpisodes[0], ...allEpisodes[1]];
  };
  // Effect
  useEffect(() => {
    let [, chapter, , , episode] = video.split("");
    setCurrentVideo(videos[chapter - 1][episode - 1]);
  }, [video]);
  // Variables
  const allEpisodes = findAllEpisodes();

  let nextEpisode = allEpisodes[allEpisodes.indexOf(video) + 1];
  let lastEpisode = allEpisodes[allEpisodes.indexOf(video) - 1];
  // If statements
  if (nextEpisode == undefined) {
    nextEpisode = video;
  }
  if (lastEpisode == undefined) {
    lastEpisode = video;
  }
  // Return
  return (
    <div className={styles.videoFooter}>
      <div className={styles.videoFooter_description_container}>
        <h3 className={styles.videoFooter_description_title}>
          {videoTitle}: {currentVideo.title}
        </h3>
        <p className={styles.description_sigridØyen}>Sigrid Øyen</p>
      </div>
      <div className={styles.videoFooter_buttons_container}>
        <Link href={`/kurs/${lastEpisode}`}>
          <a className={styles.videoFooter_buttons_last}>
            <ArrowBackIosNewRoundedIcon fontSize="small" />
            Forrige
          </a>
        </Link>
        <Link href={`/kurs/${nextEpisode}`}>
          <a className={styles.videoFooter_buttons_next}>
            Neste
            <ArrowForwardIosRoundedIcon fontSize="small" />
          </a>
        </Link>
      </div>
    </div>
  );
}
