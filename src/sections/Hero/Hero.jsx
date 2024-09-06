import React from "react";
import styles from "./HeroStyles.module.css";
import heroimgDark from "../../assets/profiledark.jpeg";
import heroimgLight from "../../assets/profile.jpeg";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import twitterLight from "../../assets/twitter-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";

import githubLIght from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";

import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";

import CV from "../../assets/cv.pdf";
import { useTheme } from "../../common/ThemeContext";

const Hero = () => {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;

  const twitterIcon = theme === "light" ? twitterLight : twitterDark;
  const GithubIcon = theme === "light" ? githubLIght : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;
  const heroimg = theme === "light" ? heroimgLight : heroimgDark;

  return (
    <section id="Hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroimg}
          alt="profile picture of me"
        />

        <img
          src={themeIcon}
          className={styles.colorMode}
          alt="color mode icon"
          onClick={toggleTheme}
        />
      </div>

      <div className={styles.info}>
        <h1>
          Ashish <br /> Kumar <br /> Nayak
        </h1>

        <h2>Mern stack developer</h2>

        <span>
          <a href="https://x.com/ascendant_ash" target="_blank">
            <img src={twitterIcon} alt="twitterIcon" />
          </a>
          <a href="https://github.com/ashish0987aashish" target="_blank">
            <img src={GithubIcon} alt="GithubIcon" />
          </a>
          <a
            href="https://www.linkedin.com/in/ashish-kumar-nayak-312477282/"
            target="_blank"
          >
            <img src={linkedinIcon} alt="linkedinIcon" />
          </a>
        </span>

        <p className={styles.description}>
          With a passion to convert my thinking into reality through code and to
          make a world a better place through my problemsolvinng skills
        </p>

        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
