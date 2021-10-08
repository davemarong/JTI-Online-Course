import { useState } from "react";
import "../src/styles/globals.scss";

function MyApp({ Component, pageProps }) {
  const [jwt, setJwt] = useState();
  const [isLogged, setIsLogged] = useState(false);
  const [paid, setPaid] = useState(false);
  const [currentVideo, setCurrentVideo] = useState();
  return (
    <Component
      {...pageProps}
      jwt={jwt}
      setJwt={setJwt}
      isLogged={isLogged}
      setIsLogged={setIsLogged}
      paid={paid}
      setPaid={setPaid}
      currentVideo={currentVideo}
      setCurrentVideo={setCurrentVideo}
    />
  );
}

export default MyApp;
