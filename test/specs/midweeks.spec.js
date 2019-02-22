const assert = require('assert');
const MTVpage = require('../pageObject/MTV.page.js');
const CHARTS = require('../../CHARTS').CHARTS;


describe('mtv', function () {
    it('should display single midweeks charts', function () {
        this.retries(2);
        MTVpage.collectCharts(CHARTS.single_midweeks);
    });
});

describe('mtv', function () {
    it('should display album midweeks charts', function () {
        this.retries(2);
        MTVpage.collectCharts(CHARTS.album_midweeks);
    });
});




