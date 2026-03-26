import { InstallCursorCard } from "@/components/InstallCursorCard";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { TopNav } from "@/components/TopNav";

export default function Home() {
  return (
    <div className="site-shell">
      <TopNav />
      <main>
        <section className="section hero container">
          <span className="eyebrow fade-up">For developers building in Cursor</span>
          <h1 className="fade-up fade-delay-1">Your DX layer for Cursor.</h1>
          <p className="hero-copy fade-up fade-delay-2">
            Share commands instantly, test APIs in-editor, and manage prompts, skills, and plans in one place. Built
            first for individual developer experience, with team workflows when you need them.
          </p>
          <div className="install-spotlight fade-up fade-delay-2">
            <div className="install-card-wrap">
              <InstallCursorCard />
            </div>
          </div>
          <div className="panel-grid">
            <article className="panel fade-up">
              <h3>Share instantly</h3>
              <p>Create deeplinks and shareables for commands, prompts, and skills in seconds.</p>
            </article>
            <article className="panel fade-up fade-delay-1">
              <h3>Test APIs in-editor</h3>
              <p>Run requests with assertions, environments, and syntax support without leaving the editor.</p>
            </article>
            <article className="panel fade-up fade-delay-2">
              <h3>Stay in flow</h3>
              <p>Refine text, send context to chat, and manage MCP and skills from focused sidebars.</p>
            </article>
          </div>
        </section>

        <section className="section container" id="features">
          <h2>Built for daily execution</h2>
          <div className="feature-grid">
            <article className="feature-card">
              <h3>Command and prompt sharing</h3>
              <p>Export and import workflows through deeplink, web URL, compressed shareable, or GitHub Gist.</p>
            </article>
            <article className="feature-card">
              <h3>In-editor API validation</h3>
              <p>Check status, headers, JSON paths, timing, and schema expectations with assertion annotations.</p>
            </article>
            <article className="feature-card">
              <h3>Personal libraries</h3>
              <p>Manage commands, prompts, notepads, hooks, plans, and skills from dedicated tree views.</p>
            </article>
            <article className="feature-card">
              <h3>MCP and integrations</h3>
              <p>Install MCP bundles, configure environments, and connect remote workflows where your team works.</p>
            </article>
          </div>
        </section>

        <section className="section container" id="how-it-works">
          <h2>How devs run CursorToys</h2>
          <div className="split">
            <article className="panel">
              <h3>Collaborative setup</h3>
              <ul className="list">
                <li>Create command templates once and distribute them through deeplinks.</li>
                <li>Bundle project resources into a single shareable package.</li>
                <li>Keep everyone synced with personal and workspace libraries.</li>
              </ul>
            </article>
            <article className="panel">
              <h3>Execution layer</h3>
              <ul className="list">
                <li>Run API requests and assertions without leaving the editor.</li>
                <li>Refine technical writing and prompts before sending to chat.</li>
                <li>Track spending and tune your workflow stack as usage scales.</li>
              </ul>
            </article>
          </div>
          <div className="hero-actions">
            <Link className="button button-secondary" href="/features">
              Explore all features
            </Link>
            <a
              className="button button-secondary"
              href="https://marketplace.visualstudio.com/items?itemName=Godrix.cursor-toys"
              target="_blank"
              rel="noreferrer"
            >
              Install from VS Code Marketplace
            </a>
          </div>
          <p className="muted" style={{ marginTop: "1rem" }}>
            Open VSX is also supported for Cursor and compatible editors.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
