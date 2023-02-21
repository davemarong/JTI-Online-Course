import React, { useState, useEffect } from "react";
import axios from "axios";

export default function useFetchData({ fetchQuery, jwt }) {
  const [data, setData] = useState();

  const url = process.env.NEXT_PUBLIC_BASEURL + fetchQuery;
  const headers = { Authorization: `Bearer ${jwt}` };

  const fetchData = async () => {
    let response;
    if (jwt) {
      response = await axios({ url: url, headers: headers });
    } else {
      response = await axios(url);
    }
    setData(response.data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return data;
}
