//   IMPORT

// React
import React from "react";
import { useState } from "react";
// Next
import Router from "next/router";
// MUI
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
// Styles
import styles from "./Login.module.scss";
// Other
import axios from "axios";

// FUNCTIONAL COMPONENT
export default function Register({ setJwt, setIsLogged }) {
  //   State
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [isLoading, setIsLoading] = useState(false);

  //   Functions
  const handleUsernameInput = (event) => {
    setUsername(event.target.value);
  };
  const handlePasswordInput = (event) => {
    setPassword(event.target.value);
  };
  const handleLoginUser = () => {
    setIsLoading(true);
    axios
      .post("http://localhost:1337/auth/local", {
        identifier: username,
        password: password,
      })
      .then((response) => {
        console.log("User profile", response.data.user);
        setJwt(response.data.jwt);
        setIsLogged(true);
        setIsLoading(false);
        Router.push("/kurs");
      })
      .catch((error) => {
        console.log("An error occurred:", error.response);
        setIsLoading(false);
      });
  };

  //   Return
  return (
    <>
      <div className={styles.login}>
        <h1 className={styles.login_h1}>Logg inn</h1>
        <TextField
          className={styles.login_input}
          onChange={handleUsernameInput}
          label="Brukernavn/Email"
          variant="outlined"
        />
        <TextField
          className={styles.login_input}
          onChange={handlePasswordInput}
          label="Passord"
          variant="outlined"
        />
        <button className={styles.login_button} onClick={handleLoginUser}>
          Logg inn!
        </button>
        {isLoading && <CircularProgress />}
      </div>
    </>
  );
}
