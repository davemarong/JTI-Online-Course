// IMPORT

// React
import React from "react";
// Assets
import { videos } from "../../assets/Videos";
// Styles
import styles from "./Video.module.scss";
// Components
import Video from "./Video";

export default function VideoMeny({ currentVideo, setCurrentVideo }) {
  return (
    <div>
      <ul className={styles.ul_container}>
        {videos.map((chapter, chapterId) => {
          return (
            <Video
              key={chapterId}
              chapter={chapter}
              chapterId={chapterId}
              setCurrentVideo={setCurrentVideo}
              currentVideo={currentVideo}
            />
          );
        })}
      </ul>
    </div>
  );
}
