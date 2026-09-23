import styles from "./Sections.module.css";

const features = [
  {
    num: "01",
    title: "Structured Workflows",
    body: "Multi-tier categorization, subcategories, tags, and nested priority trees customized to software engineering work.",
  },
  {
    num: "02",
    title: "Task Management",
    body: "Fuzzy search, keyboard-first filtering, duration estimates, and P1–P4 priority matrices with instantaneous command access.",
  },
  {
    num: "03",
    title: "Focus Timer",
    body: "Deep work timer and Pomodoro sessions that auto-commit execution logs into your daily date-stamped JSON archives.",
  },
  {
    num: "04",
    title: "Productivity Analytics",
    body: "Historical velocity, category distributions, completion trends, and heatmaps calculated straight from raw repository commits.",
  },
  {
    num: "05",
    title: "Persistent History",
    body: "Stored as clean, structured, human-readable JSON files. Run custom jq scripts, Python parsers, or backups anytime.",
  },
  {
    num: "06",
    title: "Secure Sessions",
    body: "Military-grade Argon2 password hashing and encrypted JWT cookies. Your GitHub PAT is never exposed on client threads.",
  },
  {
    num: "07",
    title: "Git-Backed Storage",
    body: "High-speed repository dispatch via official Octokit REST clients with automatic conflict resolution algorithms.",
  },
  {
    num: "08",
    title: "Total Data Ownership",
    body: (
      <>
        Clone your entire productivity database with standard{" "}
        <code style={{ color: "var(--accent-container)", fontFamily: "var(--font-mono)" }}>
          git clone
        </code>
        . You own the repo, the commits, and the data.
      </>
    ),
  },
];

export default function Features() {
  return (
    <section id="features" className={styles.sectionAlt}>
      <div className={styles.inner}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>03 / CAPABILITIES</span>
          <h2 className={styles.sectionTitle}>
            Everything you need to run your workflow.
          </h2>
          <p className={styles.sectionDescription}>
            Built for engineers who desire a streamlined, low-latency
            productivity OS with zero bloat.
          </p>
        </div>

        <div className={styles.grid4}>
          {features.map((feature) => (
            <div key={feature.num} className={styles.cardCompact}>
              <div>
                <span className={styles.cardNumber}>{feature.num}</span>
                <h4 className={styles.cardTitle} style={{ marginTop: 4, marginBottom: "var(--space-xs)" }}>
                  {feature.title}
                </h4>
                <p className={styles.cardBodySm}>{feature.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
