import { test } from "@playwright/test";

// ? V tomto souboru si ukážeme, základní akce, které můžeme provádět s Playwrightem
// ? Playwright je tzv. asynchronní, to znamená, že většina akcí může probíhat zároveň. Proto používáme klíčová slovo async - označení asynchronní funkce, await - čekání na dokončení asynchronní funkce.
// ! POZOR: Pokud nepoužijeme await, akce se provede, ale nečeká na její dokončení, což může způsobit chyby v testech.
test.describe("Základní akce s Playwrightem", () => {
  test("Ovládání formuláře", async ({ page }) => {
    // ? Všechny akce jsou prováděny na stránce, kterou si otevřeme pomocí page.goto
    await page.goto("https://tredgate.com/webtrain/registration.html");
    // ? Prvky identifikujeme pomocí tzv. selektorů, které umožňují identifikovat prvky na stránce ve zdrojovém kódu
    // ? Selektory jsou různé, nejčastěji používáme CSS selektory, ale můžeme použít i XPath selektory
    // ? Prvky můžeme, ale nemusíme ukládat do proměnných, záleží na tom, zda je budeme potřebovat vícekrát
    const nameInput = page.locator("#name"); // ? Identifikujeme prvek "Name" pomocí CSS selektoru a uložíme do proměnné const
    // ? Pro vypsání textu do prvku použijeme metodu fill, která vyplní prvek textem
    await nameInput.fill("Jan Novák"); // ? Vyplníme prvek "Name" textem "Jan Novák"

    // ? Pokud prvek nepřepoužíváme, můžeme použít přímo page.locator s metodou fill
    await page.locator("#email").fill("jan.novak@example.com"); // ? Vyplníme prvek "Email"

    // ? Pro vyplnění data narození použijeme metodu fill, která vyplní prvek textem, musíme použít správný formát data, který nám tento speciální typ prvku (date) umožňuje: YYYY-MM-DD (rok-měsíc-den, např. 2023-04-17)
    await page.locator("#datepicker").fill("1990-01-01"); // ? Vyplníme prvek "Date of Birth" datem "1990-01-01"

    // ? Pro zaškrtnutí checkboxu použijeme metodu check, která zaškrtne prvek
    await page.locator("#newsletter").check(); // ? Zaškrtneme checkbox "Sign me up for the newsletter"

    // ? Pro odkliknutí checkboxu použijeme metodu uncheck, která odškrtne prvek
    await page.locator("#newsletter").uncheck();

    // ? Pro zaškrtnutí radio buttonu použijeme také metodu check, která zaškrtne prvek
    await page.locator("#premium").check(); // ? Zaškrtneme radio button "Premium"

    // ? Pro vybrání hodnoty v selectu (dropdown) použijeme metodu selectOption, která vybere hodnotu v selectu
    await page.locator("#gender").selectOption("male"); // ? Vybereme hodnotu "Male" v selectu

    // ? Pro kliknutí na prvek použijeme metodu click, která klikne na prvek
    await page.locator("[type='submit']").click(); // ? Klikneme na tlačítko "Submit"
  });
});
