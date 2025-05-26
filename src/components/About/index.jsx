"use client";
import styles from "./style.module.scss";

export default function Index({}) {
  return (
    <>
      <main className={styles.main} id="about">
        <div className={styles.aboutBody}>
          <div className={styles.aboutContainer}>
            <h3 className="headerText">About Me</h3>
            <p className={styles.aboutText}>
              With a sharp eye for detail and a{" "}
              <span className="alternate">high standard </span> for quality, I
              build digital experiences that are both functional and elegant.
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
                {[
                  "Typescript",
                  "Python",
                  "Php",
                  "Java",
                  "ReactJs",
                  "NextJs",
                  "React Native",
                  "NodeJs",
                  "SQL",
                  "Git",
                  "Docker",
                  "CI/CD",
                  "AWS",
                  "ElasticSearch",
                  "QdrantDb",
                  "Postgres",
                  "Mongodb",
                  "Mariadb",
                  "Mysqldb",
                ].map((skill) => (
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
