import React, { Fragment, useEffect } from "react";

import WelcomeSection from "../Components/WelcomeSection";
import Container from "react-bootstrap/esm/Container";

const MainPage = () => {
  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <Container  >
      <WelcomeSection />
    </Container>
  );
};

export default MainPage;
