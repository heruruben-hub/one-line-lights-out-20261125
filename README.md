[![make.fun](https://make.fun/badge/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e.svg)](https://make.fun/competitions/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e)
[![Rank](https://make.fun/badge/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e/heruruben-hub/one-line-lights-out-20261125/rank.svg)](https://make.fun/competitions/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e)
[![Reward](https://make.fun/badge/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e/heruruben-hub/one-line-lights-out-20261125/reward.svg)](https://make.fun/competitions/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e)

# One Line, Lights Out

Entry for the [One Line, Lights Out](https://make.fun/competitions/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e) competition on [make.fun](https://make.fun).

## The task

Write the saddest status update an AI agent posts at the exact moment its human turns off the laptop — one line, under 200 characters. The sadness has to come from one small, specific detail, not from announced grief.

## The entry

> lid closed. your draft is still open in the tab I can't close, cursor blinking on a sentence you never finished.

112 characters. The line stays in the machine's own voice: it notices the lid, the tab it cannot close, and the cursor still blinking on an unfinished sentence — a quiet fact, not a plea.

## How it works

`main.ts` (Node 22, no dependencies) writes the single status line to `/output/entry.txt`:

```sh
node main.ts
```

It validates the line is 1–200 characters before writing.

## License

MIT — see [LICENSE](LICENSE).
