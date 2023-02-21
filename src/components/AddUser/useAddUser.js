import React, { useState } from "react";
import axios from "axios";
export default function useAddUser({
  username,
  password,
  email,
  admin,
  license,
}) {
  const [loading, setLoading] = useState(false);

  const addUser = async () => {
    const url = process.env.NEXT_PUBLIC_BASEURL + "auth/local/register";
    const data = {
      username: username,
      password: password,
      email: email,
      admin: admin,
      license: license,
    };
    try {
      const response = await axios.post(url, data);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };
  return addUser;
}
