import styles from "./skill.module.css";
import { FaHtml5 } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import { BiLogoNetlify } from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";

export const Skill = () => {
  return (
    <div className={styles.container} id="skill">
      <h1 className={styles.header}>Skills</h1>
      <p className={styles.para}>
        Here are some of my skills on which I have been working on for the past
        3 years.
      </p>
      <section className={styles.boxDiv}>
        <div className={styles.box}>
          <h1 style={{ color: "white" }}>Frontend</h1>
          <div className={styles.techBox}>
            <div className={styles.techItem}>
              <FaHtml5 color="red" size={30} />
              <p>HTML 5</p>
            </div>
            <div className={styles.techItem}>
              <FaCss3Alt color="blue" size={30} />

              <p>CSS</p>
            </div>
            <div className={styles.techItem}>
              <FaBootstrap color="purple" size={30} />
              <p>Bootstrap</p>
            </div>
            <div className={styles.techItem}>
              <RiTailwindCssFill color="skyblue" size={30} />
              <p>Tailwind</p>
            </div>
            <div className={styles.techItem}>
              <FaJs color="yellow" size={30} />
              <p>Javascript</p>
            </div>
            <div className={styles.techItem}>
              <FaReact color="skyblue" size={30} />
              <p>REACT JS</p>
            </div>
            <div className={styles.techItem}>
              <SiTypescript color="blue" size={30} />
              <p>Typescript</p>
            </div>
            <div className={styles.techItem}>
              <SiNextdotjs color="white" size={30} />
              <p>NEXT JS</p>
            </div>
          </div>
        </div>
        <div className={styles.box}>
          <h1 style={{ color: "white" }}>Backend</h1>
          <div className={styles.techBox}>
            <div className={styles.techItem}>
              <FaNodeJs color="green" size={30} />
              <p>NodeJs</p>
            </div>
            <div className={styles.techItem}>
              <SiMongodb color="white" size={30} />
              <p>MongoDb</p>
            </div>
          </div>
        </div>
        <div className={styles.box}>
          <h1 style={{ color: "white" }}>Others</h1>
          <div className={styles.techBox}>
            <div className={styles.techItem}>
              <FaGithub color="white" size={30} />
              <p>GitHub</p>
            </div>
            <div className={styles.techItem}>
              <BiLogoNetlify color="green" size={30} />
              <p>Netlify</p>
            </div>
            <div className={styles.techItem}>
              <IoLogoVercel color="white" size={30} />
              <p>Vercel</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
