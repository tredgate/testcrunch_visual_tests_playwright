// ? Importujeme potřebné moduly z Playwrightu, test - pro testy, expect - pro kontroly
import { expect, test } from "@playwright/test";

test.describe("Ukázkové testy používající asserty (kontroly)", () => {
  // ? BeforeEach blok se provede před každým testem, v tomto případě otvíráme stránku Tredgate Eshop
  test.beforeEach(async ({ page }) => {
    await page.goto("https://tredgate.com/eshop/");
  });

  test("Základní kontrola prvku na stránce", async ({ page }) => {
    // ? Identifikujeme první tlačítko menu na stránce pomocí XPath
    const firstMenuButton = page.locator(
      '//nav[@id="menu"]//li[contains(@class, "dropdown")][1]/a'
    );
    await expect(firstMenuButton).toBeVisible(); // ? Ověření, že tlačítko menu je viditelné
    await expect(firstMenuButton).toHaveText("Desktops"); // ? Ověření, že tlačítko menu obsahuje text "Desktops"

    await expect(firstMenuButton).toHaveAttribute(
      "href",
      "https://tredgate.com/eshop/index.php?route=product/category&path=20"
    ); // ? Ověření, že tlačítko obsahuje atribut href s odkazem na "desktops"
  });
});
