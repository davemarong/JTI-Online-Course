import React from "react";
import Contact from "../src/components/Contact/Contact";
import Nav from "../src/components/Nav/Nav";
import Footer from "../src/components/Footer/Footer";
export default function kontakt({ isLogged, setCurrentVideo, currentVideo }) {
  return (
    <div>
      <Nav isLogged={isLogged} />
      <Contact />
      <Footer />
    </div>
  );
}
