import { Footer } from "@/components/Footer";
import { InstallCursorCard } from "@/components/InstallCursorCard";
import { TopNav } from "@/components/TopNav";

export default function DocsPage() {
  return (
    <div className="site-shell">
      <TopNav />
      <main className="container section">
        <h1 style={{ maxWidth: "20ch" }}>Quick start docs</h1>
        <p className="hero-copy" style={{ marginTop: "1rem" }}>
          Setup based on the official CursorToys extension docs. Follow these steps to install, configure essentials,
          and run your first practical workflow with sharing and HTTP validation.
        </p>

        <div className="split">
          <article className="panel">
            <h3>1. Install</h3>
            <ul className="list" style={{ marginTop: "0.8rem" }}>
              <li>Install from VS Code Marketplace, Open VSX, or local VSIX package.</li>
              <li>Open Command Palette and run `CursorToys: Show Menu`.</li>
              <li>Confirm Explorer views appear: Notepads, Commands, Prompts, Plans, Skills, Hooks, and MCPB.</li>
            </ul>
          </article>
          <article className="panel">
            <h3>2. Configure base settings</h3>
            <ul className="list" style={{ marginTop: "0.8rem" }}>
              <li>Pick link behavior with `cursorToys.linkType` (deeplink, web, or custom).</li>
              <li>Set folder strategy with `cursorToys.baseFolder` and `cursorToys.commandsFolder`.</li>
              <li>Optionally adjust `cursorToys.allowedExtensions` and HTTP timeout defaults.</li>
            </ul>
          </article>
        </div>

        <section className="section" style={{ paddingBottom: "0", textAlign: "center" }}>
          <h2>Install CursorToys</h2>
          <p className="hero-copy" style={{ margin: "0.8rem auto 0" }}>
            Use the deeplink button below to open Cursor and install using your package route.
          </p>
          <div className="install-card-wrap" style={{ marginTop: "1.3rem" }}>
            <InstallCursorCard />
          </div>
        </section>

        <section className="section" style={{ paddingBottom: "0" }}>
          <h2>3. First productive flow (recommended)</h2>
          <div className="split">
            <article className="panel">
              <h3>Share and import assets</h3>
              <ul className="list" style={{ marginTop: "0.8rem" }}>
                <li>Create a command or prompt file in your configured `.cursor`, `.claude`, `.vscode`, or `.ai` path.</li>
                <li>Use share commands to generate deeplink, CursorToys bundle, or GitHub Gist.</li>
                <li>Use `CursorToys: Import` (`Ctrl/Cmd+Shift+I`) to validate import on a clean location.</li>
              </ul>
            </article>
            <article className="panel">
              <h3>Run HTTP with assertions</h3>
              <ul className="list" style={{ marginTop: "0.8rem" }}>
                <li>Create `.req` or `.request` files under your HTTP folder.</li>
                <li>Add `@assert()` annotations to validate response contracts and behavior.</li>
                <li>Run request and review inline assertion results plus response output.</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="section" style={{ paddingBottom: "0" }}>
          <h2>4. Optional modules to enable</h2>
          <div className="split">
            <article className="panel">
              <h3>MCPB and productivity tools</h3>
              <ul className="list" style={{ marginTop: "0.8rem" }}>
                <li>Install `.mcpb` packages from Command Palette and edit env vars in preview.</li>
                <li>Enable AI text refinement with Gemini key configuration.</li>
                <li>Use minify commands for files and clipboard when sharing payloads.</li>
              </ul>
            </article>
            <article className="panel">
              <h3>Remote and spending</h3>
              <ul className="list" style={{ marginTop: "0.8rem" }}>
                <li>Configure CursorToys Remote Chat for Telegram-driven workflows.</li>
                <li>Use spending commands to track Auto/API usage from the status bar.</li>
                <li>Tune refresh and token options in `cursorToys.spending.*` settings.</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="section" style={{ paddingBottom: "0" }}>
          <h2>Troubleshooting</h2>
          <div className="split">
            <article className="panel">
              <h3>Import and sharing issues</h3>
              <ul className="list" style={{ marginTop: "0.8rem" }}>
                <li>Confirm link type matches your configured output (`deeplink`, `web`, or `custom`).</li>
                <li>Verify destination folders are writable and extension type is allowed.</li>
                <li>If URL payload is too large, share as CursorToys bundle or GitHub Gist.</li>
              </ul>
            </article>
            <article className="panel">
              <h3>HTTP and deeplink issues</h3>
              <ul className="list" style={{ marginTop: "0.8rem" }}>
                <li>Check selected environment and unresolved variables in request files.</li>
                <li>Confirm `cursorToys.httpAssertionsEnabled` is active when tests do not run.</li>
                <li>Allow browser custom-protocol prompts for Cursor deeplinks.</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="section" style={{ paddingBottom: "0" }}>
          <h2>Launch test deeplink</h2>
          <p className="hero-copy" style={{ marginTop: "0.8rem" }}>
            Use the button below to verify your browser can hand `cursor:` protocol links to the editor.
          </p>
          <div className="hero-actions" style={{ marginTop: "1.3rem", justifyContent: "center" }}>
            <InstallCursorCard />
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