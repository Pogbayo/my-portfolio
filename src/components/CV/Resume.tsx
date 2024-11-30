// import styles from "./Resume.module.css";
// import { useNavigate } from "react-router-dom"; // For navigation if you're using React Router

// export const Resume: React.FC = () => {
//   const navigate = useNavigate(); // useNavigate hook for navigation

//   const handleHomeButtonClick = () => {
//     navigate("/"); // Navigates to the homepage
//   };

//   return (
//     <div className={styles.cvContainer}>
//       <button onClick={handleHomeButtonClick} className={styles.homeButton}>
//         Home
//       </button>
//       <header className={styles.cvHeader}>
//         <h1 className={styles.cvName}>Adebayo Oluwasegun</h1>
//         <p className={styles.cvTitle}>Frontend Developer</p>
//         <ul className={styles.cvContactInfo}>
//           <li className={styles.cvContactItem}>
//             Email:{" "}
//             <a
//               className={styles.cvContactLink}
//               href="mailto:adebayooluwasegun335@gmail.com"
//             >
//               adebayooluwasegun335@gmail.com
//             </a>
//           </li>
//           <li className={styles.cvContactItem}>Phone: 09134584072</li>
//           <li className={styles.cvContactItem}>
//             Location: 34 Idafa Keta, Maya, Ikorodu, Lagos, Nigeria
//           </li>
//           <li className={styles.cvContactItem}>
//             <a
//               className={styles.cvSocialLink}
//               href="https://twitter.com/declan_spag"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Twitter
//             </a>{" "}
//             |
//             <a
//               className={styles.cvSocialLink}
//               href="https://github.com/Pogbayo"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               {" "}
//               GitHub
//             </a>{" "}
//             |
//             <a
//               className={styles.cvSocialLink}
//               href="https://instagram.com/declan_spag"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               {" "}
//               Instagram
//             </a>
//           </li>
//         </ul>
//       </header>

//       {/* Summary Section */}
//       <section className={styles.cvSummarySection}>
//         <p className={styles.cvSummaryText}>
//           <em>
//             Creative Frontend Developer skilled in ReactJS, NextJs, and
//             TypeScript, with a passion for crafting intuitive user interfaces.
//             Successfully led a project that enhanced website accessibility,
//             resulting in a 30% increase in user engagement.
//           </em>
//         </p>
//       </section>

//       {/* Education Section */}
//       <section className={styles.cvEducationSection}>
//         <h2 className={styles.cvSectionTitle}>Education</h2>
//         <p className={styles.cvInstitution}>
//           <strong>University of Ilorin</strong> - History & International
//           Studies (11/2018 - 11/2023)
//         </p>
//         <p className={styles.cvLocation}>Kwara, Nigeria</p>
//       </section>

//       {/* Work Experience Section */}
//       <section className={styles.cvWorkExperienceSection}>
//         <h2 className={styles.cvSectionTitle}>Work Experience</h2>
//         <div className={styles.cvJob}>
//           <h3 className={styles.cvJobTitle}>
//             Frontend Intern - Risenphoenix Org
//           </h3>
//           <p className={styles.cvJobDate}>
//             <em>03/2023 - 07/2023, Lagos</em>
//           </p>
//           <ul className={styles.cvJobAchievements}>
//             <li className={styles.cvAchievement}>
//               Assisted in developing a single-page application, reducing load
//               time by 40%.
//             </li>
//             <li className={styles.cvAchievement}>
//               Implemented best practices for code quality and performance.
//             </li>
//           </ul>
//         </div>
//         <div className={styles.cvJob}>
//           <h3 className={styles.cvJobTitle}>Freelancer - Web Food Cart</h3>
//           <p className={styles.cvJobDate}>
//             <em>03/2023, Lagos</em>
//           </p>
//           <ul className={styles.cvJobAchievements}>
//             <li className={styles.cvAchievement}>
//               Developed a web food cart application with a streamlined ordering
//               process, showcasing frontend design and backend functionality for
//               e-commerce.
//             </li>
//           </ul>
//         </div>
//       </section>

//       {/* Skills Section */}
//       <section className={styles.cvSkillsSection}>
//         <h2 className={styles.cvSectionTitle}>Skills</h2>
//         <ul className={styles.cvSkillsList}>
//           <li className={styles.cvSkill}>HTML</li>
//           <li className={styles.cvSkill}>CSS</li>
//           <li className={styles.cvSkill}>JavaScript</li>
//           <li className={styles.cvSkill}>Bootstrap</li>
//           <li className={styles.cvSkill}>ReactJS</li>
//           <li className={styles.cvSkill}>NextJS</li>
//           <li className={styles.cvSkill}>TypeScript</li>
//           <li className={styles.cvSkill}>Zod</li>
//           <li className={styles.cvSkill}>MongoDB</li>
//         </ul>
//       </section>

//       {/* Personal Projects Section */}
//       <section className={styles.cvProjectsSection}>
//         <h2 className={styles.cvSectionTitle}>Personal Projects</h2>
//         <div className={styles.cvProject}>
//           <h3 className={styles.cvProjectTitle}>WEB3 Presale Landing Page</h3>
//           <p className={styles.cvProjectDate}>
//             <em>04/2024</em>
//           </p>
//           <p className={styles.cvProjectDescription}>
//             Designed and implemented a landing page with wallet connectivity and
//             form validation for user onboarding.
//           </p>
//         </div>
//         <div className={styles.cvProject}>
//           <h3 className={styles.cvProjectTitle}>Football Quiz App</h3>
//           <p className={styles.cvProjectDate}>
//             <em>05/2024</em>
//           </p>
//           <p className={styles.cvProjectDescription}>
//             Created a football quiz app to engage users in testing their
//             knowledge, achieving 80% user satisfaction.
//           </p>
//         </div>
//         <div className={styles.cvProject}>
//           <h3 className={styles.cvProjectTitle}>Task Management App</h3>
//           <p className={styles.cvProjectDate}>
//             <em>06/2023 - 12/2023</em>
//           </p>
//           <p className={styles.cvProjectDescription}>
//             Built a task management app using React.js to help users organize
//             daily tasks effectively.
//           </p>
//         </div>
//         <div className={styles.cvProject}>
//           <h3 className={styles.cvProjectTitle}>Full-Stack Blog App</h3>
//           <p className={styles.cvProjectDate}>
//             <em>07/2024</em>
//           </p>
//           <p className={styles.cvProjectDescription}>
//             Developed a blog app with user and admin functionalities, using
//             MongoDB with Mongoose for secure data handling.
//           </p>
//         </div>
//       </section>

//       {/* Certificates Section */}
//       <section className={styles.cvCertificatesSection}>
//         <h2 className={styles.cvSectionTitle}>Certificates</h2>
//         <p className={styles.cvCertificate}>
//           <strong>CyberFlux Atlas Silver Role Certification</strong> - 12/2023
//         </p>
//       </section>

//       {/* Languages Section */}
//       <section className={styles.cvLanguagesSection}>
//         <h2 className={styles.cvSectionTitle}>Languages</h2>
//         <ul className={styles.cvLanguagesList}>
//           <li className={styles.cvLanguage}>English (90/100)</li>
//           <li className={styles.cvLanguage}>Yoruba (70/100)</li>
//           <li className={styles.cvLanguage}>French (50/100)</li>
//         </ul>
//       </section>

//       <section className={styles.cvInterestsSection}>
//         <h2 className={styles.cvSectionTitle}>Interests</h2>
//         <p className={styles.cvInterestDescription}>
//           Playing Football, Reading, Coding, Learning new things daily
//         </p>
//       </section>
//     </div>
//   );
// };

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
          user-friendly websites that solve real-world problems. With over a
          year of experience, I’ve built and maintained modern web applications,
          focusing on performance, accessibility, and clean code. I’m
          comfortable working with databases, networks, and modern web
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
          <h3 className={styles.cvJobTitle}>
            Human Resources Associate - Nestle NG
          </h3>
          <p className={styles.cvJobDate}>
            <em>07/2024 - 11/2024, Lagos</em>
          </p>
          <ul className={styles.cvJobAchievements}>
            <li className={styles.cvAchievement}>
              Communicated with clients and customers to understand their needs
              and provide relevant economic insights.
            </li>
            <li className={styles.cvAchievement}>
              Explained economic trends and their potential impact to customers
              of various backgrounds.
            </li>
            <li className={styles.cvAchievement}>
              Attended conferences, workshops, and training sessions to enhance
              skills and knowledge.
            </li>
            <li className={styles.cvAchievement}>
              Gathering and analyzing data from various sources, including
              economic indicators, financial reports, and market surveys
            </li>
          </ul>
        </div>
        <div className={styles.cvJob}>
          <h3 className={styles.cvJobTitle}>
            AWS APAC Solutions Architecture virtual experience program on Forage{" "}
          </h3>
          <p className={styles.cvJobDate}>
            <em> April 2022</em>
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
          <h3 className={styles.cvJobTitle}>Technical Support - APEX BEE</h3>
          <p className={styles.cvJobDate}>
            <em>04/2024 - 10/2024, Lagos</em>
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

      {/* Volunteer Section */}
      <section className={styles.cvVolunteerSection}>
        <h2 className={styles.cvSectionTitle}>Volunteer</h2>
        <div className={styles.cvVolunteer}>
          <h3 className={styles.cvVolunteerTitle}>
            Volunteer Human Development Community Project
          </h3>
          <p className={styles.cvVolunteerDate}>
            <em>08/2022 - 12/2022, Federal University of Ilorin</em>
          </p>
          <ul className={styles.cvVolunteerAchievements}>
            <li className={styles.cvAchievement}>
              Led a team of students and local community members to design and
              implement sustainable practices.
            </li>
            <li className={styles.cvAchievement}>
              Organized workshops for community members, resulting in a 30%
              increase in awareness and adoption of sustainable practices.
            </li>
          </ul>
        </div>
        <div className={styles.cvVolunteer}>
          <h3 className={styles.cvVolunteerTitle}>
            Global Cleanup Day - Idumota Lagos Island
          </h3>
          <p className={styles.cvVolunteerDate}>
            <em>09/2023</em>
          </p>
          <ul className={styles.cvVolunteerAchievements}>
            <li className={styles.cvAchievement}>
              Participated in a local environmental clean-up campaign.
            </li>
            <li className={styles.cvAchievement}>
              Led educational sessions on waste segregation and recycling.
            </li>
          </ul>
        </div>
      </section>

      {/* Certifications Section */}
      <section className={styles.cvCertificatesSection}>
        <h2 className={styles.cvSectionTitle}>Certifications</h2>
        <ul className={styles.cvCertificatesList}>
          <li className={styles.cvCertificate}>
            AWS Certified Cloud Practitioner - February 2023
          </li>
          <li className={styles.cvCertificate}>
            FreeCodeCamp Front-End Web Developer - November 2023
          </li>
          <li className={styles.cvCertificate}>
            Front-End Engineer Career Path - March 2024
          </li>
        </ul>
      </section>

      {/* Skills Section */}
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

      {/* Interests Section */}
      <section className={styles.cvInterestsSection}>
        <h2 className={styles.cvSectionTitle}>Interests</h2>
        <ul className={styles.cvInterestsList}>
          <li className={styles.cvInterest}>Nature & Wildlife Conservation</li>
          <li className={styles.cvInterest}>Child Education</li>
          <li className={styles.cvInterest}>Zero Hunger</li>
          <li className={styles.cvInterest}>No Poverty</li>
        </ul>
      </section>

      {/* Languages Section */}
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
