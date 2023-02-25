import React, { useState } from "react";
import AddUser from "src/components/AddUser/AddUser";
import Button from "src/components/Button/Button";
import ContactList from "src/components/ContactList/ContactList";
import Header from "src/components/Header/Header";
import Modal from "src/components/Modal/Modal";
import Nav from "src/components/Nav/Nav";
import UserList from "src/components/UserList/Userlist";

export default function admin({ jwt, isLogged, admin }) {
  const [open, setOpen] = useState(false);
  const openModal = () => setOpen(true);
  return (
    <>
      {admin ? (
        <>
          <Nav isLogged={isLogged} admin={admin} />
          <Header>Users</Header>
          <Button onClick={openModal}>Create new user</Button>
          <Modal open={open} setOpen={setOpen}>
            <AddUser />
          </Modal>

          <UserList jwt={jwt} />
          <Header>Contacts requests</Header>
          <ContactList jwt={jwt} />
        </>
      ) : (
        <Header>Du har ikke tilgang til denne siden</Header>
      )}
    </>
  );
}
