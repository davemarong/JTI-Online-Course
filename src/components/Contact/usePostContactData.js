import React, { useEffect, useState } from "react";

export const usePostContactData = (contactData) => {
  const [loading, setLoading] = useState(false);

  const postContactData = async () => {
    const data = await fetch("http://localhost:1337/api/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contactData),
    });
    console.log(data);
  };
  return [postContactData, loading];
};
