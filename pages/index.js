import Homepage from "../src/components/Homepage/Homepage";
import Nav from "../src/components/Nav/Nav";
import Head from "next/head";
import Reviews from "../src/components/Reviews/Reviews";
import JTI_Icons from "../src/components/JTI_Icons/JTI_Icons";
import HowToUse from "../src/components/HowToUse/HowToUse";
export default function Home({ jwt, isLogged }) {
  return (
    <div>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
          rel="stylesheet"
        />
      </Head>
      <Nav isLogged={isLogged} />
      <Homepage />
      <JTI_Icons />
      <Reviews />
      <HowToUse />
    </div>
  );
}
