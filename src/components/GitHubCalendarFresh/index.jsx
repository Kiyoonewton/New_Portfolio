"use client";
import { useEffect, useState } from "react";
import Calendar from "react-activity-calendar";

const API_URL = "https://github-contributions-api.jogruber.de/v4/";

const gitHubTheme = {
  light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
  dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
};

export default function GitHubCalendarFresh({
  username,
  blockSize = 15,
  blockMargin = 6,
  color = "#c084f5",
  fontSize = 14,
  colorScheme = "dark",
}) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}${username}?y=last`, { cache: "no-store" })
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then(setData)
      .catch(() => setError(true));
  }, [username]);

  if (error || !data) return null;

  return (
    <Calendar
      data={data.contributions}
      theme={gitHubTheme}
      colorScheme={colorScheme}
      color={color}
      blockSize={blockSize}
      blockMargin={blockMargin}
      fontSize={fontSize}
      maxLevel={4}
      totalCount={data.total.lastYear}
      labels={{
        totalCount: "{{count}} contributions in the last year",
      }}
    />
  );
}
