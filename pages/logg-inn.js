import React from "react";
import Login from "../src/components/Login/Login";

import Nav from "../src/components/Nav/Nav";
export default function logginn({
  setJwt,
  setIsLogged,
  isLogged,
  setAdmin,
  admin,
}) {
  return (
    <div>
      <Nav isLogged={isLogged} admin={admin} />
      <Login setJwt={setJwt} setIsLogged={setIsLogged} setAdmin={setAdmin} />
    </div>
  );
}
