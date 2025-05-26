"use client";
import styles from "./style.module.scss";

export default function Index({ setIsHovered }) {
  return (
    <>
      <main className={styles.main} id="about">
        <div className={styles.aboutBody}>
          <div className={styles.aboutContainer}>
            <h3 className="headerText">About Me</h3>
            <p onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
              When I'm not playing my guitar, journaling or reading a book, sure I'll write some code... if there's good pizza.
            </p>
          </div>
        </div>
      </main>
      <main className={styles.main}>
        <div className={styles.servicesBody}>
          <div className={styles.servicesContainer}>
            <h3 className="headerText">What I Work With</h3>
            <div className={styles.wrapper}>
              <h1 className={styles.services}>
                {["Typescript", "Python", "Golang", "C#", ".NET", "ReactJs", "NextJs", "React Native", "NodeJs", "SQL", "Git", "Docker", "CI/CD", "AWS"].map((skill) => (
                  <div key={skill} className={`${styles.line} line`}>
                    <div className="text">{skill}</div>
                  </div>
                ))}
              </h1>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
