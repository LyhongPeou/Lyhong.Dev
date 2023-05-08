import React, { useEffect } from "react";
import MainPagePicutre from "../assets/HomePage.png";

const MainPage = () => {
  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <div className="flex flex-row flex-wrap mx-10 sm:gap-10 lg:gap-0 m-46">
      <div className="lg:w-2/5 sm:w-full flex flex-col  justify-center gap-5">
        <p className="font-semibold text-welcome">
          
          Digital Innovations: Lyhong Peou's Tech Portfolio
        </p>

        <p className="font-meduim text-subtext w-fit mr-2">
          Hello and welcome to Lyhong's Tech Portfolio! Here, you can look at
          many interesting projects that Lyhong has worked on thanks to computer
          science classes and real-world practice. You'll see examples of
          website building, computer programs, and working with data. Have fun
          exploring this digital collection and see how learning and doing can
          create great things in technology!{" "}
        </p>
        <p className="font-meduim text-subtext w-fit mr-2">
        You'll see examples of
          website building, computer programs, and working with data. Have fun
          exploring this digital collection and see how learning and doing can
          create great things in technology!{" "}
        </p>
        
      </div>
      <div className="sm:w-ful md:3/5 lg:w-3/5 flex p-auto justify-center">
        <img
          src={MainPagePicutre}
          alt="Home Page"
          width="60%"
          height="50%"
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default MainPage;
