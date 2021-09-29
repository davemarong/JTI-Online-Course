// import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Nav from "../src/components/Nav/Nav";
import Register from "../src/components/Register/Register";
import { createContext } from "react";
import { useState, useMemo, useContext } from "react";
import UserDataProvider from "../src/components/Context/UserDataProvider";
import { UserData } from "../src/components/Context/UserDataProvider";
export default function Home() {
  return (
    <UserDataProvider>
      <h1>Hjem</h1>
      <Nav />
      <Register />
    </UserDataProvider>
  );
}
