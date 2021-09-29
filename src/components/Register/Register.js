//   Imports
import React from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import axios from "axios";
// FUNCTIONAL COMPONENT
export default function Register({ setJwt }) {
  //   State
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();

  //   Functions
  const handleEmailInput = (event) => {
    setEmail(event.target.value);
  };
  const handleUsernameInput = (event) => {
    setUsername(event.target.value);
  };
  const handlePasswordInput = (event) => {
    setPassword(event.target.value);
  };
  const handle = () => {
    console.log("Done");
    setJwt("New value");
  };
  const handleRegisterUser = () => {
    axios
      .post("http://localhost:1337/auth/local/register", {
        username: username,
        email: email,
        password: password,
      })
      .then((response) => {
        // Handle success.
        console.log("Well done!");
        console.log("User profile", response.data.user);
        console.log("User token", response.data.jwt);
      })
      .catch((error) => {
        // Handle error.
        console.log("An error occurred:", error.response);
      });
  };
  //   Return
  return (
    <div>
      <Typography variant="h3">Registrer deg</Typography>
      <TextField onChange={handleEmailInput} label="Email" variant="outlined" />
      <TextField
        onChange={handleUsernameInput}
        label="Brukernavn"
        variant="outlined"
      />
      <TextField
        onChange={handlePasswordInput}
        label="Passord"
        variant="outlined"
      />
      <Button onClick={handleRegisterUser} variant="contained">
        Registrer!
      </Button>
      <Button onClick={handle}>Set jwt</Button>
    </div>
  );
}
