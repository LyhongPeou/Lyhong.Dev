import React from 'react';

const ClassInfoBox = (props) => {

  const { course_code, course_title, credits, description } = props.class;
  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-full md:w-3/4 lg:w-2/5">
      <div className='flex flex-row justify-between'>
        <h2 className="text-xl font-semibold mb-4">{course_code}</h2>
        <h1 className="text-center">Oregon State University</h1>
      </div>
      <h3 className="text-lg font-medium mb-2">{course_title}</h3>
      <p className="text-sm text-gray-600 mb-4">Credits: {credits}</p>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  );
};

export default ClassInfoBox;
