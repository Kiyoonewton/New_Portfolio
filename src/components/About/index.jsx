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
            <div className={styles.wrapper}>
              {[
                {
                  category: "Languages",
                  skills: ["Typescript", "Javascript", "Python", "Java", "C#", "Php"],
                },
                {
                  category: "Frontend",
                  skills: ["ReactJs", "NextJs", "Vue", "React Native", "Redux", "TanStack", "Tailwind"],
                },
                {
                  category: "Backend",
                  skills: ["NodeJs", "NestJS", "Django", "FastAPI", "Spring Boot", ".NET", "Laravel"],
                },
                {
                  category: "AI & LLM",
                  skills: ["OpenAI API", "LlamaIndex", "RAG", "Semantic Search", "Qdrant"],
                },
                {
                  category: "Databases",
                  skills: ["Postgres", "Mysql", "Mongodb", "Redis", "DynamoDB", "Mariadb"],
                },
                {
                  category: "Cloud & Infra",
                  skills: ["AWS", "GCP", "Docker", "Kubernetes", "CI/CD", "Nginx"],
                },
                {
                  category: "Testing",
                  skills: ["Jest", "Vitest", "Playwright", "Cypress", "Storybook"],
                },
              ].map(({ category, skills }) => (
                <div key={category} className={styles.skillGroup}>
                  <h4 className={styles.skillCategory}>{category}</h4>
                  <h1 className={styles.services}>
                    {skills.map((skill) => (
                      <div key={skill} className={`${styles.line} line`}>
                        <div className="text">{skill}</div>
                      </div>
                    ))}
                  </h1>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
