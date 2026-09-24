// THE LANDING PRINTS, SHOT FROM THE REAL APP (2026-09-23). The five steps of the Agents chapter, plus the hero
// print. Reproducible on purpose: the page changes every week, and a hand-taken screenshot cannot be re-taken the
// same way. Run it with the dev FE on :5173 and the serve on :41931, from antiloki-site:
//
//   node shoot-prints.mjs
//
// Each shot waits for something REAL to be on screen — a role rendered, a widget split open — rather than a sleep,
// so a slow serve produces a late print, never a wrong one.
//
// NOT FINISHED. It gets as far as the switcher and then finds an EMPTY DESK: in a fresh browser profile the
// agents surface never mounts, so `[data-testid^="agent-row-"]` times out. The same app in a profile that has
// been used renders the roster immediately. Two things are seeded below (the desk keys, the tour) and neither
// is enough, which points at some other piece of remembered state deciding whether the desk mounts at all.
//
// That is worth chasing on its own terms rather than as a screenshot problem: if it reproduces for a real new
// install, the first thing a new user sees is a blank screen.
// playwright lives in the FE's node_modules and is CommonJS — the default import is the whole module
import pw from "/home/danj/dev/antiloki/antiloki-v3-FE/node_modules/playwright/index.js";
const { chromium } = pw;
import { mkdirSync } from "node:fs";

const OUT = "img";
const APP = process.env.APP_URL ?? "http://localhost:5173/";
const W = 1600, H = 1000;

mkdirSync(OUT, { recursive: true });

const shoot = async (page, name) => {
  await page.screenshot({ path: `${OUT}/${name}.jpg`, quality: 92, type: "jpeg" });
  console.log(`  → ${OUT}/${name}.jpg`);
};
const settle = (page, ms = 700) => page.waitForTimeout(ms);

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: W, height: H }, deviceScaleFactor: 2 });
// a fresh profile has none of the desk's remembered state, and the app opens on whatever its defaults are. Seed
// the two keys that decide which surface you land on, so the script shoots the Agents desk and not an empty shell.
await ctx.addInitScript(() => {
  try {
    localStorage.setItem("antiloki:dock-mode", "threads");   // the desk (the key kept its old name)
    localStorage.setItem("antiloki:side-tab", "chats");      // the agents surface inside it
    localStorage.removeItem("antiloki:threads-sidebar");     // unfolded
    // the progressive tour opens on a fresh profile and covers the desk with its card — mark every section seen
    for (const id of ["chats","desk","studio","agent","heimdall","context","pulls","ide","design","settings","knowledge"]) {
      localStorage.setItem(`antiloki:tour:${id}`, "seen");
    }
  } catch { /* fine */ }
});
const page = await ctx.newPage();
page.on("console", () => {});

console.log("· opening the app");
// NOT networkidle: the cockpit polls the roster and the live agents every few seconds, so the network is never
// idle and the wait times out. The selector waits below are the real readiness signal.
await page.goto(APP, { waitUntil: "domcontentloaded", timeout: 60_000 });
// the roster is the proof the serve answered: wait for a real agent row, not a timer
await page.waitForSelector('[data-testid^="agent-row-"]', { timeout: 60_000 });
await page.waitForSelector('[data-testid^="agent-role-"]', { timeout: 30_000 });
await settle(page, 1200);

// ── 02 · the roster: avatar, name, role, and the merge underneath ──────────
console.log("· agents-2 — the roster");
await page.locator('[data-testid^="agent-row-"]').first().click();
await settle(page, 1500);
await shoot(page, "agents-2");

// ── 05 · an agent's episodes under its row ─────────────────────────────────
console.log("· agents-5 — episodes");
if (await page.locator('[data-testid="agent-episodes"]').count()) {
  await page.locator('[data-testid="agent-episodes"]').first().scrollIntoViewIfNeeded();
  await settle(page);
}
await shoot(page, "agents-5");

// ── 04 · Heimdall's menu ───────────────────────────────────────────────────
console.log("· agents-4 — the Heimdall menu");
const chip = page.locator('[data-testid="agent-heimdall-chip"]').first();
if (await chip.count()) { await chip.hover(); await settle(page, 900); }
await shoot(page, "agents-4");
await page.mouse.move(W / 2, 40);
await settle(page);

// ── 03 · a widget beside the conversation ──────────────────────────────────
console.log("· agents-3 — a widget beside the chat");
const diff = page.locator('[data-testid="studio-kind-shared-diff"]').first();
if (await diff.count()) {
  await diff.click();
  await page.waitForSelector('[data-testid="split-pane"]', { timeout: 20_000 }).catch(() => {});
  await settle(page, 1800);
}
await shoot(page, "agents-3");
// the hero print is this same view, which is the product in one frame
await shoot(page, "10-agents");
const close = page.locator('[data-testid="split-close"]').first();
if (await close.count()) { await close.click(); await settle(page); }

// ── 01 · hiring: the New agent window ──────────────────────────────────────
console.log("· agents-1 — the New agent window");
const rail = page.locator('[data-testid="studio-rail-unfold"]').first();
if (await rail.count()) { await rail.click(); await settle(page); }
await page.locator('[data-testid="agents-add"]').click();
await page.waitForSelector('[data-testid="add-agent"]', { timeout: 15_000 });
await page.waitForSelector('[data-testid^="add-agent-role-"]', { timeout: 20_000 });
await settle(page, 900);
await page.locator('[data-testid="add-agent-role-backender"]').click();
await settle(page, 600);
await page.locator('[data-testid="add-agent-next"]').click();
await settle(page, 1600);   // the scope tree reads the codebase
await shoot(page, "agents-1");

await browser.close();
console.log("done · six prints in img/");
