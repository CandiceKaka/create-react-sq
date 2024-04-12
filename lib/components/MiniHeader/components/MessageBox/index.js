"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _utils = require("../../utils");

var _config = require("../../config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var singleMax = 9;

var MessageBox = function MessageBox(_ref) {
  var total = _ref.total;
  return _react["default"].createElement("li", {
    className: 'c-miniHeader_right_li'
  }, _react["default"].createElement("i", {
    className: 'icon iconfont icon-global-xiaoxi c-miniHeader_noticeLogo'
  }), _react["default"].createElement("a", {
    href: _config.indexUrl.noticeServerName,
    target: "_blank",
    className: 'c-miniHeader_msgMarginRight'
  }, "\u6D88\u606F", total !== '' && _react["default"].createElement("span", {
    id: "j_notice_total_header",
    className: total > singleMax ? 'c-miniHeader_masseagDoubleNum' : total > 0 ? 'masseagSingleNum' : 'hideMsgNum'
  }, (0, _utils.formatNum)(total))));
};

var _default = MessageBox;
exports["default"] = _default;