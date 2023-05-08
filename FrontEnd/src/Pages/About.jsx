import React, { useEffect } from "react";

const AboutPage = () => {
  useEffect(() => {
    document.title = "About";
  }, []);

  return (
    <div className="flex m-10">
      <h1>About Page</h1>
    </div>
  );
};

export default AboutPage;
