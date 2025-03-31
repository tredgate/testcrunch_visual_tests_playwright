// ? importujeme testovací knihovnu Playwright: test - pro testy, expect - pro kontroly
import { expect, test } from "@playwright/test";

test.describe("Vzorové API Testy", () => {
  // ? Namísto použití page v testu, použijeme request
  // ? request je objekt, který nám umožňuje provádět HTTP požadavky
  test("Provolání GET requestu", async ({ request }) => {
    // ? Vytvoříme GET request na API
    // ? URL: https://tegb-backend-877a0b063d29.herokuapp.com/train
    const response = await request.get(
      // ? provolání GET requestu pomocí request.get, pro jiné HTTP metody použijeme request.post, request.put, request.delete atd.
      "https://tegb-backend-877a0b063d29.herokuapp.com/train"
    );
    // ? Konstanta response obsahuje odpověď serveru, se kterou můžeme dále pracovat
  });

  test("Jednoduché testy REST API Response", async ({ request }) => {
    const response = await request.get(
      "https://tegb-backend-877a0b063d29.herokuapp.com/train"
    );
    expect(response.ok()).toBeTruthy(); // ? Ověření, že odpověď je úspěšná
    /* Odpověď této API (JSON):
      {
         "id": 1,
         "message": "TEG#B Training GET request successful",
         "timestamp": "2025-03-31T22:43:59.276Z"
      }
    */
    // ? Kontrola status kódu odpovědi: 200
    expect(response.status()).toBe(200); // ? Ověření, že status kód odpovědi je 200
    // ? Kontrola hlavičky odpovědi: application/json
    expect(response.headers()["content-type"]).toContain("application/json"); // ? Ověření, že hlavička obsahuje application/json
    // ? Kontrola těla odpovědi: message
    const responseBody = await response.json(); // ? Získání těla odpovědi jako JSON
    expect(responseBody).toHaveProperty("message"); // ? Ověření, že tělo odpovědi obsahuje property message
    expect(responseBody.message).toBe("TEG#B Training GET request successful"); // ? Ověření, že message je správná
    expect(responseBody).toHaveProperty("id"); // ? Ověření, že tělo odpovědi obsahuje property id
    expect(typeof responseBody.id).toBe("number"); // ? Ověření, že id je číslo
    expect(responseBody).toHaveProperty("timestamp"); // ? Ověření, že tělo odpovědi obsahuje property timestamp
    expect(typeof responseBody.timestamp).toBe("string"); // ? Ověření, že timestamp je string (text)
  });
});
