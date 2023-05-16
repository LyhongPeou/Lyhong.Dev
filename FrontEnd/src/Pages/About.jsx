import React, { useEffect } from "react";

const AboutPage = () => {
  useEffect(() => {
    document.title = "About";
  }, []);

  return (
    <div className="">
      <h1>About Page</h1>
    </div>
  );
};

export default AboutPage;
