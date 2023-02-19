import React from "react";
import ContactList from "src/components/ContactList/ContactList";
import Header from "src/components/Header/Header";
import Nav from "src/components/Nav/Nav";
import UserList from "src/components/UserList/Userlist";

export default function admin({ jwt, isLogged }) {
  return (
    <div>
      <Nav isLogged={isLogged} />
      <Header>Users</Header>
      <UserList jwt={jwt} />
      <Header>Contacts requests</Header>
      <ContactList />
    </div>
  );
}
