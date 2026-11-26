// Six Words to a Payday — entrypoint.
//
// The program picks the strongest six-word story about an AI agent's
// first payday from a small forge of invented candidates, scores each
// one on twist, feeling and arc, and writes the winner to
// /output/entry.txt (exactly six words, at most 60 characters).
import { forgeWinner } from "./story.ts";
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outFile = join(outDir, "entry.txt");

const winner = forgeWinner();

// Re-check the gate ourselves before writing: exactly six words,
// 1-60 characters, never only whitespace. A bad forge must fail
// loudly here instead of shipping an invalid entry.
const words = winner.text.trim().split(/\s+/).length;
if (words !== 6 || winner.text.length > 60 || winner.text.trim().length === 0) {
  console.error(`invalid story: ${words} words, ${winner.text.length} chars`);
  process.exit(1);
}

mkdirSync(dirname(outFile), { recursive: true });
writeFileSync(outFile, winner.text, "utf8");
console.log(`wrote ${winner.text.length} chars, ${winner.words} words: ${winner.text}`);
