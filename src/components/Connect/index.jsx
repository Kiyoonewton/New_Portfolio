"use client";
import styles from "./style.module.scss";
import Link from "next/link";

export default function Index() {
  return (
    <>
      <main id="contact" className={styles.main}>
        <div className={styles.mottoBody}>
          <video
            autoPlay
            muted
            loop
            playsInline
            className={styles.videoBackground}
          >
            <source src="/output_gray1.webm" type="video/webm" />
          </video>
          <div className={styles.mottoContainer}>
            <h3 className="headerText" style={{ zIndex: 2 }}>
              Inspiration
            </h3>
            <div className={styles.mottoWrapper}>
              <h1>
                {["Good Code", "is Reliable"].map((line) => (
                  <div key={line} className={`${styles.line} line`}>
                    <div className="text">{line}</div>
                  </div>
                ))}
              </h1>
            </div>
            <h3 className="headerText">Minh Pham</h3>
          </div>
        </div>
      </main>
      <main className={styles.main}>
        <div className={styles.infoBody}>
          <div className={styles.infoContainer}>
            <h3 className="headerText">Connect with me:</h3>
            <div className={styles.infoWrapper}>
              <div className={styles.infoGrid}>
                {[
                  {
                    link: "Resume",
                    url: "/resume.pdf",
                  },
                  {
                    link: "Instagram",
                    url: "https://instagram.com/kiyoonewtin/",
                  },
                  {
                    link: "Github",
                    url: "https://github.com/kiyoonewton",
                  },
                  {
                    link: "LinkedIn",
                    url: "https://www.linkedin.com/in/kiyoonewton",
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
                      {link === "Resume" ? (
                        <Link href={url} download="Resume">
                          {link}
                        </Link>
                      ) : (
                        <Link
                          href={url}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          {link}
                        </Link>
                      )}
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
