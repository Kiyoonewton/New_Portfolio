"use client";
import { useEffect, useRef } from "react";
import { trackEvent } from "./analytics";

function describeTarget(el) {
  if (!el || el === document.body) return "page";

  const tag = el.tagName?.toLowerCase() || "unknown";
  const text = (el.getAttribute("aria-label") || el.textContent || "")
    .trim()
    .slice(0, 40);
  const id = el.id ? `#${el.id}` : "";

  return [tag, id, text].filter(Boolean).join(" ").trim() || tag;
}

export default function useInteractionTracking(ready) {
  const moveStats = useRef({
    samples: 0,
    minX: Infinity,
    minY: Infinity,
    maxX: -Infinity,
    maxY: -Infinity,
    lastX: null,
    lastY: null,
    distance: 0,
  });

  useEffect(() => {
    if (!ready) return;

    const onClick = (e) => {
      const target = describeTarget(e.target);
      trackEvent({
        event: "click",
        label: `Clicked: ${target}`,
        page: window.location.pathname,
        extra: { x: e.clientX, y: e.clientY },
        skipSlack: true,
      });
    };

    let moveThrottle = null;
    const onMouseMove = (e) => {
      if (moveThrottle) return;
      moveThrottle = setTimeout(() => {
        moveThrottle = null;
      }, 200);

      const s = moveStats.current;
      s.samples += 1;
      s.minX = Math.min(s.minX, e.clientX);
      s.minY = Math.min(s.minY, e.clientY);
      s.maxX = Math.max(s.maxX, e.clientX);
      s.maxY = Math.max(s.maxY, e.clientY);
      if (s.lastX !== null) {
        s.distance += Math.hypot(e.clientX - s.lastX, e.clientY - s.lastY);
      }
      s.lastX = e.clientX;
      s.lastY = e.clientY;
    };

    const summaryInterval = setInterval(() => {
      const s = moveStats.current;
      if (s.samples === 0) return;

      trackEvent({
        event: "mouse_activity",
        label: "Mouse activity (30s)",
        page: window.location.pathname,
        extra: {
          duration: `${Math.round(s.distance)}px moved`,
        },
      });

      moveStats.current = {
        samples: 0,
        minX: Infinity,
        minY: Infinity,
        maxX: -Infinity,
        maxY: -Infinity,
        lastX: null,
        lastY: null,
        distance: 0,
      };
    }, 30000);

    document.addEventListener("click", onClick, true);
    window.addEventListener("mousemove", onMouseMove);

    return () => {
      document.removeEventListener("click", onClick, true);
      window.removeEventListener("mousemove", onMouseMove);
      clearInterval(summaryInterval);
      if (moveThrottle) clearTimeout(moveThrottle);
    };
  }, [ready]);
}
