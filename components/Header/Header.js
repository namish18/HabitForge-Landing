"use client";

import { useState, useEffect } from "react";
import styles from "./Header.module.css";

const GITHUB_URL = "https://github.com/namish18/HabitForge-Lite";

const navItems = [
  { label: "Product", href: "#product", active: true },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "Architecture", href: "#architecture" },
  { label: "Analytics", href: "#analytics" },
  { label: "Docs", href: "#docs" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className={styles.header} role="banner">
        <div className={styles.headerInner}>
          {/* Brand */}
          <div className={styles.brand}>
            <a href="#" className={styles.brandLink} aria-label="HabitForge Lite Home">
              <span className={styles.brandName}>HabitForge</span>
              <span className={styles.liteBadge}>LITE</span>
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className={styles.nav} aria-label="Main navigation">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`${styles.navLink} ${item.active ? styles.navLinkActive : ""}`}
                {...(item.active ? { "aria-current": "page" } : {})}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className={styles.actions}>
            <a
              href={GITHUB_URL}
              className={styles.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="material-symbols-outlined">code</span>
              <span>View on GitHub</span>
            </a>
            <a href="#" className={styles.signIn}>
              Sign In
            </a>
            <a href={GITHUB_URL} className={styles.getStarted} target="_blank" rel="noopener noreferrer">
              Get Started →
            </a>

            {/* Mobile Menu Toggle */}
            <button
              className={`${styles.menuButton} ${menuOpen ? styles.open : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={menuOpen}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav */}
      <div
        className={`${styles.mobileNav} ${menuOpen ? styles.open : ""}`}
        role="navigation"
        aria-label="Mobile navigation"
      >
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className={styles.mobileNavLink}
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
          </a>
        ))}
        <div className={styles.mobileActions}>
          <a
            href={GITHUB_URL}
            className={styles.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "flex" }}
          >
            <span className="material-symbols-outlined">code</span>
            <span>View on GitHub</span>
          </a>
          <a href="#" className={styles.signIn} style={{ display: "block" }}>
            Sign In
          </a>
          <a href={GITHUB_URL} className={styles.getStarted} target="_blank" rel="noopener noreferrer">
            Get Started →
          </a>
        </div>
      </div>
    </>
  );
}
