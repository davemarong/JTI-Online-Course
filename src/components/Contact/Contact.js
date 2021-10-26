import React from "react";
// MUI
import TextField from "@mui/material/TextField";

import styles from "./Contact.module.scss";
export default function Contact() {
  return (
    <div className={styles.contact}>
      <h1 className={styles.contact_h1}>Kontakt oss</h1>
      <div className={styles.contact_form}>
        <TextField
          className={styles.contact_form_input_short}
          label="Fornavn"
          variant="outlined"
        />
        <TextField
          className={styles.contact_form_input_short}
          label="Etternavn"
          variant="outlined"
        />
        <TextField
          className={styles.contact_form_input_long}
          label="Email"
          variant="outlined"
        />
        <TextField
          className={styles.contact_form_input_long}
          label="Firmanavn"
          variant="outlined"
        />
        <TextField
          className={styles.contact_form_input_long}
          label="Melding"
          multiline
          rows={10}
          variant="outlined"
        />
        <div className={styles.contact_form_button_container}>
          <button className={styles.contact_form_button}>Send</button>
        </div>
      </div>
      <div className={styles.contact_info}>
        <h2 className={styles.contact_info_text}>Mobil</h2>
        <p className={styles.contact_info_text}>90241951</p>
        <h2 className={styles.contact_info_text}>Email</h2>
        <p className={styles.contact_info_text}>sigrid_øyen@jtionline.no</p>
      </div>
    </div>
  );
}
