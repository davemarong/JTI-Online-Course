import React from "react";
import useFetchData from "../useCustomHook/useFetchData";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Container from "@mui/material/Container";
import useUpdateUserLicense from "../useCustomHook/useUpdateUserLicense";
import SelectLicense from "./SelectLicense";

export default function UserList({ jwt }) {
  const users = useFetchData({ fetchQuery: "users", jwt: jwt });
  const updateUserLicense = useUpdateUserLicense();

  return (
    <Container
      maxWidth="lg"
      style={{ maxHeight: 500, overflow: "scroll", marginBottom: 50 }}
    >
      <Table stickyHeader size="small">
        <TableHead>
          <TableRow>
            <TableCell>Brukernavn</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Oprettet</TableCell>
            <TableCell>Lisens</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users?.map((user) => {
            return (
              <TableRow key={user.id}>
                <TableCell>{user.username}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.createdAt}</TableCell>
                <TableCell>
                  <SelectLicense
                    user={user}
                    updateUserLicense={updateUserLicense}
                    jwt={jwt}
                  />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Container>
  );
}
