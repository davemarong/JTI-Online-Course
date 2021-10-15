import Homepage from "../src/components/Homepage/Homepage";
import Nav from "../src/components/Nav/Nav";
import Head from "next/head";
import Reviews from "../src/components/Reviews/Reviews";
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
      <Reviews />
    </div>
  );
}
