import styles from "./footer.module.css";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

export const Footer = () => {
  return (
    <div className={styles.container}>
      <section className={styles.sec}>
        <p>Adebayo</p>
        <ul className={styles.NavUl}>
          <li>
            <a href="#about">ABOUT</a>
          </li>
          <li>
            <a href="#experience">EXPERIENCE</a>
          </li>
          <li>
            <a href="#project">PROJECTS</a>
          </li>
          <li>
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
        <div className={styles.logoDiv}>
          <FaSquareTwitter size={30} color="black" />
          <FaLinkedin size={30} color="blue" />
          <FaWhatsapp size={30} color="green" />
          <FaGithub size={30} />
        </div>
        <footer>© 2024 Adesanya Adebayo. All rights reserved.</footer>
      </section>
    </div>
  );
};
