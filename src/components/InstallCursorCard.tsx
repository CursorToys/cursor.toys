import Image from "next/image";

const INSTALL_DEEPLINK = "cursor:extension/godrix.cursor-toys";

export function InstallCursorCard() {
  return (
    <a className="install-card" href={INSTALL_DEEPLINK} aria-label="Install CursorToys in Cursor">
      <Image
        src="/cursortoys-logo.png"
        alt="CursorToys logo"
        width={44}
        height={44}
        className="install-card-logo"
      />
      <div>
        <p className="install-card-for">For Cursor</p>
        <p className="install-card-action">
          Install extension <span aria-hidden="true">&rarr;</span>
        </p>
      </div>
    </a>
  );
}