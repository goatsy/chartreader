const assert = require('assert');
const MTVpage = require('../pageObject/MTV.page.js');
const URL = require('../../URL').CHART_URLS;



describe('mtv', function () {
    it('should display single charts', function () {
        this.retries(2);
        MTVpage.collectCharts(URL.single, "single");
    });
});

describe('mtv', function () {
    it('should display album charts', function () {
        this.retries(2);
        MTVpage.collectCharts(URL.album, "album");
    });
});

describe('mtv', function () {
    it('should display single midweeks charts', function () {
        this.retries(2);
        MTVpage.collectCharts(URL.single_midweeks, "single_midweeks");
    });
});

describe('mtv', function () {
    it('should display album midweeks charts', function () {
        this.retries(2);
        MTVpage.collectCharts(URL.album_midweeks, "album_midweeks");
    });
});




