"use client";

import styles from "./Hero.module.css";

const GITHUB_URL = "https://github.com/namish18/HabitForge-Lite";

export default function Hero() {
  return (
    <section id="product" className={styles.hero}>
      <div className={styles.heroGlow} aria-hidden="true" />
      <div className={styles.heroInner}>
        {/* Eyebrow */}
        <div className={styles.eyebrow}>
          <span className={styles.eyebrowDot} aria-hidden="true" />
          <span className={styles.eyebrowText}>PRODUCTIVITY, BACKED BY GIT</span>
        </div>

        {/* Headline */}
        <h1 className={styles.headline}>
          Your productivity data.
          <br />
          Your repository.
          <br />
          <span className={styles.headlineAccent}>Your history.</span>
        </h1>

        {/* Sub copy */}
        <p className={styles.subCopy}>
          HabitForge Lite turns your GitHub repository into a private,
          version-controlled productivity database. Organize workflows, track
          tasks, focus with built-in timers, and inspect your productivity
          ledger natively in Git.
        </p>

        {/* CTAs */}
        <div className={styles.ctas}>
          <a
            href={GITHUB_URL}
            className={styles.ctaPrimary}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Start Using HabitForge</span>
            <span className="material-symbols-outlined">arrow_forward</span>
          </a>
          <a
            href={GITHUB_URL}
            className={styles.ctaSecondary}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="material-symbols-outlined">terminal</span>
            <span>Explore on GitHub</span>
          </a>
        </div>

        {/* Trustline */}
        <div className={styles.trustline}>
          <span>Next.js 14</span>
          <span className={styles.trustlineDot}>•</span>
          <span>GitHub REST API</span>
          <span className={styles.trustlineDot}>•</span>
          <span>Octokit Core</span>
          <span className={styles.trustlineDot}>•</span>
          <span>Argon2 Security</span>
          <span className={styles.trustlineDot}>•</span>
          <span>Zero Third-Party DBs</span>
        </div>

        {/* Workstation Mockup */}
        <div className={styles.workstation}>
          {/* Window Chrome */}
          <div className={styles.windowChrome}>
            <div className={styles.windowDots}>
              <span className={`${styles.windowDot} ${styles.windowDotRed}`} />
              <span className={`${styles.windowDot} ${styles.windowDotYellow}`} />
              <span className={`${styles.windowDot} ${styles.windowDotGreen}`} />
              <span className={styles.windowTitle}>
                habitforge-runtime — master-session [live]
              </span>
            </div>
            <div className={styles.windowBranch}>
              <span className={styles.branchDot} />
              <span>HEAD → main</span>
            </div>
          </div>

          {/* Split Panel */}
          <div className={styles.splitPanel}>
            {/* Left: Dashboard */}
            <div className={styles.dashboard}>
              <div className={styles.dashboardHeader}>
                <div>
                  <span className={styles.sessionLabel}>Session Active</span>
                  <h3 className={styles.dashboardTitle}>Good evening, Namish.</h3>
                  <p className={styles.dashboardSubtitle}>
                    4 of 5 priority targets executed today
                  </p>
                </div>
                <div className={styles.velocityBadge}>
                  Sprint Velocity:{" "}
                  <span className={styles.velocityValue}>86%</span>
                </div>
              </div>

              {/* Stats */}
              <div className={styles.statsGrid}>
                <div className={styles.statCard}>
                  <div className={styles.statLabel}>TODAY</div>
                  <div className={styles.statValue}>86%</div>
                  <div className={styles.statMeta}>+12% vs avg</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statLabel}>ACTIVE TASKS</div>
                  <div className={styles.statValue}>4</div>
                  <div className={styles.statMetaSecondary}>1 high priority</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statLabel}>DEEP WORK</div>
                  <div className={styles.statValue}>3h 45m</div>
                  <div className={styles.statMeta}>Target: 4h</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statLabel}>GIT STREAK</div>
                  <div className={styles.statValueAccent}>19 Days</div>
                  <div className={styles.statMetaSecondary}>Clean log</div>
                </div>
              </div>

              {/* Task Feed */}
              <div className={styles.taskFeed}>
                <div className={styles.taskItemActive}>
                  <div className={styles.taskLeft}>
                    <span className={styles.priorityBadgeP1}>P1</span>
                    <span className={styles.taskTitle}>
                      Complete system design notes
                    </span>
                  </div>
                  <span className={styles.taskStatusActive}>In Progress</span>
                </div>
                <div className={styles.taskItemDefault}>
                  <div className={styles.taskLeft}>
                    <span className={styles.priorityBadgeP2}>P2</span>
                    <span className={styles.taskTitleSecondary}>
                      30 min deep work on auth migration
                    </span>
                  </div>
                  <span className={styles.taskStatusMuted}>45m tracked</span>
                </div>
                <div className={styles.taskItemDone}>
                  <div className={styles.taskLeft}>
                    <span className="material-symbols-outlined" style={{ fontSize: 16, color: "var(--success)" }}>
                      check_circle
                    </span>
                    <span className={styles.taskTitleDone}>
                      Review project PR #42
                    </span>
                  </div>
                  <span className={styles.taskStatusDone}>Synced 8f3a21c</span>
                </div>
              </div>

              {/* Focus Curve */}
              <div className={styles.focusCurve}>
                <div className={styles.focusCurveHeader}>
                  <span>7-DAY FOCUS DISTRIBUTION</span>
                  <span className={styles.focusCurveTotal}>28.4 HRS TOTAL</span>
                </div>
                <svg
                  className={styles.focusSvg}
                  viewBox="0 0 400 48"
                  fill="none"
                  aria-label="7-day focus distribution chart"
                >
                  <path
                    d="M0,40 Q60,10 120,25 T240,15 T320,8 T400,20"
                    stroke="#fa547a"
                    strokeWidth="2"
                    fill="none"
                  />
                  <path
                    d="M0,40 Q60,10 120,25 T240,15 T320,8 T400,20 L400,48 L0,48 Z"
                    fill="url(#hero-gradient)"
                    opacity="0.15"
                  />
                  <circle cx="320" cy="8" r="3" fill="#fa547a" />
                  <defs>
                    <linearGradient
                      id="hero-gradient"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="0%" stopColor="#fa547a" />
                      <stop
                        offset="100%"
                        stopColor="#fa547a"
                        stopOpacity="0"
                      />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>

            {/* Right: Git Ledger */}
            <div className={styles.gitLedger}>
              <div>
                <div className={styles.repoHeader}>
                  <div className={styles.repoName}>
                    <span className="material-symbols-outlined" style={{ fontSize: 16 }}>
                      folder_special
                    </span>
                    <span className={styles.repoNameText}>
                      private / habitforge-data
                    </span>
                  </div>
                  <span className={styles.branchBadge}>branch: main</span>
                </div>

                {/* File Tree */}
                <div className={styles.fileTree}>
                  <div className={styles.fileTreeMuted}>data/</div>
                  <div className={`${styles.fileTreeMuted} ${styles.fileTreeIndent1}`}>
                    └── users/user_4821/
                  </div>
                  <div className={`${styles.fileTreeItem} ${styles.fileTreeIndent2}`}>
                    <span>├── profile.json</span>
                    <span className={styles.fileSize}>2.1 KB</span>
                  </div>
                  <div className={`${styles.fileTreeItem} ${styles.fileTreeIndent2}`}>
                    <span>├── categories.json</span>
                    <span className={styles.fileSize}>4.8 KB</span>
                  </div>
                  <div className={`${styles.fileTreeItem} ${styles.fileTreeIndent2}`}>
                    <span>├── subcategories.json</span>
                    <span className={styles.fileSize}>8.2 KB</span>
                  </div>
                  <div className={`${styles.fileTreeItemActive} ${styles.fileTreeIndent2}`}>
                    <span>├── tasks.json</span>
                    <span className={styles.fileModified}>MODIFIED</span>
                  </div>
                  <div className={`${styles.fileTreeMuted} ${styles.fileTreeIndent2}`}>
                    └── logs/
                  </div>
                  <div className={`${styles.fileTreeMuted} ${styles.fileTreeIndent3}`}>
                    ├── 2026-09-21.json
                  </div>
                  <div className={`${styles.fileTreeMuted} ${styles.fileTreeIndent3}`}>
                    ├── 2026-09-22.json
                  </div>
                  <div className={styles.fileTreeIndent3}>
                    └── 2026-09-23.json (today)
                  </div>
                </div>
              </div>

              {/* Commit Toast */}
              <div className={styles.commitToast}>
                <div className={styles.commitToastHeader}>
                  <div className={styles.commitToastLabel}>
                    <span className={styles.commitDot} />
                    <span className={styles.commitToastTitle}>SAVED & SYNCED</span>
                  </div>
                  <span className={styles.commitToastTime}>12s ago</span>
                </div>
                <p className={styles.commitMessage}>
                  commit <span className={styles.commitHash}>8f3a21c</span> —
                  &quot;Update productivity log: 45m deep work session&quot;
                </p>
                <div className={styles.commitFooter}>
                  <span>Author: namish18 (verified GPG)</span>
                  <span className={styles.commitVerified}>Verified Commit</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
