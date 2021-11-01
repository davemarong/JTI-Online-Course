import React from "react";
import Footer from "../src/components/Footer/Footer";
import Nav from "../src/components/Nav/Nav";
import OmJTI from "../src/components/OmJTI/OmJTI";

export default function jti({ isLogged }) {
  return (
    <div>
      <Nav isLogged={isLogged} />
      <OmJTI />
      <Footer />
    </div>
  );
}
