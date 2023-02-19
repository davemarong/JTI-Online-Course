import React from "react";
import useFetchData from "../useCustomHook/useFetchData";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function ContactList() {
  const contacts = useFetchData("contacts");
  return (
    <Container maxWidth="md">
      {contacts?.data.map((contact) => {
        return (
          <Accordion key={contact.id}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              {contact.attributes.createdAt}
            </AccordionSummary>
            <AccordionDetails>
              <Typography align="center" variant="h5">
                {contact.attributes.firstname} {contact.attributes.lastname}
              </Typography>
              <Typography align="center">
                Company: {contact.attributes.company}
              </Typography>
              <Typography align="center">
                Email: {contact.attributes.email}
              </Typography>
              <Typography align="center">
                {contact.attributes.message}
              </Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </Container>
  );
}
