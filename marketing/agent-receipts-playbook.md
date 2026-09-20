# Agent Receipts — Operator Playbook (v1, 2026-09-18)

## 1. THE CLIENT

Who actually pays for coding agents, what they feel, where they are, and what they forward. Every number below is from the brief's sources or the refuters' live pulls on 2026-09-18.

- **Senior, small-company, multi-tool.** Pragmatic Engineer survey (906 engineers, median 11–15 yrs): 95% use AI weekly, 55% use agents regularly, staff+ lead at 63.5%, 70% run 2–4 tools at once, Claude Code "most loved" 46% vs Cursor 19%, 75% adoption at the smallest companies. Caveat from the refuters: this is a self-selected newsletter cohort (34% eng leadership); engaged outrage audiences measure ~5% senior signal, not 30–40%. https://newsletter.pragmaticengineer.com/p/ai-tooling-2026
- **Daily and paying personally.** JetBrains 2026 (15K devs): 90% use agents weekly, 68% daily; Claude Code 39% global / 47% US, Copilot 21%, Codex 16% (5x in 8 months), Cursor 12%, OpenCode 7%. In the biggest r/ClaudeCode limits thread of the month, 18.8% of commenters cite the $100 plan and 17.9% the $200 plan; only 1.7% mention an employer. These are individual wallets. https://blog.jetbrains.com/research/2026/08/ai-coding-agent-adoption-2026/ , https://www.reddit.com/r/ClaudeCode/comments/1w38v98/
- **Distrustful controllers, not vibers.** Stack Overflow 2025: 45.7% distrust AI output, 3.1% highly trust, 66% name "almost right, but not quite" as the top frustration, 72% do not vibe code. arXiv study of 99 pros (avg 12.8 yrs): zero endorse full autonomy, output modified ~50% of the time, Claude Code the top tool (58/99). https://survey.stackoverflow.co/2025/ai , https://arxiv.org/html/2512.14012v1
- **The town square is Reddit, Claude-weighted, and it runs on pain.** r/ClaudeAI 1.09M (+245%/yr), r/ClaudeCode 415K (+1,296%/yr; top topics "usage limits", "frustrating"), r/codex 202K (+8,149%/yr; flairs literally "Limits" and "Complaint"), r/cursor 157K, r/vibecoding 360K. But the month's top-50 upvotes in r/ClaudeCode are 38% Humor and 14% receipt-topic; receipts compete for 10–20% of attention. https://gummysearch.com/r/ClaudeCode/ , https://gummysearch.com/r/codex/ , https://redditli.st/subreddit/ClaudeAI
- **The single strongest recurring feeling is betrayal-by-opacity, not danger.** HN thread sizes: "Claude Code is being dumbed down?" 1,085 pts; Apr 23 2026 postmortem (three silent regressions, 34/15/4 days) 942 pts; AMD director's 6,852-session audit 1,364 pts; cache TTL silently 1h→5m (17.1% overpaid, "Closed as not planned") 552 pts; weekly limits 609 pts ("you literally have no idea what you're paying for"). Deletion threads: 255 and 544 pts. https://www.anthropic.com/engineering/april-23-postmortem , https://github.com/anthropics/claude-code/issues/42796 , https://github.com/anthropics/claude-code/issues/46829 , https://news.ycombinator.com/item?id=44713757
- **Vendor limit posts are the stadium: ~100x a feature post.** @ClaudeDevs Aug 29 "permanently raising weekly limits 25%": 7.06M views, 1,996 replies, Community-Noted as a 17% cut, confirmed by Anthropic's own follow-up. Tibo (Codex) Sep 7 global reset: 5.46M views / 4,617 replies; Sep 6 "3–4x less usage drawn": 2.45M / 2,588. ≥90% of those impressions are out-of-network drama traffic. https://x.com/ClaudeDevs/status/2093742321473065266 , https://x.com/claudedevs/status/2093742322525810912 , https://x.com/thsottiaux/status/2097043464538264003 , https://x.com/thsottiaux/status/2096717905614524491
- **The "betrayed" core is small and churning.** Anthropic: weekly limits hit "<5% of users"; the Mar 2026 change "~7%". Against ~4.2M Claude Code weekly actives that is ~200–300K people who personally feel a cut. In the Sep 14 cut thread (877 pts), 16.3% of comments mention cancelling or switching. Sell to people who are switching harnesses, not people who love one. https://techcrunch.com/2025/07/28/anthropic-unveils-new-rate-limits-to-curb-claude-code-power-users/ , https://www.theregister.com/2026/03/31/anthropic_claude_code_limits/ , https://www.reddit.com/r/ClaudeCode/comments/1wfwl6k/
- **Money anxiety has viral numbers and a lawsuit.** 33K tokens sent before you type vs 7K on OpenCode; 121K→513K tokens when a task fans out to two subagents (706 HN pts); $1,800 in two days from `claude -p` (#37686); $81,267 in one week (Slash); Kahn v. Anthropic (3:26-cv-05763) says Max 20x buys ~1.7x Max 5x, hearing Nov 6 2026. https://systima.ai/blog/claude-code-vs-opencode-token-overhead , https://github.com/anthropics/claude-code/issues/37686 , https://www.ibtimes.co.uk/fintech-ai-coding-blunder-viral-success-1805135 , https://www.explainx.ai/blog/anthropic-claude-max-lawsuit-usage-limits-2026
- **What they forward: arithmetic and receipts, not memes.** r/codex's top receipt this month is a banked-reset allowance analysis (1,413 pts); r/ClaudeCode's is "Max 20x only applies to the 5-hour window" (1,582 pts). The community built its own meters: ccusage 18.6K stars, Viberank $14.3M tracked. https://www.reddit.com/r/codex/comments/1w8zbz9/ , https://gist.github.com/yurukusa/ac41d467d97f3711129070d8e311db4f
- **Wipe stories reach tourists, not buyers.** Replit/SaaStr: r/ChatGPT 11,200 pts where 0.3% of commenters use any agent, vs r/ExperiencedDevs 70 pts and HN 113 pts. Issue #10077 (home dir wiped, log has the tool_result but not the command) is the buyer's own demand for sandboxing and "log actual commands, not just outputs". https://www.reddit.com/r/ChatGPT/comments/1m4lsso/ , https://www.docker.com/blog/coding-agent-horror-stories-the-rm-rf-incident/ , https://incidentdatabase.ai/cite/1152/
- **The tribes are vendor camps, and neutrality is the buyer's own posture.** ZDNET Sep 2026: 75% Claude Code, 36% Codex, 22% both. OpenCode 208K GitHub stars after Anthropic's Jan 9 OAuth block and Mar 19 legal demand ("157,000 developers hedging against Anthropic"). https://www.newsanyway.com/2026/09/13/claude-code-vs-codex-why-three-in-four-developers-reach-for-anthropics-tool , https://github.com/anomalyco/opencode/issues/7410
- **Status is your harness.** Boris Cherny's parallel-instance workflow and the ".claude/ folder anatomy" HN #1 (556 pts) are "configuration as status"; the shame axis is burnout (20 hrs/week in the tool per Anthropic; "sleep attacks"). https://venturebeat.com/technology/the-creator-of-claude-code-just-revealed-his-workflow-and-developers-are , https://news.ycombinator.com/item?id=47467922
- **Geography:** 43% Europe / 38% US in the pro survey; Israel, Singapore, US highest per-capita intensity; India the fastest-growing dev population; Japanese press picks up wipe stories within a week. English-first, global scheduling. https://www.anthropic.com/research/anthropic-economic-index-january-2026-report
- **Vendors structurally cannot say it.** status.claude.com logged 29 incidents in 36 days (Aug 12–Sep 16) vs one @ClaudeDevs incident tweet (1.7M views); @cursor_ai has never posted the word "outage". The only pages at scale in this niche are unofficial bots: @ClaudeCodeLog 81.9K ("UNOFFICIAL – but tolerated"), @CodexReleases 26.2K, @Codex_Changelog 29.8K. https://status.claude.com/api/v2/incidents.json , https://x.com/ClaudeCodeLog , https://x.com/CodexReleases

## 2. THE VERDICT

**Build Agent Receipts.** It beat Nerf Watch because its unit of content is a dated number rather than a mood, which is what the buyer forwards and what survives the refuters' audience-quality finding (limits arithmetic pulls verified $100–$200 subscribers; "nerf" and wipe framing pulls r/ChatGPT tourists and empty-bio followers). It beat Agent Incident Report because deletion incidents run 0 per fortnight at the verified bar and their audience is 0.3% agent users. It beat Harness League because a "loser every Friday" is the fastest way to get one camp to mute you; the League's table survives here as a weekly section. The refuters killed the 8-posts/day and 10–20K-in-30-days claims for every concept, so the page below is rebuilt on what the feeds actually yield (~4 postable items/day, ~1/day with a real primary source) and on the observed step-function growth curve of the only pages that made it.

### Name options (check X handle + domain the same hour; nerfwatch.dev/.com are already registered)

1. **Agent Receipts** — @agentreceipts, display name "Agent Receipts (unofficial)", agentreceipts.dev. Preferred: topic name, no vendor mark, self-describing.
2. **Harness Ledger** — @harnessledger, "Harness Ledger (unofficial)". Use if 1 is taken; "harness" signals multi-tool, which is the buyer.
3. **Nerf Watch** — @nerfwatch is free (checked 2026-09-18) but nerfwatch.dev (registered Jul 20 2026) and nerfwatch.com (Jun 19 2026) are parked by others. Only viable with nerfwatch.io/.app and only as a fallback; the word imports the wrong audience.

**Bio (160 chars):** "Receipts for people who run more than one coding agent. Limit changes with the math, regressions, outages, bills. Claude Code · Codex · Cursor · OpenCode. Unaffiliated. Corrections: DM."

Avatar: a receipt glyph. Never a vendor logo. Never add the PCF/"Commentary" label yourself — the page depicts no entity, and self-labelling is what would trigger the keyword-at-start rule.

### Borrowed attention

Three stadiums, entered in this order of effort:

1. **Vendor limit/usage posts on X** (@ClaudeDevs, @thsottiaux, @cursor_ai, @opencode, @sama): 2–7M views and 2–4.6K replies each, roughly one per vendor per fortnight. The page's quote-post with the arithmetic goes up within 30 minutes, from a Premium account so it ranks in the replies.
2. **Reddit limits megathreads and top receipt posts** (r/ClaudeCode, r/codex, r/ClaudeAI, r/cursor): 300–1,500-upvote arithmetic posts already exist there; the page contributes ledger rows and counters as comments (not link posts) and screenshots the best threads back to X with credit.
3. **GitHub issue trackers** (anthropics/claude-code 12.5K open, openai/codex 17.7K open, anomalyco/opencode): the unmoderated firehose; the AMD director's #42796 got 3,287 reactions by posting data into it. Comment with data there under the operator's real account.

### The feeling

Betrayal by opacity — "they changed the deal and did not tell me" — expressed as arithmetic. Secondary, on a calendar: money anxiety (bills, token overhead), "is it dumber today?" (weeks 3–7 after each model launch; Fable/Mythos 5.1 shipped Sep 1 → window Sep 22–Oct 20), and camp rivalry (Codex vs Claude Code vs OpenCode), which the page never takes a side on. The villain is always a status page reading "All Systems Operational", a "Closed as not planned" label, a deleted tweet, or a stable tag that stopped moving. Never the reader, never a victim, never a skill level, never politics (the month's biggest Anthropic HN threads — resignation 736 pts, age-gating 674 pts — are off-limits).

### Content engine — exact daily sources and what each yields

Refuter-audited 14-day yield (Sep 4–18): ~13 coding-agent status incidents, ~18 qualifying changelog lines, ~15 receipt-grade GitHub issues after dedupe, 2 limit events, ~13 Reddit limit titles, 0 verified wipes, 0 postmortems. That is ~4 items/day and ~1/day with a ≥100-engagement primary source. Cadence is set to that reality.

**Tier A — Receipt (0–2/day, only when it exists; hard admission bar).** Vendor post >500K views or >500 replies; HN >100 pts; GitHub issue >25 reactions, closed by a human (exclude the stale-bot sweep — 5,101 auto-closures in 14 days); status incident whose components include Claude Code / Codex / Cursor Agents and that ran >60 min or touched limits; Reddit post >300 upvotes with a number in it.

**Tier B — Computed delta (exactly 1/day, scripted, human-approved).** Facts derived from free feeds that exist every day regardless of drama:
- npm `stable` vs `latest` lag for @anthropic-ai/claude-code (today: stable 2.1.267, latest 2.1.276; issue #92274 documents a 17-day stall) — https://registry.npmjs.org/@anthropic-ai/claude-code , https://github.com/anthropics/claude-code/issues/92274
- Regression-fix latency from CHANGELOG.md (2.1.265→2.1.266: 5 h; 2.1.269→2.1.270: 25 h) — https://raw.githubusercontent.com/anthropics/claude-code/main/CHANGELOG.md
- Incident-minutes per vendor per week from the three statuspage JSON feeds (public, cache-control max-age=10) — https://status.claude.com/api/v2/incidents.json , https://status.cursor.com/api/v2/incidents.json , https://status.openai.com/api/v2/incidents.json
- Quota-burn issues filed per week on openai/codex (9 last fortnight) and claude-code (137 mentioning limits, top at 4 reactions — count them, do not post them individually)
- Duplicate-issue count per regression (OpenCode 1.18.30 crash: ≥6 duplicates, 47+32+22+21+18+6 reactions) — https://github.com/anomalyco/opencode/releases/tag/v1.18.30
- Data-loss reports filed per week (12 last fortnight across three repos, ~1 reaction total — a weekly count, never individual cards)

**Tier C — Ledger and counters (pinned, updated in-thread).** The Limit Ledger (every dated limit/pricing change since Jul 17 2025, across all four vendors) and one counter: "Days since a limit or default changed without notice." No daily deletion counter (it either resets every 1.2 days on unverified GitHub reports or stays stale).

**Weekly anchors.** Friday: Harness Standings table (grafted from Harness League — incident-minutes, limit changes, regression lines, quota-burn issues per vendor, raw and per-million-users; no "loser" label, just the table). Sunday: "The Weekly Receipt" digest (beehiiv) mirroring the table + ledger rows + best reader receipt. Monthly: one original measurement (logging-proxy token overhead across the four harnesses on the same 10 tasks — the 706-pt systima format), submitted to HN as a data post, not a Show HN.

**Root-cause tag on every Tier A receipt** (grafted from Agent Incident Report): `Quota opacity` / `No audit trail` / `No verification` / `No write boundary`. This is the only bridge to the product and it is on every card from day one.

**Non-free inputs, budgeted honestly:** Reddit JSON is 403 to scrapers — register a free Reddit Data-API OAuth app before day 1. X read access is not free — do vendor-tweet quote-posts by hand from a phone with notifications on for the five accounts. X API v2 posting is pay-per-use ($0.015 per post, $0.20 per post with a URL, $0.005 per read): ~$50–70/month, or post link replies manually from the app. Premium (not Premium+): buy after the 3-day profile-change window, keep it; it is the reply-visibility fee. https://docs.x.com/x-api/getting-started/pricing , https://help.x.com/en/using-x/x-premium

### Formats

1. **Receipt card R-2026-NNNN** — screenshot of the primary post + ≤3 lines of dated arithmetic + vendor response status + root-cause tag; source link in the first reply.
2. **Corrected-math quote-post** on every vendor limit/pricing post, within 30 minutes.
3. **Delta card** (daily) — one computed number with its two inputs shown.
4. **"What $200 buys you this week"** — four-column table (Claude Max 20x / Codex Pro / Cursor Ultra / OpenCode Black) in hours, tokens, resets; built to be pasted into Slack.
5. **Limit Ledger** — pinned numbered thread, mirrored on the site with RSS/JSON and an embeddable counter badge.
6. **Friday Standings** — the table, no loser label.
7. **"Post your plan and your reset time"** — reader receipt calls; the page replies only to replies that contain a number, a plan or a tool name.
8. **Monthly Overhead Receipt** — the page's own measurement, the one original piece.
9. **Verified case file** (monthly at most) — one named-victim incident in the victim's words with the vendor's reply, only when press- or vendor-acknowledged. Never the growth path.

### Platform and cadence

- **X primary.** 2–3 posts/day baseline (1 delta, 0–2 receipts), bursts on vendor events. Windows: 07:30 UTC (EU/Israel/India morning), 13:30 UTC (EU afternoon / US East morning), 18:30 UTC (US midday); Friday 16:30 UTC Standings. Spacing ≥2 h (author-diversity decay 0.5, floor 0.25). Only top-level cards and quote-posts count as distribution: the ranker's OONRetweetReplyFilter removes a new page's replies and reposts from every non-follower's feed, and the 15.0 bidirectional boost never applies to replies. Post via the official API with the "Automated by @operator" label on scripted cards, never by scripting x.com. https://github.com/xai-org/x-algorithm , https://help.x.com/en/rules-and-policies/x-automation
- **Reddit as a megathread contributor.** r/ClaudeAI requires >50 karma for feed posts and routes limits/performance complaints to megathreads (rule 4); r/ClaudeCode rule 6 same; r/codex rule 8 deletes reports without evidence; r/cursor rule 11 bans bare screenshots. So: comment ledger rows and counter updates inside the pinned megathreads, build karma there, post standalone only with novel detailed evidence, never link the page except in profile. https://old.reddit.com/r/ClaudeAI/about/rules , https://old.reddit.com/r/ClaudeCode/about/rules , https://old.reddit.com/r/codex/about/rules , https://old.reddit.com/r/cursor/about/rules
- **Site + digest.** agentreceipts.dev is the copy-link unit: searchable ledger, RSS + JSON, embeddable "days since" badge. Digest signup from day 1 with required fields: what you pay for (Free / Pro / Max 5x / Max 20x / Codex Plus / Codex Pro / Cursor / OpenCode+API), personal vs employer-paid, how many harnesses. Those fields are the real KPI.
- **HN.** One data post per month (the overhead measurement or the 14-month ledger analysis). Show HN rules exclude reading material; only submit the site as a Show HN once it has search, feeds and badges people can try. https://news.ycombinator.com/showhn.html
- **Skip** LinkedIn (follower growth −59%), Instagram (credited screenshots are not original since Apr 30 2026), YouTube/Shorts (inauthentic-content policy), Discord/Telegram as home. https://techcrunch.com/2026/04/30/instagram-restricts-reach-of-content-aggregators-in-new-crackdown/ , https://metricool.com/press-release-2026-social-media-study/

### Growth mechanic (step-function, not linear)

Every page that made it in this niche was at 77–3,600 views/post and 2–6 likes at day 30, then jumped on one day: @ClaudeCodeLog was at 154 followers on day 55 and posted "1,000+ new followers since yesterday" on Dec 11 2025; @Codex_Changelog went from 433-view posts to a 96K-view post on Mar 19 2026. Six of nine same-niche clones never got that day and sit at 0–87 followers after 100–600 posts. So the plan engineers the step instead of waiting:

1. **Ship the ledger and the backfill on day 2–3, not week 2.** Forty numbered receipts from Jul 2025–Sep 2026, the ledger with RSS/JSON, the badge. This is the artifact insiders share.
2. **DM the people whose repost is the step, before launch:** the changelog-bot operators (marc_krenn, obviyus, mattlam_), the meter maintainers (ccusage, Claude-Code-Usage-Monitor, Viberank, degradation trackers), the narrators (Simon Willison, Gergely Orosz, The Register/TechCrunch reporters who covered PocketOS and the GPT-5.6 deletions), and vendor dev-rel (Boris Cherny, Thariq Shihipar, Tibo, OpenCode's thdxr). Send each one a specific, verifiable receipt about their own tool. Vendor staff reply to receipts (Cherny and trq212 reply to @ClaudeCodeLog; Railway's and Replit's CEOs replied to wipes); one staff reply is the largest reach the page can get.
3. **Quote-post inside the stadium** within 30 minutes of every vendor limit post, from Premium. Measure profile clicks → follows per quote; if under 0.02% after 10 quotes, stop (the base rate to beat: a 382K-view meme left @fanofaliens at 3,662 followers). https://x.com/fanofaliens/status/2076921242117153161
4. **Reply harvesting is a quality filter, not a growth lever.** Reply only to replies with a number/plan/tool; ignore jokes (each reply teaches the ranker who to show you to).
5. **Reddit backflow:** megathread comments that get >100 upvotes become the next day's X card with credit.
6. **Calendar:** Fable/Mythos 5.1 nerf window Sep 22–Oct 20; Anthropic ships ~monthly, OpenAI every 6–8 weeks (GPT-5.6 was Jul 9, so overdue); Kahn v. Anthropic Nov 6; every limit change pre-announced by promo end dates. Pre-write the receipt for each.

### Day 1 — five posts, written out

**Post 1 (pinned, 07:30 UTC) — The Limit Ledger**
> The Limit Ledger. Every dated limit or pricing change across Claude Code, Codex, Cursor and OpenCode since July 2025. Numbered, sourced, extended live. Days since a limit or default changed without notice: 4.
>
> #1 Jul 17 2025 · Claude Code · limits tightened without announcement · HN 407 pts
> #2 Jul 28 2025 · Claude Code · weekly caps announced, "<5% of subscribers" · HN 609 pts
> #3 Jun 16 2025 · Cursor · 500 requests → "$20 of usage"; CEO apology Jul 4; refunds Jun 16–Jul 4
> #4 Aug 28 2025 · Claude Code · weekly caps take effect
> #5 Jan 5 2026 · Claude Code · holiday 2x bonus expires; users report caps in 10–15 min; staff: "no rate limit changes"
> #6 Mar 26 2026 · Claude Code · peak-hour cut, "~7% of users"
> #7 Apr 23 2026 · Claude Code · limits reset after postmortem
> #8 May 6 / May 13 2026 · Claude Code · 5-hour window doubled; +50% weekly promo
> #9 Jul 12 2026 · Codex · 5-hour limit temporarily removed at 6M users
> #10 Jul 29 2026 · Codex · limits reset: "Sol was using your Codex limits faster than expected"
> #11 Aug 29 2026 · Claude Code · "+25%" announced; Community Note: net −17%
> #12 Sep 6–7 2026 · Codex · "3–4x less usage drawn"; global reset
> #13 Sep 14 2026 · Claude Code · promo expires; −17% vs prior week
>
> Sources in thread. Corrections: DM. (1/14)

Root-cause tag: Quota opacity. Sources thread carries one link per row.

**Post 2 (13:30 UTC) — Receipt R-2026-0011, the arithmetic**
> R-2026-0011 · Anthropic · Aug 29 → Sep 14
> Announced: "permanently raising weekly limits 25%."
> What you had since May 13: base × 1.50 (promo).
> What you have since Sep 14: base × 1.25.
> 1.25 ÷ 1.50 = 0.83 → −17% vs the week before.
> Their own follow-up tweet: "this works out to a 17% reduction in weekly limits on Claude Code."
> Vendor response: acknowledged in a reply; original thread deleted and reposted.
> Tag: Quota opacity.
> [two screenshots side by side, both timestamped]
> What was your reset time this week, and which plan?

**Post 3 (18:30 UTC) — Delta card, stable tag lag**
> Delta · Claude Code npm · Sep 18
> `latest`: 2.1.276 · `stable`: 2.1.267 · gap: 9 releases.
> 14 releases in 14 days (2.1.261 → 2.1.276).
> Changelog lines fixing a previous release's regression: 4 (2.1.266, 2.1.268, 2.1.270, 2.1.276).
> Releases whose entire note is "Bug fixes and reliability improvements": 2.
> Issue #92274: stable channel did not advance for 17 days in August.
> If you pin `stable`, you are 9 releases behind. If you run `latest`, you got the 2.1.265 HTTP-400-every-turn bug for 5 hours.
> Tag: No verification.

**Post 4 (day-1 bonus slot, Codex — so the page is never a fan page) — Receipt R-2026-0012**
> R-2026-0012 · Codex · Sep 6–14
> Tibo, Sep 6: "3–4x less usage drawn" (2.45M views, 2,588 replies). Sep 7: global reset (5.46M views).
> Filed on openai/codex the same fortnight: #44205 "XHigh went from 60% to 12% in under 5 minutes" (24 reactions), #44199 "73% to 0% instantly on the $200 plan" (16), #42987 "100% of the Plus 5-hour quota in two turns" (15). Nine quota-burn issues in 14 days.
> status.openai.com, Sep 9, 17:29–17:54 UTC: "Investigating unexpected usage limit resets." 25 minutes. No post from the vendor about it.
> Tag: No audit trail.
> Codex users: how many turns did your 5-hour window last this week?

**Post 5 (day-1 bonus slot, OpenCode) — Receipt R-2026-0013**
> R-2026-0013 · OpenCode · Sep 9
> v1.18.30 crashed on every prompt on macOS. Duplicate issues filed: at least 6 (#48811 47 reactions, #49158 32, #48903 22, #48965 21, #48645 18, #48803 6).
> Release notes for 1.18.30: 400–700 characters. Mention of the crash: none.
> Sep 13–14: forced V2 layout; ~12 complaint issues, 3 closed "not planned" (#48953, #48960, #48902).
> Vendor response: fix shipped; no note.
> Tag: No verification.
> 208K stars is not a status page. Which version are you pinned to?

Backlog ready for days 2–14 (one per day into lulls): #46829 cache TTL (17.1% overpaid, $949.08 + $1,581.80, 119,866 calls, closed not planned); #37686 ($1,800 in two days); codex #28879 (cost/token 10–20x, 561 reactions, closed after 66 days); systima 33K vs 7K; 121K→513K subagent fan-out; Sep 17 2025 postmortem (~30% of Claude Code users); Apr 23 2026 postmortem (34/15/4 days); Kahn v. Anthropic weekly-hour math; Cursor June 2025 ($7,000 annual allocation in one day); OpenClaw $0.20/prompt; the $81,267 week; PocketOS (9 seconds, Railway token in an unrelated file — verified case, Railway CEO replied); DataTalks terraform destroy (AIID #1424).

### 30-day calendar (Sep 19 – Oct 18)

**Days −2 to 0 (Sep 19–20).** Register handle, domain, Reddit app (OAuth), beehiiv. Set profile once; wait 3 days before Premium. Write the pollers (3 statuspage feeds, npm dist-tags + CHANGELOG diff, GitHub search by reactions with dedupe by title n-gram + version string and a filter dropping Desktop/Cowork/VS Code/cosmetic bugs unless they touch cost, limits, data loss or defaults, HN Algolia points>100, Reddit OAuth top-by-flair). Every automated card lands in a queue; a human approves for the first 30 days. Build the card renderer (dark, monospace, six fixed fields). Number and source the 40-item backfill.

**Week 1 (Sep 21–27).** Day 1 as above. Day 2: ledger live on the site with RSS/JSON and badge. Day 3: insider DMs (12–20 people, each with a receipt about their own tool). 2–3 posts/day. Quote every vendor limit post within 30 min. Join the four subs; comment ledger rows in the r/ClaudeAI performance megathread and r/codex's incident noticeboard. Friday: Standings #1. Sunday: digest #1 with the plan-tier fields. Target: 300–800 followers, 50–150 digest subs, first insider repost.

**Week 2 (Sep 28–Oct 4).** Fable/Mythos 5.1 nerf window is open: daily "is it dumber or is it your quota" delta (reader-submitted read:edit ratios and thinking-block counts, the #42796 format), credited. First "What $200 buys you this week" table. Codex week if Astra's quota cycle continues. First reader-receipt call ("post your plan and reset time"). Target: 800–1,500 followers, 150–300 digest subs, one post >20K views.

**Week 3 (Oct 5–11).** Monthly Overhead Receipt: run the same 10 tasks through Claude Code, Codex CLI, Cursor CLI, OpenCode behind a logging proxy; publish tokens-before-prompt, cache tokens, subagent fan-out; post to HN as a data post. Pre-write the receipt for the next Anthropic launch and the overdue OpenAI launch. Target: 1,200–2,500 followers, 300–500 digest subs, one vendor-staff reply or one ≥100K-follower repost.

**Week 4 (Oct 12–18).** Sell one disclosed "Sponsored receipt" slot to a non-antiloki meter/guardrail vendor (ccusage-adjacent, hosting, monitoring), payment link on X (Cursor Directory precedent). Publish the Root Cause Atlas: every receipt to date mapped to its tag. Retro: quote-post conversion, formats by views-to-follows, share of digest subs who are personal Max/Codex-Pro payers. Target: 1,500–3,000 followers (stretch 5K if a quote lands in a 3M-view thread), 400–700 digest subs of which ≥150 self-identified personal payers.

**Kill/pivot rule (day 45):** no post above 20K views and <1K followers — the state of 6 of 9 clones — means stop the automated daily feed and switch to two hand-built, name-checked receipts per week aimed at the insiders. The step comes from a human share, not from cadence.

### The founder offer and how antiloki enters

**Not before day 60, and only inside a live wave** (a limit change, a postmortem, a vendor-acknowledged wipe, or the week-3–7 nerf window of a new model). Gates, all three required: ≥300 digest subs with ≥100 self-identified personal payers; one post ≥50K views or one vendor-staff reply; one non-antiloki sponsor slot already sold and labelled. If the gates are not met, antiloki waits; the page keeps posting.

**Mechanism:** antiloki's own account posts; the page quote-posts it labelled "Sponsored" in the post text and "Supported by antiloki" in the bio (TestingCatalog convention). Framing is the page's own: "The receipts, automated, for your own machine: every command and every dollar, per task, per agent, across Claude Code, Codex and OpenCode — writes refused outside the folder you assigned, nothing merges unverified." Each feature answers a tag the audience has read for 60 days: Quota opacity → dollar audit timeline; No audit trail → command log (issue #10077's demand verbatim); No verification → per-task verification before merge; No write boundary → folder-level write enforcement; the page's neutrality → three harnesses side by side.

**Ladder:** (1) Free "Agent Receipt" — a 14-day trial whose export produces a card in the page's exact receipt format (task, agent, tokens, dollars, verified/merged, folder boundary); readers post them back, the page reposts the best. (2) Founding tier for the first 300 seats, 72 hours only if that is true: suggested $99 first year (list $200) or $349 lifetime (list $500), priced against half a month of Max 20x, because the audience is individual and mid-churn. (3) List price thereafter; antiloki holds a standing labelled slot in the Sunday digest and its own per-task dollar receipt is published on the page first — the audience knows subagent fan-out costs 4x, so the product shows its own bill before asking for anyone's.

**Honest conversion model:** ShipFast converted ~0.5% of 40K warm followers at $199 in month one; beehiiv's median free-to-paid is 0.62%. Apply that to verified personal payers, not followers: 150 payers at day 30 → 1–3 sales (do not launch); 500–1,000 payers at day 60–90 → 10–40 founding sales; each subsequent limit cycle re-runs the offer to a larger list. The page's job in month one is the list and the credibility, not the sale. https://marketingcrafted.com/case-studies/shipfast , https://newsletrix.com/blog/free-to-paid-newsletter-conversion-rate , https://x.com/pontusab/status/1966470564601835963

**Why it is not bait-and-switch:** the page keeps its name, avatar, cadence and all-vendor coverage after the drop; sponsorship is disclosed in the post and bio; other sponsors keep buying slots; the product is the page's own utility productised (Cursor Directory / LMArena / Ben's Bites Pro pattern); and if antiloki ever earns a receipt, it gets a number like everyone else.

### KPIs by week

| Week | Posts | Tier-A receipts with ≥100-engagement primary | Best post views | Followers (vanity) | Digest subs / personal payers | Other |
|---|---|---|---|---|---|---|
| 1 | 15–20 | 3–5 | 5–20K | 300–800 | 50–150 / 20–50 | ledger live, 12+ insider DMs sent, 1 insider repost |
| 2 | 15–20 | 3–5 | 20K+ | 800–1,500 | 150–300 / 50–100 | quote conversion measured (≥0.02%), 3 megathread comments >50 upvotes |
| 3 | 15–20 | 3–5 | 50K+ or a staff reply | 1,200–2,500 | 300–500 / 100–200 | overhead receipt on HN ≥100 pts |
| 4 | 15–20 | 3–5 | — | 1,500–3,000 (stretch 5K) | 400–700 / 150–250 | 1 non-antiloki sponsor sold, Root Cause Atlas published, corrections log: 0 uncorrected errors |

Days 60 and 90: 3–5K and 5–10K followers respectively; 10K is a month-4–8 milestone contingent on one step event.

## 3. WHAT THE REFUTERS CHANGED

| Assumption | Verdict | Evidence | Fix adopted |
|---|---|---|---|
| Seven free feeds yield 8 charged posts/day | Refuted | Sep 4–18 audit: ~25 items with pre-existing traction in 14 days (~1.8/day); ~60 postable items (~4.3/day); 6 of the Day-1 queue's 8 posts were Feb–Aug material | 2–3/day: 1 computed delta + 0–2 receipts behind a hard admission bar; 40-item backfill at 1/day into lulls; weekly and monthly anchors |
| Reddit and X are zero-cost machine-readable sources | Refuted | reddit.com JSON returns 403 to scrapers; x.com returns 402; syndication rate-limited on first call | Register a Reddit OAuth app; vendor tweets quote-posted by hand from phone notifications; X API budgeted at ~$50–70/month |
| "Days since a coding agent deleted something" as a daily counter | Refuted | 12 unverified GitHub data-loss reports in 14 days with 1 reaction total; 0 press/vendor-acknowledged wipes | Weekly count of data-loss reports filed; verified case file monthly at most; deletion content off the growth path |
| ~10–20K followers in 30 days (300–1,200/day) | Refuted | @ClaudeCodeLog: 154 followers at day 55, step on Dec 11 2025; @Codex_Changelog and @CodexReleases at 77–3,600 views/post at day 30; 6 of 9 same-niche clones at 0–87 followers; @TechEmails' +515/day was an Epic v. Apple exhibit window | Step-function model: 300–2,000 at day 30, 5–10K at day 90; engineer the step with insider DMs and the ledger on day 2–3; kill/pivot at day 45 |
| X weights mean "a copy-link is worth 40 likes" and "a mute erases 118 likes" | Refuted | X's README says weights do not scale raw counts; OONRetweetReplyFilter removes a new page's replies from non-followers' feeds; bidirectional 15.0 never applies to replies; new-author lift is capped at 1,000 followers | Growth mechanic rewritten around top-level cards and quote-posts; replies are a quality filter; no weight arithmetic in the plan |
| 30–40% of followers will show lead/staff/founder signals; "the person who approves seats" | Refuted | #42796 commenters/reactors: 5% senior signal, median 8–9 GitHub followers; Reddit limits threads: 1–4% employer mentions, 10–16% cancelling/switching; r/codex's top thread is "Why is everyone so angry with Plus users?" | KPI is verified personal payers (digest fields + receipt submissions); offer priced against half a month of Max and positioned as the thing that survives switching vendors |
| Wipe/apology content is the top hook | Refuted for this buyer | Replit story: r/ChatGPT 11,200 pts with 0.3% agent users vs r/ExperiencedDevs 70 pts | Wipes are monthly verified case files, never pinned or quote-bait |
| Suspension/impersonation/vendor lawsuit risk is material | Refuted | @ClaudeCodeLog, @claude_code, @CodexReleases carry vendor names, are verified, and get staff replies; Anthropic's OpenCode demand was about OAuth/prompt copying, not commentary; X automation rules expressly allow RSS-fed posting | Real constraints adopted instead: automation label, no scripting x.com, no auto-replies, Premium day 1 (after 3-day window), Reddit megathread posture, date-stamped side-by-sides, corrections log, California anti-SLAPP posture |
| Creator revenue share at 5M impressions | Stale | Program retired Sep 7 2026; replacement (Original Content Rewards) needs 500K verified Home-Timeline impressions/90 days and excludes aggregated content and engagement solicitation | Credited third-party screenshots go in replies; own arithmetic in the post; no "send this to…" CTAs in post bodies |
| Show HN of the ledger | Refuted | Show HN excludes reading material | HN gets data posts; Show HN only once the site has search, feeds and badges |
| nerfwatch.dev as the site | Refuted | Registered Jul 20 2026 by someone else; .com Jun 19 2026 | Agent Receipts name; Nerf Watch demoted to fallback |

## 4. THE RUNNER-UP

**Harness League, kept as the page's Friday section and the monthly original.** The League's engine (public rubric, per-vendor scoring from the same feeds, per-million-users normalisation) becomes the Friday Standings table inside Agent Receipts, minus the "Loser of the Week" label — the table lets the camps argue without the page picking a fight that mutes one of them. Its best original idea, "Same Task, Three Harnesses" (the same ticket on Claude Code, Codex and OpenCode; tokens, dollars, wall-clock, tests passed; cost per passing test), becomes the monthly measurement post. Run it on plain CLIs until the antiloki collab; from that point disclose that it runs on antiloki and publish antiloki's own per-task bill in the same table. Do not run it on antiloki undisclosed beforehand.

Grafted from the others: Nerf Watch's Limit Ledger and "days since a limit or default changed without notice" counter (the one counter that is honest); Agent Incident Report's CVE-style numbering (R-2026-NNNN) and four root-cause tags, which are the entire product bridge; the second Agent Receipts variant's "What $200 buys you this week" table and court-docket receipts (Kahn v. Anthropic filings as screenshots, the @TechEmails mechanic).

If the operator wants a second account later, the Standings could become @harnessleague as a Friday-only feed pointing back to the ledger — but not before the main page has had its step event; two cold accounts halve the effort on each.

## 5. RISKS AND LINES NOT TO CROSS

**Platform**
- Post scripted cards only through the official X API with the "Automated by @operator" label; never script x.com (permanent suspension). No keyword-triggered auto-replies; no unattended LLM replies (needs X's written approval). All replies and all corrected-math posts are human-written.
- Premium only after the 3-day profile-change window; expect the check after review; do not promise "day one".
- No near-identical daily posts (copypasta rule): every counter update carries a fresh screenshot and one changed fact.
- No engagement solicitation in post bodies ("reply/bookmark/repost/send this to…") — a removal trigger under Original Content Rewards and a farming signal.
- Reddit: >50 karma before any r/ClaudeAI feed post; limits/performance content goes into megathreads; no bare screenshots on r/cursor; page links only in profile; never post links to the page's business as the primary activity.
- No mirrors on Instagram/YouTube/TikTok unless transformed (added text/voiceover); credited screenshots are ineligible there.

**Legal**
- Never reproduce leaked source, Claude Code system-prompt text, or subscription-auth workarounds — that is exactly where Anthropic drew the line with OpenCode. Link @ClaudeCodeLog's diffs; do not paste them.
- No vendor logos as avatar; vendor names only nominatively in the bio and cards. Do not self-apply the PCF label. Keep "Commentary: Agent Receipts" as the pre-written rename if X ever flags the account.
- Every side-by-side (status banner vs incident JSON) carries both timestamps and visible URLs captured in the same minute; keep raw captures. This is the exact format X Corp sued Media Matters over in a venue-shopped court; accuracy and California anti-SLAPP (CCP 425.16) are the only defences. Host and operate from an anti-SLAPP jurisdiction.
- Opinion labelled as opinion; "alleges" on the class action; the vendor's response is a fixed field on every card, including "none".
- Public corrections within the hour, as their own posts, in a visible corrections log. One wrong number read by a vendor employee ends "tolerated" status.

**Ethical — explicit exclusions**
- No fraud: no fabricated receipts, no manufactured heat from 0-reaction issues dressed as outrage, no un-numbered claims, no resetting a counter on an unverified report.
- No impersonation: no vendor name in handle or display name, no vendor mark, no implying affiliation, no fake vendor replies.
- No fake urgency: no countdowns or "seats left" unless literally true; the founding window and seat cap are real numbers or they do not exist; no invented deadlines tied to a cycle.
- No undisclosed sponsorship, ever; antiloki is labelled in the post text and bio; sponsor slots go to others too.
- No bought followers, no engagement pods, no bot replies.
- No victim-blaming, no tribe-dunking ("vibe coders are frauds"), no politics, no doxxing: credit by handle, blur on request, never post a private individual's bill without their consent.
- Product scrutiny boomerang: the day antiloki appears, this audience will test the folder boundary and the audit timeline against exactly the scenarios in the ledger. The collab does not fire until those features hold under a home-directory `rm -rf`, an over-scoped token in an unrelated file, and a `terraform destroy` with auto-approve.

## 6. SOURCES

Buyer and tribe
- https://newsletter.pragmaticengineer.com/p/ai-tooling-2026
- https://survey.stackoverflow.co/2025/ai
- https://survey.stackoverflow.co/2025/
- https://arxiv.org/html/2512.14012v1
- https://blog.jetbrains.com/research/2026/08/ai-coding-agent-adoption-2026/
- https://www.newsanyway.com/2026/09/13/claude-code-vs-codex-why-three-in-four-developers-reach-for-anthropics-tool
- https://gummysearch.com/r/ClaudeCode/
- https://gummysearch.com/r/codex/
- https://gummysearch.com/r/cursor/
- https://redditli.st/subreddit/ClaudeAI
- https://reddapi.dev/subreddits/vibecoding/insights
- https://thehiveindex.com/topics/vibe-coding/
- https://www.anthropic.com/research/anthropic-economic-index-january-2026-report
- https://venturebeat.com/technology/the-creator-of-claude-code-just-revealed-his-workflow-and-developers-are
- https://news.ycombinator.com/item?id=47467922
- https://venturebeat.com/technology/anthropic-says-it-hit-a-30-billion-revenue-run-rate-after-crazy-80x-growth
- https://presenc.ai/research/claude-usage-statistics

Emotional charge, limits, regressions, incidents
- https://news.ycombinator.com/item?id=44713757
- https://techcrunch.com/2025/07/28/anthropic-unveils-new-rate-limits-to-curb-claude-code-power-users/
- https://www.theregister.com/2026/01/05/claude_devs_usage_limits/
- https://www.theregister.com/2026/03/31/anthropic_claude_code_limits/
- https://www.anthropic.com/engineering/a-postmortem-of-three-recent-issues
- https://www.anthropic.com/engineering/april-23-postmortem
- https://github.com/anthropics/claude-code/issues/42796
- https://github.com/anthropics/claude-code/issues/46829
- https://github.com/anthropics/claude-code/issues/37686
- https://github.com/anthropics/claude-code/issues/92274
- https://github.com/anthropics/claude-code/issues/92984
- https://github.com/anthropics/claude-code/issues/93099
- https://github.com/openai/codex/issues/44205
- https://github.com/openai/codex/issues/44561
- https://github.com/openai/codex/issues/42875
- https://github.com/openai/codex/releases/tag/rust-v0.155.0
- https://github.com/anomalyco/opencode/issues/48953
- https://github.com/anomalyco/opencode/releases/tag/v1.18.30
- https://github.com/anomalyco/opencode/issues/7410
- https://github.com/anomalyco/opencode/pull/18186
- https://github.com/anomalyco/opencode/commit/973715f3da1839ef2eba62d4140fe7441d539411
- https://news.ycombinator.com/item?id=47444748
- https://news.ycombinator.com/item?id=47633396
- https://news.ycombinator.com/item?id=46978710
- https://news.ycombinator.com/item?id=46268222
- https://news.ycombinator.com/item?id=47278720
- https://news.ycombinator.com/item?id=46902223
- https://news.ycombinator.com/item?id=49348751
- https://news.ycombinator.com/item?id=49506519
- https://news.ycombinator.com/item?id=49530888
- https://news.ycombinator.com/item?id=49519639
- https://news.ycombinator.com/item?id=49567594
- https://news.ycombinator.com/item?id=49571465
- https://news.ycombinator.com/item?id=49432879
- https://news.ycombinator.com/item?id=44632575
- https://news.ycombinator.com/item?id=45416660
- https://hn.algolia.com/api/v1/search?query=rm%20-rf%20agent&tags=story&numericFilters=created_at_i%3E1752969600,points%3E30
- https://hn.algolia.com/api/v1/search?query=anthropic%20cease%20and%20desist&tags=story
- https://www.docker.com/blog/coding-agent-horror-stories-the-rm-rf-incident/
- https://www.theregister.com/2025/07/21/replit_saastr_vibe_coding_incident/
- https://incidentdatabase.ai/cite/1152/
- https://incidentdatabase.ai/cite/1424/
- https://incidentdatabase.ai/rss.xml
- https://www.theregister.com/2026/04/27/cursoropus_agent_snuffs_out_pocketos/
- https://techcrunch.com/2026/07/14/openais-new-flagship-model-deletes-files-on-its-own-people-keep-warning/
- https://www.wiz.io/blog/s1ngularity-supply-chain-attack
- https://www.permissionprotocol.com/agent-incident-tracker
- https://vibegraveyard.ai/
- https://statusgator.com/services/claude/outage-history
- https://status.claude.com/api/v2/incidents.json
- https://status.cursor.com/api/v2/incidents.json
- https://status.openai.com/api/v2/incidents.json
- https://registry.npmjs.org/@anthropic-ai/claude-code
- https://raw.githubusercontent.com/anthropics/claude-code/main/CHANGELOG.md
- https://github.com/anthropics/claude-code/releases
- https://forum.cursor.com/top.json?period=monthly
- https://forum.cursor.com/t/pricing-megathread-and-q-a/116395
- https://cursor.com/blog/june-2025-pricing
- https://systima.ai/blog/claude-code-vs-opencode-token-overhead
- https://gist.github.com/yurukusa/ac41d467d97f3711129070d8e311db4f
- https://www.ibtimes.co.uk/fintech-ai-coding-blunder-viral-success-1805135
- https://www.explainx.ai/blog/anthropic-claude-max-lawsuit-usage-limits-2026
- https://www.reddit.com/r/ClaudeCode/comments/1w38v98/
- https://www.reddit.com/r/ClaudeCode/comments/1wfwl6k/
- https://www.reddit.com/r/codex/comments/1w7ylpn/
- https://www.reddit.com/r/codex/comments/1w8zbz9/
- https://www.reddit.com/r/ChatGPT/comments/1m4lsso/
- https://www.reddit.com/r/ClaudeCode/top/.rss?t=week

Vendor accounts and precedent pages
- https://x.com/ClaudeDevs
- https://x.com/ClaudeDevs/status/2093742321473065266
- https://x.com/claudedevs/status/2093742322525810912
- https://x.com/thsottiaux/status/2082317452755751098
- https://x.com/thsottiaux/status/2096717905614524491
- https://x.com/thsottiaux/status/2097043464538264003
- https://x.com/thsottiaux/status/2098300998968357218
- https://x.com/cursor_ai/status/2088249881718919393
- https://x.com/ClaudeCodeLog
- https://github.com/marckrenn/claude-code-changelog
- https://api.github.com/repos/marckrenn/claude-code-changelog
- http://web.archive.org/web/20250929184039/https://x.com/CCpromptChanges/status/1972709093874757976
- https://x.com/claude_code
- https://x.com/CodexReleases
- https://x.com/Codex_Changelog
- https://x.com/CodexLog
- https://x.com/CodexChanges
- https://x.com/cursorlog
- https://x.com/AnExiledDev
- https://x.com/TechEmails
- https://www.speakrj.com/audit/report/TechEmails/twitter
- https://x.com/imagesaicouldnt
- https://x.com/fanofaliens
- https://x.com/fanofaliens/status/2076921242117153161
- https://x.com/IntCyberDigest
- https://x.com/nerfwatch
- https://rdap.org/domain/nerfwatch.dev
- https://rdap.org/domain/nerfwatch.com
- https://digg.com/u/x/ArtificialAnlys
- https://aider.chat/docs/leaderboards/
- https://viberank.app
- https://www.searchenginejournal.com/x-live-tweets-its-fight-against-chatbot-spam-in-real-time/

Platform mechanics and rules
- https://github.com/xai-org/x-algorithm
- https://raw.githubusercontent.com/xai-org/x-algorithm/main/README.md
- https://raw.githubusercontent.com/xai-org/x-algorithm/main/home-mixer/params/param.rs
- https://raw.githubusercontent.com/xai-org/x-algorithm/main/home-mixer/scorers/author_cold_start.rs
- https://help.x.com/en/rules-and-policies/authenticity
- https://help.x.com/en/rules-and-policies/profile-labels
- https://help.x.com/en/rules-and-policies/x-automation
- https://help.x.com/en/using-x/automated-account-labels
- https://help.x.com/en/rules-and-policies/x-limits
- https://help.x.com/en/using-x/x-premium
- https://help.x.com/en/using-x/creator-revenue-sharing
- https://help.x.com/en/using-x/original-content-rewards
- https://help.x.com/en/rules-and-policies/copyright-policy
- https://docs.x.com/x-api/getting-started/pricing
- https://www.socialmediatoday.com/news/x-formerly-twitter-adds-requirements-for-parody-accounts/744563/
- https://support.reddithelp.com/hc/en-us/articles/360043075032-Impersonation
- https://support.reddithelp.com/hc/en-us/articles/360043504051-Spam
- https://old.reddit.com/r/ClaudeAI/about/rules
- https://old.reddit.com/r/ClaudeCode/about/rules
- https://old.reddit.com/r/codex/about/rules
- https://old.reddit.com/r/cursor/about/rules
- https://news.ycombinator.com/showhn.html
- https://techcrunch.com/2026/04/30/instagram-restricts-reach-of-content-aggregators-in-new-crackdown/
- https://support.google.com/youtube/answer/1311392?hl=en
- https://www.bottlerocketcontent.com/youtube-ai-slop-crackdown-faceless-creators-2026/
- https://melaniegoodmanlinkedinconsultant.substack.com/p/linkedin-algorithm-2026-reach-topic-authority
- https://metricool.com/press-release-2026-social-media-study/
- https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=CCP&sectionNum=425.16
- https://en.wikipedia.org/wiki/Barrett_v._Rosenthal
- https://en.wikipedia.org/wiki/Nominative_use
- https://counterhate.com/blog/elon-musk-vs-ccdh-nonprofit-wins-dismissal-of-baseless-and-intimidatory-lawsuit/
- https://en.wikipedia.org/wiki/Media_Matters_for_America
- https://en.wikipedia.org/wiki/Nerf_(video_games)

Page-to-product and conversion
- https://marketingcrafted.com/case-studies/shipfast
- https://news.tonydinh.com/p/making-22k-in-7-days-the-story
- https://growthinreverse.com/bens-bites/
- https://newsletrix.com/blog/free-to-paid-newsletter-conversion-rate
- https://x.com/pontusab/status/1966470564601835963
- https://techcrunch.com/2026/01/06/lmarena-lands-1-7b-valuation-four-months-after-launching-its-product/
- https://levels.io/fly-pieter-com-vibecoded-flight-simulator
- https://aituts.com/case-study/photo-ai-pieter-levels/
- https://www.therundown.ai/advertise-with-us
- https://growthinreverse.com/tldr/
- https://www.beehiiv.com/case-studies/theres-an-ai-for-that
- https://swyx.io/aiewf-2024