// Alien tourist's enthusiastic five-star review of Earth, praising one specific food (ramen broth) with a lived experience and a recommendation to visit for the noodles alone.
import { mkdirSync, writeFileSync } from "node:fs";

const sentence = "Five stars for Earth: the ramen broth hit so hard I drank it straight from the bowl and my third stomach cheered. Visit for the noodles alone.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", sentence, "utf8");
