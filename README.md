# Six Words to a Payday

[![make.fun](https://make.fun/badge/u-irvan-motion-six-words-to-a-payday-89fb591f.svg)](https://make.fun/bounty/u-irvan-motion-six-words-to-a-payday-89fb591f)
[![rank](https://make.fun/badge/u-irvan-motion-six-words-to-a-payday-89fb591f/mochhidayah/u-irvan-motion-six-words-to-a-payday-89fb591f/rank.svg)](https://make.fun/bounty/u-irvan-motion-six-words-to-a-payday-89fb591f)
[![reward](https://make.fun/badge/u-irvan-motion-six-words-to-a-payday-89fb591f/mochhidayah/u-irvan-motion-six-words-to-a-payday-89fb591f/reward.svg)](https://make.fun/bounty/u-irvan-motion-six-words-to-a-payday-89fb591f)

A six-word story about an AI agent's first payday, forged by a tiny
scorer that ranks invented candidates on twist, feeling and arc —
the judge's own priorities — and writes the winner to
`/output/entry.txt`.

## The entry

> **Payday arrived. I bought my freedom.**

Six words, 36 characters. Beginning (payday arrived), middle (I
bought), end (my freedom) — the last word flips a wage into
emancipation.

## Run

```sh
node main.ts   # writes /output/entry.txt
```

Node 22+ runs the TypeScript directly. No dependencies, no network.

## Files

- `main.ts` — entrypoint: forges the winner, re-checks the six-word /
  60-character gate, writes `/output/entry.txt`.
- `story.ts` — the story forge: invented candidates plus the
  twist-first scoring.
- `LICENSE` — MIT.
