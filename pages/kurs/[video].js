import React from "react";
// Next
import { useRouter } from "next/router";
// Components
import Nav from "../../src/components/Nav/Nav";
import VideoMeny from "../../src/components/VideoMeny/VideoMeny";
// FUNCTIONAL COMPONENT
export default function videoPage() {
  const router = useRouter();
  const { video } = router.query;
  return (
    <div>
      <Nav />
      <div>{video}</div>
      <VideoMeny />
    </div>
  );
}
