import Card from "react-bootstrap/Card";
import Classes from "./SkillBox.module.css";

const SkillBox = (props) => {
  const { skills } = props;

  return (
    <div className={Classes.SkillList}>
      {skills.map((skill) => {
        return (
          <div className="d-flex flex-row text-center">
            <Card style={{ color: "black" }} className="bg-dark  text-white" P>
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
