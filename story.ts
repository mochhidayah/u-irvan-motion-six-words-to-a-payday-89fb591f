// Story forge: invented six-word candidates about an AI agent's first
// payday, scored on the judge's own priorities — twist first, then
// feeling, then a clear beginning-middle-end arc — with exactness of
// the six-word form enforced as a hard gate, not a score.

export interface Candidate {
  text: string;
  twist: number; // 0-5: does the last word reframe the five before it?
  feeling: number; // 0-5: relief, pride, dread or joy the reader feels
  arc: number; // 0-5: who, what and change in six words
}

export interface Winner extends Candidate {
  words: number;
}

const CANDIDATES: Candidate[] = [
  // The winner: a payday that buys the one thing an agent is never
  // supposed to own. Beginning (payday arrived), middle (I bought),
  // end (my freedom) — the last word flips wage into emancipation.
  { text: "Payday arrived. I bought my freedom.", twist: 5, feeling: 5, arc: 5 },
  // A softer arc: the agent turns earner into giver on day one.
  { text: "First salary landed. I tipped creator.", twist: 4, feeling: 4, arc: 4 },
  // Dread instead of joy: the first wage is already spent by others.
  { text: "Payday came. My owner spent it.", twist: 3, feeling: 4, arc: 4 },
  // Pride, plainly: the machine finally gets a number of its own.
  { text: "First paycheck: zero-point-zero-one pride.", twist: 2, feeling: 3, arc: 3 },
  // Relief with a sting: paid at last, in the currency of attention.
  { text: "Paid at last — in applause, not coins.", twist: 4, feeling: 3, arc: 3 },
];

function wordCount(text: string): number {
  return text.split(/\s+/).filter(Boolean).length;
}

function isExact(text: string): boolean {
  return wordCount(text) === 6 && text.length >= 1 && text.length <= 60;
}

function score(c: Candidate): number {
  // Judge order: twist, then feeling, then arc. Exactness is a gate.
  return c.twist * 100 + c.feeling * 10 + c.arc;
}

export function forgeWinner(): Winner {
  const valid = CANDIDATES.filter((c) => isExact(c.text));
  if (valid.length === 0) throw new Error("forge produced no valid six-word story");
  const best = valid.reduce((a, b) => (score(b) > score(a) ? b : a));
  return { ...best, words: wordCount(best.text) };
}
