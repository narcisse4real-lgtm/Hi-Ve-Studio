const { chromium } = require("playwright");
const path = require("path");
const fs = require("fs");

const out = path.join(process.cwd(), "screenshots", "sections");
fs.mkdirSync(out, { recursive: true });

(async () => {
  const browser = await chromium.launch({ headless: true });
  const ctx = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    reducedMotion: "reduce",
  });
  const page = await ctx.newPage();

  await page.goto("http://localhost:3601/", { waitUntil: "networkidle", timeout: 30000 });

  for (const id of ["constat", "solution", "showroom", "transformation", "cibles", "methode", "tarifs", "pourquoi", "faq", "audit-gratuit"]) {
    const el = await page.locator(`#${id}`).first();
    if (await el.count()) {
      await el.scrollIntoViewIfNeeded();
      await page.waitForTimeout(400);
      await el.screenshot({ path: path.join(out, `${id}.png`) });
      console.log(`captured #${id}`);
    } else {
      console.log(`MISSING #${id}`);
    }
  }
  await browser.close();
})();
