import Container from "react-bootstrap/esm/Container";
import MainPagePicutre from "../assets/HomePage.png";
import Image from "react-bootstrap/Image";

const WelcomeSection = () => {
  return (
    <Container className="d-flex flex-column justify-content-center "  style={{ height: '90vh', gap: "5rem"  }}>
      
        <div >
          <h1 className="text-center my-5">
            Digital Innovations: Lyhong Peou's Tech Portfolio
          </h1>
          <div className="d-flex justify-content-center">
            <Image
              src={MainPagePicutre}
              width="35%"
              alt="Home Page"
              roundedCircle
            />
          </div>
        </div>
        <div >
          <p className="text-justify">
            Hello and welcome to Lyhong's Tech Portfolio! Here, you can look at
            many interesting projects that Lyhong has worked on thanks to computer
            science classes and real-world practice. You'll see examples of
            website building, computer programs, and working with data. Have fun
            exploring this digital collection and see how learning and doing can
            create great things in technology!{" "}
          </p>
          <p className="text-justify">
            You'll see examples of website building, computer programs, and
            working with data. Have fun exploring this digital collection and see
            how learning and doing can create great things in technology!{" "}
          </p>
        </div>
      
    </Container>
  );
};

export default WelcomeSection;
