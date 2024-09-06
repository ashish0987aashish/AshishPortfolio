// import React from "react"
import styles from "./ProjectsStyles.module.css";
import iTodo from "../../assets/iTodo.jpeg";
import PWeather from "../../assets/PWeather.jpeg";
import hipsster from "../../assets/hipsster.png";
import fitLift from "../../assets/fitlift.png";
import ProjectCard from "../../common/ProjectCard";

const Projects = () => {
  return (
    <section id="Projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>

      <div className={styles.projectsContainer}>
        <ProjectCard
          src={iTodo}
          link="https://setlist-seven.vercel.app/"
          h3="iTodo"
          p="Listing App"
        />

        <ProjectCard
          src={PWeather}
          link="https://weatherapp-pied-theta.vercel.app/"
          h3="PWeather"
          p="Weather Application"
          source="https://github.com/ashish0987aashish/weatherapp"
          name= "sourcecode"
        />
      </div>
    </section>
  );
};

export default Projects;
