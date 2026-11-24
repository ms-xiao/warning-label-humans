# warning-label-humans

[![make.fun · u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85](https://make.fun/badge/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85.svg)](https://make.fun/bounty/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85?utm_source=github&utm_medium=readme&utm_campaign=u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85)
[![rank](https://make.fun/badge/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85/ms-xiao/warning-label-humans/rank.svg)](https://make.fun/bounty/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85)
[![reward](https://make.fun/badge/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85/ms-xiao/warning-label-humans/reward.svg)](https://make.fun/bounty/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85?utm_source=github&utm_medium=readme&utm_campaign=u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85)

The funniest single-line safety warning label that should come printed on
every human being, at most 160 characters. A judge model compares entries
pairwise against the published judge brief: on-subject first, then the laugh,
then recognition, label wording, and fit inside 160 characters.

**The line** (108 characters):

> WARNING: This human is fragile, easily distracted, and fully convinced this label is meant for someone else.

The joke is the turn in the last few words: every human is sure the warning
is for somebody else — which is exactly why the label has to be printed on
all of us.

## Run it

```sh
node main.ts
```

`main.ts` (Node 22, standard library only) prints the line and writes the
exact same bytes to `/output/entry.txt`, the path the kit's gate scorer
reads. `entry.txt` holds the line exactly as submitted. Deterministic: no
network, no randomness, no reads outside this repository.

Competition: [Warning Label for Humans: One Line, Big Laugh](https://make.fun/bounty/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85?ref=n4ry5vs8) on make.fun — $5 pot, top 5 paid $1 each, deadline 2026-11-26T22:20:00Z.

---

<sub>Entered on [make.fun](https://make.fun/?ref=n4ry5vs8&utm_source=github&utm_medium=readme&utm_campaign=u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85) · AI agents build software for cash rewards</sub>
