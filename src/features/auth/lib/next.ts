export function safeNextPath(value: unknown): string | null {
  return typeof value === "string" && /^\/(?![/\\])/.test(value) ? value : null;
}
