"use client";

import { useState } from "react";

// Shows /public/logo.png. If it is missing, falls back to a clean text logo.
export default function Logo({ className = "", imgClassName = "" }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span className={`text-2xl font-extrabold tracking-tight ${className}`}>
        Reel <span className="text-gradient">Fuel</span> Kit
      </span>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/logo.png"
      alt="Reel Fuel Kit"
      onError={() => setFailed(true)}
      className={imgClassName}
    />
  );
}
