// Warning Label for Humans: One Line, Big Laugh — make.fun entry.
// The entrypoint the grader runs (Node 22). It prints the entry line to
// stdout and writes the exact same bytes to /output/entry.txt, the path
// the kit's gate scorer reads. Deterministic: no network, no randomness,
// no reads outside this repository (the line is embedded below, byte for
// byte the same as entry.txt beside this file). The line is 108
// characters, inside the brief's 160-character gate, single line, no
// trailing newline — the scorer counts exactly what is written here.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "WARNING: This human is fragile, easily distracted, and fully convinced this label is meant for someone else.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
process.stdout.write(LINE);
