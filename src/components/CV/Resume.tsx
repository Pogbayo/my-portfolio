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
          <li className={styles.cvContactItem}>
            Portfolio:{" "}
            <a
              className={styles.cvContactLink}
              href="https://my-portfolio-z7y1.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://my-portfolio-z7y1.vercel.app/
            </a>
          </li>
          <li className={styles.cvContactItem}>
            LinkedIn:{" "}
            <a
              className={styles.cvContactLink}
              href="https://www.linkedin.com/in/adebayooluwasegun"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.linkedin.com/in/adebayooluwasegun
            </a>
          </li>
        </ul>
      </header>

      {/* Summary Section */}
      <section className={styles.cvSummarySection}>
        <p className={styles.cvSummaryText}>
          I’m a web developer passionate about creating responsive and
          user-friendly websites that solve real-world problems. With over 2
          years of experience, I’ve built and maintained modern web
          applications, focusing on performance, accessibility, and clean code.
          I’m comfortable working with databases, networks, and modern web
          technologies, and I enjoy making complex technical ideas easy to
          understand for people from all backgrounds. What sets me apart is my
          ability to balance strong technical skills with a deep understanding
          of user needs and business goals. Whether it’s debugging code,
          optimizing performance, or collaborating on new features, I thrive in
          fast-paced environments and love the challenge of juggling multiple
          projects to deliver great results.
        </p>
      </section>

      {/* Education Section */}
      <section className={styles.cvEducationSection}>
        <h2 className={styles.cvSectionTitle}>Education</h2>
        <p className={styles.cvInstitution}>
          <strong>Federal University of Ilorin Kwara</strong> - B.A History and
          International Studies (10/2018 - 11/2024)
        </p>
        <p className={styles.cvLocation}>Kwara, Nigeria</p>
      </section>

      {/* Work Experience Section */}
      <section className={styles.cvWorkExperienceSection}>
        <h2 className={styles.cvSectionTitle}>Work Experience</h2>
        <div className={styles.cvJob}>
          <h3 className={styles.cvJobTitle}>Emnet IT</h3>
          <p className={styles.cvJobDate}>
            <em>February 2024/03 - Present</em>
          </p>
          <ul className={styles.cvJobAchievements}>
            <li className={styles.cvAchievement}>
              •Translated Figma and Adobe XD designs into fully functional,
              responsive, and visually appealing web interfaces using React.js,
              TypeScript, and Tailwind CSS.
            </li>
            <li className={styles.cvAchievement}>
              Ensured design consistency and attention to detail, enhancing user
              engagement and delivering interfaces that truly stood out.
            </li>
            <li className={styles.cvAchievement}>
              Improved page load times and website performance by implementing
              lazy loading, code-splitting, and optimizing asset delivery.
            </li>
            <li className={styles.cvAchievement}>
              •Integrated RESTful APIs to fetch, display, and manage dynamic
              data such as search results, real-time content updates, and form
              submissions.
            </li>
          </ul>
        </div>
        <div className={styles.cvJob}>
          <h3 className={styles.cvJobTitle}>APEX BEE</h3>
          <p className={styles.cvJobDate}>
            <em>2023/01 - 2024/02</em>
          </p>
          <ul className={styles.cvJobAchievements}>
            <li className={styles.cvAchievement}>
              Designed a simple and scalable hosting architecture based on
              Elastic Beanstalk for a client experiencing significant growth and
              slow response times.
            </li>
            <li className={styles.cvAchievement}>
              Described my proposed architecture in plain language ensuring my
              client understood how it works and how costs will be calculated
              for it.
            </li>
            <li className={styles.cvAchievement}>
              Designed and maintained API’s fetching billions of data points
              related to patient health information resulting in continuous
              availability for customers.
            </li>
          </ul>
        </div>
        <div className={styles.cvJob}>
          <h3 className={styles.cvJobTitle}>
            Technical Support - LUTATECH (INTERN)
          </h3>
          <p className={styles.cvJobDate}>
            <em>August 2022 - December 2022</em>
          </p>
          <ul className={styles.cvJobAchievements}>
            <li className={styles.cvAchievement}>
              Provided expert technical support and guidance for web-based
              applications, assisting clients in navigating and utilizing their
              platforms effectively.
            </li>
            <li className={styles.cvAchievement}>
              Analyzed and troubleshot complex user-reported issues using
              diagnostic tools and techniques,identifying root causes, and
              implementing tailored, effective solutions.
            </li>
            <li className={styles.cvAchievement}>
              Monitored website performance and user feedback to identify areas
              for improvement.
            </li>
            <li className={styles.cvAchievement}>
              Oversaw the development, deployment, and optimization of web
              applications, ensuring they are secure, scalable, and performant
              to meet both user expectations and business requirements.
            </li>
            <li className={styles.cvAchievement}>
              Continuously enhanced the reliability and functionality of web
              applications, prioritizing user satisfaction and delivering
              seamless performance across various platforms.
            </li>
            <li className={styles.cvAchievement}>
              Collaborated with cross-functional teams to design and implement
              tailored web development solutions that meet specific client
              needs, enhancing user experience and functionality across their
              websites and applications.
            </li>
            <li className={styles.cvAchievement}>
              Led training sessions and workshops for clients and team members
              on best practices for web development tools and frameworks,
              fostering greater understanding and effective utilization of
              modern web technologies.
            </li>
            <li className={styles.cvAchievement}>
              Assisted in migrating client websites and data to modern platforms
              or content management systems, ensuring data integrity and minimal
              disruption to business operations during the transition process.
            </li>
          </ul>
        </div>
      </section>

      <section className={styles.cvCertificatesSection}>
        <h2 className={styles.cvSectionTitle}>Certifications</h2>
        <ul className={styles.cvCertificatesList}>
          <li className={styles.cvCertificate}>
            FreeCodeCamp Front-End Web Developer - November 2023
          </li>
          <li className={styles.cvCertificate}>
            Front-End Engineer Career Path - March 2024
          </li>
        </ul>
      </section>

      <section className={styles.cvSkillsSection}>
        <h2 className={styles.cvSectionTitle}>Skills</h2>
        <ul className={styles.cvSkillsList}>
          <li className={styles.cvSkill}>HTML</li>
          <li className={styles.cvSkill}>CSS</li>
          <li className={styles.cvSkill}>JavaScript</li>
          <li className={styles.cvSkill}>Bootstrap</li>
          <li className={styles.cvSkill}>React</li>
          <li className={styles.cvSkill}>MongoDB</li>
          <li className={styles.cvSkill}>TypeScript</li>
          <li className={styles.cvSkill}>Next.js</li>
          <li className={styles.cvSkill}>Node.js</li>
        </ul>
      </section>

      <section className={styles.cvLanguagesSection}>
        <h2 className={styles.cvSectionTitle}>Languages</h2>
        <ul className={styles.cvLanguagesList}>
          <li className={styles.cvLanguage}>Yoruba - Native</li>
          <li className={styles.cvLanguage}>English - Native</li>
          <li className={styles.cvLanguage}>French - Beginner</li>
        </ul>
      </section>
    </div>
  );
};
