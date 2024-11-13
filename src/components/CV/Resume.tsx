import styles from "./Resume.module.css";
import { useNavigate } from "react-router-dom"; // For navigation if you're using React Router

export const Resume: React.FC = () => {
  const navigate = useNavigate(); // useNavigate hook for navigation

  const handleHomeButtonClick = () => {
    navigate("/"); // Navigates to the homepage
  };

  return (
    <div className={styles.cvContainer}>
      <button onClick={handleHomeButtonClick} className={styles.homeButton}>
        Home
      </button>
      <header className={styles.cvHeader}>
        <h1 className={styles.cvName}>Adebayo Oluwasegun</h1>
        <p className={styles.cvTitle}>Frontend Developer</p>
        <ul className={styles.cvContactInfo}>
          <li className={styles.cvContactItem}>
            Email:{" "}
            <a
              className={styles.cvContactLink}
              href="mailto:adebayooluwasegun335@gmail.com"
            >
              adebayooluwasegun335@gmail.com
            </a>
          </li>
          <li className={styles.cvContactItem}>Phone: 09134584072</li>
          <li className={styles.cvContactItem}>
            Location: 34 Idafa Keta, Maya, Ikorodu, Lagos, Nigeria
          </li>
          <li className={styles.cvContactItem}>
            <a
              className={styles.cvSocialLink}
              href="https://twitter.com/declan_spag"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>{" "}
            |
            <a
              className={styles.cvSocialLink}
              href="https://github.com/Pogbayo"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              GitHub
            </a>{" "}
            |
            <a
              className={styles.cvSocialLink}
              href="https://instagram.com/declan_spag"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Instagram
            </a>
          </li>
        </ul>
      </header>

      {/* Summary Section */}
      <section className={styles.cvSummarySection}>
        <p className={styles.cvSummaryText}>
          <em>
            Creative Frontend Developer skilled in ReactJS, NextJs, and
            TypeScript, with a passion for crafting intuitive user interfaces.
            Successfully led a project that enhanced website accessibility,
            resulting in a 30% increase in user engagement.
          </em>
        </p>
      </section>

      {/* Education Section */}
      <section className={styles.cvEducationSection}>
        <h2 className={styles.cvSectionTitle}>Education</h2>
        <p className={styles.cvInstitution}>
          <strong>University of Ilorin</strong> - History & International
          Studies (11/2018 - 11/2023)
        </p>
        <p className={styles.cvLocation}>Kwara, Nigeria</p>
      </section>

      {/* Work Experience Section */}
      <section className={styles.cvWorkExperienceSection}>
        <h2 className={styles.cvSectionTitle}>Work Experience</h2>
        <div className={styles.cvJob}>
          <h3 className={styles.cvJobTitle}>
            Frontend Intern - Risenphoenix Org
          </h3>
          <p className={styles.cvJobDate}>
            <em>03/2023 - 07/2023, Lagos</em>
          </p>
          <ul className={styles.cvJobAchievements}>
            <li className={styles.cvAchievement}>
              Assisted in developing a single-page application, reducing load
              time by 40%.
            </li>
            <li className={styles.cvAchievement}>
              Implemented best practices for code quality and performance.
            </li>
          </ul>
        </div>
        <div className={styles.cvJob}>
          <h3 className={styles.cvJobTitle}>Freelancer - Web Food Cart</h3>
          <p className={styles.cvJobDate}>
            <em>03/2023, Lagos</em>
          </p>
          <ul className={styles.cvJobAchievements}>
            <li className={styles.cvAchievement}>
              Developed a web food cart application with a streamlined ordering
              process, showcasing frontend design and backend functionality for
              e-commerce.
            </li>
          </ul>
        </div>
      </section>

      {/* Skills Section */}
      <section className={styles.cvSkillsSection}>
        <h2 className={styles.cvSectionTitle}>Skills</h2>
        <ul className={styles.cvSkillsList}>
          <li className={styles.cvSkill}>HTML</li>
          <li className={styles.cvSkill}>CSS</li>
          <li className={styles.cvSkill}>JavaScript</li>
          <li className={styles.cvSkill}>Bootstrap</li>
          <li className={styles.cvSkill}>ReactJS</li>
          <li className={styles.cvSkill}>NextJS</li>
          <li className={styles.cvSkill}>TypeScript</li>
          <li className={styles.cvSkill}>Zod</li>
          <li className={styles.cvSkill}>MongoDB</li>
        </ul>
      </section>

      {/* Personal Projects Section */}
      <section className={styles.cvProjectsSection}>
        <h2 className={styles.cvSectionTitle}>Personal Projects</h2>
        <div className={styles.cvProject}>
          <h3 className={styles.cvProjectTitle}>WEB3 Presale Landing Page</h3>
          <p className={styles.cvProjectDate}>
            <em>04/2024</em>
          </p>
          <p className={styles.cvProjectDescription}>
            Designed and implemented a landing page with wallet connectivity and
            form validation for user onboarding.
          </p>
        </div>
        <div className={styles.cvProject}>
          <h3 className={styles.cvProjectTitle}>Football Quiz App</h3>
          <p className={styles.cvProjectDate}>
            <em>05/2024</em>
          </p>
          <p className={styles.cvProjectDescription}>
            Created a football quiz app to engage users in testing their
            knowledge, achieving 80% user satisfaction.
          </p>
        </div>
        <div className={styles.cvProject}>
          <h3 className={styles.cvProjectTitle}>Task Management App</h3>
          <p className={styles.cvProjectDate}>
            <em>06/2023 - 12/2023</em>
          </p>
          <p className={styles.cvProjectDescription}>
            Built a task management app using React.js to help users organize
            daily tasks effectively.
          </p>
        </div>
        <div className={styles.cvProject}>
          <h3 className={styles.cvProjectTitle}>Full-Stack Blog App</h3>
          <p className={styles.cvProjectDate}>
            <em>07/2024</em>
          </p>
          <p className={styles.cvProjectDescription}>
            Developed a blog app with user and admin functionalities, using
            MongoDB with Mongoose for secure data handling.
          </p>
        </div>
      </section>

      {/* Certificates Section */}
      <section className={styles.cvCertificatesSection}>
        <h2 className={styles.cvSectionTitle}>Certificates</h2>
        <p className={styles.cvCertificate}>
          <strong>CyberFlux Atlas Silver Role Certification</strong> - 12/2023
        </p>
      </section>

      {/* Languages Section */}
      <section className={styles.cvLanguagesSection}>
        <h2 className={styles.cvSectionTitle}>Languages</h2>
        <ul className={styles.cvLanguagesList}>
          <li className={styles.cvLanguage}>English (90/100)</li>
          <li className={styles.cvLanguage}>Yoruba (70/100)</li>
          <li className={styles.cvLanguage}>French (50/100)</li>
        </ul>
      </section>

      {/* Interests Section */}
      <section className={styles.cvInterestsSection}>
        <h2 className={styles.cvSectionTitle}>Interests</h2>
        <p className={styles.cvInterestDescription}>
          Playing Football, Reading, Coding, Learning new things daily
        </p>
      </section>
    </div>
  );
};
