const assert = require('assert');
const MTVpage = require('../pageObject/MTV.page.js');


describe('webdriver.io page', function () {
    it('should have the right title', function () {
        MTVpage.open();
        const title = browser.getTitle();
        assert.equal(title, 'Offizielle Single Top 100 - Musik Charts | MTV Germany');

        MTVpage.acceptAGBs();
        MTVpage.expandChartList();
        console.log(`Anzahl Neueinsteiger: ${MTVpage.newEntriesList.length}`);
        MTVpage.newEntriesList.forEach(function (newEntry, counter=0) {
            counter++;
            let parentElement = newEntry.$('..').$('..').$('..');
            let songName = parentElement.$('.videoTitle').getText();
            let artistName = parentElement.$('.regular-content').getText();
            let currentPos = parentElement.$('.currentPos').getText();
            console.log(`${counter} ${currentPos}: ${songName} - ${artistName} `);
        });

    });
});