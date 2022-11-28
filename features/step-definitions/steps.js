const { Given, When, Then } = require('@wdio/cucumber-framework');

Given("I am on the home page", async () => {
    await browser.url(`https://www.newegg.com`);
});

Given("Close the promo banner if it appears", async () => {
    // const bunnerButton=await $(`//*[@id="modal-Website"]/div[2]/div/button`); 
    // #modal-Website > div.modal-dialog.modal-dialog-centered > div > button
    const bunnerButton=await $(`#modal-Website > div.modal-dialog.modal-dialog-centered > div > button`); 
    try {
        bunnerButton.click()
        } catch (result) {
    result = false 
    return result } 
});

When("Entry the word Windows in the search bar", async () => {
    await $(`//*[@id="app"]/header/div[1]/div[1]/div[1]/div[4]/form/div/div[3]/button`).click()
    await $('//*[@id="app"]/header/div[1]/div[1]/div[1]/div[5]/form/div/div[1]/input').setValue('windows');

});

When("Click the search", async () => {
    await $(`//*[@id="app"]/header/div[1]/div[1]/div[1]/div[5]/form/div/div[2]/button`).click()

});

Then("Check that at least one item appears", async () => {
    const elem = await $(`//*[@id="app"]/div[3]/section/div/div/div[2]/div/div/div/div[2]/div/div/div[2]`)
    await expect(elem).toBeExisting();
});

When("Open Today's Best Deals tab", async () => {
    await $(`//*[@id="trendingBanner_720202"]/span`).click()
});

When("Click on the Internet shop logo", async () => {
    // await $(`//*[@id="app"]/header/div[1]/div[1]/div[1]/div[2]/a/img`).click()
    await $(` #app > header > div.page-content-inner > div:nth-child(1) > div.section-left.auto-flex > div.header2021-logo > a > img`).click()
});

Then("Check that the main page opened", async () => {
    await expect(browser).toHaveUrl('https://www.newegg.com/')
    // await browser.pause(20000)
});
