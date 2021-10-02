import React from "react";
import Nav from "../src/components/Nav/Nav";

export default function kontakt({ isLogged }) {
  return (
    <div>
      <h1>Kontakt oss</h1>
      <Nav isLogged={isLogged} />
    </div>
  );
}
