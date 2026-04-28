/* eslint-disable */
const { chromium, devices } = require("playwright");
const fs = require("fs");
const path = require("path");

const BASE = process.env.BASE_URL || "http://localhost:3600";
const tag = process.argv[2] || "shot";
const outDir = path.join(__dirname, "..", "screenshots", tag);
fs.mkdirSync(outDir, { recursive: true });

const routes = [
  { path: "/", name: "home" },
  { path: "/showroom", name: "showroom" },
  { path: "/methode", name: "methode" },
  { path: "/tarifs", name: "tarifs" },
  { path: "/audit-gratuit", name: "audit" },
  { path: "/demo/atelier-morel", name: "demo-morel" },
  { path: "/demo/cabinet-lyria", name: "demo-lyria" },
  { path: "/demo/maison-aveline", name: "demo-aveline" },
];

const viewports = [
  { name: "desktop", ...devices["Desktop Chrome"].viewport },
  { name: "mobile", width: 390, height: 844 },
];

(async () => {
  const browser = await chromium.launch({ headless: true });
  const consoleErrors = [];

  for (const vp of viewports) {
    const ctx = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
      deviceScaleFactor: 1,
      reducedMotion: "reduce", // freeze animations for stable shots
    });
    const page = await ctx.newPage();

    page.on("console", (msg) => {
      if (msg.type() === "error") {
        consoleErrors.push(`[${vp.name}] ${msg.text()}`);
      }
    });
    page.on("pageerror", (err) => {
      consoleErrors.push(`[${vp.name}] PAGE ERROR: ${err.message}`);
    });

    for (const r of routes) {
      const url = BASE + r.path;
      try {
        await page.goto(url, {
          waitUntil: "networkidle",
          timeout: 20000,
        });
      } catch {
        await page.goto(url, { waitUntil: "domcontentloaded" });
      }
      // Stabilise
      await page.waitForTimeout(800);
      await page.evaluate(() => {
        document.documentElement.scrollTo(0, 0);
      });
      await page.screenshot({
        path: path.join(outDir, `${vp.name}-${r.name}-top.png`),
        fullPage: false,
      });
      await page.screenshot({
        path: path.join(outDir, `${vp.name}-${r.name}-full.png`),
        fullPage: true,
      });
      console.log(`[${vp.name}] captured ${r.path}`);
    }
    await ctx.close();
  }

  await browser.close();

  if (consoleErrors.length) {
    console.log("\nCONSOLE ERRORS:");
    for (const e of consoleErrors) console.log("  -", e);
  } else {
    console.log("\nNo console errors detected.");
  }
})();
