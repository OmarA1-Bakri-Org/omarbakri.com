"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-base px-4">
      <div className="text-center max-w-md">
        <h1
          className="font-light text-primary mb-4"
          style={{ fontSize: "var(--text-2xl)" }}
        >
          Something went wrong
        </h1>

        <p
          className="text-secondary mb-8"
          style={{ fontSize: "var(--text-sm)" }}
        >
          An unexpected error occurred. Please try again.
        </p>

        <div className="flex gap-4 justify-center">
          <button
            onClick={reset}
            className="px-6 py-3 bg-accent text-base font-medium hover:bg-accent-hover transition-colors duration-200"
            style={{ fontSize: "var(--text-sm)" }}
          >
            Try Again
          </button>

          <a
            href="/"
            className="px-6 py-3 border border-edge text-secondary hover:text-primary hover:border-edge-strong transition-colors duration-200"
            style={{ fontSize: "var(--text-sm)" }}
          >
            Go Home
          </a>
        </div>

        {error.digest && (
          <p className="text-muted mt-8" style={{ fontSize: "var(--text-xs)" }}>
            Error ID: {error.digest}
          </p>
        )}
      </div>
    </div>
  );
}
