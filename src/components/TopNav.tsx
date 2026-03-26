import Image from "next/image";
import Link from "next/link";

export function TopNav() {
  return (
    <header className="top-nav">
      <div className="container top-nav-inner">
        <Link href="/" className="brand">
          <Image
            src="/cursortoys-logo.png"
            alt="CursorToys logo"
            width={34}
            height={34}
            className="brand-mark"
            priority
          />
          <span className="brand-text">CURSORTOYS</span>
        </Link>
        <nav className="nav-links" aria-label="Main navigation">
          <Link href="/">Home</Link>
          <Link href="/features">Features</Link>
          <Link href="/docs">Docs</Link>
          <Link href="/changelog">Changelog</Link>
        </nav>
      </div>
    </header>
  );
}