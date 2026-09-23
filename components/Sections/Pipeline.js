import styles from "./Sections.module.css";

const steps = [
  { num: "01", label: "You", sub: "User Action" },
  { num: "02", label: "UI Client", sub: "Next.js React" },
  { num: "03", label: "Route API", sub: "Edge Runtime" },
  { num: "04", label: "Argon2", sub: "JWT Verified" },
  { num: "05", label: "Storage", sub: "JSON Serializer" },
  { num: "06", label: "Octokit", sub: "GitHub REST" },
];

const traceLines = [
  {
    num: "1",
    label: "User Dispatch:",
    text: (
      <>
        Client initiates completion for task{" "}
        <code className={styles.traceCode}>&quot;task_9281&quot;</code>
      </>
    ),
  },
  {
    num: "2",
    label: "Security Check:",
    text: (
      <>
        <code className={styles.traceCodeMuted}>POST /api/tasks</code> validates
        HTTP-only JWT; checks Argon2 session token hash
      </>
    ),
  },
  {
    num: "3",
    label: "Fetch Current SHA:",
    text: (
      <>
        <code className={styles.traceCodeMuted}>
          Octokit.rest.repos.getContent({'{'} path: &quot;data/users/user_4821/tasks.json&quot; {'}'})
        </code>
      </>
    ),
  },
  {
    num: "4",
    label: "Atomic Serialization:",
    text: "Merges state mutations; computes content base64 with SHA verification",
  },
  {
    num: "5",
    label: "Git Commit Generated:",
    accent: true,
    text: (
      <>
        <code className={styles.traceCode}>
          [main 8f3a21c] &quot;task: Complete system design notes (45m deep work)&quot;
        </code>
      </>
    ),
  },
];

export default function Pipeline() {
  return (
    <section className={styles.sectionDefault}>
      <div className={styles.inner}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>02 / THE PIPELINE</span>
          <h2 className={styles.sectionTitle}>From action to commit.</h2>
          <p className={styles.sectionDescription}>
            Every productivity modification follows a transparent, inspectable
            request pathway with zero black-box intermediaries.
          </p>
        </div>

        {/* Pipeline Steps */}
        <div className={styles.pipelineGrid}>
          {steps.map((step) => (
            <div key={step.num} className={styles.pipelineStep}>
              <span className={styles.pipelineNumber}>{step.num}</span>
              <div className={styles.pipelineLabel}>{step.label}</div>
              <div className={styles.pipelineSub}>{step.sub}</div>
            </div>
          ))}
          {/* Final step */}
          <div className={styles.pipelineStepFinal}>
            <span className={styles.pipelineNumber} style={{ color: "var(--accent-container)" }}>
              07
            </span>
            <div className={styles.pipelineLabelAccent}>Private Repo</div>
            <div className={styles.pipelineSubAccent}>Immutable Log</div>
          </div>
        </div>

        {/* Terminal Trace */}
        <div className={styles.terminal}>
          <div className={styles.terminalHeader}>
            <span>Terminal — Execution Trace: POST /api/tasks</span>
            <span className={styles.terminalStatus}>STATUS: 200 CREATED</span>
          </div>
          <div className={styles.terminalBody}>
            {traceLines.map((line) => (
              <div key={line.num} className={styles.traceLine}>
                <span className={styles.traceNumber}>{line.num}</span>
                <div>
                  <span className={line.accent ? styles.traceLabelAccent : styles.traceLabel}>
                    {line.label}
                  </span>{" "}
                  {line.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
