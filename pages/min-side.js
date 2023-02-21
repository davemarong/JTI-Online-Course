import React from "react";
import Nav from "../src/components/Nav/Nav";

export default function minSide({ isLogged, admin }) {
  return (
    <div>
      <h1>Min side</h1>
      <Nav isLogged={isLogged} admin={admin} />
    </div>
  );
}
