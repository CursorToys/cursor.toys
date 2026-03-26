export function Footer() {
  return (
    <footer className="footer">
      <div className="container" style={{ display: "flex", justifyContent: "space-between", gap: "0.75rem", flexWrap: "wrap" }}>
        <p>CursorToys. Built for fast, collaborative Cursor workflows.</p>
        <p>
          <a href="https://github.com/CursorToys/cursor-toys" target="_blank" rel="noreferrer">
            GitHub
          </a>{" "}
          |{" "}
          <a href="https://open-vsx.org/extension/godrix/cursor-toys" target="_blank" rel="noreferrer">
            Open VSX
          </a>
        </p>
      </div>
    </footer>
  );
}