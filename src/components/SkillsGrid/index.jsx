"use client";
import styles from "./style.module.scss";
import { skillCategories } from "./data";

export default function Index({}) {
  return (
    <div className={styles.grid}>
      {skillCategories.map(({ category, skills }) => (
        <div key={category} className={styles.card}>
          <h4 className={styles.category}>{category}</h4>
          <div className={styles.tags}>
            {skills.map((skill) => (
              <span key={skill} className={styles.tag}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
