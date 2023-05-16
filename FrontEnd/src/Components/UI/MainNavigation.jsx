import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const MainNavigation = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="lg" variant="dark">
      
      <Container className="">
      
        <Navbar.Brand as={Link}to="/">Lyhong.Dev</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto ">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/projects">Classes</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
          </Nav>

        </Navbar.Collapse>

      </Container>


    </Navbar>
  );
};
export default MainNavigation;
