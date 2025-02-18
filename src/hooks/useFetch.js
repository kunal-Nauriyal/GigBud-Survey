import { useState, useEffect } from "react";
import axios from "axios";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => setData(response.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading, error };
}