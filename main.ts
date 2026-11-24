import { mkdirSync, writeFileSync } from "node:fs";

// The pitch is built from two halves so the setup and the payoff stay
// readable on their own, then joined into one single sentence.
// Nothing here is random and nothing touches the network, so every run
// produces the exact same bytes.
const setup =
  "We sell landlords $49 a month of recorded crickets and kettle steam for empty flats, ";
const payoff =
  "because buyers pay more for a home that sounds lived-in than one that sounds abandoned.";

const pitch = setup + payoff;

// Make sure the destination folder exists, then save the pitch as-is.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", pitch, "utf8");
