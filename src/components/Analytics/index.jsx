"use client";
import Script from "next/script";
import { useEffect, useRef } from "react";
import { trackEvent } from "../../utils/analytics";

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export default function Analytics() {
  const notified = useRef(false);

  useEffect(() => {
    if (notified.current) return;
    notified.current = true;

    trackEvent({
      event: "page_visit",
      label: "New page visit",
      page: window.location.pathname,
      referrer: document.referrer || "Direct",
    });

    const startedAt = Date.now();
    let sent = false;

    const sendDuration = () => {
      if (sent) return;

      const seconds = Math.round((Date.now() - startedAt) / 1000);
      if (seconds < 5) return;

      sent = true;
      const minutes = Math.floor(seconds / 60);
      const remSeconds = seconds % 60;
      const duration = minutes > 0 ? `${minutes}m ${remSeconds}s` : `${seconds}s`;

      trackEvent({
        event: "page_visit",
        label: "Visitor left",
        page: window.location.pathname,
        extra: { duration },
        useBeacon: true,
      });
    };

    const onVisibilityChange = () => {
      if (document.visibilityState === "hidden") sendDuration();
    };

    document.addEventListener("visibilitychange", onVisibilityChange);
    window.addEventListener("pagehide", sendDuration);

    return () => {
      document.removeEventListener("visibilitychange", onVisibilityChange);
      window.removeEventListener("pagehide", sendDuration);
    };
  }, []);

  if (!GA_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  );
}
