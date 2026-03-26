import Link from "next/link";
import { Footer } from "@/components/Footer";
import { TopNav } from "@/components/TopNav";

export default function FeaturesPage() {
  return (
    <div className="site-shell">
      <TopNav />
      <main className="container section">
        <h1 style={{ maxWidth: "22ch" }}>CursorToys features, grouped by real workflows.</h1>
        <p className="hero-copy" style={{ marginTop: "1rem" }}>
          CursorToys is designed to help teams standardize how they share context, test integrations, and execute
          repeatable AI-assisted workflows inside Cursor.
        </p>

        <section className="feature-grid" style={{ marginTop: "2rem" }}>
          <article className="feature-card">
            <h3>Sharing engine</h3>
            <p>
              Generate deeplinks for commands, rules, prompts, and skills. Share as compressed bundles or GitHub Gist
              when teams need portable setup across repositories.
            </p>
          </article>
          <article className="feature-card">
            <h3>HTTP workbench</h3>
            <p>
              Run API requests in-editor with environments, helper variables, and assertions to validate status,
              headers, response body paths, and execution timing.
            </p>
          </article>
          <article className="feature-card">
            <h3>Personal libraries</h3>
            <p>
              Organize commands, prompts, hooks, plans, notepads, and skills through dedicated tree views built for
              discoverability and quick edits.
            </p>
          </article>
          <article className="feature-card">
            <h3>AI accelerators</h3>
            <p>
              Refine technical text, process content with reusable prompts, and send context to chat quickly to reduce
              copy and paste overhead.
            </p>
          </article>
          <article className="feature-card">
            <h3>MCPB handling</h3>
            <p>
              Install and preview MCP bundles with environment awareness, then manage package lifecycle from focused
              side-panel actions.
            </p>
          </article>
          <article className="feature-card">
            <h3>Remote workflows</h3>
            <p>
              Connect remote workflows with Telegram controls and collaboration paths when local editor access is not
              enough.
            </p>
          </article>
        </section>

        <section className="section" style={{ paddingBottom: "0" }}>
          <h2>Feature breakdown</h2>
          <div className="split">
            <article className="panel">
              <h3>Collaboration and sharing</h3>
              <ul className="list" style={{ marginTop: "0.8rem" }}>
                <li>Share single files or entire folders as reusable bundles.</li>
                <li>Support deeplink, web URL, compressed format, and gist delivery.</li>
                <li>Import flows optimized for both personal and project destinations.</li>
              </ul>
            </article>
            <article className="panel">
              <h3>API development workflow</h3>
              <ul className="list" style={{ marginTop: "0.8rem" }}>
                <li>Run requests without leaving Cursor.</li>
                <li>Use assertions to gate correctness before sharing changes.</li>
                <li>Keep environment definitions near request files for consistency.</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="section" style={{ paddingBottom: "0" }}>
          <h2>Example team workflows</h2>
          <div className="split">
            <article className="panel">
              <h3>Onboarding a new engineer</h3>
              <ul className="list" style={{ marginTop: "0.8rem" }}>
                <li>Share a starter command and prompt bundle via one link.</li>
                <li>Import team HTTP requests and environment templates.</li>
                <li>Pin core skills and plans in personal libraries.</li>
              </ul>
            </article>
            <article className="panel">
              <h3>Shipping an integration</h3>
              <ul className="list" style={{ marginTop: "0.8rem" }}>
                <li>Create request suites and assertion checks in-editor.</li>
                <li>Refine release notes with AI before publishing.</li>
                <li>Share final workflow bundle with the full team.</li>
              </ul>
            </article>
          </div>
        </section>

        <div className="hero-actions" style={{ marginTop: "2rem" }}>
          <Link className="button button-secondary" href="/docs">
            Read setup docs
          </Link>
          <Link className="button button-secondary" href="/">
            Back to landing
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}