import React, { useEffect } from 'react';

const ProjectPage = () => {


    useEffect(() => {
        document.title = "Projects"
     }, []);

    return(

        
        <div className="flex m-10">
            <h2> Project Page </h2>
        
        </div>
    )


}

export default ProjectPage