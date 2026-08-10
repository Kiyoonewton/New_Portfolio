import { NextResponse } from "next/server";

const EVENT_EMOJI = {
  page_visit: "👀",
  outbound_click: "🔗",
  contact_action: "📩",
  section_view: "📜",
  blog_view: "📝",
  video_load: "🎬",
};

function formatMessage({
  event,
  label,
  page,
  referrer,
  country,
  city,
  device,
  os,
  browser,
  visitor,
  utm,
  duration,
  videoVariant,
  loadMs,
  userAgent,
}) {
  const emoji = EVENT_EMOJI[event] || "📊";
  const lines = [`${emoji} *${label}*`];

  if (page) lines.push(`Page: \`${page}\``);
  if (referrer) lines.push(`From: ${referrer}`);
  if (city || country) lines.push(`Location: ${[city, country].filter(Boolean).join(", ")}`);
  if (device || os || browser) {
    lines.push(`Device: ${[device, os, browser].filter(Boolean).join(" · ")}`);
  }
  if (visitor) lines.push(`Visitor: ${visitor}`);
  if (utm) lines.push(`Campaign: ${utm}`);
  if (duration) lines.push(`Time on page: ${duration}`);
  if (videoVariant) lines.push(`Video: ${videoVariant}`);
  if (loadMs !== undefined) lines.push(`Load time: ${(loadMs / 1000).toFixed(1)}s`);
  if (userAgent) lines.push(`UA: \`${userAgent}\``);

  return lines.join("\n");
}

export async function POST(request) {
  const webhookUrl = process.env.SLACK_WEBHOOK_URL;

  if (!webhookUrl) {
    return NextResponse.json({ error: "SLACK_WEBHOOK_URL is not configured" }, { status: 500 });
  }

  const body = await request.json();

  if (!body?.event || !body?.label) {
    return NextResponse.json({ error: "Missing event or label" }, { status: 400 });
  }

  const country = request.headers.get("x-vercel-ip-country") || undefined;
  const city = request.headers.get("x-vercel-ip-city") || undefined;
  const userAgent = request.headers.get("user-agent") || undefined;

  const text = formatMessage({
    ...body,
    country,
    city: city && decodeURIComponent(city),
    userAgent,
  });

  const res = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
  });

  if (!res.ok) {
    return NextResponse.json({ error: "Failed to post to Slack" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
