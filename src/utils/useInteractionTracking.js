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

function describePoint(x, y) {
  const el = document.elementFromPoint(x, y);
  if (!el) return `(${x}, ${y})`;

  const section = el.closest("[id]");
  const label = section?.id ? `"${section.id}" section` : describeTarget(el);
  return `${label} (${x}, ${y})`;
}

function freshStats() {
  return {
    samples: 0,
    minX: Infinity,
    minY: Infinity,
    maxX: -Infinity,
    maxY: -Infinity,
    firstX: null,
    firstY: null,
    lastX: null,
    lastY: null,
    distance: 0,
  };
}

export default function useInteractionTracking(ready) {
  const moveStats = useRef(freshStats());

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
      if (s.firstX === null) {
        s.firstX = e.clientX;
        s.firstY = e.clientY;
      }
      if (s.lastX !== null) {
        s.distance += Math.hypot(e.clientX - s.lastX, e.clientY - s.lastY);
      }
      s.lastX = e.clientX;
      s.lastY = e.clientY;
    };

    const summaryInterval = setInterval(() => {
      const s = moveStats.current;
      if (s.samples === 0) return;

      const from = describePoint(s.firstX, s.firstY);
      const to = describePoint(s.lastX, s.lastY);

      trackEvent({
        event: "mouse_activity",
        label: "Mouse activity (30s)",
        page: window.location.pathname,
        extra: {
          duration: `${Math.round(s.distance)}px moved · ${from} → ${to}`,
        },
      });

      moveStats.current = freshStats();
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
