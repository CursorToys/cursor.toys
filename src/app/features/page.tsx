import Link from "next/link";
import { Footer } from "@/components/Footer";
import { TopNav } from "@/components/TopNav";

export default function FeaturesPage() {
  return (
    <div className="site-shell">
      <TopNav />
      <main className="container section">
        <h1 style={{ maxWidth: "22ch" }}>CursorToys features mapped to real extension capabilities.</h1>
        <p className="hero-copy" style={{ marginTop: "1rem" }}>
          This page mirrors the extension documentation and package contribution surface, so each section below maps to
          commands, views, or settings that exist in CursorToys today.
        </p>

        <section className="feature-grid" style={{ marginTop: "2rem" }}>
          <article className="feature-card">
            <h3>Instant sharing and import</h3>
            <p>
              Generate deeplinks and CursorToys bundles for commands, rules, prompts, skills, plans, notepads, hooks,
              HTTP requests, and full folders. Import from deeplink, web URL, bundle, or GitHub Gist.
            </p>
          </article>
          <article className="feature-card">
            <h3>HTTP workbench with assertions</h3>
            <p>
              Execute requests from `.req` and `.request` files, switch environments, use helper variables, and run
              `@assert()` tests with operators for status, headers, body paths, and validation rules.
            </p>
          </article>
          <article className="feature-card">
            <h3>Explorer libraries</h3>
            <p>
              Manage Notepads, Commands, Prompts, Cursor Plans, Skills, Hooks, and MCPB Packages from dedicated
              Explorer views with open, rename, reveal, delete, refresh, and share actions.
            </p>
          </article>
          <article className="feature-card">
            <h3>AI accelerators</h3>
            <p>
              Refine selection or clipboard with Gemini, process text with custom prompts, and send text or selection
              to chat through commands and context menu actions.
            </p>
          </article>
          <article className="feature-card">
            <h3>MCPB package operations</h3>
            <p>
              Install `.mcpb` bundles with preview, edit environment variables before saving, and manage installed
              packages directly from the MCPB Explorer tree.
            </p>
          </article>
          <article className="feature-card">
            <h3>Remote and usage operations</h3>
            <p>
              Run CursorToys Remote Chat controls (start, pause, configure, send summary) and monitor Cursor spending
              usage from status bar commands.
            </p>
          </article>
        </section>

        <section className="section" style={{ paddingBottom: "0" }}>
          <h2>Core categories from the extension docs</h2>
          <div className="split">
            <article className="panel">
              <h3>Authoring and distribution</h3>
              <ul className="list" style={{ marginTop: "0.8rem" }}>
                <li>Generate deeplink or web links for commands, rules, prompts, and chat prompts.</li>
                <li>Share as CursorToys bundle for single files, folders, or project-level payloads.</li>
                <li>Import through Command Palette shortcut and route to workspace or personal libraries.</li>
              </ul>
            </article>
            <article className="panel">
              <h3>Validation and execution</h3>
              <ul className="list" style={{ marginTop: "0.8rem" }}>
                <li>Execute HTTP requests in-editor with timeout and save/preview behavior.</li>
                <li>Validate response behavior with assertions and inline pass/fail output.</li>
                <li>Switch environments and use helper functions for dynamic request values.</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="section" style={{ paddingBottom: "0" }}>
          <h2>Typical workflows</h2>
          <div className="split">
            <article className="panel">
              <h3>Bootstrap a new project</h3>
              <ul className="list" style={{ marginTop: "0.8rem" }}>
                <li>Create starter command, prompt, and rules bundles from repository folders.</li>
                <li>Import team HTTP requests with environment files and assertion templates.</li>
                <li>Add core skills and plans to keep onboarding steps reproducible.</li>
              </ul>
            </article>
            <article className="panel">
              <h3>Ship and communicate a release</h3>
              <ul className="list" style={{ marginTop: "0.8rem" }}>
                <li>Run HTTP request suites and assertions before publishing changes.</li>
                <li>Refine release notes and prompts with AI processing commands.</li>
                <li>Share final assets via bundle, gist, or deeplink for the full team.</li>
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