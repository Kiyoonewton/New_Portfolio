"use client";
import styles from "./style.module.scss";
import Image from "next/image";
import Link from "next/link";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { WhatsApp } from "@mui/icons-material";

export default function Index({ setIsHovered }) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.mobileShadeContainer}>
          <div className={styles.mobileShadeTop}></div>
          <div className={styles.mobileShadeBottom}></div>
        </div>
        <div className={styles.navbar}>
          <Image
            className={styles.logo}
            src="/logo.webp"
            alt="navbarLogo"
            width={60}
            height={60}
          />
          <div className={styles.links}>
            {[
              {
                name: "about",
                hash: "#about",
              },
              {
                name: "work",
                hash: "#work",
              },
              {
                name: "project",
                hash: "#project",
              },
              {
                name: "contact",
                hash: "#contact",
              },
            ].map(({ name, hash }) => (
              <Link key={name} href={hash}>
                {name}
              </Link>
            ))}
          </div>
        </div>
        <div className={styles.banner}>
          <h3 className="headerText" style={{ color: "#39ebcc" }}>
            ISAAC KOLAWOLE
          </h3>
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={styles.wrapper}
          >
            <h1>
              {[
                {
                  line: "DEBUGGING",
                  style: "",
                },
                {
                  line: "REGRETS",
                  style: "",
                },
                {
                  line: "SINCE",
                  style: "",
                },
                {
                  line: "2021",
                  style: "",
                },
              ].map(({ line, style }) => (
                <div className={`${styles.line} line`} key={line}>
                  <div className={`${style} text`}>{line}</div>
                </div>
              ))}
            </h1>
          </div>
          <div className={styles.options}>
            <div className={styles.icons}>
              {[
                {
                  href: "https://instagram.com/kiyoonewtin",
                  component: <InstagramIcon style={{ fontSize: "2rem" }} />,
                },
                {
                  href: "https://github.com/kiyoonewton",
                  component: <GitHubIcon style={{ fontSize: "2rem" }} />,
                },
                {
                  href: "https://linkedin.com/in/kiyoonewton",
                  component: <LinkedInIcon style={{ fontSize: "2rem" }} />,
                },
                {
                  href: "https://wa.me/2348164415141",
                  component: <WhatsApp style={{ fontSize: "2rem" }} />,
                },
              ].map(({ href, component }, idx) => (
                <span key={idx}>
                  <a href={href} rel="noopener noreferrer" target="_blank">
                    {component}
                  </a>
                </span>
              ))}
            </div>
            <div className={styles.resume}>
              <a
                href="https://drive.google.com/file/d/1q3Sr2JPzE1D5fr3pEhXGy16AhjW-ef9e/view"
                rel="noopener noreferrer"
                target="_blank"
              >
                VIEW RESUME
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
