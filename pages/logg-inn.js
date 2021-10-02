import React from "react";
import Login from "../src/components/Login/Login";

import Nav from "../src/components/Nav/Nav";
export default function logginn({ setJwt, setIsLogged, isLogged }) {
  return (
    <div>
      <Nav isLogged={isLogged} />
      <Login setJwt={setJwt} setIsLogged={setIsLogged} />
    </div>
  );
}
