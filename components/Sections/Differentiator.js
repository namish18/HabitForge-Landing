import styles from "./Sections.module.css";

export default function Differentiator() {
  return (
    <section id="how-it-works" className={styles.sectionAlt}>
      <div className={styles.inner}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>01 / ARCHITECTURAL SHIFT</span>
          <h2 className={styles.sectionTitle}>
            Not another database-backed productivity app.
          </h2>
          <p className={styles.sectionDescription}>
            Your productivity history lives where your code lives. Structured
            application data is stored as plain JSON files and updated natively
            through GitHub&apos;s authenticated API.
          </p>
        </div>

        <div className={styles.grid3}>
          {/* Card 1 */}
          <div className={styles.card}>
            <div>
              <div className={styles.cardIconBox}>
                <span className="material-symbols-outlined">lock</span>
              </div>
              <h3 className={styles.cardTitle}>Private by architecture</h3>
              <p className={styles.cardBody}>
                Your application data is stored inside your own private
                repository rather than a multi-tenant shared database. No
                third-party analytics scripts reading your daily logs.
              </p>
            </div>
            <div className={styles.cardFooter}>
              SCOPE: repo (private write)
            </div>
          </div>

          {/* Card 2 */}
          <div className={styles.card}>
            <div>
              <div className={styles.cardIconBox}>
                <span className="material-symbols-outlined">history</span>
              </div>
              <h3 className={styles.cardTitle}>Version controlled</h3>
              <p className={styles.cardBody}>
                Every successful modification becomes an atomic Git commit with
                cryptographic SHA verification. Enjoy instant rollbacks, git
                diffs, and branch-level isolation for task changes.
              </p>
            </div>
            <div className={styles.cardFooter}>
              HISTORY: Immutable DAG ledger
            </div>
          </div>

          {/* Card 3 */}
          <div className={styles.card}>
            <div>
              <div className={styles.cardIconBox}>
                <span className="material-symbols-outlined">cloud_off</span>
              </div>
              <h3 className={styles.cardTitle}>Simple infrastructure</h3>
              <p className={styles.cardBody}>
                Skip dedicated Postgres hosting, ORM migrations, vacuum jobs,
                and vendor lock-in. HabitForge Lite harnesses GitHub&apos;s
                battle-tested infrastructure as a serverless back end.
              </p>
            </div>
            <div className={styles.cardFooter}>MAINTENANCE: Zero DB Ops</div>
          </div>
        </div>
      </div>
    </section>
  );
}
