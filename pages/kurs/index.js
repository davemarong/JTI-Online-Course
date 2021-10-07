// IMPORT

// React
import React, { useState } from "react";
// Components
import Nav from "../../src/components/Nav/Nav";
import VideoMeny from "../../src/components/VideoMeny/VideoMeny";
export default function index({ isLogged, setCurrentVideo, currentVideo }) {
  // State
  return (
    <div>
      <Nav isLogged={isLogged} />
      <h1>Kurs</h1>
      <VideoMeny
        currentVideo={currentVideo}
        setCurrentVideo={setCurrentVideo}
      />
      <div>Current video is {currentVideo}</div>
    </div>
  );
}
