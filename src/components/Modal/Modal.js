import React, { useState } from "react";
import MuiModal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";

export default function Modal({ children, open, setOpen }) {
  const handleClose = () => setOpen(false);

  return (
    <>
      <MuiModal open={open} onClose={handleClose}>
        <Fade in={open}>
          <div>{children}</div>
        </Fade>
      </MuiModal>
    </>
  );
}
