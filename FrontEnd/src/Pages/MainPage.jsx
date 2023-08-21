import React, { Fragment, useEffect } from "react";



import WelcomeSection from "../Components/Section/Welcome/WelcomeSection";
import ClassesSection from "../Components/Section/Classes/ClassesSection";
import Classes from "./MainPage.module.css";
import SkillSection from "../Components/Section/Skill/SkillSection";

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
