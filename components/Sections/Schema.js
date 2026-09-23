import styles from "./Sections.module.css";

export default function Schema() {
  return (
    <section id="docs" className={styles.sectionDefault}>
      <div className={styles.inner}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>
            06 / SCHEMA &amp; TRANSPARENCY
          </span>
          <h2 className={styles.sectionTitle}>
            Your productivity, as structured data.
          </h2>
          <p className={styles.sectionDescription}>
            No proprietary blobs. Inspect, validate, or transform your task logs
            with any JSON tool in your terminal pipeline.
          </p>
        </div>

        <div className={styles.ideShowcase}>
          <div className={styles.ideHeader}>
            <div className={styles.ideFileInfo}>
              <span className={styles.ideFileDot} />
              <span className={styles.ideFileName}>
                data/users/user_4821/tasks.json
              </span>
            </div>
            <span className={styles.ideEncoding}>
              UTF-8 • JSON Schema v1.2
            </span>
          </div>
          <div className={styles.ideSplit}>
            {/* Tree */}
            <div className={styles.ideTree}>
              <div className={styles.ideTreeMuted}>repository-root/</div>
              <div className={styles.ideTreeMuted} style={{ paddingLeft: 12 }}>
                └── data/
              </div>
              <div className={styles.ideTreeMuted} style={{ paddingLeft: 24 }}>
                └── users/
              </div>
              <div className={styles.ideTreeMuted} style={{ paddingLeft: 36 }}>
                └── user_4821/
              </div>
              <div className={styles.ideTreeActive} style={{ paddingLeft: 48 }}>
                📄 tasks.json
              </div>
              <div className={styles.ideTreeMuted} style={{ paddingLeft: 48 }}>
                📄 profile.json
              </div>
              <div className={styles.ideTreeMuted} style={{ paddingLeft: 48 }}>
                📄 categories.json
              </div>
              <div className={styles.ideTreeMuted} style={{ paddingLeft: 48 }}>
                📁 logs/
              </div>
            </div>
            {/* JSON */}
            <div className={styles.ideContent}>
              <pre>
                <code>{`{`}</code>
                {"\n"}
                <code>
                  {"  "}
                  <span className={styles.jsonKey}>&quot;id&quot;</span>:{" "}
                  <span className={styles.jsonString}>
                    &quot;task_9281&quot;
                  </span>
                  ,
                </code>
                {"\n"}
                <code>
                  {"  "}
                  <span className={styles.jsonKey}>&quot;title&quot;</span>:{" "}
                  <span className={styles.jsonString}>
                    &quot;Complete system design notes&quot;
                  </span>
                  ,
                </code>
                {"\n"}
                <code>
                  {"  "}
                  <span className={styles.jsonKey}>
                    &quot;durationMinutes&quot;
                  </span>
                  : <span className={styles.jsonNumber}>45</span>,
                </code>
                {"\n"}
                <code>
                  {"  "}
                  <span className={styles.jsonKey}>
                    &quot;completed&quot;
                  </span>
                  : <span className={styles.jsonBool}>true</span>,
                </code>
                {"\n"}
                <code>
                  {"  "}
                  <span className={styles.jsonKey}>
                    &quot;category&quot;
                  </span>
                  :{" "}
                  <span className={styles.jsonString}>
                    &quot;Engineering&quot;
                  </span>
                  ,
                </code>
                {"\n"}
                <code>
                  {"  "}
                  <span className={styles.jsonKey}>
                    &quot;subcategory&quot;
                  </span>
                  :{" "}
                  <span className={styles.jsonString}>
                    &quot;Architecture&quot;
                  </span>
                  ,
                </code>
                {"\n"}
                <code>
                  {"  "}
                  <span className={styles.jsonKey}>
                    &quot;priority&quot;
                  </span>
                  : <span className={styles.jsonString}>&quot;P1&quot;</span>,
                </code>
                {"\n"}
                <code>
                  {"  "}
                  <span className={styles.jsonKey}>
                    &quot;metadata&quot;
                  </span>
                  : {"{"}
                </code>
                {"\n"}
                <code>
                  {"    "}
                  <span className={styles.jsonKey}>&quot;commit&quot;</span>:{" "}
                  <span className={styles.jsonString}>
                    &quot;8f3a21c&quot;
                  </span>
                  ,
                </code>
                {"\n"}
                <code>
                  {"    "}
                  <span className={styles.jsonKey}>
                    &quot;timestamp&quot;
                  </span>
                  :{" "}
                  <span className={styles.jsonString}>
                    &quot;2026-09-23T18:42:00.000Z&quot;
                  </span>
                  ,
                </code>
                {"\n"}
                <code>
                  {"    "}
                  <span className={styles.jsonKey}>&quot;sha&quot;</span>:{" "}
                  <span className={styles.jsonString}>
                    &quot;b1a9c339d0563459c23b207&quot;
                  </span>
                </code>
                {"\n"}
                <code>{"  }"}</code>
                {"\n"}
                <code>{"}"}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
