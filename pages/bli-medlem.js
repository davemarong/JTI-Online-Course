import React from "react";
import BliMedlem from "../src/components/BliMedlem/BliMedlem";
import Footer from "../src/components/Footer/Footer";
import KursInfo from "../src/components/KursInfo/KursInfo";
import Nav from "../src/components/Nav/Nav";
import styles from "../src/styles/pages/BliMedlem.module.scss";
export default function bliMedlem({ setCourse, course, isLogged }) {
  return (
    <>
      <Nav isLogged={isLogged} />
      <div className={styles.body}>
        <BliMedlem setCourse={setCourse} />
        <KursInfo />
      </div>
      <Footer />
    </>
  );
}
