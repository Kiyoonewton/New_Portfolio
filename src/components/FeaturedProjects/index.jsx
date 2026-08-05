"use client";
import { useState, useRef, useEffect } from "react";
import styles from "./style.module.scss";
import { featuredProjects } from "./data";

function ProjectCard({ project, isOpen, onToggle }) {
  const {
    name,
    role,
    stack,
    problem,
    solution,
    impact,
    image,
    imagePosition,
    href,
  } = project;

  const mediaRef = useRef(null);
  const imgRef = useRef(null);
  const [panDistance, setPanDistance] = useState(0);

  const measurePan = () => {
    const frame = mediaRef.current;
    const img = imgRef.current;
    if (!frame || !img) return;

    const overflow = img.offsetHeight - frame.offsetHeight;
    setPanDistance(overflow > 0 ? overflow : 0);
  };

  useEffect(() => {
    measurePan();
    window.addEventListener("resize", measurePan);
    return () => window.removeEventListener("resize", measurePan);
  }, [isOpen]);

  return (
    <div className={`${styles.card} ${isOpen ? styles.cardOpen : ""}`}>
      <div
        ref={mediaRef}
        className={`${styles.cardMedia} ${
          panDistance > 0 ? styles.cardMediaPan : ""
        }`}
        style={{ "--cardPanDistance": `-${panDistance}px` }}
      >
        {image ? (
          <img
            ref={imgRef}
            src={image}
            alt={name}
            className={styles.cardImage}
            onLoad={measurePan}
            style={
              imagePosition
                ? { "--cardImagePosition": imagePosition }
                : undefined
            }
          />
        ) : (
          <div className={styles.cardPlaceholder}>
            <span>{name.slice(0, 2).toUpperCase()}</span>
          </div>
        )}
      </div>

      <div className={styles.cardContent}>
        <button
          className={styles.cardHeader}
          onClick={onToggle}
          aria-expanded={isOpen}
        >
          <div className={styles.cardHeading}>
            <h4 className={styles.cardName}>{name}</h4>
            <p className={styles.cardRole}>{role}</p>
          </div>
          <span className={styles.cardToggle}>{isOpen ? "−" : "+"}</span>
        </button>

        {isOpen && (
          <div className={styles.cardBody}>
            <div className={styles.cardStack}>
              {stack.map((tech) => (
                <span key={tech} className={styles.tag}>
                  {tech}
                </span>
              ))}
            </div>

            <div className={styles.cardSection}>
              <h5>Problem</h5>
              <p>{problem}</p>
            </div>
            <div className={styles.cardSection}>
              <h5>What I built</h5>
              <p>{solution}</p>
            </div>
            <div className={styles.cardSection}>
              <h5>Impact</h5>
              <p>{impact}</p>
            </div>

            {href && (
              <a
                className={styles.cardLink}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
              >
                View live →
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default function Index({
  openId: controlledOpenId,
  onToggle,
  maskHidden,
}) {
  const [internalOpenId, setInternalOpenId] = useState(
    featuredProjects[0].id
  );

  const isControlled = controlledOpenId !== undefined;
  const openId = isControlled ? controlledOpenId : internalOpenId;

  const handleToggle = (id) => {
    if (isControlled) {
      onToggle(openId === id ? null : id);
    } else {
      setInternalOpenId(openId === id ? null : id);
    }
  };

  return (
    <main
      className={styles.main}
      style={maskHidden ? { visibility: "hidden" } : undefined}
    >
      <div className={styles.container}>
        <h3 className="headerText">Featured Projects</h3>
        <p className={styles.intro}>
          A closer look at what I built, the problems they solved, and{" "}
          <span className="alternate">the impact they had</span>.
        </p>

        <div className={styles.grid}>
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              isOpen={openId === project.id}
              onToggle={() => handleToggle(project.id)}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
