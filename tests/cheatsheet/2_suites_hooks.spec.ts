import { test } from "@playwright/test";

// ? V tomto souboru si ukážeme, jak jednoduše strukturovat testy a pomocné funkce
// ? Describe bloky slouží k seskupení testů do logických celků, nejsou v Playwrightu povinné
// ? V rámci describe bloku můžeme mít další describe bloky, které nám pomohou strukturovat testy do hierarchie
// ? Každý describe se skládá z názvu a funkce, která obsahuje testy, název musí být unikátní
test.describe("Struktura testů a pomocné 'hooky'", () => {
  // ? beforeAll blok se provede před všemi testy v describe bloku, můžeme ho například použít k vytvoření externích dat či připojení k databázi
  test.beforeAll(async ({ browser }) => {
    // ? beforeAll se nedoporučuje používat pro práci s testovanou aplikací, testy jsou totiž v Playwright izolované a neměly by mít vliv na sebe navzájem, tím pádem by se nemělo používat ani beforeAll (a není to ani jednoduché, protože nemáme k dispozici page)
    console.log("Běžím jen jednou před všemi testy v tomto describe bloku");
  });

  // ? beforeEach blok se provede před každým testem v describe bloku, můžeme ho například použít k otevření stránky, kterou testujeme nebo jiné kroky, které se provádí před každým testem
  test.beforeEach(async ({ page }) => {
    console.log("Běžím před každým testem v tomto describe bloku");
  });

  // ? afterEach blok se provede po každém testu v describe bloku, můžeme ho například použít k zavření stránky, kterou testujeme nebo jiné kroky, které se provádí po každém testu
  test.afterEach(async ({ page }) => {
    console.log("Běžím po každém testu v tomto describe bloku");
  });

  // ? afterAll blok se provede po všech testech v describe bloku, můžeme ho například použít k zavření externích dat či odpojení od databáze
  test.afterAll(async ({ browser }) => {
    console.log("Běžím po všech testech v tomto describe bloku");
  });

  test("Test 1", async ({ page }) => {
    console.log("Provádí se test 1");
  });

  test("Test 2", async ({ page }) => {
    console.log("Provádí se test 2");
  });
});
