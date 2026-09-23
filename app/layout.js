import "./globals.css";

export const metadata = {
  title: "HabitForge Lite — Productivity, Backed by Git",
  description:
    "HabitForge Lite turns your GitHub repository into a private, version-controlled productivity database. Organize workflows, track tasks, focus with built-in timers, and inspect your productivity ledger natively in Git.",
  keywords: [
    "productivity",
    "developer tools",
    "GitHub",
    "Git",
    "habit tracker",
    "task management",
    "focus timer",
    "version control",
  ],
  openGraph: {
    title: "HabitForge Lite — Productivity, Backed by Git",
    description:
      "Turn your GitHub repository into a private, version-controlled productivity database.",
    url: "https://github.com/namish18/HabitForge-Lite",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;500;600&family=JetBrains+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:wght@600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
