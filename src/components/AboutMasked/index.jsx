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
              I'm naturally curious, so outside of work I'm usually exploring
              new technologies, refining ideas for side projects, or diving
              into topics like AI, distributed systems, and software
              architecture. Building has always been my favorite way to
              learn, and curiosity is what keeps me improving, one late-night
              rabbit hole at a time.
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
