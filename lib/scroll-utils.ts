export function scrollToSection(href: string): void {
  if (typeof document === "undefined") return;
  if (typeof href !== "string") return;

  const target = href.trim();
  if (!target || !target.startsWith("#")) return;

  try {
    const el = document.querySelector(target);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth" });
  } catch {
    return;
  }
}