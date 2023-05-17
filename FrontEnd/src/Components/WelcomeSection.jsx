import Container from "react-bootstrap/esm/Container";
import Classes  from "./WelcomeSection.module.css"
import NavBar from "./UI/MainNavigation";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const WelcomeSection = () => {
  return (
    
    <section className={Classes.section1} id="home">

    <NavBar />


    <Container className= "section">
      
      <div className="d-flex flex-column align-items-start" >
        
        
        <div>
          <h1 className={Classes.title_welcome}> Hello I am<br/></h1>
          <h1 className={Classes.title_dev}>Lyhong <br/> Peou</h1>
        </div>
        
          
        
        <div>
          <p className={Classes.subtitle_welcome}>
           An aspiring full-stack web developer with a passion for learning and creating. <br/>
           In this website, you will find my projects and my resume. <br/>
          </p>

        </div>
        
      </div>


      </Container>
        
        
    </section>


    
  );
};

export default WelcomeSection;
