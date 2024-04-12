"use strict";

exports.__esModule = true;
exports.formatNum = void 0;

var formatNum = function formatNum(val) {
  return val > 99 ? '99+' : val + '';
};

exports.formatNum = formatNum;