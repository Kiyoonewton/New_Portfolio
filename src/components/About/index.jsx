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
              Full-Stack Software Engineer with{" "}
              <span className="alternate">5+ years</span> building
              scalable web applications, AI-powered products, and
              high-traffic platforms using React, Next.js, TypeScript,
              Node.js, Python, and AWS. I lead engineering teams, design
              production systems, and solve complex problems with
              reliable software.
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
