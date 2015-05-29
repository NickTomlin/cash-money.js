'use strict';

var FIXTURE_SELECTOR = '#fixture';

describe('cashMoney', function () {
  beforeEach(function () {
    this.fixture = document.querySelector(FIXTURE_SELECTOR);

    ['one', 'two', 'three'].reduce(function (elem, item) {
      var p = document.createElement('p');
      p.textContent = item;
      elem.appendChild(p);
      return elem;
    }, this.fixture);
  });

  afterEach(function () {
    this.fixture.innerHTML = '';
  });

  it('returns an array of DOM Elements', function () {
    assert.equal($$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$('p').length, 3);
  });
});
