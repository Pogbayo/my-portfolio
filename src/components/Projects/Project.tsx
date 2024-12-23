import { useState } from "react";
import styles from "./project.module.css";
import { ProjectType, projects } from "../lib/data";

const Project = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(
    null
  );

  const handleCardClick = (project: ProjectType) => {
    setSelectedProject(project); // Set the selected project
  };

  const closeModal = () => {
    setSelectedProject(null); // Close the modal
  };

  return (
    <section className={styles.container} id="project">
      <h2>My Projects</h2>
      <div className={styles.grid}>
        {projects.map((project, index) => (
          <div
            key={index}
            className={styles.card}
            onClick={() => handleCardClick(project)}
          >
            <img src={project.img} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p>{project.skills}</p>
            <div className={styles.links}>
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
              <a
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Source Code
              </a>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <span className={styles.close} onClick={closeModal}>
              &times;
            </span>
            <img src={selectedProject.img} alt={selectedProject.title} />
            <h3>{selectedProject.title}</h3>
            <p>{selectedProject.description}</p>
            <p>{selectedProject.skills}</p>
            <div className={styles.links}>
              <a
                href={selectedProject.liveLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
              <a
                href={selectedProject.codeLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Source Code
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Project;
