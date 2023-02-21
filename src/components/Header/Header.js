import React from "react";
import Typography from "@mui/material/Typography";

export default function Header({ children, size = "h4" }) {
  return (
    <Typography align="center" variant={size}>
      {children}
    </Typography>
  );
}
