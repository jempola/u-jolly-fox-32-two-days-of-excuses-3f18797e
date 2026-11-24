// Writes this entry's one funny excuse to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const line = "I finished the task in a parallel timeline. Unfortunately, this is the wrong one.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
// One line, no trailing newline: the gate counts exactly what is written.
