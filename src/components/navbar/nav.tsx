import { useState } from "react";
import styles from "./nav.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { SiDynatrace } from "react-icons/si";
const Navbar = () => {
  const [hamburger, setHamburger] = useState<boolean>(false);

  const showHamburger = () => {
    setHamburger(true);
  };
  const closeHamburger = () => {
    setHamburger(false);
  };
  return (
    <div className={styles.container}>
      <header className={styles.navHeader}>
        {hamburger ? (
          <>
            <h1>
              <SiDynatrace />

              <i className={styles.nameLogo}>Adebayo</i>
            </h1>
            <div className={styles.hamburger} onClick={showHamburger}>
              <GiHamburgerMenu size={40} />{" "}
            </div>
            <div className={styles.hamburgerMenu}>
              <div className={styles.closeDiv}>
                <button className={styles.closeButton} onClick={closeHamburger}>
                  X
                </button>
              </div>
              <nav className={styles.hamNav}>
                <ul className={styles.hamNavUl}>
                  <li>
                    <a href="#about" onClick={closeHamburger}>
                      ABOUT
                    </a>
                  </li>
                  <li>
                    <a href="#experience" onClick={closeHamburger}>
                      EXPERIENCE
                    </a>
                  </li>
                  <li>
                    <a href="#project" onClick={closeHamburger}>
                      PROJECTS
                    </a>
                  </li>
                  <li>
                    <a href="#contact" onClick={closeHamburger}>
                      CONTACT
                    </a>
                  </li>
                </ul>
              </nav>
              <div className={styles.hamButtons}>
                <button className={styles.hamNavGitButton}>
                  <a href="https://github.com/Pogbayo" target="_blank">
                    GitHub Profile
                  </a>
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            <section className={styles.em}>
              <h1>
                <SiDynatrace />

                <i className={styles.nameLogo}>Adebayo</i>
              </h1>
              <nav className={styles.nav}>
                <ul className={styles.navUl}>
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
              </nav>
              <button className={styles.navGitButton}>
                <a href="https://github.com/Pogbayo" target="_blank">
                  GitHub Profile
                </a>
              </button>
              <div className={styles.hamburger} onClick={showHamburger}>
                <GiHamburgerMenu size={40} />{" "}
              </div>
            </section>
          </>
        )}
      </header>
    </div>
  );
};

export default Navbar;
