import React from "react";
import { createContext } from "react";
import { useState } from "react";

export const UserData = createContext({ jwt: "no value", setJwt: () => {} });

export default function UserDataProvider(props) {
  const [jwt, setJwt] = useState("No value");
  const value = { jwt: jwt, setJwt: setJwt };
  return <UserData.Provider value={value}>{props.children}</UserData.Provider>;
}
