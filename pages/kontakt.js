import React from "react";
import ContactForm from "../src/components/ContactForm/ContactForm";
import Nav from "../src/components/Nav/Nav";
import Footer from "../src/components/Footer/Footer";
export default function kontakt({
  isLogged,
  setCurrentVideo,
  currentVideo,
  admin,
}) {
  return (
    <div>
      <Nav isLogged={isLogged} admin={admin} />
      <ContactForm />
      <Footer />
    </div>
  );
}
