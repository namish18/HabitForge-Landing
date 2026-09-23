import styles from "./Sections.module.css";

const barData = [
  { label: "M", height: 60 },
  { label: "T", height: 85 },
  { label: "W", height: 95, active: true },
  { label: "T", height: 70 },
  { label: "F", height: 80 },
  { label: "S", height: 30 },
  { label: "S", height: 40 },
];

const categories = [
  { name: "Engineering", pct: 44, color: "var(--accent-container)" },
  { name: "Architecture & Specs", pct: 28, color: "#F6B6C3" },
  { name: "Research & RFCs", pct: 18, color: "var(--outline)" },
  { name: "Operations", pct: 10, color: "var(--outline-variant)" },
];

const heatmapColors = [
  "var(--surface-container-high)",
  "#4A202A",
  "#872B44",
  "#fa547a",
  "#872B44",
  "#fa547a",
  "#C43A5D",
  "#4A202A",
  "var(--surface-container-high)",
  "#872B44",
  "#872B44",
  "#fa547a",
  "#fa547a",
  "#C43A5D",
  "#872B44",
  "#4A202A",
  "#872B44",
  "#fa547a",
  "#fa547a",
  "#C43A5D",
  "#fa547a",
  "#872B44",
  "#4A202A",
  "var(--surface-container-high)",
  "#872B44",
  "#fa547a",
  "#fa547a",
  "#C43A5D",
  "#fa547a",
  "#fa547a",
];

export default function Analytics() {
  return (
    <section id="analytics" className={styles.sectionDefault}>
      <div className={styles.inner}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>04 / VISIBILITY</span>
          <h2 className={styles.sectionTitle}>
            Understand how you actually work.
          </h2>
          <p className={styles.sectionDescription}>
            Your data → structured logs → measurable patterns. No opaque
            dashboards or estimates.
          </p>
        </div>

        <div className={styles.analyticsDashboard}>
          <div className={styles.analyticsGrid}>
            {/* Weekly Bar Chart */}
            <div className={styles.analyticsCard}>
              <div>
                <div className={styles.analyticsHeader}>
                  <span className={styles.analyticsLabel}>
                    WEEKLY FOCUS DISTRIBUTION
                  </span>
                  <span className={styles.analyticsHighlight}>
                    32.6 hrs logged
                  </span>
                </div>
                <p className={styles.analyticsSubtext}>
                  Daily hours allocated across tasks
                </p>
              </div>
              <div className={styles.barChart}>
                {barData.map((bar, i) => (
                  <div key={i} className={styles.barCol}>
                    <div
                      className={bar.active ? styles.barActive : styles.bar}
                      style={{ height: `${bar.height}%` }}
                    />
                    <span className={bar.active ? styles.barLabelActive : styles.barLabel}>
                      {bar.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Category Breakdown */}
            <div className={styles.analyticsCard}>
              <div>
                <span className={styles.analyticsLabel}>
                  CATEGORY BREAKDOWN
                </span>
                <p className={styles.analyticsSubtext}>
                  Focus distribution across core domains
                </p>
              </div>
              <div className={styles.categoryList}>
                {categories.map((cat) => (
                  <div key={cat.name} className={styles.categoryItem}>
                    <div className={styles.categoryHeader}>
                      <span>{cat.name}</span>
                      <span className={styles.categoryValue}>{cat.pct}%</span>
                    </div>
                    <div className={styles.categoryBarTrack}>
                      <div
                        className={styles.categoryBarFill}
                        style={{
                          width: `${cat.pct}%`,
                          backgroundColor: cat.color,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className={styles.velocityFooter}>
                <span className={styles.velocityLabel}>SPRINT VELOCITY</span>
                <span className={styles.velocityValue}>
                  +18% vs last sprint
                </span>
              </div>
            </div>

            {/* Heatmap */}
            <div className={styles.analyticsCard}>
              <div>
                <div className={styles.analyticsHeader}>
                  <span className={styles.analyticsLabel}>
                    30-DAY PERSISTENCE HEATMAP
                  </span>
                  <span className={styles.analyticsLabel}>218 events</span>
                </div>
                <p className={styles.analyticsSubtext}>
                  Git commit timestamps from your logs
                </p>
              </div>
              <div className={styles.heatmapGrid}>
                {heatmapColors.map((color, i) => (
                  <div
                    key={i}
                    className={styles.heatmapCell}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
              <div className={styles.heatmapLegend}>
                <span>Less</span>
                <div className={styles.heatmapLegendColors}>
                  {[
                    "var(--surface-container-high)",
                    "#4A202A",
                    "#872B44",
                    "#C43A5D",
                    "#fa547a",
                  ].map((color, i) => (
                    <span
                      key={i}
                      className={styles.heatmapLegendCell}
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
                <span>More</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
