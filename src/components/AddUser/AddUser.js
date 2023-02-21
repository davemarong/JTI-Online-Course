import React, { useState } from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Button from "../Button/Button";
import useAddUser from "./useAddUser";

export default function AddUser() {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [admin, setAdmin] = useState(false);
  const [license, setLicense] = useState("Gratis");

  const userData = {
    username: username,
    email: email,
    password: password,
    admin: admin,
    license: license,
  };
  const addUser = useAddUser(userData);
  const handleLicense = (e) => setLicense(e.target.value);
  const handleUsername = (e) => setUsername(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleAdmin = (e) => setAdmin(e.target.checked);

  return (
    <Container maxWidth="md">
      <Card style={{ marginTop: 50, padding: "50px 0 50px 0" }}>
        <Grid spacing={4} container alignItems="center">
          <Grid item xs={12}>
            <Typography align="center" variant="h5">
              Create a user
            </Typography>
          </Grid>
          <Grid container justifyContent="center" item>
            <Grid item xs={4}>
              <TextField
                fullWidth
                onChange={handleUsername}
                label="Brukernavn"
                variant="outlined"
              />
            </Grid>
          </Grid>
          <Grid container justifyContent="center" item>
            <Grid item xs={4}>
              <TextField
                fullWidth
                onChange={handlePassword}
                label="Passord"
                variant="outlined"
              />
            </Grid>
          </Grid>
          <Grid container justifyContent="center" item>
            <Grid item xs={6}>
              <TextField
                fullWidth
                onChange={handleEmail}
                label="Email"
                variant="outlined"
              />
            </Grid>
          </Grid>
          <Grid container spacing={4} justifyContent="center" item>
            <Grid item>
              <Select value={license} label="Lisens" onChange={handleLicense}>
                <MenuItem value="Gratis">Gratis</MenuItem>
                <MenuItem value="Standard">Standard</MenuItem>
                <MenuItem value="Premium">Premium</MenuItem>
              </Select>
            </Grid>
            <Grid item>
              <FormControlLabel
                checked={admin}
                onChange={handleAdmin}
                control={<Switch />}
                label="Admin"
              />
            </Grid>
          </Grid>
          <Grid container justifyContent="center" item xs={12}>
            <Button onClick={addUser}>Create user</Button>
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
}
