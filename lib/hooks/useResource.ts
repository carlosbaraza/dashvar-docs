import { useEffect, useState } from "react";

export const useResource = <T>(url: string) => {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    async function getData() {
      setLoading(true);
      try {
        const res = await fetch(url);
        if (res.ok) {
          const newData = await res.json();
          setData(newData);
        } else {
          console.error(await res.json());
          setError(new Error("The resource could not be fetched"));
        }
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    }
    getData();
  }, [url]);

  return { data, loading, error };
};
