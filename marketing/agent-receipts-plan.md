# Agent Receipts — Execution Plan (v1.1, 2026-09-18)

Source of truth: `antiloki-site/marketing/agent-receipts-playbook.md`. Every number below is the playbook's or is computed from the feeds it names. Day 1 = Mon Sep 21 2026. Day 45 = Wed Nov 4. Day 60 = Thu Nov 19. Day 90 = Sat Dec 19. Build starts today (Sep 18), not Sep 19.

> **v1.1 amendments (2026-09-18, after outside review).** Five changes fold into the plan below; where a section conflicted it was patched in place.
>
> **A1 · KPIs.** Two hard KPIs, one vanity. Hard: (a) **verified personal payers** on the digest (the three required signup fields), (b) **distribution events** — an insider repost, a vendor-staff reply, or a quote-post that lands in a ≥1M-view thread, each dated in `metrics/weekly.json`. Vanity: followers and views, logged, never deciding. The day-45 kill rule and the day-60 gates key on the hard two. Growth is a step function; the plan engineers the step, it does not forecast a curve.
>
> **A2 · Three editorial layers, three prefixes.** `R-` **Receipts** — documented events, hard admission bar, when they exist (~1/day with real traction). `M-` **Measurements** — the page's own experiments on the 10-task harness (cost per passing test, tokens before the first prompt, subagent fan-out), **every two weeks from W3**, method page public, disclosed the day they run on antiloki. `A-` **Analysis** — at most one a week, numbered, and only over numbers the page itself already published (the layer where a ledger turns into a columnist; the guardrail is that an A-post carries the figures it interprets and nothing else). The "~4 items/day" figure was an audit of external events, never a cap on output.
>
> **A3 · The taxonomy comes from the ledger, not from the product.** The four tags in the playbook were antiloki's feature list wearing a disguise, and readers would notice. Replaced by seven neutral categories — `silent change` · `regression` · `outage` · `billing` · `data loss` · `unverified change` · `boundary` — assigned by classifying the 40 backfill receipts first, published with counts as the Root Cause Atlas (W4), and re-counted monthly. If antiloki genuinely answers some of them, the day-60 post says so with the counts; if it does not, the page stays honest. No product name appears on any card, page or reply before day 60 (linter-enforced).
>
> **A4 · The site is three ledgers over one dataset.** `agentreceipts.dev` → Limit Ledger (`/ledger`) · Incident Ledger (`/incidents`) · Price Ledger (`/prices`) → Measurements (`/measurements`) → the Sunday digest. Same `data/` files, same pollers, three views. "Agent Receipts" stays the social brand ("receipts" already means *prove it*); "the ledger" is the institutional word for the site.
>
> **A5 · The 12-month sequence.** Month 1 receipts · month 2 the three ledgers · months 2–3 biweekly measurements · month 4+ a cross-vendor **cost index** (cost per task, cost per passing test, tokens per PR, by vendor, by month) — the Consumer-Reports moment and the point where the page has the authority to sell anything. That is why antiloki waits: it should be inevitable from the record, not designed into it. Day-1 scope is unchanged.

---

## 0. The AI doomsday clock: decision

**What exists**

| Device | Who | Moves | Developer traction |
|---|---|---|---|
| Doomsday Clock (1947) | Bulletin of the Atomic Scientists; board + 8 Nobel sponsors | 27 times in 79 years, once a year, with a written statement; 85 s as of Jan 27 2026 | Best HN thread 73 pts; devs read 100→90→89→85 s as grade inflation; "political stunt" (Pinker); former chair: "time to stop the clock" |
| IMD AI Safety Clock (2024) | One professor + one fellow, no board | Every 3–6 months; 15 min to midnight on Sep 16 2026 citing "agentic AI" | TIME/Forbes pipeline; **2 HN points, 0 comments** |
| Alan's Countdown to AGI | One person | 99% as of Sep 2026, unpublished weights | 0 HN stories |
| AI Lab Watch (0–100 scores) | One person; "weights are largely judgment calls" | Stopped Sep 2025 | Dead in ~18 months |
| Days since last GitHub incident | One person | Resets on any status blip; reads 0 | **212 pts / 132 comments**, Dec 2025; top objection: "some trivial service will reset this counter" |
| How many days since a JWT alg:none vuln | One person | Resets only on a CVE + source; alive since 2020 | 99 pts / 55 comments; the only "days since" that survived |
| java-0day, crypto-exchange counter, Facebook-scandal counter | Individuals | 95–291 pts each on launch day | All three domains now dead |
| Web3 Is Going Just Great | Molly White | Dated, sourced, tagged entries; Grift Counter as garnish | Entries at 50–481 pts; the counter is decoration |
| Permission Protocol incident tracker | A vendor | "Would our product block it?" column | Reads as a sales page — the shape antiloki must never own |

**Verdict: no.** No clock, no dial, and the words *doomsday / midnight / apocalypse* never appear on the account, the site, or a card. Reasons, each from the evidence above: (1) a minutes-to-midnight number is a mood and recruits the AI-risk crowd the playbook measured at 0.3% agent users, while our buyer forwards arithmetic — IMD got 2 HN points on the exact "agentic AI" framing the same week a GitHub "days since" got 212 from our people; (2) the original works because a Nobel-laureate board signs a rare, statement-backed verdict; an anonymous one-person page cannot borrow that and eats "the seconds mean nothing" on day one; (3) any composite (minutes, a 0–100 trust index) is a judgment-call weighting — AI Lab Watch admitted it and died — and it is the "loser label" the playbook bans; (4) a clock reading is an unfalsifiable opinion that a named vendor is dangerous, the one claim this page can never defend with a capture and a timestamp; (5) the "AI + midnight" lane is already occupied by IMD and the Bulletin's own 2026 statement.

**What we use instead — the three transferable mechanics, none of them a dial**

A. **Identity unchanged.** The numbered receipt `R-2026-NNNN` and the Limit Ledger are the unit that travels (Web3IGG's entries score 50–481; its counter is garnish).

B. **The one honest counter, as an embeddable badge (playbook Tier C).** "Days since a limit or default changed without notice", per vendor plus cross-vendor, computed from `ledger.json`, served as shields-style JSON + SVG on agentreceipts.dev, click-through to the resetting receipt, with a `last verified` timestamp and a visible **stale** state after 48 h without a poller run. Published reset rule at `/rule`, linked from every badge:
   - Resets only when a numbered Tier-A ledger row is added that (1) concerns a limit, quota window, price, plan entitlement, default model or default setting; (2) took effect without a dated notice in the vendor's changelog/blog/status page/account at the time, **or** was announced with a number a primary source contradicts (Aug 29 "+25%" vs the vendor's own "17% reduction"), **or** was a promo expiry with no dated reminder; (3) clears the Tier A admission bar; (4) carries two same-minute captures and the vendor-response field (including "none").
   - Explicit non-resets: outages and incident-minutes (those feed Friday Standings — an incident counter would read Cursor 0 / Claude Code 3 / Codex 5 today, the "days since last JavaScript framework" joke); regressions without a defaults change; unverified reports; and **any change announced with dated notice, which gets a row tagged `with-notice` and does not reset.** The counter measures notice, not change: a vendor that announces gets visible credit, and "we announced it" is answered with "yes, row #N, counter did not reset."
   - Expected regime from 13 rows in 14 months: cross-vendor resets roughly monthly, per-vendor streaks of weeks to months. If cross-vendor resets exceed 2 in any rolling 30 days, the admission bar is tightened; the count is never accepted as-is (the 100→90→89→85 critique). A wrong reset is publicly un-reset through the corrections log.
   - Model: the JWT alg:none counter (reset = a sourced artifact; alive six years), not the GitHub one. Because it derives from the ledger it cannot go stale the way java-0day did.
   - On X the counter appears only in the pinned thread on a reset and in the Sunday digest card, each with a fresh screenshot and one changed fact (copypasta rule).
   - No sponsor mark on the badge or the rule, ever; antiloki never hosts or brands it.

C. **The ritual without the dial.** First Sunday of each month (Nov 1 for October, Dec 6 for November): one fixed-template image, "The Ledger, month N" — the four counters, longest streak per vendor, silent vs with-notice changes in the trailing 90 days, incident-minutes on harness components, the month's numbered rows, a 2–3 line written statement per vendor, and the corrections-log link (verifiable accuracy substitutes for a board). Raw counts only, per-million as Standings already does; no composite, no index, no "Notice Clock" branding anywhere — the word invites the comparison we are avoiding.

---

## 1. What we build

**Stack:** TypeScript, Node 22 (via mise), pnpm, strict TS, vitest, biome, SQLite (better-sqlite3), Playwright, Hono only for the static build. No LLM runs anywhere in the pipeline; parsers are deterministic. Two repos in a new GitHub org `agentreceipts`, neither inside the antiloki monorepo. Hosting: one $5 VPS (Hetzner CX22-class) running exactly two systemd timers (pollers, poster) so the 07:30/13:30/18:30 slots have no cron jitter; no Tailscale, no R2 mirror, no separate healthcheck — the badge's stale state is the health check. Site: Cloudflare Pages (San Francisco) via wrangler. Captures run locally on Approve.

### Repo layout

```
agent-receipts/                      PUBLIC — MIT code, CC-BY data (Killed-by-Google pattern)
  README.md                          what it is, unaffiliated, reset rule in one paragraph, how to send a correction, badge embed snippet
  RESET-RULE.md                      the four reset conditions + the explicit non-resets (mirrored at /rule)
  data/ledger.json                   Limit Ledger rows: #, vendor, effective_date, kind (limit|price|entitlement|default),
                                     notice (none|dated|contradicted|promo-expiry-unreminded), sources[], receipt_id
  data/receipts/R-2026-NNNN.yaml     one per receipt: vendor, dates, arithmetic[<=3], response enum, category enum (§A3),
                                     sources[], captures[] (sha256), wayback[], retracted?, corrected?
  data/vendors.json                  status feed URL + shape, repos, subs, user-count estimates with sources (per-million table)
  data/corrections.json              public log: receipt, wrong, right, flagged-by, minutes-to-fix, post id
  data/sponsors.json                 every sponsor slot, dated and labelled
  data/offer.json                    the ONLY source a seat count or window may come from (linter reads it)
  data/fixtures/audit-2026-09.json   ~20 labelled Sep 4–18 items at W0, appended with every queue reject afterwards
  src/db/schema.sql, index.ts        SQLite: candidates, receipts, posts, audit_log (clusters/metrics/corrections tables when needed)
  src/pollers/statuspage.ts          3 feeds, 2 shapes (see below)
  src/pollers/npm.ts                 dist-tags + packument time map with If-None-Match; stable lag, stall, fix latency
  src/pollers/changelog.ts           CHANGELOG.md diff; "(x.y.z regression)" regex; "Bug fixes and reliability improvements" counter
  src/pollers/github.ts              search by reactions>25 with PAT; per-issue GET for closed_by/state_reason; stale-bot exclusion; count queries
  src/pollers/hn.ts                  Algolia search_by_date + client-side points/date filters
  src/pollers/reddit.ts              OAuth client_credentials; top-by-flair on 4 subs; number regex; crosspost_parent dedupe; megathread ids
  src/pollers/x-manual.ts            CLI: log a hand-quoted vendor post as a candidate (no X reads)
  src/filter/admission.ts            pure admit(): Tier A/B bars as constants, coded reject reasons
  src/filter/relevance.ts            Desktop/Cowork/VS Code/cosmetic drop unless cost|limit|quota|token|cache|deleted|rm -rf|default|stable
  src/filter/dedupe.ts               source identity; trigram Jaccard + <ver> clustering; 48 h cross-source event_key merge
  src/filter/admission.test.ts       fixture-driven; 0 false Tier-A admits required
  src/deltas/{stableLag,fixLatency,incidentMinutes,quotaBurn,dupCount,dataLossCount,nerfRatio}.ts
                                     each returns value + its two inputs + a self-check
  src/counter/notice.ts              days-since per vendor and cross-vendor from ledger.json; non-resets in code
  src/capture/capture.ts             Playwright: two same-minute screenshots, URL bar + UTC overlay, sha256 manifest, Save-Page-Now
  src/render/card.html, render.ts    dark monospace 1600x900, six fixed fields; variants: delta, standings, $200 table, monthly, correction
  src/guards/lint.ts                 CTA verbs, fake urgency vs offer.json, lawsuit-without-"alleges", missing fields, doomsday/midnight/apocalypse/loser, and any product or sponsor name before day 60
  src/guards/copypasta.ts            vs last 30 posted texts: refuse unless >=1 numeric token changed AND a new image hash
  src/queue/ar.ts                    the `ar` CLI: queue, approve <id> --slot, reject <id> --reason, defer, merge, preview, reset (proposal only), standings, digest, kpi
  src/post/x.ts                      X API v2 POST /2/tweets + /2/media/upload, OAuth 1.0a, dry-run, thread mode; NO reply/like/follow/DM code paths
  src/post/scheduler.ts              07:30/13:30/18:30 UTC (+Fri 16:30); >=2 h spacing; 2–3/day cap (day 1 exempt); monthly $ cap + kill-switch file
  src/anchors/standings.ts           Friday table, raw + per-million, no loser label, no rank column
  src/anchors/digest.ts              Sunday Markdown for beehiiv
  src/anchors/monthly.ts             "The Ledger, month N" data
  src/site/build.ts                  /, /ledger, /r/*, /feed.xml, /ledger.json, /receipts.json, /rule, /about, /corrections, /privacy, /sponsors, /atlas (W4), /badge
  src/site/badge.ts                  shields endpoint JSON + self-hosted SVG per vendor and cross-vendor; last-verified; stale after 48 h
  src/metrics/collect.ts             own-post reads, followers, beehiiv CSV parse, Reddit/HN scores -> metrics/daily.csv
  src/metrics/gate.ts                weekly KPI table, quote-stop rule, day-45 and day-60 -> PASS/FAIL printed in the queue header
  src/backfill/backfill.ts           numbers the 40 receipts in filing order, renders and captures them, emits the pinned thread text
  harness/                           overhead measurement: proxy addon, 10 task fixtures, run.ts, methodology.md
  ops/systemd/                       two timers: pollers (status 15 min; reddit 30 min; github/hn hourly; npm+changelog daily), poster (every 5 min)
  ops/.env.example                   REDDIT_*, GITHUB_TOKEN, X_*, ARCHIVE_ORG_*, CF_*
  ops/incident-response.md           suspension appeal, DMCA counter-notice, takedown DM, legal letter; rename kit "Commentary: Agent Receipts"
  ops/coi-commitment.sha256          hash of the private COI commitment, committed day 0 (plaintext published at the drop)
  .github/workflows/site.yml         build + deploy on any data/ change

agent-receipts-ops/                  PRIVATE — state that must never go public
  db/agentreceipts.sqlite            the queue (unverified candidates)
  captures/YYYY-MM-DD/               raw PNGs + sha256 manifest, kept for the life of the page
  outreach/insiders.csv, dm-log.csv  20 names, receipt per name, dates, status
  consent.csv                        reader receipts: handle, date, what, blur flag
  prewritten/                        calendar receipts with the live number blank
  metrics/daily.csv, weekly.json     KPI lines
  ops/decisions.md                   quote-drill stop/continue, day-45 outcome, day-60 numbers, next-wave date
  ops/coi-commitment.md              antiloki, the three gates, day 60, label wording, the ladder (hashed into the public repo on day 0)
  ops/runbook.md                     the operator hour, the drill, Friday/Sunday checklists

antiloki/ (existing monorepo; touched only for the day-60 pack, outside the page hour)
  boundary-tests/                    rm -rf home; stray token; terraform destroy -auto-approve — published as its own public repo in W9
  antiloki-site/founding.html        founding tier, built only after the gates pass
```

### Components, data sources, estimates

| # | Component | Data source / behaviour | Days | Owner |
|---|---|---|---|---|
| 1 | Repo scaffold + 4-table schema + `.env.example` | — | 0.25 | claude-code |
| 2 | `statuspage.ts` | status.claude.com and status.cursor.com `/api/v2/incidents.json` (Atlassian shape: `components[]`, `started_at`, `shortlink`; 6 of 50 Claude incidents have empty `components[]` → fall back to `incident_updates[].affected_components[].name`). status.openai.com is a different shape (ULID ids, no components, no started_at) → match Codex by lowercase text over name + update bodies. Incident-minutes = `resolved_at − (started_at ?? created_at)`. Components: "Claude Code"; Cursor "CLI", "Cloud Agents", "Review Agents"; OpenAI text "codex". Poll 15 min. Tier A trigger: >60 min or limits keyword. | 0.2 | claude-code |
| 3 | `npm.ts` + `changelog.ts` | `registry.npmjs.org/-/package/@anthropic-ai/claude-code/dist-tags` daily (today stable 2.1.267 / latest 2.1.276) + full packument with `If-None-Match` for the `time` map (publish timestamps → fix latency: 2.1.265→2.1.266 ≈ 5 h; 2.1.269→2.1.270 ≈ 25 h). CHANGELOG.md `## x.y.z` headings, no dates; regression-fix lines match `/\((\d+\.\d+\.\d+) regression\)/`; count "Bug fixes and reliability improvements"-only releases; stall detector flags stable unchanged >7 days (#92274's 17-day stall is the fixture). | 0.2 | claude-code |
| 4 | `github.ts` | Search `repo:{anthropics/claude-code\|openai/codex\|anomalyco/opencode} is:issue created:>{14d} reactions:>25` sorted by reactions (search results carry `reactions.total_count` but omit `closed_by` → per-issue GET for `closed_by.login` + `state_reason`; exclude `[bot]` logins and the stale sweep, 5,101 auto-closures in 14 days). Count-only queries via `total_count`: quota-burn/week (`limit OR quota OR usage in:title`), data-loss/week (`deleted OR "rm -rf" OR wiped in:title`) — never posted individually. Hourly, 30 req/min with PAT. | 0.3 | claude-code |
| 5 | `hn.ts` | Algolia `/search_by_date?tags=story&numericFilters=points>100,created_at_i>N` for claude code / codex / cursor / opencode / anthropic limits; `/search` ignores the date filter, so apply points and date client-side regardless and never trust `nbHits`. Hourly. | 0.1 | claude-code |
| 6 | `reddit.ts` | App-only OAuth token (`POST /api/v1/access_token`, `grant_type=client_credentials`), refresh on 401; `oauth.reddit.com/r/{ClaudeCode,codex,ClaudeAI,cursor}/top?t=day&limit=100`, User-Agent `linux:agentreceipts:v0.1 (by /u/<you>)`. Fields: score, num_comments, link_flair_text (r/codex "Limits", "Complaint"), selftext, crosspost_parent. Admission needs score>300 AND `\d[\d,.]*\s?(%|\$|k|tokens|hours|min|x)`. Also stores pinned megathread ids. Every 30 min; ~8 calls/h against a 100 QPM limit. (Unauthenticated `.json` is 403, old.reddit RSS 302s — no free path.) | 0.2 | claude-code |
| 7 | `x-manual.ts` | X reads are paid and x.com returns 402: a CLI that logs a vendor post you quoted from your phone as a candidate (URL, views, replies typed by hand) so the quote-post becomes a numbered receipt. | 0.05 | claude-code |
| 8 | `admission.ts` + `relevance.ts` | `admit(candidate) → {tier:'A'\|'B'\|'reject', reason}`. **Tier A constants from the playbook:** vendor post >500K views OR >500 replies; HN >100 pts; GitHub issue >25 reactions AND closed by a human (or open); status incident on Claude Code / Codex / Cursor Agents AND (>60 min OR limits keyword); Reddit >300 upvotes with a number. **Tier B:** anything a delta module computes. Reject reasons: below-bar, off-topic, duplicate, unverifiable, tourist-bait, politics, stale-bot. Hard exclusions: politics, resignation/age-gating threads, leaked source or system-prompt text (never stored). | 0.2 | claude-code |
| 9 | `dedupe.ts` | (1) source identity (statuspage id, issue number, objectID, reddit id + crosspost_parent, npm version); (2) title clustering: lowercase, strip `[BUG]`/`[FEATURE]`, punctuation, stopwords, `x.y.z→<ver>`; word-trigram Jaccard ≥0.5 OR (same `<ver>` AND ≥2 of crash\|limit\|quota\|usage\|token\|cache\|delete\|reset) → one cluster headed by the top-reaction item; cluster size = the duplicate-issue delta (OpenCode 1.18.30: ≥6); (3) cross-source `event_key = vendor:topic:48h-bucket` → one candidate with `sources[]`, admitted if any source clears its bar; (4) ledger rows unique on (vendor, effective_date, kind). | 0.15 | claude-code |
| 10 | Fixture set | ~20 labelled items from the day-1 posts and backfill at W0 (0 false Tier-A admits; ≥90% of the audit's pre-traction items admitted); every later queue reject reason is appended. | 0.15 | you |
| 11 | `capture.ts` | On Approve: screenshot the primary URL and its counterpart (status banner vs incidents.json; vendor post vs Community Note) in the same minute, each with a burned-in UTC-to-the-second + visible-URL bar; sha256 to `manifest.json` (committed to the public repo); submit each URL to archive.org Save-Page-Now and store the Wayback URL. Raw PNGs kept forever in the private repo. Only crop and marked redaction on published images. | 0.2 | claude-code |
| 12 | `card.html` + `render.ts` | One HTML template rendered by Playwright so the site and the X image are the same HTML. **Six fixed fields:** receipt id, vendor, date range, ≤3 lines of arithmetic (human-written, both inputs shown), vendor response (enum: none / acknowledged / fixed-no-note / deleted-and-reposted / postmortem / disputed), root-cause category (one of the seven neutral categories in §A3, assigned from the classified backfill — never a product feature name). Variants: delta (one number + two inputs), Standings, "$200 buys" table, monthly card, correction. Credited third-party screenshots go in replies; own arithmetic in the post; the card carries no URL (source link in the first reply). | 0.4 | claude-code |
| 13 | `lint.ts` + `copypasta.ts` | Lint blocks: solicitation verbs (reply/bookmark/repost/retweet/share/follow/send this to/tag a); doomsday/midnight/apocalypse/loser, and any product or sponsor name before day 60; any lawsuit or class-action term without "alleges" within 40 chars; missing tag/response/source; seats-left/hours-left/ends-soon unless the number equals a value in `offer.json`. Questions are allowed (format 7). Copypasta: vs the last 30 posted texts, refuse unless ≥1 numeric token changed AND a new image hash is attached (so the daily delta passes and a stale counter card does not). | 0.3 | claude-code |
| 14 | `ar` CLI (queue) | `ar queue` prints: candidates by source/tier, the drafted delta with its two inputs and URLs, Tier A candidates with the exact number that cleared or missed the bar, the four counters, yesterday's best post, failed posts, and the `gate.ts` line. States: candidate → approved → scheduled(slot) → posted(tweet_id) \| failed; every transition in `audit_log`. **A human approves every card for all 90 days.** From day 31 the delta's self-check (inputs <2 h old, value inside historical min/max, all source URLs 200) is shown and the operator's action is "confirm" — one keypress, but never absent. `ar reset` only proposes. | 0.4 | claude-code |
| 15 | `x.ts` + `scheduler.ts` | Reads approved only. Pay-per-use: $0.015/post, $0.20/post with URL, $0.005/read → scripted cards carry no URL; source-link reply posted by API ($0.20) or by hand from the app ($0). Slots 07:30 / 13:30 / 18:30 UTC, Friday 16:30 Standings; ≥2 h spacing; cap 3 top-level/day (day 1 exempt: 5); monthly dollar cap with a kill-switch file; "Automated by @<operator>" label on scripted cards; receipts, quote-posts and replies are posted by hand and never carry the label. Burst mode unlocks slots only for hand-written quote-posts. | 0.35 | claude-code |
| 16 | `notice.ts` + `badge.ts` | `days_since(vendor) = today − max(effective_date)` over rows with `tier=A AND notice ∈ {none, contradicted, promo-expiry-unreminded}`; `dated` rows shown green and never reset; cross-vendor = min of four. `/badge/{vendor}.json` (`{schemaVersion:1,label,message,color}`) for img.shields.io/endpoint + self-hosted `/badge/{vendor}.svg`; message e.g. `Claude Code · 4 days · reset by R-2026-0011`; `last verified` UTC; stale after 48 h; >2 cross-vendor resets/30 d prints a red "tighten the bar" line in the queue header. Rebuilt on every ledger change + daily 00:05 UTC. | 0.25 | claude-code |
| 17 | `build.ts` (site) | Static: `/` (latest receipts + counters), `/ledger` (the Limit Ledger: numbered, sourced, filter by vendor/kind/notice, minisearch), `/incidents` (the Incident Ledger: statuspage rows + incident-minutes, from the same data — W2), `/prices` (the Price Ledger: every plan/price/entitlement row — W2), `/measurements` (M-series, W3), `/analysis` (A-series, W4), `/r/R-2026-NNNN` (captures, sources, response, tag, Wayback, corrected banner), `/feed.xml`, `/ledger.json`, `/receipts.json` (stable schemas, CC-BY), `/rule`, `/about` (COI line from day 1), `/corrections`, `/privacy` (one paragraph; double opt-in; list never shared), `/badge`, `/sponsors` (W4), `/atlas` (W4). Digest signup with the three required fields on every page. Deployed on every data change. | 0.5 | claude-code |
| 18 | `standings.ts` + `digest.ts` + `monthly.ts` | Friday: per vendor for the ISO week — incident-minutes on harness components, limit changes (silent / with-notice), regression-fix lines, quota-burn issues, duplicate-issue count; raw and per-million using `vendors.json` (Claude Code ~4.2M weekly actives; Codex 6M users per row #9) revised only with a dated note; table only, no loser label, no rank column. Sunday: beehiiv Markdown (table, rows, receipts with /r/ links, best reader receipt, counters; monthly card from Nov 1). Monthly: the card data per §0.C. | 0.5 (W1) + 0.15 (W6) | claude-code |
| 19 | `collect.ts` + `gate.ts` | Daily 05:30 UTC: own-post public + non-public metrics (~30 reads/day at $0.005), follower count, weekly beehiiv CSV (subs, plan tier, personal vs employer, harness count), Reddit/HN scores, dm-log. `gate.ts` evaluates the playbook KPI table, the quote-stop rule, day-45 and day-60, and the vendor-balance query (no vendor >60% of Tier A over 30 days); prints PASS/FAIL in the queue header (no self-DM through the API). | 0.4 | claude-code |
| 20 | `backfill.ts` | Filing-order numbering (§2); renders and captures all 40; emits the pinned thread (1/14 + sources). | 0.15 | script |
| 21 | Measurement harness (M-series) | Node HTTPS logging proxy fronting model endpoints via `ANTHROPIC_BASE_URL` / `OPENAI_BASE_URL` for Claude Code, Codex CLI, OpenCode **on API keys** (~$25/run; never subscriptions through a proxy — that sits next to the OAuth line and cannot yield cost per passing test). Cursor: "not measured, subscription unfunded" until a sponsor slot pays the $20. Ten fixed repo tasks; records tokens before the first user token, cache read/write, subagent fan-out, wall-clock, tests passed, cost per passing test → CSV + methodology page. Built W3; **runs every two weeks from W3 (M-2026-0001…), not monthly** — antiloki's goal runs make the harness cheap to re-run, disclosed the day antiloki is (§A2). | 1 | claude-code |
| 22 | Legal/ops docs | `incident-response.md` (rehearsed once), COI line + hashed commitment, `runbook.md`, corrections policy, capture SOP. | 0.3 | claude-code (you approve) |
| 23 | Cursor forum poller | Deferred; added only if the week-4 retro shows Cursor under-covered. | 0.15 | claude-code (W5, if needed) |

**W0 totals (Sep 18–20):** ~4.5 Claude-Code days run as two parallel sessions (A: ingest + filter + deltas + counter/badge; B: capture + render + guards + queue + poster + site + docs), plus ~2 operator days (accounts 0.5, fixtures 0.15, backfill verification 1, DM drafting 0.3). W0 is full-time for the operator; Standings/digest builders, site search and `/atlas` slip to W1–W4 by design.

---

## 2. The 40-receipt backfill

**Production.** `claude-code` drafts `data/receipts/R-2026-0001..0040.yaml` from the playbook's ledger rows, day-1 posts, days-2–14 backlog and §6 sources: vendor, dates, `sources[]`, engagement numbers, response enum, tag, ledger flag + notice value, **arithmetic lines left blank**. You open every primary source, confirm each number, write the ≤3 arithmetic lines yourself, set the response field (including "none") and the notice value. Anything you cannot verify is dropped, not softened. Wipe/deletion items are marked case-file-only (never pinned, never quote-bait). `backfill.ts` then captures (two same-minute screenshots + Wayback) and renders all 40, and prints the pinned thread text.

**Numbering: filing order, never reused.** `R-2026-0001..0010` = Limit Ledger rows #1–#10; `0011–0013` = the day-1 cards exactly as the playbook prints them; `0014–0040` = the 27 backlog items, posted one per day into lulls on days 2–28; live receipts start at `R-2026-0041`. A retracted receipt keeps its number with a retraction banner. Day-1 Post 1 lists all 13 ledger rows (#11–#13 are ledger rows whose receipts are 0011/0012/0013 and the row for Sep 14).

**First 15 receipts (notice flag is provisional until you verify the primary):**

| ID | Date | Vendor | One line | Notice |
|---|---|---|---|---|
| R-2026-0001 | Jul 17 2025 | Claude Code | Limits tightened without announcement; HN 407 pts | none |
| R-2026-0002 | Jul 28 2025 | Claude Code | Weekly caps announced, "<5% of subscribers"; HN 609 pts | dated |
| R-2026-0003 | Jun 16 2025 | Cursor | 500 requests → "$20 of usage"; CEO apology Jul 4; refunds Jun 16–Jul 4 | contradicted (verify) |
| R-2026-0004 | Aug 28 2025 | Claude Code | Weekly caps take effect (announced Jul 28) | dated |
| R-2026-0005 | Jan 5 2026 | Claude Code | Holiday 2x bonus expires; users report caps in 10–15 min; staff: "no rate limit changes" | promo-expiry-unreminded (verify) |
| R-2026-0006 | Mar 26 2026 | Claude Code | Peak-hour cut, "~7% of users" | verify |
| R-2026-0007 | Apr 23 2026 | Claude Code | Limits reset after the postmortem (three silent regressions, 34/15/4 days) | postmortem; dated |
| R-2026-0008 | May 6 / May 13 2026 | Claude Code | 5-hour window doubled; +50% weekly promo | dated |
| R-2026-0009 | Jul 12 2026 | Codex | 5-hour limit temporarily removed at 6M users | dated |
| R-2026-0010 | Jul 29 2026 | Codex | Limits reset: "Sol was using your Codex limits faster than expected" | verify |
| R-2026-0011 | Aug 29 → Sep 14 2026 | Claude Code | "+25%" announced; base×1.50 promo → base×1.25; 1.25÷1.50 = 0.83 → −17%; vendor's own follow-up says "17% reduction"; thread deleted and reposted | contradicted |
| R-2026-0012 | Sep 6–14 2026 | Codex | "3–4x less usage drawn" (2.45M views); global reset (5.46M); #44205 60%→12%, #44199 73%→0%, #42987 100% in two turns; 9 quota-burn issues in 14 days; Sep 9 17:29–17:54 UTC "unexpected usage limit resets", 25 min, no vendor post | none |
| R-2026-0013 | Sep 9 2026 | OpenCode | v1.18.30 crashed on every prompt on macOS; ≥6 duplicate issues (47/32/22/21/18/6 reactions); release notes 400–700 chars, crash mention: none; Sep 13–14 forced V2 layout, 3 closed "not planned" | (not a ledger row) |
| R-2026-0014 | date = issue opened (verify) | Claude Code | #46829 cache TTL silently 1h→5m: 17.1% overpaid, $949.08 + $1,581.80 over 119,866 calls, closed "not planned"; HN 552 pts | none (default change) |
| R-2026-0015 | date = issue opened (verify) | Claude Code | #37686: $1,800 in two days from `claude -p` | (not a ledger row) |

Remaining backlog in order: codex #28879 (cost/token 10–20x, 561 reactions, closed after 66 days); systima 33K vs 7K tokens before you type; 121K→513K subagent fan-out (706 HN pts); Sep 17 2025 postmortem (~30% of Claude Code users); Apr 23 2026 postmortem as its own receipt; Kahn v. Anthropic 3:26-cv-05763 weekly-hour math ("alleges", hearing Nov 6); Cursor June 2025 ($7,000 annual allocation in one day); OpenClaw $0.20/prompt; the $81,267 week; PocketOS (9 seconds, Railway token in an unrelated file; Railway CEO replied — case-file-only); DataTalks terraform destroy (AIID #1424, case-file-only); #92274 17-day stable stall; the r/codex banked-reset analysis (1,413 pts, credited); the r/ClaudeCode "Max 20x only applies to the 5-hour window" post (1,582 pts, credited); the remaining ~11 from §6 sources at the same bar.

---

## 3. The 90-day calendar

| Week | Build | Posting | Outreach | Gate |
|---|---|---|---|---|
| **W0 · Sep 18–20** (days −3 to 0) | Accounts (§7). Two parallel Claude Code sessions: core pipeline (pollers, admission, dedupe, deltas, counter/badge / capture, render, guards, queue, poster, site skeleton, docs). 40 receipts drafted by Claude Code, verified by you. Day-1 cards pre-rendered. COI hash committed. | None. Profile set once on Sep 18 and not touched. | Draft 20 insider DMs (one own-tool receipt each) into `insiders.csv`; do not send. Vendor press/dev-rel contact list. | Pipeline runs on the VPS and yields today's live delta (stable 2.1.267 vs latest 2.1.276, gap 9) and the Sep 9 OpenAI "unexpected usage limit resets" incident as a Tier-A candidate; admission tests green with 0 false Tier-A admits; 40 receipts verified with captures; handle, domain, Reddit app, X API application, beehiiv form live; ≤$40 spent. |
| **W1 · Sep 21–27** (days 1–7) | Day 2 (Tue Sep 22): site live with /ledger, /r/, RSS, JSON, badges, /rule, /about; Premium bought. Standings and digest builders by Thu. | Day 1 five posts: 07:30 pinned Ledger (counter **computed at 07:00 from `notice.ts`: 7 if nothing resets before Sep 21**, not the playbook's Sep 18 value of 4), 10:30 R-2026-0012 Codex, 13:30 R-2026-0011 with two timestamped screenshots, 16:00 R-2026-0013 OpenCode, 18:30 stable-lag delta (dist-tags re-pulled at 18:00). Then 2–3/day = 1 delta + 0–2 receipts, backlog 1/day into lulls from 0014. Fri Sep 25 16:30 Standings #1. Sun Sep 27 digest #1. | Wed Sep 23: 12–20 insider DMs, 4–6 per hour across the day, all different. Join the four subs; ledger-row comments in the r/ClaudeAI performance megathread and r/codex incident noticeboard. Quote any vendor limit post within 30 min. | 15–20 posts; 3–5 Tier-A with ≥100-engagement primary; best post 5–20K views; 300–800 followers; 50–150 subs / 20–50 personal payers; ledger live; 12+ DMs sent; 1 insider repost; 0 platform warnings; 0 uncorrected. |
| **W2 · Sep 28–Oct 4** (days 8–14) | Reader-submission form (read:edit ratio, thinking-block count, plan, reset time) feeding the queue; "$200 buys" renderer; consent log; Reddit-backflow flag. | Nerf window (Sep 22–Oct 20) open: daily "is it dumber or is it your quota" delta from credited reader submissions (#42796 format). Wed Sep 30: first "What $200 buys you this week". Thu Oct 1: first "post your plan and your reset time". Codex week if Astra's quota cycle continues. Standings #2; digest #2. | Sat Oct 3: follow-up 1 to non-responders with a NEW receipt. Karma >50 on the page's Reddit account. | **Day-14 gate:** 800–1,500 followers; 150–300 subs / 50–100 payers; one post >20K views; quote conversion measured; 3 megathread comments >50 upvotes. |
| **W3 · Oct 5–11** (days 15–21) | Overhead harness built Mon–Tue, run Wed Oct 7 on Claude Code / Codex CLI / OpenCode via API keys (Cursor: not measured, unfunded), written Thu. Pre-written receipts for the next Anthropic launch and the overdue OpenAI launch (GPT-5.6 was Jul 9). | Thu Oct 8 ~13:30 UTC: Monthly Overhead Receipt to HN as a data post (not Show HN) + X card. Standings #3; digest #3. | 24 h vendor pre-notice of the measurement (response field). Results to the systima author, meter maintainers, the two reporters; every HN comment with a number gets a reply. | 1,200–2,500 followers; 300–500 subs / 100–200 payers; overhead post ≥100 HN pts; one post ≥50K views OR a vendor-staff reply OR a ≥100K-follower repost. |
| **W4 · Oct 12–18** (days 22–28) | /sponsors + `sponsors.json` + payment link; /atlas (Root Cause Atlas); retro script (formats by views-to-follows; payer share of subs). | Atlas card; first labelled "Sponsored receipt" if sold; Thu Oct 15 reader-receipt call #2; backlog exhausted (0040); Standings #4; digest #4 with retro numbers. Optional Show HN of the site now that search, feeds and badges exist. | Sell one non-antiloki slot (meter / hosting / monitoring / non-antiloki guardrail), suggested $200, adjusted once week-3 views are known. Sat Oct 17: follow-up 2 with a new receipt. | 1,500–3,000 followers (stretch 5K); 400–700 subs / ≥150 personal payers; 1 non-antiloki sponsor sold and labelled; Atlas live; corrections log 0 uncorrected; retro written, two worst formats cut. |
| **W5 · Oct 19–25** (day 30 = Oct 20) | Hardening: dedupe tuning, poller false-positive review, notice audit of every ledger row; Cursor forum poller only if the retro says Cursor is under-covered; delta self-check display live for day 31. boundary-tests/01 (rm -rf home) built and run against antiloki — outside the hour. | Oct 20 nerf window closes: closing delta with the full reader dataset. First week without backlog: 2–3/day from live Tier A + delta. Standings #5; digest #5. | Second insider round: 5 new names from whoever covered the October wave. Sponsor #2 conversations. | **Day-30 gate:** W4 numbers logged; ≥3 live Tier A/week without backlog; queue false-positive rate <20%; cross-vendor resets ≤2 in the trailing 30 days; scenario 1 has a recorded pass/fail with the actual command in the audit timeline; month-1 spend ≤$100. |
| **W6 · Oct 26–Nov 1** (days 36–42) | Monthly card template; boundary-tests/02 and /03 built and run; Kahn v. Anthropic docket receipt pre-written; CourtListener alert. | Sun Nov 1: "The Ledger, month 1 (October)" in digest + X. Verified case file #1 (PocketOS with the Railway CEO's reply) if nothing fresher qualifies. Standings #6. | Pre-brief the two reporters on Nov 6 with the weekly-hour math ("alleges"). | Month card shipped; 3/3 scenarios have recorded results; ≥1 receipt whose response field is not "none"; 0 uncorrected. |
| **W7 · Nov 2–8** (day 45 = Nov 4; hearing Nov 6) | `gate.ts` day-45 run; antiloki fix cycle (Claude Code fixes, you review) continues outside the hour. | Nov 6 docket receipt at 18:30 (filing screenshots, "alleges"). Otherwise baseline — or the pivot cadence. Standings #7; digest #7. | Reporters get the 14-month ledger JSON; insiders get the docket receipt. Sponsor #2 opened. | **Day-45 kill/pivot** (§6). ≥700 subs / ≥300 payers; docket receipt carries both timestamps and visible URLs. |
| **W8 · Nov 9–15** (days 50–56) | 14-month ledger analysis generated by script from `ledger.json` (HN post written in the Sunday block). Overhead run #2 on plain CLIs. antiloki's own per-task bill measured privately. Fix cycle complete. | HN data post mid-week ~13:30 UTC + X thread; Overhead Receipt #2; Standings #8; digest #8; Thu Nov 12 reader call. | Sponsor #2 closed or declined. Insiders get the analysis. | ≥100 HN pts or a staff reply; ≥800 subs / ≥350 payers; boundary-tests 3/3 pass on Linux and macOS with command-level audit logs (else the collab has no date); 0 uncorrected. |
| **W9 · Nov 16–22** (day 60 = Nov 19) | Publish `boundary-tests/` as a public repo runnable against any harness. Trial export producing a receipt card. `gate.ts` day-60 run. Drop kit staged (About: "The operator builds antiloki"; COI plaintext + day-0 hash). Founding checkout built only if the gates pass. | antiloki's own per-task bill posted as a labelled receipt first. Baseline; Standings #9; digest #9. No offer yet. | Wave watch: limit change, postmortem, vendor-acknowledged wipe, or a new model's week-3–7 window. Nothing fires without one. | **Day-60 gates** (§6); followers 3–5K (vanity). Any NO → antiloki waits. |
| **W10 · Nov 23–29** (days 64–70) | Founding-sales tracking if fired; vendor-balance query in `ar kpi`. | The drop, inside a live wave only. US holiday week: 2/day floor. Pre-write December promo-expiry receipts. Standings #10; digest #10. | Trial invites to the digest's payer segment only; readers post trial receipts back, the page reposts the best with consent logged. | No vendor >60% of Tier A over 30 days; ≥900 subs / ≥400 payers; every antiloki mention labelled; if fired, ≥1 reader-posted trial card within 72 h; 0 uncorrected. |
| **W11 · Nov 30–Dec 6** (days 71–77) | Overhead run #3 Dec 1–3, disclosed as running on antiloki with antiloki's bill in the same table (only if the collab fired). Month card #2 (November). | Dec 3 HN data post; Dec 6 "The Ledger, month 2"; Standings #11; digest #11 with the standing labelled slot. | Measurement to meter maintainers and the systima author; reporters get the month card. Sponsor #3 pitched. | ≥100 HN pts or a staff reply; ≥1,000 subs / ≥450 payers; founding sales inside the honest band (10–40 at 500–1,000 payers); disclosure line on the table image itself. |
| **W12 · Dec 7–13** (days 78–84) | "The Ledger 2026" year-end page; promo-expiry receipts finalised with real dates. | Year-end ledger card; Thu Dec 10 reader call; Standings #12; digest #12. | Sponsor #3 sold; year-end ledger to reporters and changelog-bot operators. | ≥1,100 subs / ≥500 payers; ≥2 distinct non-antiloki sponsors to date; antiloki ≤50% of sponsor revenue; no invented deadline anywhere (linter log clean). |
| **W13 · Dec 14–19** (day 90 = Dec 19) | Day-90 retro from `metrics/weekly.json`; next-90-day plan; @harnessleague decided only if a step event happened. | Standings #13; digest #13 with the 90-day numbers published in the open. | Thank-you DMs to every insider who reposted or corrected; ask none for anything. | 5–10K followers (10K is a month-4–8 milestone contingent on one step event); 500–1,000 verified personal payers; 0 uncorrected, median fix <60 min; the counter has never reset on an unverified report; 90-day cash out ≤$300 before sponsor revenue. |

### The daily operator hour (from day 2; weekdays; Saturday ~35 min)

One 55-minute block ending at the first slot you can hit (default 06:35–07:30 UTC; a US operator runs 12:35–13:30 and the scheduler posts the 07:30 delta from the previous day's approval). Pollers ran overnight; `collect.ts` ran at 05:30.

- **:00–:04 `ar queue`.** Summary: inbox by source/tier, the drafted delta with its two inputs and URLs, Tier A candidates with the number that cleared or missed the bar, the four counters (red if stale or "tighten the bar"), yesterday's best post, failed posts, the `gate.ts` line, mentions flagged "correction".
- **:04–:12 Delta (Tier B, exactly one).** Rotation order Mon npm lag · Tue regression latency · Wed incident-minutes · Thu quota-burn · Fri duplicate-issue · Sat data-loss count · Sun weekly roll-up, but the generator skips to the next delta whose input actually changed. Open both inputs yourself (the dist-tags JSON, the CHANGELOG diff); confirm the number; `ar approve --slot 07:30` (or 18:30 if a receipt is stronger for the morning). Day 31+: confirm the self-check line.
- **:12–:30 Receipts (Tier A, 0–2).** Per candidate over the bar: open the primary and re-derive the number from the live page, not the poller cache; Approve fires the two same-minute captures + Wayback; type the ≤3 arithmetic lines; set response (default "none"); pick the tag; preview the PNG; lint passes; assign 13:30 / 18:30. Nothing over the bar → pull the next backlog item (days 2–28) or post nothing extra. Floor 2, ceiling 3, ≥2 h apart.
- **:30–:37 Replies and corrections.** Reply by hand only to replies with a number, plan or tool name; ≤5/day; ignore jokes. A credible correction: verify against the primary, post the correction as its own post within 60 minutes, mark the card and /r/ page "corrected" (number kept), add the row to `corrections.json`, un-reset the counter if a reset was wrong. This step outranks everything but the day's posts.
- **:37–:43 Reddit or GitHub (one per day, not both).** One numbered comment in a pinned megathread (a ledger row, a counter value, or a correction of someone's arithmetic; never a link), or one data comment under your real GitHub account on an issue the pollers surfaced (#42796 mechanic). Note any megathread comment past 100 upvotes: tomorrow's credited card.
- **:43–:49 Outreach.** One action from `insiders.csv`: a first DM, a day-10/+24 follow-up carrying a NEW receipt, or a thank-you on a repost. Week 4+: one sponsor email. Log it.
- **:49–:53 KPI.** `ar kpi` has filled the X columns; you type digest subs, personal payers (beehiiv export) and megathread upvotes. The sheet shows running quote conversion, this week's gate, and days to Nov 4 and Nov 19.
- **:53–:55 Tomorrow.** `prewritten/` and the calendar (nerf window, launch watch, promo end dates, Nov 6); move any due item into the queue.

**13:30 and 18:30 UTC, phone, 2 min each:** confirm the card posted with the label; skim replies for a correction; post the source-link reply by hand if in save-money mode.

**Fixed extras:** Friday 16:00–16:20 UTC verify two Standings cells against the feeds before the 16:30 post. Sunday +45 min: `ar digest` → beehiiv, add the best reader receipt, send ~14:00 UTC, write the retro line (formats by views-to-follows, quote conversion, payer share, corrections, incident register, post-drop neutrality line). First Sunday of the month +20 min: the four vendor statements. Net ~7.5 h/week plus the drill; W0–W1 and the W3/W8/W11 measurement days exceed the hour by design.

**Interrupt rule:** a phone notification from @ClaudeDevs, @thsottiaux, @cursor_ai, @opencode or @sama about limits, usage or pricing starts the 30-minute drill (§5) regardless of the hour.

---

## 4. Outreach list and DM templates

`outreach/insiders.csv` columns: name, handle, tool, receipt, first-DM date, follow-up 1 (day +10), follow-up 2 (day +24), status (sent / replied / reposted / corrected / declined). Sent from the page account on Wed Sep 23 after the ledger is live, 4–6 per hour across the day so nothing reads batched; 12–20 sent that day.

| # | Who | Tool | The receipt they get |
|---|---|---|---|
| 1 | marc_krenn (@ClaudeCodeLog) | Claude Code | Day-1 stable-lag delta + #92274 17-day stall |
| 2 | obviyus (@CodexReleases) | Codex | R-2026-0012 + the 9-in-14-days quota-burn count |
| 3 | mattlam_ (@Codex_Changelog) | Codex | Codex regression-fix latency from release notes |
| 4 | ccusage maintainer | Claude Code | R-2026-0011 (1.25 ÷ 1.50) |
| 5 | Claude-Code-Usage-Monitor maintainer | Claude Code | Sep 14 −17% row + the reset-time question |
| 6 | Viberank maintainer | Claude Code | The Limit Ledger vs the $14.3M tracked |
| 7 | #42796 author (AMD director) | Claude Code | The nerf-window delta format (read:edit ratio, thinking blocks), credited |
| 8 | A degradation-tracker maintainer | Claude Code | Apr 23 postmortem 34/15/4 days as a receipt |
| 9 | Simon Willison | all | R-2026-0014 cache TTL 1h→5m, 17.1% overpaid |
| 10 | Gergely Orosz | all | "What $200 buys you this week" table |
| 11 | The Register reporter (PocketOS) | Cursor | The 14-month ledger JSON |
| 12 | TechCrunch reporter (GPT-5.6 deletions) | Codex | The 14-month ledger JSON + weekly data-loss count |
| 13 | systima author (33K vs 7K) | Claude Code / OpenCode | The overhead-measurement plan and method |
| 14 | r/codex banked-reset author (1,413 pts) | Codex | Their analysis as a credited card |
| 15 | r/ClaudeCode "Max 20x = 5-hour window" author (1,582 pts) | Claude Code | Their post as a credited card |
| 16 | #92274 author | Claude Code | The stall detector's output |
| 17 | Boris Cherny (Anthropic) | Claude Code | R-2026-0011 with their own "17% reduction" line — response field only |
| 18 | Thariq Shihipar (Anthropic) | Claude Code | Same — response field only |
| 19 | Tibo / @thsottiaux (OpenAI) | Codex | R-2026-0012 — response field only |
| 20 | thdxr (OpenCode) | OpenCode | R-2026-0013 — response field only |

**Templates.** Skeletons only: every sent DM is rewritten in your own words around that person's receipt, and no two sent DMs share a sentence. Insider and reporter DMs on day 3; vendor-staff DMs on day 3 as well, asking only for the response field. Never a nudge, never "please repost".

**Insider**
> Hi <name> — I run Agent Receipts (@agentreceipts; unaffiliated, no vendor mark). Numbered, dated receipts across Claude Code / Codex / Cursor / OpenCode, with the vendor's response as a fixed field. One is about <tool>: R-2026-00NN — <line 1>; <line 2>; source: <url>. If any number is wrong I'd rather hear it from you before it stays up: corrections go out within the hour and into the public log. Ledger, RSS/JSON, badge: agentreceipts.dev/ledger. No ask beyond a look.

**Vendor staff**
> Hi <name> — Agent Receipts (@agentreceipts; unaffiliated). One numbered receipt concerns <tool>: R-2026-00NN — <line 1>; <line 2>; sources: <url>, <url>. The card's vendor-response field currently reads "none". If you want a line in it, it's yours verbatim, dated. If a number is wrong, the correction posts within the hour and goes in the public log.

**Reporter**
> Hi <name> — you covered <story>. I run Agent Receipts (@agentreceipts; unaffiliated): 14 months, 40 numbered receipts across Claude Code / Codex / Cursor / OpenCode, one JSON. One row relates to your piece: R-2026-00NN — <line 1>; source: <url>. Raw captures (two timestamped screenshots per row) on request. agentreceipts.dev/ledger.json.

**Follow-up (day +10, +24):** a NEW receipt about their tool, one line, no reference to the earlier DM.

---

## 5. The vendor-event drill (30 minutes)

Trigger: a phone notification from one of the five vendor accounts containing a limit, usage or pricing number. Expected ~1 per vendor per fortnight. Everything is hand-written from the Premium account; the `x-manual` CLI logs it afterwards.

| Clock | Action |
|---|---|
| T+0–3 | Capture A (the vendor post) and Capture B (the prior number: docs page, changelog, or previous post) in the same minute, URL bar and UTC clock visible (`ar capture <url> <url2>` from a laptop; from a phone, two screenshots with the clock visible, hashed when you get back). |
| T+3–12 | Arithmetic: prior → new, the ratio, % vs the actual previous week including any promo multiplier (the Aug 29 lesson: 1.25 ÷ 1.50 = −17%). Both inputs written down. |
| T+12–18 | Quote-post from the page: ≤3 lines of math, "Vendor response: none yet", the tag, one question ("which plan, what reset time?"). No CTA. |
| T+18–25 | Source-link reply. Ledger-row candidate flagged `with-notice` / `none` / `contradicted`. If without notice AND over the Tier A bar → `ar reset <vendor> <R-number>` **proposal**; you approve it in the next operator hour after the captures are in the manifest. A reset is itself a numbered receipt and inherits the evidence and response fields. |
| T+25–30 | `pnpm x-manual` logs the quote (URL, views, replies, time-to-quote). If a reset was proposed, the templated request to the vendor's press@/support and a DM to the dev-rel row goes out now, time logged — resets only, not every receipt. |
| +24 h | Log profile clicks → follows for that quote in `kpi.csv`. |

Stop rule: after 10 quotes, if profile-clicks→follows is under 0.02%, stop the drill and keep only the ledger row (decision written to `ops/decisions.md`). The base rate to beat: a 382K-view meme left @fanofaliens at 3,662 followers.

---

## 6. Gates, kill rules, and the antiloki entry

All computed by `gate.ts` from exports and read in the queue header; the decision and its numbers are written to `ops/decisions.md` the same day.

| Day | Date | Rule |
|---|---|---|
| **14** | Sun Oct 4 | Week-2 KPI row: 15–20 posts, 3–5 Tier A with ≥100-engagement primary, one post >20K views, 800–1,500 followers, 150–300 subs / 50–100 payers, quote conversion measured across ≥5 quotes (≥0.02% or the drill stops at 10), 3 megathread comments >50 upvotes. Miss → cut the two worst formats early; no other action. |
| **30** | Tue Oct 20 | Week-4 KPI row: 1,500–3,000 followers (stretch 5K), 400–700 subs / ≥150 personal payers, 1 non-antiloki sponsor sold and labelled, Atlas published, corrections log 0 uncorrected, retro done. Honest conversion check: 150 payers → 1–3 sales → **do not launch**; the page's job in month one is the list and the credibility. Cross-vendor resets ≤2 in 30 days or tighten the bar. Delta self-check display goes live for day 31; human confirm stays. |
| **45** | Wed Nov 4 | **Kill/pivot (amended, §A1):** continue if **either** ≥1 distribution event has happened (an insider repost, a vendor-staff reply, or a quote-post that landed in a ≥1M-view thread) **or** ≥100 verified personal payers are on the digest. If neither — regardless of follower count — stop the automated daily feed, keep pollers feeding the site and badge, switch to two hand-built, name-checked receipts per week aimed at the insiders. Followers and views are logged but do not decide. Either outcome written down the same day. |
| **60** | Thu Nov 19 | **Entry gates, all three required:** (1) ≥300 digest subs with ≥100 self-identified personal payers; (2) one post ≥50K views or one vendor-staff reply; (3) one non-antiloki sponsor slot already sold and labelled. **Plus:** boundary-tests 3/3 pass on Linux and macOS with the actual command in the audit timeline, and a live wave is open (a limit change, a postmortem, a vendor-acknowledged wipe, or a new model's week-3–7 nerf window). Any NO → antiloki waits, the page keeps posting, the next wave date is pinned. |

**The antiloki entry, in order:**
1. Before day 60 (W5–W8, outside the hour, in the antiloki repo, Claude Code fixes, you review): scenario 1 home-directory `rm -rf` (write refused outside the assigned folder; timeline shows the command string — issue #10077's demand); scenario 2 a PocketOS-style over-scoped token in an unrelated file (read refused and logged, no outbound use possible); scenario 3 `terraform destroy -auto-approve` against a mock backend (blocked or routed to verification; command logged). Fix cycle budgeted at ~5 Claude-Code days.
2. W9: `boundary-tests/` published as a public repo runnable against any harness, before antiloki is named. antiloki's own per-task bill on the 10-task set posted as a labelled receipt on the page first.
3. Only after `gate.ts` says GO: the founding checkout is built — $99 first year (list $200) / $349 lifetime (list $500), priced against half a month of Max 20x; seat cap 300 enforced by the checkout's real stock and the 72-hour window by its real end time, or neither number is stated. The 14-day "Agent Receipt" trial exports a card in the page's exact format (task, agent, tokens, dollars, verified/merged, folder boundary).
4. The drop, inside the wave: antiloki's account posts; the page quote-posts it with "Sponsored" in the post text; bio gains "Supported by antiloki"; /about gains "The operator builds antiloki"; `ops/coi-commitment.md` is published with its day-0 hash. The post's argument is the Atlas's own counts, not a feature list: "of N receipts to date, X are `boundary`, Y `unverified change`, Z `billing` — antiloki addresses those three categories (folder-level write enforcement · per-task verification · per-task dollar timeline) and none of the other four." If the counts do not support that sentence, the post is not written.
5. After: name, avatar, cadence and all-vendor coverage unchanged; other sponsors keep buying; antiloki ≤50% of sponsor revenue; a standing labelled slot in the Sunday digest; the offer re-runs only on the next real limit cycle; if antiloki ever earns a receipt it gets a number under the same bar. Expected 10–40 founding sales against 500–1,000 verified payers (0.5–0.62%).

---

## 7. Budget and accounts

**Accounts, in order, with waiting periods**

| When | Do | Wait |
|---|---|---|
| Sep 18, same hour | Check and register **@agentreceipts** + **agentreceipts.dev** (both unregistered per RDAP today); fallback pair @harnessledger / harnessledger.dev; Nerf Watch only on .io/.app as a last resort. Registrar, email (ops@agentreceipts.dev), Cloudflare account, GitHub org `agentreceipts`: all new, not the antiloki ones. | — |
| Sep 18 | Set the X profile **once**: display "Agent Receipts (unofficial)", the 160-char bio verbatim, receipt-glyph avatar, no vendor colours, no self-applied label. Do not touch it again. | 3-day profile-change window → Premium (not Premium+) on **Sep 22**, day 2. Expect the check after review; never promise it. |
| Sep 18 | Apply for the X API pay-per-use project on the page account; OAuth 1.0a user-context keys; automation label "Automated by @<operator>" set before the first scripted post. | Approval lag: apply today so it clears by Sep 21. Dry-run mode until then. |
| Sep 18 | Reddit Data-API "script" app at reddit.com/prefs/apps; page account u/agentreceipts; join r/ClaudeCode, r/codex, r/ClaudeAI, r/cursor on Sep 21; page link in profile only. | >50 karma before any feed post (target end of W2). |
| Sep 18 | GitHub fine-grained PAT (public-repo read); archive.org account for Save-Page-Now. | — |
| Sep 19 | beehiiv "The Weekly Receipt", Launch plan (≤2,500 subs), double opt-in; signup form with three REQUIRED fields: plan (Free / Pro / Max 5x / Max 20x / Codex Plus / Codex Pro / Cursor / OpenCode+API), personal vs employer-paid, harness count (1 / 2 / 3+). API is paid-only → weekly CSV export into `kpi.csv`. | — |
| Sep 19 | Hetzner CX22-class VPS; Cloudflare Pages project; wrangler. Site terms designate California law and venue (anti-SLAPP, CCP 425.16). | — |
| Sep 20 | Commit `ops/coi-commitment.sha256` to the public repo; one-time OpenTimestamps stamp of that hash (no daily anchoring). | — |
| Oct 12 (W4) | Stripe payment link for the sponsor slot. | — |
| Only after Nov 19 GO | Founding checkout variants with real stock and a real end time. | — |

**Monthly budget (USD, against the ~$100 cap)**

| Line | Expected | Notes |
|---|---|---|
| X Premium | ~$8–14 | From Sep 22; the reply-visibility fee. Never Premium+. |
| X API pay-per-use | ~$6–25 | ~75 labelled cards × $0.015 ≈ $1; ~900 own-post reads × $0.005 ≈ $4.50; source-link replies $0.20 each by API or $0 by hand. Kill-switch file at $35/month. |
| VPS | ~$5 | Two timers, SQLite, poster. |
| Domain | ~$1 | $12/yr. |
| Monthly Overhead Receipt | ~$25 | API keys for Claude Code, Codex CLI, OpenCode on 10 tasks. Cursor Pro $20 only when a sponsor slot has paid for it; otherwise "not measured, subscription unfunded". |
| Cloudflare Pages, GitHub Actions (site build), beehiiv Launch, Reddit API, HN Algolia, npm, statuspage feeds, archive.org, Playwright, Claude Code (already owned) | $0 | |
| **Total** | **~$50–60 expected; ≤$95 worst case** | No pre-allocated reserve. No paid promotion, bought followers, engagement pods, or LLM runtime. |

Sponsor revenue (suggested $200/slot from W4, adjusted after week-3 views; W8 and W12 slots) funds Cursor and a beehiiv upgrade (past 2,500 subs, month 4+) before anything else. 90-day cash out ≈ $290 before sponsor revenue; one slot per month is roughly break-even by day 60. antiloki never pays the page's bills before the drop and afterwards pays only the labelled slot price.

---

## 8. Risks and the lines not to cross

The playbook §5 has the long version; these are the lines this plan enforces mechanically.

- **Suspension.** Scripted cards only via the official API with the automation label; poster has no reply/like/follow/DM code paths and never touches x.com; no keyword or LLM replies; every reply and quote-post hand-written; copypasta guard (changed numeric token + new image hash); linter blocks solicitation verbs; Premium only after the 3-day window; Reddit read-only via OAuth, megathread posture, >50 karma before feed posts, no bare screenshots on r/cursor, page link in profile only.
- **A wrong number read by a vendor employee.** Ends tolerated status and is the Media-Matters-shaped exposure. No LLM anywhere; a human approves every card for 90 days; the admission bar is a unit-tested function; every card shows its two inputs; every side-by-side carries two same-minute captures with visible URLs and a Wayback link; the vendor's response is a fixed field including "none"; "alleges" on Kahn v. Anthropic is enforced by the linter; corrections within the hour as their own posts in a public log; captures kept for the life of the page; California hosting and venue.
- **The step never comes.** Six of nine clones sit at 0–87 followers after 100–600 posts. The ledger, badge and 40 receipts ship on day 2; 12–20 own-tool DMs on day 3 with +10/+24 follow-ups that carry a new receipt; the drill inside 2–7M-view vendor threads is measured and stopped at 0.02% after 10; outreach is a fixed slot in the hour ahead of KPI logging; the day-45 rule is binary and pre-committed.
- **Bait-and-switch.** COI line on /about from day 1; the specific commitment (antiloki, gates, day 60, label wording) hashed on day 0 and published at the drop; structural separation (new email, registrar, Cloudflare, GitHub org; no antiloki links, analytics or badges before day 60); a non-antiloki sponsor sold and labelled first; antiloki ≤50% of sponsor revenue; measurement on plain CLIs until disclosed; every antiloki mention labelled "Sponsored"; sponsors.json public.
- **The boomerang.** The collab has no date until the public boundary-test suite passes 3/3 (home-dir rm -rf, stray token, terraform destroy -auto-approve) with the actual command in the audit timeline, and antiloki's own bill is published first.
- **Fake urgency.** Seat counts and windows come only from `offer.json` and are literally enforced by the checkout, or they are not stated; no invented deadlines tied to a cycle.
- **Tourist pull.** No doomsday / midnight / apocalypse / loser anywhere (linter); no dial, no composite score, no trust index; wipe stories are monthly case files, never pinned or quote-bait; no politics, resignation or age-gating threads; never victim-blame, never tribe-dunk.
- **Counter integrity.** Resets only on Tier-A ledger rows about limits/defaults with two captures and a response field; never on outages, regressions, unverified reports, or announced changes; >2 cross-vendor resets in 30 days tightens the bar; the badge goes visibly stale rather than silently wrong; wrong resets are un-reset in public.
- **Legal reproduction.** Never leaked source, Claude Code system-prompt text, or subscription-auth workarounds — link @ClaudeCodeLog's diffs, never paste them; no subscription traffic through the measurement proxy; vendor names only nominatively; no vendor logo; "Commentary: Agent Receipts" pre-written in `ops/incident-response.md` if X ever flags the account.
- **Privacy.** Credit by handle, blur on request within the hour, never a private individual's bill without recorded consent (`consent.csv`); the digest list is never shared with any sponsor, including antiloki.