const fs = require('fs');

class MTVPage {

    get loadMoreButton() {
        return $('.loadMoreBtn');
    }

    get acceptAGBButton() {
        return $('.evidon-banner-acceptbutton');
    }

    get chartItemsList() {
        return $$('.chartItemsBox');
    }

    get newEntriesList() {
        return $$("//div[@class='variation'][contains(text(),'neu')]");
    }

    get chartsMainTitle() {
        return $(".chartMainTitle");
    }


    open(url) {
        browser.url(url);
    }

    acceptAGBs() {
        if (this.acceptAGBButton.isDisplayed())
            this.acceptAGBButton.click();
    }

    expandChartList() {
        for (let i = 0; i <= 3; i++) {
            this.loadMoreButton.waitForDisplayed();
            this.loadMoreButton.click();
            browser.pause(1000);
        }
        browser.waitUntil(() => {
            return this.chartItemsList.length === 100
        }, 5000, `expected ${this.chartItemsList.length} to be 100`);
    }

    collectCharts(charts) {
        this.open(charts.url);
        this.acceptAGBs();
        this.expandChartList();
        let logCharts = "";
        logCharts += `taken from ${browser.config.baseUrl}${charts.url}\nAnzahl Neueinsteiger: ${this.newEntriesList.length}\n${this.chartsMainTitle.getText()}\n\n`;
        this.newEntriesList.forEach(function (newEntry) {
            let parentElement = newEntry.$('..').$('..').$('..');
            let songName = parentElement.$('.videoTitle').getText();
            let artistName = parentElement.$('.regular-content').getText();
            let currentPos = parentElement.$('.currentPos').getText();
            logCharts += `${currentPos}: ${songName} - ${artistName} \n`;
        });
        fs.writeFileSync(`./output/${charts.name}__${Date.now()}.txt`, logCharts);
    }

}

module.exports = new MTVPage();