import styles from "./Sections.module.css";

const legacyRows = [
  { label: "Data Isolation", value: "Logical row isolation (Risk)" },
  { label: "Backup Access", value: "CSV / JSON export dump" },
  { label: "Audit & Rollback", value: "Opaque system logs" },
  { label: "Vendor Risk", value: "Lock-in & pricing tiers" },
];

const habitforgeRows = [
  { label: "Data Isolation", value: "Physical Git repo isolation" },
  { label: "Backup Access", value: "git clone && rsync", mono: true },
  { label: "Audit & Rollback", value: "git log / git revert", mono: true },
  { label: "Vendor Risk", value: "Zero. Open-source core." },
];

export default function Persistence() {
  return (
    <section id="architecture" className={styles.sectionAlt}>
      <div className={styles.inner}>
        <div className={styles.sectionHeaderCenter}>
          <span className={styles.sectionLabel}>
            05 / PERSISTENCE ARCHITECTURE
          </span>
          <h2 className={styles.sectionTitle}>
            Your database is a repository.
          </h2>
          <p className={styles.sectionDescription} style={{ marginLeft: "auto", marginRight: "auto" }}>
            A deliberate architectural design choice for developers who demand
            complete sovereignty and total auditability.
          </p>
        </div>

        <div className={styles.grid2}>
          {/* Legacy */}
          <div className={styles.comparisonCard}>
            <div>
              <div className={styles.comparisonLabel}>THE LEGACY PARADIGM</div>
              <h3 className={styles.comparisonTitle}>
                Multi-tenant Cloud Database
              </h3>
              <p className={styles.comparisonBody}>
                Your data sits beside millions of other records in an opaque,
                managed database cluster.
              </p>
              <div className={styles.comparisonRows}>
                {legacyRows.map((row) => (
                  <div key={row.label} className={styles.comparisonRowDefault}>
                    <span>{row.label}</span>
                    <span className={styles.comparisonRowValue}>
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.comparisonFooter}>
              Result: You lease access to your own daily memory.
            </div>
          </div>

          {/* HabitForge */}
          <div className={styles.comparisonCardActive}>
            <div>
              <div className={styles.comparisonLabelRow}>
                <span className={styles.comparisonLabelActive}>
                  THE HABITFORGE MODEL
                </span>
                <span className={styles.sovereignBadge}>SOVEREIGN</span>
              </div>
              <h3 className={styles.comparisonTitleActive}>
                Private Git Repository
              </h3>
              <p className={styles.comparisonBodyActive}>
                Your productivity records are native Git commits, completely
                isolated inside your private GitHub account.
              </p>
              <div className={styles.comparisonRows}>
                {habitforgeRows.map((row) => (
                  <div key={row.label} className={styles.comparisonRowActive}>
                    <span>{row.label}</span>
                    <span className={styles.comparisonRowValueActive}>
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.comparisonFooterActive}>
              Result: Complete sovereignty, perpetual local ownership.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
