import React from "react";
import Nav from "../src/components/Nav/Nav";

export default function omOss({
  isLogged,
  jwt,
  setCurrentVideo,
  currentVideo,
}) {
  return (
    <div>
      <h1>Om oss</h1>

      <Nav isLogged={isLogged} />
    </div>
  );
}
