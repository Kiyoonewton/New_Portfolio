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
                    role: "SeniorSoftware Engineer",
                    company: "Netchex",
                    link: "https://www.netchex.com/",
                  },
                  {
                    time: "2024",
                    role: "Senior Frontend Engineer",
                    company: "Optimus AI Labs",
                    link: "https://optimusai.ai/",
                  },
                  {
                    time: "2023",
                    role: "Software Engineer",
                    company: "Simplify Technologies",
                    link: "https://www.simplifytechnologies.io/",
                  },
                  {
                    time: "2021",
                    role: "Information Systems Engineer",
                    company: "Bank of Industry",
                    link: "https://www.boi.ng/",
                  },
                  {
                    time: "2020",
                    role: "Software Solutions Engineer",
                    company: "Consol Limited",
                    link: "https://www.consollimited.com/",
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
      <main className={styles.main}>
        <div className={styles.projectsBody}>
          <div className={styles.projectsTitleContainer}>
            <div className={styles.wrapper}>
              <h1 className={styles.services}>
                {[
                  {
                    name: "Steex",
                    stack: "ReactJs, MUI, ExpressJs",
                    href1: "https://github.com/LoganXav/Steex",
                    href2: "https://steex.vercel.app/",
                  },
                  {
                    name: "Golfnco",
                    stack: "NextJs, Supabase, Paystack, Flutterwave",
                    href1: "https://github.com/LoganXav/Golfnco",
                    href2: "https://golfnco.vercel.app/",
                  },
                  {
                    name: "ReactCli",
                    stack: "NodeJs, CommanderJs, Clack",
                    href1: "https://github.com/LoganXav/SimplifyReactCli",
                    href2: "",
                  },
                  {
                    name: "KeniaAPI",
                    stack: "NodeJS, Typescript, ExpressJs",
                    href1: "https://github.com/LoganXav/KeniaAPI",
                    href2: "",
                  },
                  {
                    name: "My Portfolio",
                    stack: "Next, Scss, Framer Motion",
                    href1: "https://github.com/LoganXav/Logan",
                    href2: "",
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
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
