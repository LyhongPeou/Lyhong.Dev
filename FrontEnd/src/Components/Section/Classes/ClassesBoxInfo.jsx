import React from 'react';
import Card from "react-bootstrap/Card";

const ClassInfoBox = (props) => {

  const { course_code, course_title, credits, description } = props.class;
  return (
    <Card style={{width: '18rem ', color: 'black'}}>
      <Card.Header>{course_title}</Card.Header>
      <Card.Body>
        
        <Card.Subtitle className="mb-2 text-muted">
          Course Code:{course_code}
        </Card.Subtitle>
        <Card.Text>Credit: {credits}</Card.Text>
      </Card.Body>
    </Card>

  );
};

export default ClassInfoBox;
