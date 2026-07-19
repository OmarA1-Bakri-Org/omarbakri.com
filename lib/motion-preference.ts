export type MotionPreference = "full" | "reduce" | "system";

export function getMotionPreference(search?: string): MotionPreference {
  const query =
    search ??
    (typeof window !== "undefined" ? window.location.search : "");
  const value = new URLSearchParams(query).get("motion");

  if (value === "reduce" || value === "system") return value;
  return "full";
}

export function shouldReduceMotion(
  preference: MotionPreference,
  systemPrefersReduced: boolean
): boolean {
  if (preference === "full") return false;
  if (preference === "reduce") return true;
  return systemPrefersReduced;
}
