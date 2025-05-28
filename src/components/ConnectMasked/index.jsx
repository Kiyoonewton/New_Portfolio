"use client";
import GitHubCalendar from "react-github-calendar";
import styles from "./style.module.scss";
import Link from "next/link";

export default function Index({ setIsHovered }) {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.mottoBody}>
          <div className={styles.mottoContainer}>
            <h3 className="headerText">Inspiration</h3>
            <div className={styles.mottoWrapper}>
              <h1
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {["Good Developer", "is Cool too"].map((line) => (
                  <div key={line} className={`${styles.line} line`}>
                    <div className="text">{line}</div>
                  </div>
                ))}
              </h1>
            </div>
            <h3 className="headerText" style={{ color: "#39ebcc" }}>
              ISAAC KOLAWOLE
            </h3>
          </div>
        </div>
      </main>
      <main className={styles.main}>
        <div className={styles.wrapperCalendar}>
          <h1 className="project-heading">
            Days I <strong className="purple">Code ( personal work )</strong>
          </h1>
          <div
            className={styles.calendar}
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "1rem",
            }}
          >
            <GitHubCalendar
              username="kiyoonewton"
              blockSize={window.innerWidth < 500 ? 10 : 15} // dynamic sizing
              blockMargin={6}
              color="#c084f5"
              fontSize={14}
              colorScheme="dark"
            />
          </div>
        </div>
      </main>
      <main className={styles.main} id="contact">
        <div className={styles.infoBody}>
          <div className={styles.infoContainer}>
            <h3 className="headerText">Connect with me:</h3>
            <div className={styles.infoWrapper}>
              <div className={styles.infoGrid}>
                {[
                  {
                    link: "Resume",
                    url: "/frontend-resume.pdf",
                  },
                  {
                    link: "Instagram",
                    url: "https://instagram.com/kiyoonewtin/",
                  },
                  {
                    link: "Github",
                    url: "https://github.com/Kiyoonewton",
                  },
                  {
                    link: "LinkedIn",
                    url: "https://linkedIn.com/in/kiyoonewton",
                  },
                  {
                    link: "Mail",
                    url: "mailto:kiyoonewton41@gmail.com",
                  },
                  {
                    link: "Whatsapp",
                    url: "https://wa.me/2348164415141",
                  },
                ].map(({ link, url }, index) => (
                  <div key={url} className={styles.bullet}>
                    <span className={styles.dot}></span>
                    <h3 className={styles.infoItem} key={index}>
                      {/* {link === "Resume" ? (
                        <Link href={url} download="Resume">
                          {link}
                        </Link>
                      ) : ( */}
                      <Link
                        href={url}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        {link}
                      </Link>
                      {/* )} */}
                    </h3>
                  </div>
                ))}
              </div>
              <div className={styles.infoDetails}>
                <div>
                  <p>Email</p>
                  <span>kiyoonewton41@gmail.com</span>
                </div>
                <div>
                  <p>Phone</p>
                  <span>+2348164415141</span>
                </div>
              </div>
            </div>
          </div>
          <span className={styles.credit}>Design Credit: Minh Pham</span>
        </div>
      </main>
    </>
  );
}
