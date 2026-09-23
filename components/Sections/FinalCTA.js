import styles from "./Sections.module.css";

const GITHUB_URL = "https://github.com/namish18/HabitForge-Lite";

export default function FinalCTA() {
  return (
    <section className={styles.finalCta}>
      <div className={styles.finalCtaInner}>
        <div className={styles.ctaIcon}>
          <span className="material-symbols-outlined">terminal</span>
        </div>
        <h2 className={styles.ctaTitle}>
          Forge a workflow you can actually understand.
        </h2>
        <p className={styles.ctaDescription}>
          Plan your work. Track your focus. Understand your progress. Keep your
          daily records verified and backed by Git.
        </p>
        <div className={styles.ctaButtons}>
          <a
            href={GITHUB_URL}
            className={styles.ctaPrimary}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "var(--space-xs)",
              background: "var(--accent-container)",
              color: "var(--surface-dim)",
              fontFamily: "var(--font-heading)",
              fontSize: "14px",
              fontWeight: 700,
              padding: "var(--space-md) var(--space-lg)",
              borderRadius: "var(--radius)",
              boxShadow: "var(--shadow-accent-lg)",
              transition: "all 150ms ease",
              whiteSpace: "nowrap",
            }}
          >
            <span>Get Started</span>
            <span className="material-symbols-outlined" style={{ fontSize: 18 }}>
              arrow_forward
            </span>
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "var(--space-xs)",
              background: "var(--surface-container)",
              color: "var(--text-primary)",
              border: "1px solid rgba(89, 64, 67, 0.5)",
              fontFamily: "var(--font-body)",
              fontSize: "14px",
              padding: "var(--space-md) var(--space-lg)",
              borderRadius: "var(--radius)",
              transition: "all 150ms ease",
              whiteSpace: "nowrap",
            }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: 18 }}>
              code
            </span>
            <span>View Source</span>
          </a>
        </div>
        <div className={styles.commitBadges}>
          <span className={styles.commitBadge}>
            <span className="material-symbols-outlined">check</span>
            productivity.json updated
          </span>
          <span className={styles.commitBadgeDot}>•</span>
          <span className={styles.commitBadge}>
            <span className="material-symbols-outlined">check</span>
            focus-session recorded
          </span>
          <span className={styles.commitBadgeDot}>•</span>
          <span className={styles.commitBadge}>
            <span className="material-symbols-outlined">check</span>
            analytics refreshed
          </span>
        </div>
      </div>
    </section>
  );
}
