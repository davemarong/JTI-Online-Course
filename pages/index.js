// import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Nav from "../src/components/Nav/Nav";
import Registrer from "../src/components/Register/Registrer";
import Login from "../src/components/Login/Login";
import { useState } from "react";
export default function Home({ jwt, setJwt, isLogged, setIsLogged }) {
  return (
    <div>
      <h1>Hjem</h1>
      {isLogged ? "True" : "False"}
      {jwt}
      <Nav />
    </div>
  );
}
