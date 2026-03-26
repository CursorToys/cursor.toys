"use client";

import { useState } from "react";

const DEEPLINK_URL =
  "cursor://anysphere.cursor-deeplink/prompt?text=Open%20CursorToys%20in%20your%20workspace";

export function DeeplinkButton() {
  const [showHint, setShowHint] = useState(false);

  const handleClick = () => {
    setShowHint(false);
    window.location.href = DEEPLINK_URL;

    window.setTimeout(() => {
      setShowHint(true);
    }, 900);
  };

  return (
    <div>
      <button type="button" className="button button-primary" onClick={handleClick}>
        Open in Cursor via Deeplink
      </button>
      {showHint ? (
        <p className="muted" style={{ marginTop: "0.55rem" }}>
          If nothing opened, check if Cursor handles custom protocol links in your browser.
        </p>
      ) : null}
    </div>
  );
}