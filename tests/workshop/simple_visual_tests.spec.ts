import { test, expect } from "@playwright/test";

test("Základní vizuální test", async ({ page }) => {
  await page.goto("https://tredgate.com/eshop");
  await page.getByText("Apple Cinema 30").click();
  await expect(page.locator("h1")).toHaveText('Apple Cinema 30"');
  await expect(page).toHaveScreenshot("simple-eshop.png");
});

// simple_visual_tests.spec.ts

test("Základní vizuální test celé stránky", async ({ page }) => {
  await page.goto("https://tredgate.com/eshop");
  await page.getByText("Apple Cinema 30").click();
  await expect(page.locator("h1")).toHaveText('Apple Cinema 30"');
  await expect(page).toHaveScreenshot("simple-eshop-fullpage.png", {
    fullPage: true,
  });
});

test("Pád vizuálního testu", async ({ page }) => {
  await page.goto("https://tredgate.com/eshop");
  await page.waitForTimeout(5000);
  await expect(page).toHaveScreenshot("eshop-home-fullpage.png", {
    fullPage: true,
  });
});
