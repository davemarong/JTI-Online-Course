//   Imports
import React from "react";
import { useState, useContext } from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import axios from "axios";
import { UserData } from "../Context/UserDataProvider";
// FUNCTIONAL COMPONENT
export default function Register() {
  //   State
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();

  //   Context
  const { jwt, setJwt } = useContext(UserData);
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
  const handleJwt = () => {
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
      {jwt}
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
      <Button onClick={handleJwt}>Change jwt</Button>
    </div>
  );
}
