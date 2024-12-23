import { useState, useEffect, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./about.module.css";

export const About = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  // Typing effect states
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(100); // Reduced initial delta for faster typing
  const toRotate = useMemo(() => ["NextJs developer", "Software engineer"], []);
  const period = 1000; // Reduced period for faster pause between cycles

  // Typing effect logic using useCallback
  const tick = useCallback(() => {
    const i = loopNum % toRotate.length;
    const fullText = toRotate[i];
    const updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(50); // Faster speed during deletion
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum((prev) => prev + 1);
      setDelta(100); // Reset to faster typing speed
    }
  }, [loopNum, isDeleting, text, toRotate, period]);

  // Typing effect useEffect
  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [delta, tick]);

  // Modal handlers
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

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
        <p>
          <span className="txt-rotate">
            <span className="wrap">
              <span className={styles.h1}>
                Hi, I'm <br /> Adebayo Oluwasegun
              </span>{" "}
              <br />
              <p className={styles.texting}>
                <span className={styles.yourname}>Your next</span> {text}
              </p>
            </span>
          </span>
        </p>
        <p className={styles.aboutText}>
          I am a proficient software developer with experience in React,
          TypeScript, and NextJs, and expertise in frameworks such as Node.js. I
          am a fast learner who works closely with clients to develop efficient,
          scalable, and user-friendly solutions that address real-world
          challenges. Let's collaborate to bring your ideas to life.
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
