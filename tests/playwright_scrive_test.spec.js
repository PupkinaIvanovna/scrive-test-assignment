const { webkit, chromium, firefox } = require("playwright");

(async () => {
  for (const browserType of [webkit, firefox, chromium]) {
    const browser = await browserType.launch({
      headless: false,
    });
    const page = await browser.newPage();

    await page.goto(
      "https://staging.scrive.com/t/9221714692410699950/7348c782641060a9"
    );
    await page.locator(".info-text-input").click();
    await page.getByPlaceholder("Your name").fill("Kate Savitskaya");
    //await expect(page.getByRole("button", { name: "Next" })).toBeVisible();
    await page.getByRole("button", { name: "Next" }).click();
    //await expect(page.locator("div:nth-child(5)").first()).toBeVisible();
    await page.waitForTimeout(3000);
    await page
      .locator("div:nth-child(5)")
      .first()
      .screenshot({ path: "screenshot.png" });
    await page.getByRole("button", { name: "Sign" }).click();
    // await expect(page.getByText("Document signed!")).toBeVisible();
    console.log("Success");
    await browser.close();
  }
})();
