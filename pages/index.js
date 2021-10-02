import Nav from "../src/components/Nav/Nav";
export default function Home({ jwt, isLogged }) {
  return (
    <div>
      {isLogged ? "true" : "false"}
      {jwt}
      <h1>Hjem</h1>
      <Nav />
    </div>
  );
}
