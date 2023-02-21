import Homepage from "../src/components/Homepage/Homepage";
import Nav from "../src/components/Nav/Nav";
import Head from "next/head";
import Reviews from "../src/components/Reviews/Reviews";
import JTI_Icons from "../src/components/JTI_Icons/JTI_Icons";
import HowToUse from "../src/components/HowToUse/HowToUse";
import Footer from "../src/components/Footer/Footer";
export default function Home({ jwt, isLogged, admin }) {
  return (
    <div>
      {jwt}
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
          rel="stylesheet"
        />
      </Head>
      <Nav isLogged={isLogged} admin={admin} />
      <Homepage />
      <div
        style={{
          padding: "50px 150px",
          textAlign: "center",
          display: "flex",
          backgroundColor: "#ffcf70",
          fontSize: "1.7rem",
        }}
      >
        <p>
          Det er ingen tvil om at hvert menneske er unikt, men dine preferanser
          påvirker deg kanskje mer enn du er klar over? Har du lyst til å forstå
          mer om hvordan dine preferanser påvirker deg, dine handlinger og dine
          relasjoner? Da er JTI et godt verktøy.
        </p>
      </div>
      <JTI_Icons />
      <Reviews />
      <HowToUse />
      <Footer isLogged={isLogged} />
    </div>
  );
}
