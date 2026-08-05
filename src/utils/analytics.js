function parseDevice(userAgent) {
  const ua = userAgent || "";

  const isMobile = /Mobi|Android/i.test(ua);
  const os = /Windows/i.test(ua)
    ? "Windows"
    : /Mac OS X/i.test(ua)
    ? "macOS"
    : /Android/i.test(ua)
    ? "Android"
    : /iPhone|iPad|iPod/i.test(ua)
    ? "iOS"
    : /Linux/i.test(ua)
    ? "Linux"
    : "Unknown OS";

  const browser = /Edg\//i.test(ua)
    ? "Edge"
    : /Chrome\//i.test(ua)
    ? "Chrome"
    : /Safari\//i.test(ua) && !/Chrome\//i.test(ua)
    ? "Safari"
    : /Firefox\//i.test(ua)
    ? "Firefox"
    : "Unknown browser";

  return { device: isMobile ? "Mobile" : "Desktop", os, browser };
}

function getVisitorStatus() {
  try {
    const key = "kn_visited";
    if (localStorage.getItem(key)) return "Returning";
    localStorage.setItem(key, "1");
    return "New";
  } catch {
    return undefined;
  }
}

function getUtm() {
  try {
    const params = new URLSearchParams(window.location.search);
    const source = params.get("utm_source");
    const medium = params.get("utm_medium");
    const campaign = params.get("utm_campaign");
    if (!source && !medium && !campaign) return undefined;
    return [source, medium, campaign].filter(Boolean).join(" / ");
  } catch {
    return undefined;
  }
}

export function trackEvent({ event, label, page, referrer, extra, useBeacon }) {
  if (typeof window === "undefined") return;

  if (window.gtag) {
    window.gtag("event", event, {
      event_label: label,
      page_path: page,
      transport_type: "beacon",
    });
  }

  const { device, os, browser } = parseDevice(navigator.userAgent);

  const payload = JSON.stringify({
    event,
    label,
    page,
    referrer,
    device,
    os,
    browser,
    visitor: getVisitorStatus(),
    utm: getUtm(),
    ...extra,
  });

  if (useBeacon && navigator.sendBeacon) {
    navigator.sendBeacon(
      "/api/notify",
      new Blob([payload], { type: "application/json" })
    );
    return;
  }

  fetch("/api/notify", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: payload,
    keepalive: true,
  }).catch(() => {});
}
