import React from "react";
import { Diagram } from "src/components/Diagram/Diagram";
import Footer from "../src/components/Footer/Footer";
import Nav from "../src/components/Nav/Nav";
import OmJTI from "../src/components/OmJTI/OmJTI";

export default function jti({ isLogged, admin }) {
  return (
    <div>
      <Nav isLogged={isLogged} admin={admin} />
      <OmJTI />
      <Footer />
    </div>
  );
}
