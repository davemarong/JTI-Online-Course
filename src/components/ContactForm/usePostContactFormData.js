import React, { useEffect, useState } from "react";

export const usePostContactFormData = (contactFormData) => {
  const [loading, setLoading] = useState(false);

  const postContactFormData = async () => {
    const data = await fetch("http://localhost:1337/api/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contactFormData),
    });
    console.log(data);
  };
  return [postContactFormData, loading];
};
