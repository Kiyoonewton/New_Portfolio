"use client";
import styles from "./style.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import gsap from "gsap";
import useMousePosition from "../../utils/useMousePosition";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { WhatsApp } from "@mui/icons-material";

export default function Index({}) {
  const [isActive, setIsActive] = useState("about");

  const { x, y } = useMousePosition();

  useEffect(() => {
    const t1 = gsap.timeline();

    t1.from(".line .text", {
      y: 500,
      ease: "power4.out",
      delay: 1,
      duration: 1.8,
      stagger: {
        amount: 0.4,
      },
    });
  }, []);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.mobileShadeContainer}>
          <div className={styles.mobileShadeTop}></div>
          <div className={styles.mobileShadeBottom}></div>
        </div>
        <div className={styles.navbar}>
          <Image className={styles.logo} src="/logo.webp" alt="navbarLogo" width={60} height={60} />
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
              <Link key={name} className={`${isActive === name ? styles.activeLink : ""}`} href={hash}>
                {name}
              </Link>
            ))}
          </div>
        </div>
        <div className={styles.banner}>
          <h3 className={`${styles.nameStyle} headerText`} >ISAAC KOLAWOLE</h3>
          <div className={styles.wrapper}>
            <h1>
              {[
                {
                  line: "DEPLOYING",
                  style: "",
                },
                {
                  line: "CLEAN",
                  style: "alternate",
                },
                {
                  line: "CODE",
                  style: "alternate",
                },
                {
                  line: "SINCE",
                  style: "",
                },
                {
                  line: "2019",
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
              <a href="https://drive.google.com/file/d/1q3Sr2JPzE1D5fr3pEhXGy16AhjW-ef9e/view" rel="noopener noreferrer" target="_blank">
                VIEW RESUME
              </a>
            </div>
          </div>
        </div>
        <video playsinline autoPlay loop muted disablePictureInPicture controlsList="nodownload nofullscreen noremoteplayback" className={styles.backgroundVideo}>
          <source src="/output_gray.webm" type="video/mp4" />
        </video>
      </div>
    </>
  );
}
