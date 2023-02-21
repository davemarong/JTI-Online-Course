import React, { useState } from "react";
// MUI
import TextField from "@mui/material/TextField";

import styles from "./ContactForm.module.scss";
import { usePostContactFormData } from "./usePostContactFormData";
export default function ContactForm() {
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [email, setEmail] = useState();
  const [company, setCompany] = useState();
  const [message, setMessage] = useState();

  const handleFirstname = (e) => setFirstname(e.target.value);
  const handleLastname = (e) => setLastname(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handleCompany = (e) => setCompany(e.target.value);
  const handleMessage = (e) => setMessage(e.target.value);

  const contactFormData = {
    data: {
      firstname: firstname,
      lastname: lastname,
      email: email,
      company: company,
      message: message,
    },
  };

  const [postData, loading] = usePostContactFormData(contactFormData);

  return (
    <div className={styles.contact}>
      <h1 className={styles.contact_h1}>Kontakt oss</h1>
      <div className={styles.contact_form}>
        <TextField
          className={styles.contact_form_input_short}
          type="text"
          label="Fornavn"
          variant="outlined"
          onChange={handleFirstname}
        />
        <TextField
          className={styles.contact_form_input_short}
          type="text"
          label="Etternavn"
          variant="outlined"
          onChange={handleLastname}
        />
        <TextField
          className={styles.contact_form_input_long}
          type="email"
          label="Email"
          variant="outlined"
          onChange={handleEmail}
        />
        <TextField
          className={styles.contact_form_input_long}
          label="Firmanavn"
          variant="outlined"
          onChange={handleCompany}
        />
        <TextField
          className={styles.contact_form_input_long}
          label="Melding"
          multiline
          rows={10}
          variant="outlined"
          onChange={handleMessage}
        />
        <div className={styles.contact_form_button_container}>
          <button onClick={postData} className={styles.contact_form_button}>
            Send
          </button>
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
