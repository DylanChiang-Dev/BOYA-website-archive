import { expect, test } from "@playwright/test";

test("traditional Chinese home exposes both product paths", async ({ page }) => {
  await page.goto("/zh-hant/");
  await expect(page.getByRole("heading", { level: 1, name: "BOYA 博雅" })).toBeVisible();
  await expect(page.getByRole("link", { name: "免費下載 Preview" })).toHaveAttribute("href", /desktop\/\#download$/);
  await expect(page.getByRole("link", { name: "查看免費 Skills" }).first()).toHaveAttribute("href", "/zh-hant/skills/");
  await expect(page.getByText("把判斷留給研究者")).toBeVisible();
});

test("hero demo switches between real product views", async ({ page }) => {
  await page.goto("/zh-hant/");
  const image = page.locator("[data-demo-image]");
  await expect(image).toHaveAttribute("src", "/images/desktop-literature.png");
  const figureButton = page.getByRole("button", { name: "圖表與程式" });
  await figureButton.click();
  await expect(figureButton).toHaveAttribute("aria-pressed", "true");
  await expect(image).toHaveAttribute("src", "/images/desktop-figure.png");
});

test("language switch preserves the current page", async ({ page }) => {
  await page.goto("/zh-hant/skills/");
  const languageLink = page.getByRole("link", { name: "简体中文" });
  if (!(await languageLink.isVisible())) await page.locator(".mobile-menu summary").click();
  await languageLink.click();
  await expect(page).toHaveURL(/\/zh-hans\/skills\/$/);
  await expect(page.getByRole("heading", { level: 1 })).toContainText("十七个 Skills");
});

test("skills page lists the canonical catalogue and installation prompt", async ({ page }) => {
  await page.goto("/zh-hant/skills/");
  await expect(page.locator(".skill-row")).toHaveCount(17);
  await expect(page.getByText("claim-audit", { exact: true })).toBeVisible();
  await expect(page.getByText("research-record", { exact: true })).toBeVisible();
  await expect(page.getByText("DylanChiang-Dev/BOYA-skills", { exact: false })).toBeVisible();
});

test("community dialog is keyboard accessible and states the refund rule", async ({ page }) => {
  await page.goto("/zh-hant/community/");
  await page.getByRole("button", { name: "加入作者答疑群" }).focus();
  await page.keyboard.press("Enter");
  const dialog = page.getByRole("dialog");
  await expect(dialog).toBeVisible();
  await expect(dialog.getByText("尚未入群且未開始答疑前可全額退款", { exact: false })).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(dialog).not.toBeVisible();
});

test("release manifest keeps the public updater contract", async ({ request }) => {
  const response = await request.get("/releases/latest.json");
  expect(response.ok()).toBeTruthy();
  const manifest = await response.json();
  expect(manifest).toMatchObject({
    version: "0.1.0",
    channel: "preview",
    minimumSystemVersion: "macOS 13.0",
  });
  expect(Array.isArray(manifest.assets)).toBeTruthy();
});

test("preview honestly reports a missing R2 asset", async ({ page }) => {
  await page.goto("/zh-hant/desktop/#download");
  await expect(page.getByRole("button", { name: "R2 安裝包準備中" })).toBeDisabled();
  await expect(page.getByText(/SHA-256: 27aaa061/)).toBeVisible();
});

test("mobile pages do not overflow horizontally", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "mobile", "mobile-only layout assertion");
  for (const path of ["/zh-hant/", "/zh-hant/skills/", "/zh-hant/community/"]) {
    await page.goto(path);
    const dimensions = await page.evaluate(() => ({ width: document.documentElement.clientWidth, scroll: document.documentElement.scrollWidth }));
    expect(dimensions.scroll).toBeLessThanOrEqual(dimensions.width + 1);
  }
});
