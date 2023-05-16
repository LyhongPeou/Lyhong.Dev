import Container from "react-bootstrap/esm/Container";
import classes  from "./WelcomeSection.module.css"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const WelcomeSection = () => {
  return (
    <Container className="d-flex flex-column justify-content-center"  style={{ height: '90vh', gap: "5rem"  }}>
      
      <div className="d-flex flex-column align-items-start" >
        
        <div>
          <h1 className={classes.title_welcome}> Hello I am<br/></h1>
          <h1 className={classes.title_dev}>Lyhong <br/> Peou</h1>
        </div>
        
          
        
        <div>
          <p className={classes.subtitle_welcome}>
           An aspiring full-stack web developer with a passion for learning and creating. <br/>
           In this website, you will find my projects and my resume. <br/>
          </p>

        </div>
        
      </div>
        
        
    </Container>
  );
};

export default WelcomeSection;
