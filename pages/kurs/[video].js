import React from "react";
// Next
import { useRouter } from "next/router";
// Components
import Nav from "../../src/components/Nav/Nav";
import Video from "../../src/components/Video/Video";
import VideoMeny from "../../src/components/VideoMeny/VideoMeny";
import VideoFooter from "../../src/components/Video/VideoFooter";
// FUNCTIONAL COMPONENT
export default function videoPage({ currentVideo }) {
  const router = useRouter();
  const { video } = router.query;
  return (
    <div>
      <Nav />
      <Video />
      <VideoFooter videoTitle={video} />
      <VideoMeny />
    </div>
  );
}
