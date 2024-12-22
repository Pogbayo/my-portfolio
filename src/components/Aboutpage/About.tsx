import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./about.module.css";

export const About = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleViewCV = () => {
    navigate("/resume"); // Navigate to the CV details page
    closeModal();
  };

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/Bayo-Flow.pdf"; // The path to where your CV file is stored
    link.download = "Bayo-FLow.pdf"; // The name the file will have when downloaded
    link.click();
    closeModal();
  };

  return (
    <div className={styles.container} id="about">
      <div className={styles.AboutDesc}>
        <h1>Adebayo Olu</h1>
        <p>
          I’m a proficient software developer with experience in React,
          TypeScript, and NextJs, and expertise in frameworks such as Node.js.
          I’m a fast learner who works closely with clients to develop
          efficient, scalable, and user-friendly solutions that address
          real-world challenges. Let's collaborate to bring your ideas to life.
        </p>
        <button className={styles.aboutButton} onClick={openModal}>
          VIEW CV
        </button>
      </div>

      <div className={styles.myImg}>
        <main></main>
      </div>

      {modalOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h3>What would you like to do with the CV?</h3>
            <button onClick={handleViewCV} className={styles.btn}>
              View
            </button>
            <button onClick={handleDownloadCV} className={styles.btn}>
              Download
            </button>
            <button onClick={closeModal} className={styles.btn}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
