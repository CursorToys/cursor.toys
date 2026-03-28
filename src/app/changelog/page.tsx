import { Footer } from "@/components/Footer";
import { TopNav } from "@/components/TopNav";
import ReactMarkdown from "react-markdown";

const CHANGELOG_RAW_URL = "https://raw.githubusercontent.com/CursorToys/cursor-toys/main/CHANGELOG.md";

export const revalidate = 3600;

async function fetchChangelog(): Promise<string> {
  const res = await fetch(CHANGELOG_RAW_URL, { next: { revalidate } });
  if (!res.ok) {
    throw new Error(`Failed to fetch changelog: ${res.status}`);
  }
  return await res.text();
}

export default async function ChangelogPage() {
  const changelog = await fetchChangelog();

  return (
    <div className="site-shell">
      <TopNav />
      <main className="container section">
        <h1 style={{ maxWidth: "20ch" }}>Product changelog</h1>
        <p className="hero-copy" style={{ marginTop: "1rem" }}>
          Automatically sourced from the CursorToys extension repository.
        </p>

        <section className="panel" style={{ marginTop: "2rem" }}>
          <div className="markdown-body">
            <ReactMarkdown>{changelog}</ReactMarkdown>
          </div>
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