import { test, expect } from "@playwright/test";

test("Simple Visual Test", async ({ page }) => {
  await page.goto("https://tredgate.com/eshop");
  await page.getByText('Apple Cinema 30"').click();
  await expect(page.locator("h1")).toHaveText('Apple Cinema 30"');
  await expect(page).toHaveScreenshot("simple-eshop-protest.png");
});

test("Simple Visual Test - Fullpage", async ({ page }) => {
  await page.goto("https://tredgate.com/eshop");
  await page.getByText('Apple Cinema 30"').click();
  await expect(page.locator("h1")).toHaveText('Apple Cinema 30"');
  await expect(page).toHaveScreenshot("simple-eshop-protest-fullpage.png", {
    fullPage: true,
  });
});

// const toHaveFullPageScreenshot = async (page, name) => {
//   const screenshot = await page.screenshot({ fullPage: true });
//   expect(screenshot).toMatchSnapshot(name);
// };
