import styles from "./Sections.module.css";

const principles = [
  {
    num: "01",
    title: "Know where your data lives.",
    body: "Inside your private GitHub account. Not replicated to marketing data warehouses or opaque cloud clusters.",
  },
  {
    num: "02",
    title: "Understand how it is stored.",
    body: "Normalized JSON schema validated by deterministic pipelines. If HabitForge ever vanishes, your files remain yours forever.",
  },
  {
    num: "03",
    title: "Keep an immutable history.",
    body: "Track your personal discipline and productivity journey through Git SHAs, commit messages, and automated branch telemetry.",
  },
];

export default function Philosophy() {
  return (
    <section className={styles.sectionAlt}>
      <div className={styles.inner}>
        <div className={styles.sectionHeader} style={{ maxWidth: "48rem" }}>
          <span className={styles.sectionLabel}>07 / PHILOSOPHY</span>
          <h2 className={styles.sectionTitle}>
            Productivity shouldn&apos;t feel like a black box.
          </h2>
          <p className={styles.sectionDescription} style={{ lineHeight: "1.6" }}>
            HabitForge Lite gives your daily execution structure without
            concealing the underlying storage mechanics.
          </p>
        </div>

        <div className={styles.grid3}>
          {principles.map((p) => (
            <div key={p.num} className={styles.card}>
              <div>
                <div className={styles.cardNumberLg}>{p.num}</div>
                <h3 className={styles.cardTitle} style={{ fontWeight: 700, marginBottom: "var(--space-xs)" }}>
                  {p.title}
                </h3>
                <p className={styles.cardBody}>{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
