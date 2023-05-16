import React from 'react';

const ClassInfoBox = (props) => {

  const { course_code, course_title, credits, description } = props.class;
  return (
    <div >
      <div >
        <h2 >{course_code}</h2>
        <h1 >Oregon State University</h1>
      </div>
      <h3 >{course_title}</h3>
      <p >Credits: {credits}</p>
      <p >{description}</p>
    </div>
  );
};

export default ClassInfoBox;
