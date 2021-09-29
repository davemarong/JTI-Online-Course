import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [jwt, setJwt] = useState("No info");
  const [isLogged, setIsLogged] = useState(false);

  return (
    <Component
      {...pageProps}
      jwt={jwt}
      setJwt={setJwt}
      isLogged={isLogged}
      setIsLogged={setIsLogged}
    />
  );
}

export default MyApp;
