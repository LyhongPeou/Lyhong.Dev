import MainPagePicutre from "../assets/HomePage.png";

const WelcomeSection = () => {
  return (
    <section className="flex flex-col flex-wrap m-10 md:mx-52 sm:gap-10 lg:gap-2 2xl:mx-96">
      <p className="font-semibold text-welcome text-center">
          Digital Innovations: Lyhong Peou's Tech Portfolio
        </p>
      <div className="w-3/4 m-auto flex p-auto justify-center">
        <img src={MainPagePicutre} alt="Home Page" width="40%" className="rounded-full" />
      </div>
      <div className=" flex flex-col  justify-center gap-5">
        <p className="font-meduim text-subtext w-fit mr-2">
          Hello and welcome to Lyhong's Tech Portfolio! Here, you can look at
          many interesting projects that Lyhong has worked on thanks to computer
          science classes and real-world practice. You'll see examples of
          website building, computer programs, and working with data. Have fun
          exploring this digital collection and see how learning and doing can
          create great things in technology!{" "}
        </p>
        <p className="font-meduim text-subtext w-fit mr-2">
          You'll see examples of website building, computer programs, and
          working with data. Have fun exploring this digital collection and see
          how learning and doing can create great things in technology!{" "}
        </p>
      </div>
    </section>
  );
};

export default WelcomeSection;
