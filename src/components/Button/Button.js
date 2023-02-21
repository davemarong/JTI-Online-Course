import React from "react";
import MuiButton from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export default function Button({ children, variant = "outlined", onClick }) {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#d19c34",
        darker: "#b88a30",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Grid container item xs={11} justifyContent="right">
        <MuiButton color="primary" onClick={onClick} variant={variant}>
          {children}
        </MuiButton>
      </Grid>
    </ThemeProvider>
  );
}
