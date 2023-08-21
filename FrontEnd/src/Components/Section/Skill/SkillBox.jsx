import Card from "react-bootstrap/Card";
import Classes from "./SkillBox.module.css";
import { useState } from "react";

const SkillBox = (props) => {

  const [show, setShow] = useState(false);

 const handleShow = () =>{

  if (show == true){
    setShow(false)
  } else {
    setShow(true)
  }

  console.log(props)

 }


  const { skills } = props;

  return (
    <div className={Classes.SkillList}>
      {skills.map((skill) => {
        return (
          <div className="d-flex flex-row text-center" onClick={handleShow}>
            <Card style={{ color: "black" }} className="bg-dark  text-white" >
              <Card.Img
                variant="top"
                src={skill.imageURL}
                title= {skill.name}
                style={{ width: "7rem", padding: "1rem" }}
              />
              <Card.Body>
                <Card.Title>{skill.name}</Card.Title>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default SkillBox;
