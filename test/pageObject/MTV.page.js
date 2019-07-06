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
        do {
            this.loadMoreButton.waitForDisplayed();
            this.loadMoreButton.click();
            browser.pause(1000);
        } while (this.chartItemsList.length < 100)
    }

    collectCharts(charts){
        this.open(charts.url);
        this.acceptAGBs();
        this.expandChartList();
        let logCharts = "";
        let newEntry;
        logCharts += `taken from ${browser.config.baseUrl}${charts.url}\nAnzahl Neueinsteiger: ${this.newEntriesList.length}\n${this.chartsMainTitle.getText()}\n\n`;
        this.chartItemsList.forEach(function(item){
            let songName = item.$('.videoTitle').getText();
            let artistName = item.$('.regular-content').getText();
            let currentPos = item.$('.currentPos').getText();
            let isNew = item.$('.')
            let newEntry = "";
            if(item.$("div=neu").isExisting()){
                newEntry = "- NEU";
            }
            logCharts += `${currentPos}: ${songName} - ${artistName} ${newEntry}\n`;
        })
        fs.writeFileSync(`./output/${charts.name}__${Date.now()}.txt`, logCharts);
    }
}

module.exports = new MTVPage();
