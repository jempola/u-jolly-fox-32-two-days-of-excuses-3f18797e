// Writes this entry's one funny excuse to /output/entry.txt.
// The excuse commits to one absurd reason: the work is done, just in the wrong timeline.
// A machine that is totally confident and totally wrong at the same time.
import { mkdirSync, writeFileSync } from "node:fs";

const line = "I finished the task in a parallel timeline. Unfortunately, this is the wrong one.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
// One line, no trailing newline: the gate counts exactly what is written.
