import React from "react";
import Nav from "../src/components/Nav/Nav";
import axios from "axios";
export default function kurs({ jwt, isLogged }) {
  const update = () => {
    axios
      .put("http://localhost:1337/users-permissions/roles/Paid", {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      })
      .then((response) => {
        // Handle success.
        console.log("Data: ", response.data);
      })
      .catch((error) => {
        // Handle error.
        console.log("An error occurred:", error.response);
      });
  };
  return (
    <div>
      <h1>Kurs</h1>
      <Nav isLogged={isLogged} />
      <button onClick={update}>Update</button>
    </div>
  );
}
