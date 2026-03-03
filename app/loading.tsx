export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base">
      <div className="text-center">
        <div className="w-12 h-12 border-2 border-accent border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-muted" style={{ fontSize: "var(--text-sm)" }}>
          Loading...
        </p>
      </div>
    </div>
  );
}
