"use client";

import { useState } from "react";

const DEEPLINK_URL = "cursor:extension/godrix.cursor-toys";

interface DeeplinkButtonProps {
  label?: string;
  centered?: boolean;
}

export function DeeplinkButton({
  label = "Open in Cursor",
  centered = false,
}: DeeplinkButtonProps) {
  const [showHint, setShowHint] = useState(false);

  const handleClick = () => {
    setShowHint(false);
    window.location.href = DEEPLINK_URL;

    window.setTimeout(() => {
      setShowHint(true);
    }, 900);
  };

  return (
    <div style={centered ? { textAlign: "center" } : undefined}>
      <button type="button" className="button button-primary" onClick={handleClick}>
        {label}
      </button>
      {showHint ? (
        <p className="muted" style={{ marginTop: "0.55rem" }}>
          If nothing opened, check if Cursor handles custom protocol links in your browser.
        </p>
      ) : null}
    </div>
  );
}