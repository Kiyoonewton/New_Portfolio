"use client";
import styles from "./style.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import useMousePosition from "../../utils/useMousePosition";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { WhatsApp } from "@mui/icons-material";
import { trackEvent } from "../../utils/analytics";

export default function Index({}) {
  const [isActive, setIsActive] = useState("about");
  const [isMobile, setIsMobile] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const videoLoadStart = useRef(null);
  const videoOutcomeSent = useRef(false);
  const posterOutcomeSent = useRef(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    setHasMounted(true);
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    videoLoadStart.current = Date.now();
    videoOutcomeSent.current = false;

    const stallTimer = setTimeout(() => {
      if (videoOutcomeSent.current) return;

      trackEvent({
        event: "video_load",
        label: "Hero video still buffering after 8s",
        page: window.location.pathname,
        extra: { videoVariant: isMobile ? "mobile" : "desktop" },
        useBeacon: true,
      });
    }, 8000);

    return () => clearTimeout(stallTimer);
  }, [isMobile]);

  useEffect(() => {
    if (posterOutcomeSent.current) return;

    const probe = new window.Image();
    probe.onload = () => {
      if (posterOutcomeSent.current) return;
      posterOutcomeSent.current = true;
    };
    probe.onerror = () => {
      if (posterOutcomeSent.current) return;
      posterOutcomeSent.current = true;

      trackEvent({
        event: "video_load",
        label: "Hero poster image failed to load",
        page: window.location.pathname,
      });
    };
    probe.src = "/hero-poster.jpg";
  }, []);

  const handleVideoCanPlay = () => {
    if (videoOutcomeSent.current) return;
    videoOutcomeSent.current = true;

    const loadMs = videoLoadStart.current
      ? Date.now() - videoLoadStart.current
      : undefined;

    trackEvent({
      event: "video_load",
      label: "Hero video ready",
      page: window.location.pathname,
      extra: {
        videoVariant: isMobile ? "mobile" : "desktop",
        loadMs,
      },
    });
  };

  const handleVideoError = () => {
    if (videoOutcomeSent.current) return;
    videoOutcomeSent.current = true;

    trackEvent({
      event: "video_load",
      label: "Hero video failed to load",
      page: window.location.pathname,
      extra: { videoVariant: isMobile ? "mobile" : "desktop" },
    });
  };

  const handleVideoPause = (e) => {
    const video = e.target;
    if (video.ended || document.hidden) return;
    video.play().catch(() => {});
  };

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
              <Link
                key={name}
                className={`${isActive === name ? styles.activeLink : ""}`}
                href={hash}
              >
                {name}
              </Link>
            ))}
          </div>
        </div>
        <div className={styles.banner}>
          <h3 className={`${styles.nameStyle} headerText`}>ISAAC KOLAWOLE</h3>
          <div className={styles.wrapper}>
            <h1>
              {[
                {
                  line: "FULL-STACK",
                  style: "",
                },
                {
                  line: "ENGINEER",
                  style: "",
                },
                {
                  line: "REACT · NODE · AWS",
                  style: "alternate",
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
                  label: "Instagram",
                  component: <InstagramIcon style={{ fontSize: "2rem" }} />,
                },
                {
                  href: "https://github.com/kiyoonewton",
                  label: "GitHub",
                  component: <GitHubIcon style={{ fontSize: "2rem" }} />,
                },
                {
                  href: "https://linkedin.com/in/kiyoonewton",
                  label: "LinkedIn",
                  component: <LinkedInIcon style={{ fontSize: "2rem" }} />,
                },
                {
                  href: "https://wa.me/2348164415141",
                  label: "WhatsApp",
                  component: <WhatsApp style={{ fontSize: "2rem" }} />,
                  contact: true,
                },
              ].map(({ href, component, label, contact }, idx) => (
                <span key={idx}>
                  <a
                    href={href}
                    rel="noopener noreferrer"
                    target="_blank"
                    onClick={() =>
                      trackEvent({
                        event: contact ? "contact_action" : "outbound_click",
                        label: `${contact ? "Contact via" : "Clicked"} ${label}`,
                        page: window.location.pathname,
                      })
                    }
                  >
                    {component}
                  </a>
                </span>
              ))}
            </div>
            <div className={styles.resume}>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackEvent({
                    event: "outbound_click",
                    label: "Viewed resume",
                    page: window.location.pathname,
                  })
                }
              >
                VIEW RESUME
              </a>
              <a
                href="/cover-letter.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackEvent({
                    event: "outbound_click",
                    label: "Viewed cover letter",
                    page: window.location.pathname,
                  })
                }
              >
                VIEW COVER LETTER
              </a>
            </div>
          </div>
        </div>
        {hasMounted ? (
          <video
            key={isMobile ? "mobile" : "desktop"}
            playsInline
            autoPlay
            loop
            muted
            preload="auto"
            poster="/hero-poster.jpg"
            disablePictureInPicture
            controlsList="nodownload nofullscreen noremoteplayback"
            className={styles.backgroundVideo}
            onCanPlay={handleVideoCanPlay}
            onError={handleVideoError}
            onPause={handleVideoPause}
          >
            <source
              src={isMobile ? "/output_mobile.webm" : "/output.webm"}
              type="video/webm"
            />
            {isMobile && <source src="/output_mobile.mp4" type="video/mp4" />}
          </video>
        ) : (
          <Image
            src="/hero-poster.jpg"
            alt="Isaac Kolawole working at his desk"
            fill
            priority
            className={styles.backgroundVideo}
          />
        )}
      </div>
    </>
  );
}
