// IMPORT

// React
import React, { useState } from "react";
// Components
import Nav from "../../src/components/Nav/Nav";
import Video from "../../src/components/Video/Video";
import VideoMeny from "../../src/components/VideoMeny/VideoMeny";
export default function index({
  isLogged,
  setCurrentVideo,
  currentVideo,
  jwt,
}) {
  // State
  return (
    <div>
      <Nav isLogged={isLogged} />
      <Video />
      <VideoMeny
        currentVideo={currentVideo}
        setCurrentVideo={setCurrentVideo}
      />
    </div>
  );
}
