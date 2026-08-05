"use client";
import styles from "./style.module.scss";

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
            >
              When I'm not playing my guitar, journaling or reading a book, sure
              I'll write some code... if there's good pizza.
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
