import React, { useState, useEffect } from "react";
import axios from "axios";

export default function useFetchData(fetchQuery) {
  const [data, setData] = useState();
  const fetchData = async () => {
    const response = await axios.get(
      process.env.NEXT_PUBLIC_BASEURL + fetchQuery
    );
    setData(response.data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return data;
}
