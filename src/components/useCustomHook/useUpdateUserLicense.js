import React, { useState, useEffect } from "react";
import axios from "axios";
export default function useUpdateUserLicense() {
  const [success, setSuccess] = useState(false);
  const updateUserLicense = async (jwt, license, id) => {
    try {
      const response = await axios({
        method: "put",
        url: process.env.NEXT_PUBLIC_BASEURL + `users/${id}`,
        data: { license: license },
        headers: { Authorization: `Bearer ${jwt}` },
      });

      setSuccess(true);
      console.log(response);
    } catch (err) {
      console.log(err);
      setSuccess(false);
    }
    return success;
  };
  return updateUserLicense;
}
