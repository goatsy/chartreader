const assert = require('assert');
const MTVpage = require('../pageObject/MTV.page.js');
const CHARTS = require('../../CHARTS').CHARTS;

describe('mtv', function () {
    it('should display single charts', function () {
        this.retries(2);
        MTVpage.collectCharts(CHARTS.single);
    });
});

describe('mtv', function () {
    it('should display album charts', function () {
        this.retries(2);
        MTVpage.collectCharts(CHARTS.single_midweeks);
    });
});





