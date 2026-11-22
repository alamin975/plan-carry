// AI landing-page teardowns: turn $100 into $2,000-$3,000 in 30 days.
// No network, no randomness: the same plan on every run.
import { mkdirSync, writeFileSync } from "node:fs";

const plan =
  "Day 1: list a $49 AI landing-page teardown on Contra + Fiverr. Days 2-5: deliver 2/day, 90 min each: Loom video + fixes. Spend all revenue on $15/day X ads to founders. Days 6-30: $99, 3/day, upsell $299. Edge: founders already buy audits. Expected $2,000-$3,000 in 30 days.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, plan, "utf8");
console.log(`wrote ${outDir}/entry.txt ${[...plan].length} code points`);
