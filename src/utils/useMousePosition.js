// 'use client'
import { useState, useEffect, useRef } from "react";

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });
  const lastClient = useRef({ x: null, y: null });

  const updateMousePosition = (e) => {
    lastClient.current = { x: e.clientX, y: e.clientY };
    setMousePosition({ x: e.clientX + window.scrollX, y: e.clientY + window.scrollY });
  };

  const updateOnScroll = () => {
    const { x, y } = lastClient.current;
    if (x === null || y === null) return;
    setMousePosition({ x: x + window.scrollX, y: y + window.scrollY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("scroll", updateOnScroll, { passive: true });

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("scroll", updateOnScroll);
    };
  }, []);

  return mousePosition;
};

export default useMousePosition;
