import React, { Fragment, useEffect } from "react";

import NavBar from "../Components/UI/MainNavigation";

import WelcomeSection from "../Components/WelcomeSection";
import ClassesSection from "../Components/ClassesSection";
import Classes from "./MainPage.module.css";
import SkillSection from "../Components/SkillSection";

const MainPage = () => {
  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <div className={Classes.container} >

        <WelcomeSection />
        <SkillSection/>
       <ClassesSection />
      
    </div>
  );
};

export default MainPage;
