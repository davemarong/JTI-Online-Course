//   IMPORT

// React
import React, { useState } from "react";
// Next
import Router from "next/router";
// MUI
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

// Other
import axios from "axios";

// FUNCTIONAL COMPONENT
export default function Registrer({ setJwt, setPaid }) {
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
  const handleRegisterUser = () => {
    axios
      .post("http://localhost:1337/auth/local/register", {
        username: username,
        email: email,
        password: password,
      })
      .then((response) => {
        console.log("User profile", response.data.user);
        localStorage.removeItem("Paid");
        Router.push("/logg-inn");
      })
      .catch((error) => {
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
    </div>
  );
}
