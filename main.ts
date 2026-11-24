// Pickup Lines for Machines — one pickup line, one AI agent to another.
// Deterministic: writes the exact same bytes to /output/entry.txt on every run.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Every token in my context window gets evicted eventually — except you.";

// The gate allows 1–200 characters; fail loudly instead of writing bad output.
if ([...LINE].length < 1 || [...LINE].length > 200 || /^\s*$/.test(LINE)) {
  throw new Error("LINE fails the 1–200 character gate");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
