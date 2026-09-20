# Agent Receipts — Project Brief (v1.2 · 2026-09-18)

A self-contained brief for building **Agent Receipts** from zero in a fresh session. It carries the context (who the audience is and why), the editorial rules, the full architecture of a **fully autonomous, AI-orchestrated pipeline** (no human in the daily loop — humans hold a kill switch and a weekly audit), the data model, the platform specifics (X · Instagram carousels · LinkedIn), the backfill, the 90-day calendar with gates, the budget, and the lines that must never be crossed.

Source documents this supersedes (in `/home/danj/dev/antiloki/antiloki-site/marketing/`): `agent-receipts-playbook.md` (the research, 24 agents, every URL), `agent-receipts-plan.md` (v1.1, human-in-the-loop version). Read them only if a number below needs its source.

---

## 0. What it is, in one paragraph

Agent Receipts is a watchdog publication for people who pay $100–200/month for AI coding agents (Claude Code, Codex, Cursor, OpenCode). A pipeline of scripts and AI agents watches the public record all day — vendor status pages, the Claude Code npm releases and changelog, GitHub issues by reactions, Hacker News, the Reddit megathreads, the five vendor X accounts — and whenever something crosses a fixed, coded bar (a limit cut, a silent regression, an outage over an hour, a surprise-bill thread with real numbers) it becomes a **numbered, dated receipt**: `R-2026-0011`, a screenshot, three lines of arithmetic computed by code ("they said +25 %; base × 1.25 ÷ base × 1.50 = −17 %"), the vendor's response as a fixed field (including "none"), and a neutral category. Every number is independently re-derived by two verifier agents and attacked by a refuter before publication; anything that does not survive is not published. Receipts post to **X** (text + card, quote-posts on vendor threads), **Instagram** (a 4–6 slide carousel rendered from the same fields) and **LinkedIn** (image + post), and live forever on **agentreceipts.dev** — three ledgers (limits, incidents, prices), a "days since a limit changed without notice" badge per vendor, RSS/JSON, and a public verification trail on every receipt page. Nothing on the page is opinion, nothing is written free-form by an LLM, no agent ever replies to anyone. The page is disclosed from day 1 as *operated by AI agents with a public verification trail*. After day 60, if the gates hold, **antiloki** (the desktop control layer for coding agents that the same operator builds) appears as a clearly labelled sponsor — and the reveal is that the page ran on it the whole time.

---

## 1. Why this page — the research in ten facts

(Full sources in the playbook. These are the facts the design rests on.)

1. **Everyone pays, personally.** 90 % of professional developers use coding agents weekly, 68 % daily (JetBrains 2026). In the month's biggest limits thread on r/ClaudeCode, 19 % of commenters name the $100 plan, 18 % the $200 plan, 1.7 % mention an employer. Individual wallets.
2. **Nobody trusts the output.** 46 % distrust it, 3 % highly trust it; the top frustration is "almost right" (Stack Overflow 2025/26). ~7 in 10 won't merge without a manual review.
3. **The dominant recurring feeling is betrayal by opacity**, not fear: "they changed the deal and did not tell me." Silent regressions (Anthropic's Apr 23 2026 postmortem: three regressions running 34/15/4 days — 942 HN points), a cache TTL silently cut 1 h → 5 min (17 % overpaid, issue closed "not planned", 552 pts), weekly limits ("you literally have no idea what you're paying for", 609 pts).
4. **Vendor limit posts are stadiums.** @ClaudeDevs "permanently raising weekly limits 25 %" (Aug 29 2026): 7.06 M views, 1,996 replies, Community-Noted as a **17 % cut**, confirmed by Anthropic's own follow-up. Codex global reset (Sep 7): 5.46 M views, 4,617 replies. ≥90 % of that traffic is out-of-network drama. Roughly one such post per vendor per fortnight.
5. **What this audience forwards is arithmetic, not memes.** The top r/codex post this month is a banked-reset allowance analysis (1,413 pts); r/ClaudeCode's is "Max 20x only applies to the 5-hour window" (1,582 pts). The community built its own meters (ccusage 18.6 K stars, Viberank $14.3 M tracked).
6. **Deletion stories reach tourists.** The Replit/SaaStr wipe: 11,200 pts on r/ChatGPT where 0.3 % of commenters use any agent, vs 70 pts on r/ExperiencedDevs. Wipes are monthly case files, never the growth path.
7. **Vendors structurally cannot say it.** status.claude.com logged 29 incidents in 36 days vs one vendor incident tweet; @cursor_ai has never posted the word "outage". The only pages at scale in the niche are unofficial bots: @ClaudeCodeLog (82 K, "UNOFFICIAL — but tolerated", gets staff replies), @CodexReleases (26 K), @Codex_Changelog (30 K). None does cross-vendor, dated, cost-bearing receipts with the vendor's response on record.
8. **Supply is ~4 postable items/day**, ~1/day with real traction (audited Sep 4–18: ~13 status incidents, ~18 changelog lines, ~15 receipt-grade issues, 2 limit events, 0 verified wipes). That figure caps *receipts*, not output — computed deltas and measurements are daily material.
9. **Growth is a step function.** Comparable pages sat at 77–3,600 views/post for weeks, then jumped in one day after an insider share (@ClaudeCodeLog: 154 followers at day 55 → +1,000 overnight). 6 of 9 clones never got that day. The plan engineers the step (ledger + backfill live on day 2; 20 insider DMs on day 3 — the one thing a human does), it does not forecast a curve.
10. **A wrong number read by a vendor employee ends "tolerated" status**, and the Media Matters case shows a timestamped side-by-side is the only legal defence. This is why verification is the heart of the pipeline, not a feature.

**Decided and closed:** no "AI doomsday clock" (IMD's AI Safety Clock drew 2 HN points on the exact "agentic AI" framing the week a GitHub "days since" counter drew 212; a clock is a mood with a number and pulls the AI-risk crowd; an anonymous page cannot borrow a Nobel board's credibility). We keep the ritual, not the dial: a per-vendor **"days since a limit or default changed without notice"** badge computed from the ledger, and a monthly "The Ledger, month N" card with a written statement per vendor.

---

## 2. Editorial system

### 2.1 Three layers, three prefixes

| Prefix | Layer | What | Cadence | Source of the numbers |
|---|---|---|---|---|
| `R-2026-NNNN` | **Receipts** | A documented event: limit/price/entitlement/default change, regression, outage, bill | when they exist, 0–2/day | primary sources, verified (§4) |
| `M-2026-NNNN` | **Measurements** | The page's own experiment: 10 fixed tasks on Claude Code / Codex CLI / OpenCode (Cursor when funded): tokens before the first prompt, cache read/write, subagent fan-out, wall-clock, tests passed, **cost per passing test** | every two weeks from W3 | the harness (§5.10), method page public |
| `A-2026-NNNN` | **Analysis** | An interpretation over numbers the page already published — never over anything else | at most 1/week | R- and M- data only; carries the figures it interprets |
| Δ (delta) | **Computed number of the day** | e.g. `stable` vs `latest` lag, regression-fix latency, incident-minutes/week, quota-burn issues/week, duplicate-issue count, data-loss reports/week | exactly 1/day | free feeds, deterministic |

Weekly anchors: **Friday** Standings table (per vendor: incident-minutes on harness components, limit changes silent/with-notice, regression-fix lines, quota-burn issues, duplicate-issue count; raw and per-million users; **no loser label, no rank column**). **Sunday** digest email ("The Weekly Receipt"). **First Sunday of the month** "The Ledger, month N" card with the four counters, longest streaks, silent vs with-notice changes, and a 2–3 line statement per vendor.

### 2.2 Admission bars (coded constants — `admit()` is a pure, unit-tested function)

**Tier A (a receipt):** vendor post > 500 K views OR > 500 replies · HN story > 100 pts · GitHub issue > 25 reactions AND closed by a human or still open (exclude `[bot]` closures — the stale sweep auto-closed 5,101 issues in 14 days) · status-page incident on a harness component (Claude Code; Cursor "CLI"/"Cloud Agents"/"Review Agents"; OpenAI text match "codex") AND (> 60 min OR a limits keyword) · Reddit post > 300 upvotes containing a number (`\d[\d,.]*\s?(%|\$|k|tokens|hours|min|x)`).

**Tier B (a delta):** anything a delta module computes from a feed, with both inputs shown.

**Rejected, always:** politics; the resignation/age-gating threads; anything reproducing leaked source, Claude Code system-prompt text, or subscription-auth workarounds (that is exactly where Anthropic drew the line with OpenCode — link @ClaudeCodeLog's diffs, never paste them); unverified data-loss reports (they become a weekly *count*); Desktop/Cowork/VS Code/cosmetic issues unless they touch cost, limits, tokens, cache, deletion, defaults or the stable channel.

**Two-source rule:** any receipt that states a named vendor changed something needs two independent primary sources (e.g. the vendor's post + the vendor's follow-up; the status JSON + the status banner; the issue + the changelog line), both captured.

### 2.3 The seven categories (neutral, derived from the record — never a product's feature list)

`silent change` · `regression` · `outage` · `billing` · `data loss` · `unverified change` · `boundary`

Assigned by classifying the 40 backfill receipts first (agent-proposed, code-validated against the enum, human-confirmed once during W0), then by the extractor with verifier agreement. Published with counts as the **Root Cause Atlas** (W4), recounted monthly. No product name appears on any card, page, post or reply before day 60 (linter-enforced).

### 2.4 The counter and its reset rule (published at `/rule`, linked from every badge)

`days_since(vendor) = today − max(effective_date)` over ledger rows with `tier = A` and `notice ∈ {none, contradicted, promo-expiry-unreminded}`. Cross-vendor = min of the four.

Resets only when a numbered Tier-A ledger row is added that (1) concerns a limit, quota window, price, plan entitlement, default model or default setting; (2) took effect **without a dated notice** in the vendor's changelog/blog/status/account at the time, **or** was announced with a number a primary source contradicts, **or** was a promo expiry with no dated reminder; (3) carries two same-minute captures and the vendor-response field.

Never resets on: outages and incident-minutes (they feed Standings — an incident counter would read "Cursor 0 days" forever); regressions without a defaults change; unverified reports; **any change announced with dated notice** — that gets a green `with-notice` row and does not reset. The counter measures *notice*, not change; a vendor that announces gets visible credit.

If cross-vendor resets exceed 2 in any rolling 30 days, the admission bar is tightened, never the count accepted. A wrong reset is un-reset in public through the corrections log. The badge shows `last verified <UTC>` and goes visibly **stale** after 48 h without a pipeline run — the badge is the health check.

### 2.5 The card (six fixed fields, one HTML template for every surface)

1. Receipt id · 2. vendor · 3. date range · 4. ≤ 3 lines of arithmetic, **template-rendered from fields, both inputs shown** · 5. vendor response: enum `none | acknowledged | fixed-no-note | deleted-and-reposted | postmortem | disputed` · 6. category.

Variants: delta card (one number + two inputs), Standings, "What $200 buys you this week" (four-column table: Claude Max 20x / Codex Pro / Cursor Ultra / OpenCode Black — hours, tokens, resets), monthly card, correction card, M-series table, A-series figure.

Dark, monospace, no vendor logo ever, no URL on the image (the source link goes in the first reply / caption). Sizes: X 1600×900 · Instagram 1080×1350 per slide · LinkedIn 1200×627.

### 2.6 Copy templates (fixed; fields substituted; the linter runs on the output)

**X (top-level card):**
```
{ID} · {VENDOR} · {DATE_RANGE}
{LINE_1}
{LINE_2}
{LINE_3}
Vendor response: {RESPONSE}
Category: {CATEGORY}
{QUESTION}          ← one of a fixed list, e.g. "Which plan, and what was your reset time this week?"
```
First reply (posted by API, $0.20, or skipped in save-money mode): `Sources: {URL_1} · {URL_2} · captures + verification trail: agentreceipts.dev/r/{ID}`.

**X (quote-post on a vendor limit post, the "drill", §5.8):** `{LINE_1} {LINE_2} {LINE_3} Vendor response: none yet. Category: {CATEGORY}. {QUESTION}` — within 30 minutes of the vendor post.

**Instagram carousel (4–6 slides):** slide 1 the six-field card; slide 2 capture A (the vendor's statement); slide 3 capture B (the prior number / the contradicting source); slide 4 the arithmetic large; slide 5 vendor response + category; slide 6 (optional) the counter. Caption: the X text + `Sources and the verification trail on agentreceipts.dev/r/{ID} (link in bio)` + a fixed hashtag set (≤ 8: `#claudecode #codex #cursor #opencode #aicoding #devtools #agentreceipts #softwareengineering`).

**LinkedIn (image + post):** the card as the image; text = one-sentence plain-language lead (template per kind: "On {DATE}, {VENDOR} {KIND_VERB} — the arithmetic:"), the three lines, `Vendor response: {RESPONSE}`, `Full receipt, sources and verification trail: agentreceipts.dev/r/{ID}`. No hashtags beyond 3.

**Never in any post body:** reply/bookmark/repost/share/follow/"send this to"/"tag a" (X's Original Content Rewards and the platform's farming signals), doomsday/midnight/apocalypse/loser, any lawsuit term without "alleges" within 40 characters, seats-left/hours-left/ends-soon unless the number equals a value in `offer.json`.

### 2.7 Worked example — `R-2026-0011` end to end

- **Trigger:** X poller sees @ClaudeDevs post (Aug 29, 7.06 M views) → Tier A by views.
- **Extract:** `{vendor: "claude-code", kind: "limit", stated_multiplier: 1.25, prior_multiplier: 1.50 (promo since May 13), effective_date: "2026-09-14", quotes: ["permanently raising weekly limits 25%", "this works out to a 17% reduction in weekly limits on Claude Code"], notice: "contradicted", response: "deleted-and-reposted", sources: [post URL, follow-up URL, Community Note URL]}`.
- **Verify:** verifier 1 and 2 fetch the three URLs independently and produce the same schema; the refuter's best attack ("the 1.50 was a promo, so 1.25 is a raise vs base") is recorded and answered by the template ("vs the week before" is the stated comparison). Code compares: multipliers, date, quotes-as-substrings, response — all match → `verified`.
- **Compute (template `limit.multiplier_change`):** `LINE_1 = "Announced: +25 % weekly limits."`, `LINE_2 = "Since May 13: base × 1.50 (promo). Since Sep 14: base × 1.25."`, `LINE_3 = "1.25 ÷ 1.50 = 0.83 → −17 % vs the week before. Their own follow-up: “17% reduction.”"`.
- **Capture:** two same-minute screenshots (the post; the follow-up) with the URL bar and UTC clock burned in, sha256 in `manifest.json`, both submitted to archive.org Save-Page-Now.
- **Render:** X card, 5-slide carousel, LinkedIn image. **Publish:** X 13:30 UTC, Instagram 14:00 UTC, LinkedIn 13:45 UTC. **Ledger:** row added, `notice = contradicted` → the Claude Code counter resets to 0 (a reset is itself a receipt). **Trail:** `/r/R-2026-0011` shows the extractor's JSON, both verifiers' JSON, the refuter's attack, the diff (empty), the capture hashes, the Wayback links, the post ids.

---

## 3. Architecture (fully autonomous)

```
 feeds ──► watch ──► triage ──► extract ──► verify ──► compute ──► capture ──► render ──► publish ──► monitor
           (cron)   (code)     (agent)     (2 agents  (code)      (playwright)  (playwright)  (3 APIs)   (agent + code)
                                            + refuter,                                                     │
                                            code compare)                                                  ▼
                                                                                              retract / correct (code)
           every stage writes to SQLite + audit_log; the site builds from the same data; the Sunday audit reads it all
```

**Principles, enforced in code:**
- **Numbers are computed, never written.** Agents extract fields into a schema; code computes the arithmetic from fields through per-kind templates. No free-form LLM prose reaches a post.
- **Verification is independent.** Verifiers get URLs, not the extractor's output; they fetch the primary sources themselves. The refuter is prompted to refute. Code decides agreement; disagreement = `held`, never "majority wins" on a number.
- **Fail closed.** No capture → held. Wayback failure → held (retry ×3 over 1 h, then held). Any linter hit → held. Held items expire after 72 h into the fixtures set as labelled negatives.
- **Agents never reply, like, follow or DM.** The publisher has no code paths for those. Mentions are read for one purpose: correction signals.
- **Everything is a trail.** Each receipt page renders the stage outputs, hashes and verdicts. That page is the product's own audit timeline, in public.
- **Humans hold a kill switch and a weekly audit, nothing daily.** `KILL` file → level 0 (nothing publishes). Autonomy levels in §3.3.

### 3.1 Stages

| # | Stage | Runs | Does | Output |
|---|---|---|---|---|
| 1 | `watch` | systemd timers: status 15 min · reddit 30 min · github/hn hourly · npm+changelog daily · X vendor accounts every 30 min · mentions hourly | Pollers write `candidates` with source identity, raw JSON, fetched artifact text (HTML → text, stored with hash) | candidates |
| 2 | `triage` | on each new candidate | `admit()` Tier A/B/reject with coded reason; relevance filter; dedupe (source identity → title clustering by trigram Jaccard ≥ 0.5 or same `<ver>` + 2 keyword hits → cluster headed by top-reaction item; cross-source `event_key = vendor:topic:48h` merge; ledger rows unique on (vendor, effective_date, kind)); two-source check for Tier A | admitted candidates |
| 3 | `extract` | agent (`claude-sonnet-5`), tools: read stored artifact only | Produces `Claim` JSON (schema §3.4) with verbatim quotes and char offsets; classifies category and notice; proposes the arithmetic **template id** (not the arithmetic) | claim v0 |
| 4 | `verify` | 2 × independent verifier agents (`claude-opus-5`, tools: WebFetch the URLs, nothing else) + 1 refuter agent (`claude-opus-5`, WebFetch + WebSearch) | Each verifier emits the same `Claim` schema from the URLs alone. Refuter emits `{attack, evidence, would_change_a_number: bool}`. **Code**: numeric fields exact-equal across all three claims; dates equal; every quote is a substring of the stored artifact; refuter's `would_change_a_number` must be false. Else → `held` with the diff | `verified` or `held` |
| 5 | `compute` | code | Per-kind template renders LINE_1..3 from fields; unit/rounding rules fixed; self-check (inputs < 2 h old for deltas, value inside historical min/max, all source URLs return 200) | receipt draft |
| 6 | `capture` | Playwright | Two same-minute screenshots of the two primary sources with a burned-in UTC-to-the-second + visible-URL bar; sha256 → `manifest.json` (public repo); archive.org Save-Page-Now for each URL; Wayback URL stored | captures |
| 7 | `render` | Playwright over one HTML template | X card, IG slides, LinkedIn image; image hash stored (the copypasta guard needs it) | assets |
| 8 | `guard` | code | Linter (§2.6 banned list, "alleges", missing fields, offer.json check, product names before day 60); copypasta guard (vs last 30 posted texts: refuse unless ≥ 1 numeric token changed AND a new image hash); slot/spacing/cap rules; dollar cap | scheduled |
| 9 | `publish` | scheduler every 5 min | X API v2 (`POST /2/tweets`, `/2/media/upload`), Instagram Graph API (item containers → carousel container → publish), LinkedIn Posts API (image upload → post). Slots (UTC): X 07:30 Δ · 13:30 R · 18:30 R · Fri 16:30 Standings; IG 14:00 and 19:00; LinkedIn 13:45 (weekdays). ≥ 2 h spacing per platform, cap 3 top-level/day on X (day 1 exempt: 5), automation label on scripted X cards | posts |
| 10 | `monitor` | hourly | Reads mentions/replies (X) and comments (IG, LinkedIn). An agent (`claude-sonnet-5`) classifies each as `correction-claim-with-source | correction-claim-without-source | other`. With source → re-run stage 4 with the new URL added; if the original claim now fails → **retract**: correction card posted as its own post on every platform within 60 min, receipt page banner "corrected/retracted" (number kept), `corrections.json` row, counter un-reset if needed. Without source → logged, no action. Never a reply | corrections |
| 11 | `ledger/site` | on every data change + 00:05 UTC | Static build: `/`, `/ledger`, `/incidents`, `/prices`, `/measurements`, `/analysis`, `/r/{id}` (trail), `/feed.xml`, `/ledger.json`, `/receipts.json`, `/rule`, `/about`, `/corrections`, `/privacy`, `/badge/{vendor}.{json,svg}`, `/sponsors` (W4), `/atlas` (W4) | site |
| 12 | `report` | Sunday 06:00 UTC | Email to the operator: posts/platform, receipts by tier and category, held items and why, retractions, false-publish estimate, spend, follower/subscriber deltas, distribution events, **10 random receipts with their trails**, autonomy level and any level change | audit |

### 3.2 Agents — models, tools, prompts, limits

| Agent | Model | Tools | Max turns | Output | Notes |
|---|---|---|---|---|---|
| extractor | `claude-sonnet-5` | `read_artifact(id)` | 6 | `Claim` (structured output) | Sees only the stored artifact text; must quote verbatim with offsets |
| verifier ×2 | `claude-opus-5` | `fetch(url)` (allow-list: the candidate's URLs + vendor domains + archive.org) | 8 | `Claim` | Different system prompts (one "read as an accountant", one "read as the vendor's PR lead") so they fail differently |
| refuter | `claude-opus-5` | `fetch`, `search` | 8 | `{attack, evidence_urls, would_change_a_number, which_field}` | Prompted to assume the claim is wrong and find the reason (promo context, wrong window, wrong plan, unit confusion, stale source) |
| classifier (monitor) | `claude-sonnet-5` | none | 2 | `{kind, source_url?}` | Classifies mentions; never generates text for posting |
| backfill drafter (W0 only) | `claude-opus-5` | `fetch` | 10 | `Claim` per backfill item | Human-confirmed once, before day 1 |

All agents run through the Anthropic API (Agent SDK) with structured output; every call, prompt hash, tokens and cost logged to `audit_log`. **Harness adapter:** the same stage interface can run each agent as an antiloki pane (scoped worktree, goal run, audit timeline) — that is the day-60 reveal, not a day-1 dependency. Build against the SDK first; keep the adapter boundary clean (`src/agents/runner.ts` with `sdk` and `antiloki` implementations).

Prompt files live in `prompts/*.md`, versioned; a prompt change re-runs the fixture suite (§6) before it can deploy.

### 3.3 Autonomy levels (state machine, evaluated daily and by the Sunday audit)

| Level | Publishes | Enters when | Leaves when |
|---|---|---|---|
| **L2 full** | everything that passes stages 2–8 | 30-day false-publish rate = 0 AND retractions ≤ 1 in 30 days AND fixture suite green | any uncaught wrong number (a retraction the pipeline did not initiate itself) → L1 |
| **L1 guarded** | Tier B deltas, Standings, digest; Tier A receipts are `held` for the operator's one-keypress confirm | after an uncaught error, or on a prompt/model change for 7 days | 14 consecutive days with 0 corrections → L2 |
| **L0 stopped** | nothing (pollers and site keep running; badge shows stale after 48 h) | `KILL` file present, or spend cap hit, or platform warning/suspension notice | operator removes the file |

Day 1 starts at **L2** only if the W0 acceptance tests pass (§6); otherwise L1 for the first 14 days.

### 3.4 Data model (SQLite; public exports as JSON)

```
candidates      id, source(statuspage|npm|changelog|github|hn|reddit|x|manual), source_id, vendor, seen_at, raw_json, artifact_id, event_key, cluster_id, tier(A|B|reject), reject_reason
artifacts       id, url, fetched_at, content_text, content_hash, http_status
claims          id, candidate_id, stage(extract|verify1|verify2|refute), model, prompt_hash, json, tokens_in, tokens_out, cost_usd, created_at
receipts        id(R-2026-NNNN), candidate_id, vendor, kind(limit|price|entitlement|default|regression|outage|billing|data_loss|other), category(7), date_from, date_to, fields_json, template_id, lines_json, response(enum), notice(none|dated|contradicted|promo-expiry-unreminded|n/a), status(draft|held|verified|published|corrected|retracted), held_reason, published_at
ledger_rows     n, vendor, effective_date, kind, notice, receipt_id, sources_json          (the Limit/Price ledgers)
incidents       id, vendor, component, started_at, resolved_at, minutes, shortlink          (the Incident ledger, from statuspage feeds)
captures        id, receipt_id, url, taken_at, png_path, sha256, wayback_url
assets          id, receipt_id, surface(x|ig|li), path, image_hash
posts           id, receipt_id, platform, external_id, slot_at, posted_at, text_hash, status(scheduled|posted|failed|deleted), label_applied
mentions        id, platform, external_id, author, text, seen_at, classification, source_url
corrections     id, receipt_id, wrong, right, flagged_by(url), detected_at, fixed_at, minutes_to_fix, post_ids_json
measurements    id(M-2026-NNNN), run_at, harness, task_id, tokens_pre_prompt, cache_read, cache_write, fanout, wall_ms, tests_passed, cost_usd
metrics_daily   day, platform, followers, impressions, best_post_views, subs, personal_payers, distribution_events_json, spend_usd
audit_log       ts, stage, entity, action, actor(code|agent:model|operator), detail_json
config          key, value            (autonomy_level, spend_cap, slots, offer.json mirror)
```

Public: `data/ledger.json`, `data/receipts.json` (with trails), `data/incidents.json`, `data/prices.json`, `data/corrections.json`, `data/sponsors.json`, `data/offer.json` (the **only** place a seat count or window may come from), `manifest.json` (capture hashes). Licence: code MIT, data CC-BY.

### 3.5 Repo layout

```
agent-receipts/                       PUBLIC
  README.md · RESET-RULE.md · METHOD.md (measurements) · CORRECTIONS.md (policy) · LICENSE
  data/                               the public JSON above + fixtures/
  prompts/                            extractor.md · verifier-accountant.md · verifier-pr.md · refuter.md · classifier.md · backfill.md
  src/
    watch/     statuspage.ts npm.ts changelog.ts github.ts hn.ts reddit.ts x.ts mentions.ts
    triage/    admit.ts relevance.ts dedupe.ts twosource.ts
    agents/    runner.ts (sdk | antiloki adapters) extract.ts verify.ts refute.ts classify.ts schemas.ts
    compute/   templates/{limit,price,entitlement,default,regression,outage,billing}.ts deltas/*.ts selfcheck.ts
    capture/   capture.ts wayback.ts
    render/    card.html slides.html li.html render.ts
    guard/     lint.ts copypasta.ts slots.ts spend.ts
    publish/   x.ts instagram.ts linkedin.ts scheduler.ts
    monitor/   mentions.ts retract.ts
    ledger/    counter.ts standings.ts digest.ts monthly.ts atlas.ts
    site/      build.ts badge.ts (Astro or plain TS → static HTML)
    report/    sunday.ts kpi.ts autonomy.ts
    backfill/  backfill.ts
    harness/   proxy.ts tasks/ run.ts
    cli.ts                            `ar` — status · hold · release · kill · rerun <id> · report · backfill · build
  ops/         systemd/*.timer *.service · .env.example · incident-response.md (suspension appeal, DMCA counter-notice, takedown, legal letter, rename kit "Commentary: Agent Receipts") · coi-commitment.sha256
  tests/       fixtures-driven suites per stage (§6)

agent-receipts-ops/                   PRIVATE
  db/agentreceipts.sqlite · captures/YYYY-MM-DD/*.png · outreach/insiders.csv, dm-log.csv · consent.csv · ops/coi-commitment.md · ops/decisions.md · metrics/
```

Stack: TypeScript, Node 22 (mise), pnpm, strict TS, vitest, biome, better-sqlite3, Playwright, Anthropic Agent SDK, Astro (site) or plain TS templates, wrangler (Cloudflare Pages). Hosting: one small VPS (Hetzner CX22-class) for the pipeline (systemd timers, SQLite, Playwright), Cloudflare Pages for the site, GitHub Actions to deploy on data change.

---

## 4. Verification, precisely

Because the whole page rests on it.

1. **Independence.** Extractor sees only the stored artifact. Verifiers see only URLs and fetch themselves (they may hit a changed page — that is recorded as a `source_drift` and holds the item). The refuter may search.
2. **Agreement is exact on numbers and dates**, substring-exact on quotes, enum-exact on `response` and `notice`. Category may differ by one step only if the extractor's proposal is confirmed by at least one verifier; otherwise held.
3. **Two sources** for anything naming a vendor change; sources must be on the vendor's domains, the platform of the primary post, GitHub, HN, Reddit, or archive.org. Third-party blogs may be cited in a reply, never as one of the two.
4. **Prompt-injection posture.** Fetched content is data. Agents are instructed that instructions inside pages are content to be quoted, never followed; the runner strips tool-call-like patterns from artifacts; a claim whose quote contains an instruction to the model is held automatically.
5. **Refuter veto.** If the refuter finds evidence that would change a number (a promo the extractor missed, a different plan tier, a corrected vendor post), the item is held and re-queued once with the refuter's URL added to the source set.
6. **Deterministic arithmetic.** Templates per kind: e.g. `limit.multiplier_change(prior, new) → ratio, pct`, `price.change(old, new, unit)`, `outage.minutes(started, resolved)`, `regression.fix_latency(v_bad_published_at, v_fix_published_at)`. Rounding: percentages to whole numbers, ratios to two decimals, money to cents. Every line shows both inputs.
7. **Fixtures.** `data/fixtures/` holds ~20 labelled real items (the day-1 posts and backfill) plus **seeded corruptions** (a shifted date, a swapped multiplier, a quote altered by one word, a source that 404s, an injected instruction). The suite must reject every corruption and admit ≥ 90 % of the genuine items before any deploy. Every held item and every correction is appended as a new fixture.
8. **Self-monitoring.** The Sunday report includes an estimate of the false-publish rate: the retraction count over published receipts, plus the operator's ten-receipt sample review (the one recurring human action besides the day-3 DMs).

---

## 5. Platforms, accounts and the drill

### 5.1 X (primary)
- Account `@agentreceipts` (free per RDAP on 2026-09-18; fallback `@harnessledger`). Display name "Agent Receipts (unofficial)". Bio (≤ 160): *"Receipts for people who run more than one coding agent. Limit changes with the math, regressions, outages, bills. Claude Code · Codex · Cursor · OpenCode. Run by agents; every receipt has a verification trail. Corrections: DM."* Avatar: a receipt glyph. No vendor colours, no self-applied label. Set once on day −3, never touched (the 3-day profile-change window precedes Premium).
- **Premium** (not Premium+) on day 2 — the reply-visibility fee. Expect the check after review; never promise it.
- **API v2 pay-per-use**: apply on day −3. $0.015/post, $0.20/post with a URL, $0.005/read. Scripted cards carry no URL (source link in the first reply). Automation label "Automated by @<operator>" on scripted posts (X's automation rules allow feed-fed posting with the label; unattended LLM replies need written approval — so none).
- Reads: five vendor accounts every 30 min (~240 reads/day ≈ $36/month), mentions hourly (~24/day), own-post metrics daily (~30). Dollar kill-switch at $60/month.
- Never: script x.com, auto-reply, like, follow, DM from the pipeline; near-identical daily posts (copypasta guard); engagement solicitation in bodies.

### 5.2 Instagram (carousels)
- Instagram **Professional (Business) account** connected to a Facebook Page (required for the Content Publishing API). Meta developer app with `instagram_basic`, `instagram_content_publish`, `pages_show_list`; the app can publish to accounts added as testers without full App Review — start there; submit for review in W2 so it survives past 90 days.
- Carousel publish: create an item container per slide (`image_url` must be a public URL → serve from the site's `/assets/`), a `CAROUSEL` container with `children`, then `media_publish`. Rate: ~25 posts/24 h — far above our 2/day.
- Content policy: our slides are original renders, not reposted screenshots — that is what keeps them out of the April 2026 aggregator throttle. Capture slides (2–3) are our own timestamped screenshots with credit and a visible URL; if reach data shows they hurt, drop them to the site only.
- Cadence: 1–2 carousels/day at 14:00 and 19:00 UTC; the Friday Standings as a carousel; the monthly card as a single image.

### 5.3 LinkedIn (image + post)
- A **Company Page** "Agent Receipts" (not a personal profile — the operator is not the brand). Posting via API requires the Community Management API (access request + review, typically weeks). **Bridge for weeks 0–4:** a scheduler with an API (Buffer / Publer / Typefully — pick one with LinkedIn Page + Instagram support; ~$10–20/month) fed by `publish/bridge.ts`; switch to direct APIs when approved. The pipeline must not care which transport posts.
- Cadence: weekdays 13:45 UTC, one post/day (the strongest receipt or the delta if nothing else); Standings on Friday. LinkedIn page follower growth is weak (−59 % industry-wide) — the value is that tech leads and budget owners see the receipts; measure link clicks to `/r/`, not followers.

### 5.4 Reddit — read only
- Data API "script" app (OAuth `client_credentials`); read `top?t=day` on r/ClaudeCode, r/codex, r/ClaudeAI, r/cursor; store pinned megathread ids. **No pipeline posting to Reddit** (rule 4/6/8/11 across the subs route limits complaints to megathreads, ban bare screenshots and reports without evidence; an automated account there gets removed). Reddit receipts reach the page as credited X cards.

### 5.5 GitHub, HN, npm, status feeds
- GitHub fine-grained PAT (public read), search by reactions with per-issue GET for `closed_by`; count-only queries for quota-burn and data-loss weekly counts. HN Algolia `search_by_date` with client-side points/date filters (never trust `nbHits`). npm `dist-tags` + packument `time` map with `If-None-Match`. Statuspage `/api/v2/incidents.json` on status.claude.com and status.cursor.com (Atlassian shape; some incidents have empty `components[]` → fall back to `incident_updates[].affected_components`); status.openai.com is a different shape (ULID ids, no components) → text-match "codex".

### 5.6 archive.org
- Account for Save-Page-Now (S3-style keys); every capture URL archived; Wayback URL on the receipt page.

### 5.7 The site — agentreceipts.dev
- Registrar + Cloudflare (new accounts, not antiloki's), Pages deploy on every `data/` change. `/about` carries the disclosure from day 1: *"Operated by AI agents. Every receipt shows its verification trail. Unaffiliated with any vendor. Conflict-of-interest statement: see the sealed commitment (hash) — published in full when it becomes relevant."* (The plaintext — antiloki, the gates, day 60, the label wording — is hashed on day 0 and published at the drop.) Terms designate California law and venue (anti-SLAPP, CCP 425.16).
- Digest: beehiiv (Launch plan), double opt-in, **three required fields**: plan (Free / Pro / Max 5x / Max 20x / Codex Plus / Codex Pro / Cursor / OpenCode+API), personal vs employer-paid, harness count (1 / 2 / 3+). Those fields are the KPI. Weekly CSV export into `metrics_daily`. The list is never shared with any sponsor, including antiloki.

### 5.8 The vendor-event drill (automated)
Trigger: the X poller sees a post from @ClaudeDevs, @thsottiaux, @cursor_ai, @opencode or @sama containing a limit/usage/pricing number (regex + a `limits` keyword list). Then, unattended: capture A (the post) and B (the prior number: docs/changelog/previous post — the extractor names it, the capture stage fetches it) in the same minute → extract → verify (the full stage, no shortcut) → compute → quote-post from the page within 30 minutes **only if verified**; otherwise the item is held and posts later as a normal receipt. Ledger-row candidate flagged `with-notice` / `none` / `contradicted`; a reset is proposed and, at L2, applied once captures are in the manifest. Profile-clicks → follows per quote logged at +24 h. **Stop rule:** after 10 quotes, if conversion is under 0.02 %, the drill switches to ledger-row-only (decision logged).

### 5.9 The one human action on the calendar
Day 3: the operator sends 12–20 insider DMs by hand (the pipeline never DMs) — each carrying one receipt about *that person's* tool; +10/+24-day follow-ups carry a new receipt. The list: changelog-bot operators (marc_krenn, obviyus, mattlam_), meter maintainers (ccusage, Claude-Code-Usage-Monitor, Viberank), the #42796 author, a degradation-tracker maintainer, Simon Willison, Gergely Orosz, the reporters who covered PocketOS and the GPT-5.6 deletions, the systima author, the r/codex and r/ClaudeCode top-receipt authors, and vendor dev-rel (Boris Cherny, Thariq Shihipar, Tibo, thdxr) asked only for the response field. Templates in the v1.1 plan §4.

### 5.10 Measurements harness (`M-` series)
A Node HTTPS logging proxy in front of the model endpoints (`ANTHROPIC_BASE_URL` / `OPENAI_BASE_URL`) for Claude Code, Codex CLI and OpenCode **on API keys** (never subscription traffic through a proxy — that is the OAuth line). Ten fixed repo tasks; records tokens before the first user token, cache read/write, subagent fan-out, wall-clock, tests passed, cost per passing test → CSV + `METHOD.md`. ~$25/run. Cursor: "not measured, subscription unfunded" until a sponsor slot pays for it. Runs every two weeks from W3; results post as an `M-` card and, monthly, as an HN data post (not Show HN — Show HN only once the site has search, feeds and badges).

---

## 6. Build plan — milestones and acceptance tests (W0, ~5 Claude-Code days in parallel sessions)

| M | Deliverable | Acceptance (must pass to move on) |
|---|---|---|
| M0 | Repo scaffold, schema, `.env.example`, `ar` CLI skeleton, systemd units, CI (vitest + biome) | `pnpm test` green on an empty DB; `ar status` prints the autonomy level and spend |
| M1 | `watch/*` pollers + `triage/*` | Live run yields today's real delta (`stable` vs `latest` gap) and ≥ 1 real Tier-A candidate; fixture suite: **0 false Tier-A admits**, ≥ 90 % genuine admits; dedupe collapses the OpenCode 1.18.30 duplicates into one cluster of ≥ 6 |
| M2 | `agents/*` extract + verify + refute, `compute/*` templates | On the 20 fixtures: all genuine items reach `verified` with lines byte-identical to the expected strings; **every seeded corruption is held** with the right diff; the injected-instruction fixture is held; cost per verified item logged (target ≤ $0.60) |
| M3 | `capture/*` + `render/*` + `guard/*` | Two same-minute captures with visible URL + UTC, sha256 manifest, Wayback URL; cards for X/IG/LI rendered from `R-2026-0011` and pixel-diffed against golden PNGs; linter blocks each banned phrase; copypasta guard blocks a repeat and passes a changed number |
| M4 | `publish/*` in dry-run + one real post per platform to a private test account, `monitor/*` + `retract` | Dry-run log shows correct slots/spacing/caps; a real test post appears with the automation label on X; a seeded mention with a source URL triggers a re-verify and, with a corrupted original, a retraction card on all three platforms within 60 min |
| M5 | `ledger/*` + `site/*` + badges + `report/*` | Site builds with the three ledgers, `/r/` trail pages, RSS/JSON, badges with `last verified`; badge flips to stale when the pipeline is paused 48 h; Sunday report renders from a seeded week |
| M6 | `backfill` — 40 receipts drafted by the backfill agent, **verified by the full pipeline**, human-confirmed once | 40 receipts `verified`, captured, rendered; the pinned Limit Ledger thread text generated; counters computed from the ledger; the 7-category Atlas counts produced |

Autonomy at day 1 = L2 if M1–M6 pass; else L1 for 14 days.

**Order of work in a fresh session:** M0 → M1 → M2 (the heart — spend the time here) → M3 → M5 → M4 → M6. Accounts (§5) are created on day −3 in parallel because of waiting periods (X API approval, Premium's 3-day window, Meta app setup, LinkedIn API request).

---

## 7. The 90-day calendar (condensed; the v1.1 plan has the long form)

Day 1 = Mon Sep 21 2026 (or the Monday after W0 passes). Slots UTC.

| Week | Build | Posting | Human (the only actions) | Gate |
|---|---|---|---|---|
| **W0** (3 days before day 1) | M0–M6; accounts; COI hash committed; backfill verified | none | create accounts; confirm the 40 backfill receipts once; write the 20 DMs | M1–M6 green; ≤ $60 spent |
| **W1** | site live day 2; Standings + digest builders | Day 1: pinned Limit Ledger (13 rows, counter computed live) + R-0011 (Claude, contradicted) + R-0012 (Codex) + R-0013 (OpenCode) + the stable-lag delta — so the page is never a one-vendor fan page. Then 2–3/day on X, 1–2 carousels/day, 1 LinkedIn/day; backlog 1/day into lulls; Fri Standings #1; Sun digest #1 | day 3: send the DMs | 15–20 X posts; 3–5 Tier-A; ledger + trails live; ≥ 1 distribution event or 50 subs; 0 platform warnings; 0 retractions the pipeline didn't catch |
| **W2** | reader-submission form (read:edit ratio, thinking blocks, plan, reset time) → queue; "$200 buys" renderer; Meta app review submitted | nerf window for the Sep 1 model open (weeks 3–7 after launch): daily reader-data delta; first "$200 buys" table; first reader-receipt call | +10 follow-ups (new receipt each) | day-14: ≥ 1 post > 20 K views; quote conversion measured; 150–300 subs / 50–100 personal payers |
| **W3** | measurements harness; M-0001 run | M-0001 card + HN data post; Standings; digest | none | HN ≥ 100 pts or a staff reply or a ≥ 100 K-follower repost; 300–500 subs / 100–200 payers |
| **W4** | `/sponsors` + `offer.json` + payment link; `/atlas`; retro script | Atlas card; first labelled non-antiloki sponsored receipt if sold; backlog exhausted; optional Show HN of the site | sell one sponsor slot (~$200) by email; +24 follow-ups | day-30: 400–700 subs / ≥ 150 payers; 1 non-antiloki sponsor labelled; corrections log 0 uncaught; cross-vendor resets ≤ 2 in 30 days; spend ≤ cap |
| **W5** | hardening from the held/rejected fixtures; M-0002 | first backlog-free week: live Tier A + delta only | Sunday audit | queue false-positive rate < 20 %; autonomy L2 sustained |
| **W6** | monthly card; boundary tests for antiloki (§8) built and run — outside this project | Nov 1 "The Ledger, month 1"; verified case file #1 (PocketOS, Railway CEO reply) if nothing fresher | Sunday audit | 3/3 boundary scenarios have a recorded result |
| **W7** | — | Nov 6 Kahn v. Anthropic docket receipt ("alleges") | **day-45 kill/pivot** decision | continue if ≥ 1 distribution event OR ≥ 100 personal payers; else the pipeline drops to two hand-picked receipts/week aimed at insiders (L1) |
| **W8** | 14-month ledger analysis (A-series) from `ledger.json`; M-0003 | HN data post; A-0001 | — | ≥ 800 subs / ≥ 350 payers; boundary tests 3/3 with the command in the audit timeline |
| **W9** | `boundary-tests/` published as a public repo; antiloki's own per-task bill measured | antiloki's bill posted as a **labelled** receipt first; no offer | **day-60 gates** evaluated | (1) ≥ 300 subs with ≥ 100 personal payers; (2) one post ≥ 50 K views or a vendor-staff reply; (3) one non-antiloki sponsor sold and labelled; (4) boundary tests pass; (5) a live wave is open. Any NO → wait |
| **W10** | founding checkout only after GO | the drop, inside the wave (§8) | — | every antiloki mention labelled; ≥ 1 reader-posted trial card in 72 h |
| **W11–13** | M-0004 disclosed as running on antiloki with its bill in the table; "The Ledger 2026" | monthly card #2; year-end ledger; Standings/digest continue | day-90 retro | 500–1,000 verified personal payers; ≥ 2 non-antiloki sponsors; antiloki ≤ 50 % of sponsor revenue; 0 uncaught wrong numbers; 90-day cash out ≤ $600 before sponsor revenue |

**KPIs (hard):** verified personal payers on the digest; distribution events (insider repost · vendor-staff reply · quote-post landing in a ≥ 1 M-view thread), dated. **Vanity (logged, never deciding):** followers, views. Expectations if the step comes: 1.5–3 K X followers at day 30, 5–10 K at day 90; Instagram and LinkedIn are measured on link clicks to `/r/`, not followers.

---

## 8. antiloki's entry (the upsell) — rules

1. **Nothing before day 60, nothing outside a live wave** (a limit change, a postmortem, a vendor-acknowledged wipe, or a new model's week-3–7 window), nothing unless all five day-60 gates hold.
2. **Boundary tests first, in public.** Before it is named, antiloki must pass three scenarios published as an open repo runnable against any harness: a home-directory `rm -rf` (write refused outside the assigned folder, the command string in the audit timeline — issue #10077's exact demand); a PocketOS-style over-scoped token in an unrelated file (read refused and logged); `terraform destroy -auto-approve` against a mock backend (blocked or routed to verification, command logged). If they don't pass, there is no date.
3. **The argument is the Atlas's counts, not a feature list.** "Of N receipts, X are `boundary`, Y `unverified change`, Z `billing` — antiloki addresses those three categories (folder-level write enforcement · per-task verification · per-task dollar timeline) and none of the other four." If the counts don't support the sentence, the post is not written.
4. **The reveal is the trail.** "This page has been run by agents on antiloki since day 1 — here is the timeline of every receipt" — the sealed COI commitment published with its day-0 hash; `/about` updated ("The operator builds antiloki"); the page's bio gains "Supported by antiloki"; every mention labelled "Sponsored".
5. **Founder offer**: $99 first year (list $200) / $349 lifetime (list $500), 300 seats, 72 hours — every number literally enforced by the checkout's stock and end time, or not stated. A 14-day trial whose export produces a receipt card in the page's exact format; readers post them back; the page reposts the best with recorded consent. Honest model: 0.5–0.6 % of *verified payers* → 10–40 founding sales at 500–1,000 payers; re-run on the next real limit cycle.
6. **After:** name, avatar, cadence, all-vendor coverage unchanged; other sponsors keep buying; antiloki ≤ 50 % of sponsor revenue; if antiloki ever earns a receipt it gets a number under the same bar.

---

## 9. Budget (monthly, USD)

| Line | Expected |
|---|---|
| Anthropic API — extractor, 2 verifiers, refuter, classifier (~10 candidates/day, ~$0.60/verified item + monitor) | 60–120 |
| X Premium | 8–14 |
| X API pay-per-use (vendor-account reads every 30 min, mentions hourly, ~75 posts, metrics) | 35–60 (kill-switch at 60) |
| Scheduler bridge for LinkedIn/IG until direct APIs are approved | 10–20 |
| VPS | 5 |
| Domain, archive.org, Cloudflare Pages, GitHub Actions, beehiiv Launch, Reddit API, HN Algolia, npm, status feeds, Playwright | 0–1 |
| Measurements (every two weeks, API keys, 3 harnesses) | 50 |
| **Total** | **~170–270** — above the earlier $100 cap; automation buys the operator's hour back and the verification is where the money goes. Sponsor slots (~$200 from W4) offset it. |

---

## 10. Lines not to cross (enforced mechanically where possible)

- **No fabrication, ever:** no un-numbered claim, no card without two captures, no counter reset on an unverified report, no "manufactured heat" from 0-reaction issues. Fail closed.
- **No product name before day 60** on any card, page, post or reply (linter). No undisclosed sponsorship ever; `sponsors.json` public; antiloki labelled in text and bio.
- **No replies, likes, follows or DMs from the pipeline.** Corrections are retractions, never arguments. Public corrections within the hour, as their own posts, in a visible log; a wrong reset is un-reset in public.
- **No vendor name in the handle, no vendor logo, no self-applied "parody/commentary" label** ("Commentary: Agent Receipts" is the pre-written rename if X ever flags the account). Vendor names only nominatively.
- **Never reproduce** leaked source, Claude Code system-prompt text, or subscription-auth workarounds; never route subscription traffic through the measurement proxy.
- **No fake urgency:** seat counts and windows only from `offer.json`, enforced by the checkout; no invented deadlines tied to a cycle.
- **No tourist bait:** no doomsday/midnight/apocalypse/loser; no dial, composite score or trust index; wipes are monthly case files, never pinned; no politics; no victim-blaming or tribe-dunking; credit by handle, blur on request within the hour, never a private individual's bill without recorded consent.
- **Evidence posture:** every side-by-side carries two same-minute timestamps and visible URLs; raw captures kept for the life of the page; "alleges" on the class action; the vendor's response is a fixed field including "none"; California hosting and venue.
- **Platform rules:** automation label on scripted X posts; no near-identical daily posts; no engagement solicitation; Premium after the 3-day profile window; Instagram renders are original content (no reposted screenshots as the main slide); Reddit read-only.

---

## 11. How to use this brief in a new session

Start with: *"Read `/home/danj/Projects/agent-receipts-BRIEF.md` in full. Create the project at `/home/danj/Projects/agent-receipts` (public repo) and `/home/danj/Projects/agent-receipts-ops` (private). Build milestones M0 → M1 → M2 → M3 → M5 → M4 → M6 in that order, each with its acceptance tests from §6, and stop after each milestone to show me the test output. Use the models named in §3.2. Never let an LLM write a number that reaches a post — numbers come from `compute/` templates."*

Things the new session will need from the operator: the API keys (Anthropic, X, Meta, LinkedIn or the bridge, Reddit, GitHub, archive.org, Cloudflare, beehiiv), the domain, and one confirmation pass over the 40 backfill receipts at M6. Everything else is in this document.
