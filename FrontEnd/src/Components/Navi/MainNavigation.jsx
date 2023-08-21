import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Classes from './MainNavigation.module.css';



const MainNavigation = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="lg" fixed="top" variant="dark" className={Classes.navi}>
      
      <Container >
      
        <Navbar.Brand href="/">Lyhong.Dev</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto ">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#classes">Project</Nav.Link>
            <Nav.Link to="/about">About</Nav.Link>
          </Nav>

        </Navbar.Collapse>

      </Container>


    </Navbar>
  );
};
export default MainNavigation;
