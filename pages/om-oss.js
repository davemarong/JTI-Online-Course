import React from "react";
import Nav from "../src/components/Nav/Nav";
import OmOss from "../src/components/OmOss/OmOss";
import Footer from "../src/components/Footer/Footer";
export default function omOss({
  isLogged,
  jwt,
  setCurrentVideo,
  currentVideo,
}) {
  return (
    <div>
      <Nav isLogged={isLogged} />
      <OmOss />
      <Footer />
    </div>
  );
}
