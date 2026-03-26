import { Footer } from "@/components/Footer";
import { TopNav } from "@/components/TopNav";

export default function ChangelogPage() {
  return (
    <div className="site-shell">
      <TopNav />
      <main className="container section">
        <h1 style={{ maxWidth: "20ch" }}>Product changelog</h1>
        <p className="hero-copy" style={{ marginTop: "1rem" }}>
          Highlights from the latest release cycle for CursorToys workflows and platform support.
        </p>

        <section className="panel" style={{ marginTop: "2rem" }}>
          <p className="eyebrow" style={{ marginBottom: "0.9rem" }}>v1.13.0 snapshot</p>
          <ul className="list">
            <li>Expanded sharing support across skills, folder bundles, and project-level exports.</li>
            <li>HTTP request tooling with assertions and environment-aware execution paths.</li>
            <li>Extended tree views for commands, prompts, hooks, plans, notepads, and skills.</li>
            <li>AI-assisted text and workflow enhancements for prompt and chat operations.</li>
          </ul>
        </section>

        <div className="hero-actions" style={{ marginTop: "1.6rem" }}>
          <a className="button button-secondary" href="https://github.com/CursorToys/cursor-toys/blob/main/CHANGELOG.md" target="_blank" rel="noreferrer">
            Full repository changelog
          </a>
          <a className="button button-secondary" href="https://github.com/CursorToys/cursor-toys/releases" target="_blank" rel="noreferrer">
            GitHub releases
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}