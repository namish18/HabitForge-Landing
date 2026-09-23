import styles from "./Sections.module.css";

const GITHUB_URL = "https://github.com/namish18/HabitForge-Lite";

const techTags = [
  "Next.js 14 (App Router)",
  "GitHub REST API",
  "@octokit/rest",
  "Argon2 Password Hashing",
  "JWT Authentication",
  "Tailwind CSS",
  "Serverless Functions",
];

export default function Repository() {
  return (
    <section className={styles.sectionDefault}>
      <div className={styles.inner}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>08 / REPOSITORY</span>
          <h2 className={styles.sectionTitle}>Built in the open.</h2>
          <p className={styles.sectionDescription}>
            Auditable, forkable, and designed with zero proprietary black-box
            layers.
          </p>
        </div>

        <div className={styles.repoCard}>
          <div className={styles.repoCardHeader}>
            <div className={styles.repoInfo}>
              <div className={styles.repoTitleRow}>
                <span className="material-symbols-outlined" style={{ color: "var(--accent-container)", fontSize: 22 }}>
                  deployed_code
                </span>
                <a
                  href={GITHUB_URL}
                  className={styles.repoName2}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  namish18 / HabitForge-Lite
                </a>
                <span className={styles.publicBadge}>Public</span>
              </div>
              <p className={styles.repoDescription}>
                Professional productivity management backed by GitHub
                version-controlled storage.
              </p>
            </div>
            <div className={styles.repoActions}>
              <a
                href={GITHUB_URL}
                className={styles.repoBtnSecondary}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined">visibility</span>
                <span>View Source</span>
              </a>
              <a
                href={GITHUB_URL}
                className={styles.repoBtnPrimary}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined">star</span>
                <span>Star on GitHub</span>
              </a>
            </div>
          </div>
          <div className={styles.techTags}>
            {techTags.map((tag) => (
              <span key={tag} className={styles.techTag}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
