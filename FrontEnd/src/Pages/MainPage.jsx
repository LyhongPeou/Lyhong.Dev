import React, { Fragment, useEffect } from "react";

import WelcomeSection from "../Components/WelcomeSection";
import ClassesSection from "../Components/ClassesSection";

const MainPage = () => {
  useEffect(() => {
    document.title = "Home";
  }, []);



  return (
    <Fragment>
    <WelcomeSection/>
    <ClassesSection/>
    </Fragment>
  
  );
};

export default MainPage;
