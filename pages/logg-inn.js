import React from "react";
import Login from "../src/components/Login/Login";
import Nav from "../src/components/Nav/Nav";
export default function logginn({ setJwt, setIsLogged }) {
  return (
    <div>
      <Nav />
      <Login setJwt={setJwt} setIsLogged={setIsLogged} />
    </div>
  );
}
