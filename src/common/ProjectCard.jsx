import React from 'react'

const ProjectCard = ({src,link,h3,p,source,name}) => {
  return (
      
      <a href={link} target="_blank">
        <img className="hover" src={src} alt={`${h3} `} />
        <h3>{h3}</h3>
        <p>{p}</p>
          
      </a>
  );
}

export default ProjectCard
