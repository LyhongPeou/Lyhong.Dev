import { useEffect, useState } from "react";

function useClassSearch() {
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    let ignore = false;
    const controller = new AbortController();

    async function fetchClasses() {
      setLoading(true);
      let body = {};

      try {
        const response = await fetch("http://127.0.0.1:3000/classes", {
          method: "GET",
          signal: controller.signal,
        });

        if (response.status !== 200) {
          console.log("Error: " + response.status);
          setError(true);
        } else {
          setError(false);
          body = await response.json();
        }
      } catch (e) {
        if (e instanceof DOMException) {
          console.log("Fetch aborted");
        } else {
          console.log(e);
          setError(true);
          throw e;
        }
      }

      if (!ignore) {
        setClasses(body.Classes || []);
        setLoading(false);
      }
    }

    fetchClasses();

    return () => {
      ignore = true;
      controller.abort();
    };
  }, []);

  return [classes, loading, error];
}

export default useClassSearch;
