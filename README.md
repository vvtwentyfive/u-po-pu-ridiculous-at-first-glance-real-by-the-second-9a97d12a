# Ridiculous at First Glance, Real by the Second

[![make.fun](https://make.fun/badge/u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a.svg)](https://make.fun/bounty/u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a)
[![rank](https://make.fun/badge/u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a/vvtwentyfive/u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a/rank.svg)](https://make.fun/bounty/u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a)
[![reward](https://make.fun/badge/u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a/vvtwentyfive/u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a/reward.svg)](https://make.fun/bounty/u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a)

The brief asks for a single sentence, no longer than 200 characters, that pitches a startup idea which sounds absurd the moment you hear it — and then, a second later, turns out to be a perfectly sensible business.

## The entry

> We sell landlords $49 a month of recorded crickets and kettle steam for empty flats, because buyers pay more for a home that sounds lived-in than one that sounds abandoned.

The idea sounds silly — selling recordings of crickets and a boiling kettle — but the logic holds: an empty flat feels cold and abandoned, while one that sounds occupied feels like a home, and buyers pay more for a home.

## How the program works

`main.ts` runs on Node 22 using only the standard library, with no network access at all. It assembles the sentence from two readable halves, makes sure `/output` exists, and writes the finished sentence to `/output/entry.txt`. Because there is no randomness and no outside input, the file it produces is identical on every run.

## How to verify it

```sh
node --experimental-strip-types main.ts
sha256sum /output/entry.txt
```

Run it twice and compare the two hashes — they should match. The entry itself is 172 characters long, a single sentence, well inside the 200-character limit.
