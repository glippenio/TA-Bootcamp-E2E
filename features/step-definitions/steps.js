const { Given, When, Then } = require('@wdio/cucumber-framework');
const homePage = 'https://www.newegg.com/';

Given("I am on the home page", async () => {
    await browser.url(homePage);
    await browser.pause(5000)
});

Given("Close the promo banner if it appears", async () => {
    const bunnerButton=await $(`.close`); 
    const logo = await $(`.header2021-logo`)
    try {
        await logo.click()
        } catch {
        bunnerButton.click()}
});

When("Entry the word Windows in the search bar", async () => {
    const searchButton = await $(`.header2021-search-button`)
    const searchField =  await $('input[type="search"]')
    await searchButton.click()
    await searchField.setValue('windows');
});

When("Click the search", async () => {
    const searchButton =  await $(`.ico.ico-search`)
    await searchButton.click()
});

Then("Check that at least one item appears", async () => {
    const elem = await $(`.item-cell`)
    await expect(elem).toBeExisting();
});

When("Open Today's Best Deals tab", async () => {
    const tabButton =   await $(`#trendingBanner_720202`)
    await tabButton.click()
});

When("Click on the Internet shop logo", async () => {
    const logo = await $(`.header2021-logo`)
    await logo.click()
});

Then("Check that the main page opened", async () => {
    await expect(browser).toHaveUrl(homePage)
});
