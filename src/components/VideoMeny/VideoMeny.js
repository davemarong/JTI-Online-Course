// IMPORT

// React
import React from "react";
// Assets
import { videos } from "../../assets/Videos";
// Styles
import styles from "./VideoMeny.module.scss";
// Components
import Video from "./Video";

export default function VideoMeny({ currentVideo, setCurrentVideo }) {
  return (
    <div>
      <ul>
        {videos.map((chapter, chapterId) => {
          return (
            <Video
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
