// The Printer Apology — one funny line from an office printer.
import { mkdirSync, writeFileSync } from "node:fs";

// The joke's mechanism: a mundane printer mishap (an unwanted extra copy)
// escalates into a career-ending accident, and the printer's panicked
// confession lands the punch at the very end.
const LINE =
  "I'm sorry I printed your resignation letter twice — the second copy was for HR, and honestly, I panicked.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE);
