'use strict';

module.exports = function (selector) {
  return Array.prototype.slice.call(document.querySelectorAll(selector), 0);
};
