import styles from "./experience.module.css";
import { ExperienceData } from "../lib/data";
export const Experience = () => {
  return (
    <div className={styles.container} id="experience">
      <h1>Experience</h1>
      {/* <p className={styles.pTag}>
        My work experience as a software engineer and working on different
        companies and projects.
      </p> */}
      <div className={styles.experienceBox}>
        {ExperienceData.map((data, index) => {
          return (
            <div className={styles.box} key={index}>
              <div className={styles.upperDivInBox}>
                <div className={styles.imgDiv}>
                  <img src={data.img} alt="" />
                </div>
                <div className={styles.textDiv}>
                  <h1>{data.Header}</h1>
                  <p>{data.headerText}</p>
                  <small>{data.headerDate}</small>
                </div>
              </div>
              <div className={styles.middleDiv}>{data.mainText}</div>
              <div className={styles.lowerDiv}>Skillls: {data.skills}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
