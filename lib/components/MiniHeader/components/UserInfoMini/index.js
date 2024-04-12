"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _global = require("../../global");

var _config = require("../../config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var defaultHeaderObj = {
  1: 'https://static.leke.cn/images/home/photo-man.png',
  2: 'https://static.leke.cn/images/home/photo-female.png',
  3: 'https://static.leke.cn/images/home/photo.png'
};

var UserInfoMini = function (_React$Component) {
  _inheritsLoose(UserInfoMini, _React$Component);

  function UserInfoMini() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_this), "checkIfShowLogout", function () {
      var logoutUrl = _config.indexUrl.logoutUrl;
      var user = _this.props.user;

      if (user.schoolId === -1) {
        return logoutUrl + "?service=sclass.leke.cn";
      }

      return logoutUrl;
    });

    return _this;
  }

  var _proto = UserInfoMini.prototype;

  _proto.render = function render() {
    var user = this.props.user;
    var fileUrl = _global.defaultUrl.fileUrl;
    var userCenter = _config.indexUrl.userCenter,
        myOrder = _config.indexUrl.myOrder;
    var userImg = user.avatar ? "" + fileUrl + user.avatar : defaultHeaderObj[user.sex];
    userImg = userImg ? userImg : 'https://static.leke.cn/images/home/photo.png';
    var logoutUrl = this.checkIfShowLogout();
    return _react["default"].createElement("li", {
      className: 'c-miniHeader_right_li c-miniHeaderRight_listselect c-miniHeader_userInfo'
    }, _react["default"].createElement("div", {
      className: 'c-miniHeaderRight_select'
    }, _react["default"].createElement("a", {
      href: userCenter,
      className: 'c-miniHeaderRight_person'
    }, _react["default"].createElement("img", {
      src: userImg,
      alt: ""
    })), _react["default"].createElement("span", null, user.userName || ''), _react["default"].createElement("i", null)), _react["default"].createElement("div", {
      className: 'c-miniHeaderRight_list c-miniHeader_userInfoSelect'
    }, _react["default"].createElement("ul", null, _react["default"].createElement("i", null), _react["default"].createElement("li", null, _react["default"].createElement("a", {
      target: "_blank",
      href: userCenter
    }, "\u4E2A\u4EBA\u4E2D\u5FC3")), _react["default"].createElement("li", null, _react["default"].createElement("a", {
      target: "_blank",
      href: myOrder
    }, "\u6211\u7684\u8BA2\u5355"))), _react["default"].createElement("div", {
      className: 'c-miniHeaderRight_logout'
    }, _react["default"].createElement("a", {
      href: logoutUrl
    }, "\u9000\u51FA\u767B\u5F55"))));
  };

  return UserInfoMini;
}(_react["default"].Component);

exports["default"] = UserInfoMini;