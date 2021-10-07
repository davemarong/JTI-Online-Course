// IMPORT

// React
import React, { useState } from "react";
// Next
import Link from "next/link";
// Assets
import { videos } from "../../assets/Videos";
// Material UI
import Checkbox from "@mui/material/Checkbox";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded"; // Styles
// Styles
import styles from "./VideoMeny.module.scss";
// Framer motion
import { motion, useCycle } from "framer-motion";

export default function Video({
  chapter,
  chapterId,
  currentVideo,
  setCurrentVideo,
}) {
  // Framer motion hook
  const [openChapter, cycleOpenChapter] = useCycle("auto", 0);
  // Function
  const handleOpenChapter = () => {
    cycleOpenChapter();
  };
  const handleChangeVideo = (video) => {
    setCurrentVideo(video);
  };
  return (
    <div key={chapter.id}>
      <ul className={styles.chapter_container}>
        <li onClick={handleOpenChapter} className={styles.chapter_header}>
          <h1>
            Kapittel {chapter[0].chapter}: {chapter[0].chapterName}
          </h1>
          <ArrowDropDownRoundedIcon fontSize="large" />
        </li>
        <li>
          <motion.ul
            animate={{ height: openChapter }}
            className={styles.videos_container}
          >
            {chapter.map((video, id) => {
              return (
                <>
                  <Link
                    key={video.id}
                    href="/kurs/[video].js"
                    as={`/kurs/${video.chapter}-${video.id}`}
                  >
                    <a className={styles.videoTitle}>
                      <input
                        className={styles.videoTitle_checkbox}
                        type="checkbox"
                      />
                      <p>
                        {video.chapter}-{video.id}: {video.title}
                      </p>
                    </a>
                  </Link>
                </>
              );
            })}
          </motion.ul>
        </li>
      </ul>
    </div>
  );
}
