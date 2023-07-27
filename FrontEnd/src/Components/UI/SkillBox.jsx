import Card from "react-bootstrap/Card";

const SkillBox = (props) => {
  const { skills } = props;

  return (
    <>
      {skills.map((skill) => {
        return (
          <div className="d-flex flex-row">

            <Card
              style={{ color: "black" }}
              className="bg-dark  text-white"
            >
               <Card.Img variant="top" src={skill.imageURL} title="HTML5" style={{width: "7rem"}} />
              <Card.Body>
                <Card.Title>{skill.name}</Card.Title>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </>
  );
};

export default SkillBox;
