"use client";
import styles from "./style.module.scss";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { opacity, slideUp, fadeIn } from "./anim";
import Image from "next/image";

export default function Index({ setIsLoading }) {
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1400);

    return () => clearTimeout(timer);
  }, [setIsLoading]);

  // useEffect(() => {
  //   if (index == words.length - 1) return;
  //   setTimeout(() => {
  //     setIndex(index + 1)
  //   }, index == 0 ? 1000 : 150)
  // }, [index])

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height}  L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
    },
  };

  return (
    <motion.div variants={slideUp} initial="initial" exit="exit" className={styles.introduction}>
      {dimension.width > 0 && (
        <>
          <motion.div variants={fadeIn} initial="initial" animate="enter" className={styles.start}>
            <Image className={styles.img} src="/logo.webp" alt="preloaderLogo" width={200} height={200} />

            <motion.div
              variants={opacity}
              initial="initial"
              animate="enter"
              className={styles.badge}
            >
              <p className={styles.name}>Isaac Kolawole</p>
              <p className={styles.title}>Full-Stack Engineer</p>
            </motion.div>
          </motion.div>
          <svg>
            <motion.path variants={curve} initial="initial" exit="exit"></motion.path>
          </svg>
        </>
      )}
    </motion.div>
  );
}
