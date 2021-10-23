import React from "react";
// Next
import { useRouter } from "next/router";
// Components
import Nav from "../../src/components/Nav/Nav";
import Video from "../../src/components/Video/Video";
import VideoMeny from "../../src/components/VideoMeny/VideoMeny";
import VideoFooter from "../../src/components/Video/VideoFooter";
import VideoDescription from "../../src/components/VideoDescription/VideoDescription";
// FUNCTIONAL COMPONENT
export default function videoPage({ setCurrentVideo, currentVideo, jwt }) {
  const router = useRouter();
  const { video } = router.query;
  return (
    <div>
      <Nav />
      <Video />
      <VideoFooter
        currentVideo={currentVideo}
        videoTitle={video}
        setCurrentVideo={setCurrentVideo}
      />
      <VideoMeny
        setCurrentVideo={setCurrentVideo}
        currentVideo={currentVideo}
      />
      <VideoDescription currentVideo={currentVideo} />
    </div>
  );
}
