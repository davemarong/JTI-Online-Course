import React, { useEffect } from "react";
import Registrer from "../src/components/Register/Registrer";
import Nav from "../src/components/Nav/Nav";
export default function registrer({ paid, setPaid, isLogged }) {
  // Effect
  useEffect(() => {
    const paid = localStorage.getItem("Paid");
    if (paid === "true") {
      setPaid(true);
    }
  }, []);
  return (
    <div>
      <Nav isLogged={isLogged} />
      {paid ? <Registrer setPaid={setPaid} /> : "Du har ikke betalt"}
      <button
        onClick={() => {
          setPaid("true");
        }}
      >
        Pay fast
      </button>
    </div>
  );
}
