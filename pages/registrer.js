import React from "react";
import Registrer from "../src/components/Register/Registrer";
import Nav from "../src/components/Nav/Nav";
export default function registrer({ paid }) {
  return (
    <div>
      <Nav />
      {paid ? <Registrer /> : "Du har ikke betalt"}
    </div>
  );
}
