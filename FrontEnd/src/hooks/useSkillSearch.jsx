import { useState, useEffect } from "react";

function useSkillSearch() {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    let ignore = false;
    const controller = new AbortController();

    async function fetchSkills() {
      setLoading(true);
      let body = {};

      try {
        const response = await fetch("http://127.0.0.1:3000/skills", {
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
        setSkills(body.skills || []);
        setLoading(false);
      }
    }

    fetchSkills();

    return () => {
      ignore = true;
      controller.abort();
    };
  }, []);

  return [skills, loading, error];
}

export default useSkillSearch;
