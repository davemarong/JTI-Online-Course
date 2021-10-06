// IMPORT

// React
import React, { useState } from "react";
// Components
import Nav from "../src/components/Nav/Nav";
import VideoMeny from "../src/components/VideoMeny/VideoMeny";
export default function kurs({ isLogged }) {
  // State
  const [curentVideo, setCurrentVideo] = useState();
  return (
    <div>
      <Nav isLogged={isLogged} />
      <h1>Kurs</h1>
      <VideoMeny curentVideo={curentVideo} setCurrentVideo={setCurrentVideo} />
    </div>
  );
}
