import { DeeplinkButton } from "@/components/DeeplinkButton";
import { Footer } from "@/components/Footer";
import { TopNav } from "@/components/TopNav";

export default function DocsPage() {
  return (
    <div className="site-shell">
      <TopNav />
      <main className="container section">
        <h1 style={{ maxWidth: "20ch" }}>Quick start docs</h1>
        <p className="hero-copy" style={{ marginTop: "1rem" }}>
          Install CursorToys, configure your workspace, and run your first full sharing plus testing workflow in a few
          minutes.
        </p>

        <div className="split">
          <article className="panel">
            <h3>1. Install</h3>
            <ul className="list" style={{ marginTop: "0.8rem" }}>
              <li>Install from VS Code Marketplace or Open VSX.</li>
              <li>Open Command Palette and search for CursorToys commands.</li>
              <li>Run the menu command to verify the extension is active.</li>
            </ul>
          </article>
          <article className="panel">
            <h3>2. Import first asset</h3>
            <ul className="list" style={{ marginTop: "0.8rem" }}>
              <li>Use Import from Link for deeplink, compressed bundle, or gist URL.</li>
              <li>Choose personal or project location when prompted.</li>
              <li>Open imported files and validate content before sharing forward.</li>
            </ul>
          </article>
        </div>

        <section className="section" style={{ paddingBottom: "0" }}>
          <h2>Core configuration</h2>
          <div className="split">
            <article className="panel">
              <h3>Recommended settings</h3>
              <ul className="list" style={{ marginTop: "0.8rem" }}>
                <li>Choose preferred link type for sharing output.</li>
                <li>Set allowed file extensions for command and prompt flows.</li>
                <li>Define base folder strategy for commands, rules, prompts, and HTTP files.</li>
              </ul>
            </article>
            <article className="panel">
              <h3>Deeplink format</h3>
            <ul className="list" style={{ marginTop: "0.8rem" }}>
              <li>Base protocol: cursor://anysphere.cursor-deeplink/...</li>
              <li>Supported kinds include command, rule, skill, and prompt links.</li>
              <li>Browsers may ask permission before opening custom protocols.</li>
            </ul>
          </article>
        </div>
        </section>

        <section className="section" style={{ paddingBottom: "0" }}>
          <h2>Troubleshooting</h2>
          <div className="split">
            <article className="panel">
              <h3>Import issues</h3>
              <ul className="list" style={{ marginTop: "0.8rem" }}>
                <li>Confirm the link includes a valid Cursor or shareable format.</li>
                <li>Check if selected destination folder is writable.</li>
                <li>Retry with a shorter payload if URL length is too large.</li>
              </ul>
            </article>
            <article className="panel">
              <h3>Deeplink issues</h3>
              <ul className="list" style={{ marginTop: "0.8rem" }}>
                <li>Allow custom protocol prompts in your browser.</li>
                <li>Ensure Cursor is installed and registered for deeplink protocol handling.</li>
                <li>Fallback to web links or import commands when needed.</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="section" style={{ paddingBottom: "0" }}>
          <h2>Best practices</h2>
          <div className="split">
            <article className="panel">
              <h3>For teams</h3>
              <ul className="list" style={{ marginTop: "0.8rem" }}>
                <li>Version shared bundles by project milestone.</li>
                <li>Document prompt and command intent in file headers.</li>
                <li>Use project-specific folders for reproducible collaboration.</li>
              </ul>
            </article>
            <article className="panel">
              <h3>For personal workflows</h3>
              <ul className="list" style={{ marginTop: "0.8rem" }}>
                <li>Keep a small set of high-value commands and prompts.</li>
                <li>Use tree views to clean stale assets weekly.</li>
                <li>Save reusable API checks as request and assertion templates.</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="section" style={{ paddingBottom: "0" }}>
          <h2>Launch test deeplink</h2>
          <p className="hero-copy" style={{ marginTop: "0.8rem" }}>
            Use the button below to test whether your browser can hand custom protocol links to Cursor.
          </p>
          <div className="hero-actions" style={{ marginTop: "1.3rem" }}>
            <DeeplinkButton />
            <a
              className="button button-secondary"
              href="https://marketplace.visualstudio.com/items?itemName=Godrix.cursor-toys"
              target="_blank"
              rel="noreferrer"
            >
              Extension listing
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}