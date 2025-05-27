"use client";
import styles from "./style.module.scss";

export default function Index({ setIsHovered }) {
  return (
    <>
      <main className={styles.main} id="work">
        <div className={styles.experienceBody}>
          <div className={styles.experienceContainer}>
            <h3 className="headerText">Experience</h3>
            <p
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              With over 5 years of experience, I’ve built complex apps and clean
              UIs alongside teams of sharp, capable engineers.
            </p>
            <h3 className={`${styles.history} headerText`}>History</h3>
          </div>
        </div>
      </main>
      <main className={styles.main}>
        <div className={styles.historyBody}>
          <div className={styles.historyContainer}>
            <div className={styles.wrapper}>
              <h1 className={styles.services}>
                {[
                  {
                    time: "NOW",
                    role: "Software Engineer & Team Lead",
                    company: "Junglecreations Uk",
                    link: "https://junglecreations.com/",
                  },
                  {
                    time: "2024",
                    role: "Software Engineer",
                    company: "Wazobia Technologies",
                    link: "https://easy-of-dev.vercel.app/",
                  },
                  {
                    time: "2023",
                    role: "Software Engineer",
                    company: "TBC Technologies",
                    link: "https://www.linkedin.com/company/the-tbc-dev/",
                  },
                  {
                    time: "2022",
                    role: "Software Engineer",
                    company: "Afrilearn Future of Learning",
                    link: "https://www.myafrilearn.com/",
                  },
                  {
                    time: "2021",
                    role: "Software Engineer (Freelancing)",
                    company: "Fiverr and Upwork",
                    link: "https://www.fiverr.com/",
                  },
                  {
                    time: "2019",
                    role: "Software Engineer (Internship)",
                    company: "Haper-Hit",
                    // link: "https://www.consollimited.com/",
                  },
                ].map(({ time, role, company, link }) => (
                  <div key={company} className={`${styles.line} line`}>
                    <div className="text">{time}</div>
                    <div className="text">
                      <p>{role}</p>
                      <a
                        className={styles.role}
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {company}
                      </a>
                    </div>
                  </div>
                ))}
              </h1>
            </div>
          </div>
        </div>
      </main>
      <main className={styles.main}>
        <div className={styles.projectsBody}>
          <div className={styles.projectsContainer}>
            <h3 className="headerText">Projects</h3>
            <p
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              A collection of web apps where I test new ideas and concepts —
              most never quite become the next big startup, but they always
              teach me something.
            </p>
          </div>
        </div>
      </main>
      <main className={styles.main} id="project">
        <div className={styles.projectsBody}>
          <div className={styles.projectsTitleContainer}>
            <div className={styles.wrapper}>
              <h1 className={styles.services}>
                {[
                  {
                    name: "Junglecreations",
                    stack: "Gatsby, MUI, DatoCms, GraphQL",
                    href1: "",
                    href2: "https://junglecreations.com/",
                  },
                  {
                    name: "Twistedfood.co.uk",
                    stack: "Nextjs, Typescript, wordpress, Laravel",
                    href1: "",
                    href2: "https://twistedfood.co.uk/",
                  },
                  {
                    name: "ViralTrends (VT)",
                    stack: "Nextjs, Typescript, wordpress, Laravel",
                    href1: "",
                    href2: "https://vt.co/",
                  },
                  {
                    name: "Fournine",
                    stack: "Nextjs, Typescript, wordpress, Laravel",
                    href1: "",
                    href2: "https://fournine.net/",
                  },
                  {
                    name: "Craftfactory",
                    stack: "Nextjs, Typescript, wordpress, Laravel",
                    href1: "",
                    href2: "https://fournine.net/",
                  },
                  {
                    name: "My Afrilearn",
                    stack: "Nextjs, Typescript, wordpress, Laravel",
                    href1: "",
                    href2: "https://myafrilearn.com/",
                  },
                  {
                    name: "Kiamoni",
                    stack: "React, Typescript, wordpress, Laravel",
                    href1: "",
                    href2: "https://sonikan.vercel.app/",
                  },
                  {
                    name: "Hivedeck",
                    stack: "React, Nodejs, Expressjs, MongoDB, Typescript",
                    href1: "",
                    href2: "https://easy-of-dev.vercel.app/products-e-commerce",
                  },
                  {
                    name: "Eat up (Template)",
                    stack: "React, Nodejs, Expressjs, MongoDB, Typescript",
                    href1: "",
                    href2: "https://template-eat-3276.vercel.app/",
                  },
                ].map(({ name, stack, href1, href2 }) => (
                  <div key={name} className={`${styles.line} line`}>
                    <div className={styles.text}>
                      <div>{name}</div>
                      <div className={styles.details}>
                        <span className={styles.stack}>{stack}</span>
                        <span className={styles.redirects}>
                          <a
                            href={href1}
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            {href1 ? "Github" : ""}
                          </a>
                          <a
                            href={href2}
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            {href2 ? "Website" : ""}
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </h1>
              <div className={styles.balls}>
                <span className={styles.ball}></span>
                <span className={styles.ball}></span>
                <span className={styles.ball}></span>
              </div>
              <span className={styles.note}>
                Note: These are Live projects so there github links are private
              </span>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
