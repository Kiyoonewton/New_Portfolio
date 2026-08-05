"use client";
import styles from "./style.module.scss";
import SkillsGrid from "../SkillsGrid";

export default function Index({ setIsHovered }) {
  return (
    <>
      <main className={styles.main} id="about">
        <div className={styles.aboutBody}>
          <div className={styles.aboutContainer}>
            <h3 className="headerText">About Me</h3>
            <p
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="hoverTarget"
            >
              When I'm not leading a team of engineers or shipping AI-powered
              products, you'll find me deep in a side project, journaling,
              or chasing a new idea that probably started with "what if we
              just built it" over coffee.
            </p>
          </div>
        </div>
      </main>
      <main className={styles.main}>
        <div className={styles.servicesBody}>
          <div className={styles.servicesContainer}>
            <h3 className="headerText">What I Work With</h3>
            <SkillsGrid />
          </div>
        </div>
      </main>
    </>
  );
}
