"use client";
import styles from "./style.module.scss";
import SkillsGrid from "../SkillsGrid";

export default function Index({}) {
  return (
    <>
      <main className={styles.main} id="about">
        <div className={styles.aboutBody}>
          <div className={styles.aboutContainer}>
            <h3 className="headerText">About Me</h3>
            <p className={styles.aboutText}>
              Full-stack engineer with{" "}
              <span className="alternate">5+ years</span> building
              high-traffic media platforms, AI-powered products, and
              scalable web applications with React, Next.js, Node.js,
              Python, and AWS. I currently lead a team of engineers while
              shipping production software used by millions of users.
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
