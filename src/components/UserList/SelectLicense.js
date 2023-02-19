import React, { useState, useEffect } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

export default function SelectLicense({ user, updateUserLicense, jwt }) {
  const [license, setLicense] = useState(user.license);
  return (
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      value={license}
      onChange={(e) => {
        const success = updateUserLicense(jwt, e.target.value, user.id);
        console.log(success);
        if (success) {
          console.log("it works");
          setLicense(e.target.value);
        }
      }}
    >
      <MenuItem value="Gratis">Gratis</MenuItem>
      <MenuItem value="Standard">Standard</MenuItem>
      <MenuItem value="Premium">Premium</MenuItem>
    </Select>
  );
}
