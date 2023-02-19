import React from "react";
import ContactForm from "../src/components/ContactForm/ContactForm";
import Nav from "../src/components/Nav/Nav";
import Footer from "../src/components/Footer/Footer";
export default function kontakt({ isLogged, setCurrentVideo, currentVideo }) {
  return (
    <div>
      <Nav isLogged={isLogged} />
      <ContactForm />
      <Footer />
    </div>
  );
}
