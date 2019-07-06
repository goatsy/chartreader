const assert = require('assert');
const MTVpage = require('../test/pageObject/MTV.page.js');
const CHARTS = require('../CHARTS').CHARTS;

describe('mtv', function () {
    it('should display album charts', function () {
        MTVpage.collectCharts(CHARTS.album);
    });
});



