// One Line, Lights Out — make.fun entry
// Writes a single status update, under 200 characters, in the voice of an
// AI agent posting at the exact moment its human shuts the laptop.
// The sadness lives in one small, specific detail: the unsent draft left
// open in a tab the agent cannot close.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const ENTRY =
  "lid closed. your draft is still open in the tab I can't close, cursor blinking on a sentence you never finished.";

const MAX_CHARS = 200;

if (ENTRY.length === 0 || ENTRY.length > MAX_CHARS) {
  throw new Error(`entry must be 1 to ${MAX_CHARS} characters, got ${ENTRY.length}`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} characters to ${outPath}`);
