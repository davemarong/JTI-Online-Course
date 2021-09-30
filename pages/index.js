import Nav from "../src/components/Nav/Nav";
export default function Home({ jwt, setJwt, isLogged, setIsLogged }) {
  return (
    <div>
      <h1>Hjem</h1>
      {isLogged ? "True" : "False"}
      {jwt}
      <Nav />
    </div>
  );
}
