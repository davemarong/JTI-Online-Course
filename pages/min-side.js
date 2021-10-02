import React from "react";
import Nav from "../src/components/Nav/Nav";

export default function minSide({ isLogged }) {
  return (
    <div>
      <h1>Min side</h1>
      <Nav isLogged={isLogged} />
    </div>
  );
}
