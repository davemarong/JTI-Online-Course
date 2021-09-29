// import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Nav from "../src/components/Nav/Nav";
import Register from "../src/components/Register/Register";
import { useState } from "react";
export default function Home({ jwt, setJwt, isLogged, setIsLogged }) {
  return (
    <div>
      <h1>Hjem</h1>
      <Nav />
      <Register setJwt={setJwt} />
    </div>
  );
}
