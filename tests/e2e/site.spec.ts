import { expect, test } from "@playwright/test";

test("traditional Chinese home exposes both product paths", async ({ page }) => {
  await page.goto("/zh-hant/");
  await expect(page.getByRole("heading", { level: 1, name: "從模糊題目，到可以交出去" })).toBeVisible();
  await expect(page.getByRole("link", { name: "查看免費 Skills" })).toHaveAttribute("href", "/zh-hant/skills/");
  await expect(page.getByRole("link", { name: "查看研究工作流" })).toHaveAttribute("href", "#workflow");
  await expect(page.getByText("把論文拆成十七個可檢查的步驟")).toBeVisible();
});

test("homepage does not present retired Desktop features as current", async ({ page }) => {
  await page.goto("/zh-hant/");
  await expect(page.getByText("Notebook", { exact: true })).toHaveCount(0);
  await expect(page.locator("[data-demo-image]")).toHaveCount(0);
});

test("homepage maps every skill to a research stage", async ({ page }) => {
  await page.goto("/zh-hant/");
  await expect(page.locator(".workflow-stage")).toHaveCount(6);
  await expect(page.locator(".workflow-skill")).toHaveCount(17);
  await expect(page.getByText("research-question", { exact: true })).toBeVisible();
  await expect(page.getByText("claim-audit", { exact: true })).toBeVisible();
  await expect(page.getByText("journal-fit", { exact: true })).toBeVisible();
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
    version: "0.2.0",
    channel: "preview",
    minimumSystemVersion: "macOS 13.0",
    publishedAt: null,
  });
  expect(manifest.assets).toEqual([]);
});

test("preview honestly reports an unpublished installer", async ({ page }) => {
  await page.goto("/zh-hant/desktop/#download");
  await expect(page.getByRole("button", { name: "安裝包尚未公開" })).toBeDisabled();
  await expect(page.getByText("目前沒有可供下載的 0.2 安裝包。")).toBeVisible();
  await expect(page.locator(".download-panel")).not.toContainText("SHA-256");
});

test("mobile pages do not overflow horizontally", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "mobile", "mobile-only layout assertion");
  for (const path of ["/zh-hant/", "/zh-hant/skills/", "/zh-hant/community/"]) {
    await page.goto(path);
    const dimensions = await page.evaluate(() => ({ width: document.documentElement.clientWidth, scroll: document.documentElement.scrollWidth }));
    expect(dimensions.scroll).toBeLessThanOrEqual(dimensions.width + 1);
  }
});
