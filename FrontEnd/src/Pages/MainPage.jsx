import React, { useEffect } from "react";

import WelcomeSection from "../Components/UI/WelcomeSection";

const MainPage = () => {
  useEffect(() => {
    document.title = "Home";
  }, []);



  return (
    <>
    <WelcomeSection/>
    </>
  
  );
};

export default MainPage;
