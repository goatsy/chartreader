class MTVPage  {

    get loadMoreButton() { return $('.loadMoreBtn'); }
    get acceptAGBButton() { return $('.evidon-banner-acceptbutton'); }
    get chartItemsList() { return $$('.chartItemsBox'); }
    get newEntriesList() { return $$("//div[@class='variation'][contains(text(),'neu')]"); }

    open() {
        browser.url("/charts/c6mc86/single-top-100");
    }

    acceptAGBs(){
        this.acceptAGBButton.waitForDisplayed();
        this.acceptAGBButton.click();
    }

    expandChartList() {
        for(let i=0; i<=3; i++) {
            this.loadMoreButton.waitForDisplayed();
            this.loadMoreButton.click();
            browser.pause(1000);
        }
        browser.waitUntil(() => {
            return this.chartItemsList.length === 100
        }, 5000, `expected ${this.chartItemsList.length} to be 100`);
    }

}

module.exports = new MTVPage();