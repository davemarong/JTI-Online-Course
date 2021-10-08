import React from "react";
// MUI
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import useMediaQuery from "@mui/material/useMediaQuery";

import styles from "./Homepage.module.scss";
export default function Homepage() {
  // Media query
  const matches = useMediaQuery("(min-width:600px)");
  return (
    <div>
      {matches ? "True" : "False"}
      <div className={styles.topSection}>
        <Grid
          className={styles.gridContainer}
          container
          direction={matches ? "row" : "row"}
          wrap="wrap"
          justifyContent="center"
          //   alignItems="center"
          alignContent="center"
        >
          <Grid textAlign="left" item xs={10} sm={7}>
            <h1>Forstå styrkene til menneskene rundt deg</h1>
          </Grid>
          <Grid item xs={10} sm={6}>
            <p>
              Bruk JTI til å optimalisere og effektivisere samspill på din
              arbeidsplass
            </p>
          </Grid>
          <Grid item xs={10} sm={12}>
            <Button variant="contained">SE KURS</Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
