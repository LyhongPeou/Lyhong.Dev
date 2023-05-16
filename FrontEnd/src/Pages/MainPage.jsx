import React, { Fragment, useEffect } from "react";

import WelcomeSection from "../Components/WelcomeSection";
import ClassesSection from "../Components/ClassesSection";
import { ScrollContainer } from "react-scroll-motion";

const MainPage = () => {
  useEffect(() => {
    document.title = "Home";
  }, []);



  return (
    <ScrollContainer>
   <WelcomeSection/>
   <ClassesSection/>
    </ScrollContainer>
  
  );
};

export default MainPage;
