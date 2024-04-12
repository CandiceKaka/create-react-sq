"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _config = require("../../config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ShopCart = function ShopCart(_ref) {
  var count = _ref.count;
  return _react["default"].createElement("li", {
    className: 'c-miniHeader_right_li'
  }, _react["default"].createElement("i", {
    className: 'icon iconfont icon-global-gouwuche c-miniHeader_shoppingcart'
  }), _react["default"].createElement("a", {
    href: _config.indexUrl.payServerName,
    target: "_blank"
  }, "\u8D2D\u7269\u8F66(", _react["default"].createElement("span", {
    id: "j_cartshop_total_header"
  }, count), ")"));
};

var _default = ShopCart;
exports["default"] = _default;