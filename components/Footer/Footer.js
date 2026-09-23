import styles from "./Footer.module.css";

const GITHUB_URL = "https://github.com/namish18/HabitForge-Lite";

export default function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.footerInner}>
        <div className={styles.footerGrid}>
          {/* Brand */}
          <div className={styles.footerBrand}>
            <div className={styles.footerBrandRow}>
              <span className={styles.footerBrandName}>HabitForge</span>
              <span className={styles.footerBrandBadge}>LITE</span>
            </div>
            <p className={styles.footerBrandText}>
              Productivity, backed by Git. Continuous discipline mapped to
              persistent telemetry and terminal workflows.
            </p>
          </div>

          {/* Engine & Specs */}
          <div className={styles.footerColumn}>
            <h4>Engine &amp; Specs</h4>
            <ul>
              <li><a href="#architecture">Git Synchronizer v2</a></li>
              <li><a href="#architecture">Local-First Ledger</a></li>
              <li><a href="#architecture">CRON Daemons</a></li>
              <li><a href="#architecture">CLI Utilities</a></li>
            </ul>
          </div>

          {/* Developer Resources */}
          <div className={styles.footerColumn}>
            <h4>Developer Resources</h4>
            <ul>
              <li><a href="#docs">Documentation</a></li>
              <li><a href="#docs">API Schema</a></li>
              <li>
                <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
                  Repository
                </a>
              </li>
              <li><a href="#docs">Release Notes</a></li>
            </ul>
          </div>

          {/* Platform */}
          <div className={styles.footerColumn}>
            <h4>Platform</h4>
            <ul>
              <li><a href="#features">Habit Matrix</a></li>
              <li><a href="#analytics">Commit Telemetry</a></li>
              <li><a href="#product">CLI Setup</a></li>
              <li><a href="#product">Security &amp; Keyrings</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className={styles.footerBottom}>
          <p>© 2025 HabitForge Lite. Engineered for terminal purists. Open-source core.</p>
          <div className={styles.footerBottomRight}>
            <span className={styles.footerStatus}>
              <span className={styles.footerStatusDot} />
              Git Sync Operational
            </span>
            <a
              href={`${GITHUB_URL}/blob/main/LICENSE`}
              className={styles.footerLicense}
              target="_blank"
              rel="noopener noreferrer"
            >
              MIT License
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
