import React from "react";
import Nav from "../src/components/Nav/Nav";

export default function omOss({isLogged}) {
  return (
    <div>
      <h1>Om oss</h1>
      <Nav isLogged={isLogged} />
    </div>
  );
}
