const { Given, When, Then } = require('@wdio/cucumber-framework');

Given("I am on the home page", async () => {
    await browser.url(`https://www.newegg.com`);
    await browser.pause(5000)

});

Given("Close the promo banner if it appears", async () => {
    // const bunnerButton=await $(`//*[@id="modal-Website"]/div[2]/div/button`); 
    // #modal-Website > div.modal-dialog.modal-dialog-centered > div > button
    const bunnerButton=await $(`#modal-Website > div.modal-dialog.modal-dialog-centered > div > button`); 
    const logo = await $(` #app > header > div.page-content-inner > div:nth-child(1) > div.section-left.auto-flex > div.header2021-logo > a > img`)
    // try {
    //     bunnerButton.click()
    //     } catch (result) {
    // result = false 
    // return result } 
    try {
        await logo.click()
        } catch {
        bunnerButton.click()}

    // if ( await expect(bunnerButton).toBeExisting() ) {
    //     bunnerButton.click()
    // } else {
    //     return true
    // }
});

When("Entry the word Windows in the search bar", async () => {
    const searchButton = await $(`//*[@id="app"]/header/div[1]/div[1]/div[1]/div[4]/form/div/div[3]/button`)
    const searchField =  await $('//*[@id="app"]/header/div[1]/div[1]/div[1]/div[5]/form/div/div[1]/input')
    await searchButton.click()
    await searchField.setValue('windows');
});

When("Click the search", async () => {
    const searchButton =  await $(`//*[@id="app"]/header/div[1]/div[1]/div[1]/div[5]/form/div/div[2]/button`)
    await searchButton.click()
});

Then("Check that at least one item appears", async () => {
    const elem = await $(`//*[@id="app"]/div[3]/section/div/div/div[2]/div/div/div/div[2]/div/div/div[2]`)
    await expect(elem).toBeExisting();
});

When("Open Today's Best Deals tab", async () => {
    const tabButton =   await $(`//*[@id="trendingBanner_720202"]/span`)
    await tabButton.click()
});

When("Click on the Internet shop logo", async () => {
    const logo = await $(` #app > header > div.page-content-inner > div:nth-child(1) > div.section-left.auto-flex > div.header2021-logo > a > img`)
    await logo.click()
});

Then("Check that the main page opened", async () => {
    await expect(browser).toHaveUrl('https://www.newegg.com/')
});
