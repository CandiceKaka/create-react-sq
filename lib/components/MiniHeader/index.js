"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _global = require("./global");

var _components = require("./components");

var _config = require("./config");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _service = require("./service");

require("./style/index.module.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var assetsUrl = _global.defaultUrl.assetsUrl;
var logoImgUrl = assetsUrl + "/images/home/topbar/logo.png";

var MiniHeader = function (_React$Component) {
  _inheritsLoose(MiniHeader, _React$Component);

  function MiniHeader(props) {
    var _this2;

    _this2 = _React$Component.call(this, props) || this;

    _defineProperty(_assertThisInitialized(_this2), "checkIfNetworkReq", function () {
      var defaultValue = _this2.props.defaultValue;

      if (defaultValue) {
        _this2.handleUserData(defaultValue.userInfo, _assertThisInitialized(_this2));

        _this2.setState({
          total: defaultValue.messageBoxCount,
          count: defaultValue.shopCartCount
        });
      } else {
        _this2.fetchUserData();
      }
    });

    _defineProperty(_assertThisInitialized(_this2), "fetchUserData", function () {
      var _this = _assertThisInitialized(_this2);

      (0, _service.fetchUserDataHttpRequest)({
        successCb: function successCb(data) {
          _this.handleUserData(data.data, _this);

          _this2.fetchNoticeNum();

          _this2.fetchPayServerNum();
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this2), "fetchNoticeNum", function () {
      var _this = _assertThisInitialized(_this2);

      (0, _service.fetchNoticeNumHttpRequest)({
        successCb: function successCb(data) {
          _this.setState({
            total: parseInt(data)
          });
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this2), "fetchPayServerNum", function () {
      var _this = _assertThisInitialized(_this2);

      (0, _service.fetchPayServerNumHttpRequest)({
        successCb: function successCb(data) {
          data.count && _this.setState({
            count: data.count
          });
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this2), "handleUserData", function (data, _this) {
      var setUserLoginInfoToRedux = _this2.props.setUserLoginInfoToRedux;
      !!setUserLoginInfoToRedux && setUserLoginInfoToRedux(_objectSpread({}, data));

      _this.setState({
        isLogin: true,
        user: data || {},
        currentRoleId: data && data.roleId
      });
    });

    _defineProperty(_assertThisInitialized(_this2), "checkIfHideLogo", function () {
      var serverList = [_global.LEKE_DOMAIN.eduplanServerName, _global.LEKE_DOMAIN.courseServerName, _global.LEKE_DOMAIN.repositoryServerName, _global.LEKE_DOMAIN.indexServerName, _global.LEKE_DOMAIN.lekeServerName, _global.LEKE_DOMAIN.questionServerName, _global.LEKE_DOMAIN.beikeServerName, _global.LEKE_DOMAIN.cloudServerName];
      var origin = window.location.origin;

      if (serverList.indexOf(origin) === -1) {
        _this2.setState({
          showLogo: true
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this2), "checkIfShowResource", function () {
      var _this2$state = _this2.state,
          isLogin = _this2$state.isLogin,
          currentRoleId = _this2$state.currentRoleId;
      if (!isLogin) return false;

      if (currentRoleId < 106 && [100, 102, 103].indexOf(currentRoleId) === -1) {
        return true;
      }

      return false;
    });

    _this2.state = {
      isLogin: false,
      currentRoleId: 0,
      showLogo: false,
      user: {},
      total: '',
      count: 0
    };
    return _this2;
  }

  var _proto = MiniHeader.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.checkIfNetworkReq();
    this.checkIfHideLogo();
  };

  _proto.render = function render() {
    var _this$state = this.state,
        isLogin = _this$state.isLogin,
        showLogo = _this$state.showLogo,
        user = _this$state.user,
        total = _this$state.total,
        count = _this$state.count;
    return _react["default"].createElement("div", {
      className: 'c-miniHeader_container'
    }, _react["default"].createElement("div", {
      className: "c-miniHeader_content " + (isLogin ? '' : 'c-miniHeader_notLogin')
    }, isLogin && showLogo && _react["default"].createElement(LogoImg, null), _react["default"].createElement("div", {
      className: 'c-miniHeader_center'
    }, _react["default"].createElement("a", {
      href: _config.indexUrl.lekeServerName,
      target: "_blank"
    }, "\u4E50\u8BFE\u7F51\u9996\u9875"), this.checkIfShowResource() && _react["default"].createElement(Resource, null), _react["default"].createElement("span", {
      className: 'c-miniHeader_line'
    }, " | "), _react["default"].createElement("a", {
      href: _config.indexUrl.eduplanServerName,
      target: "_blank"
    }, "\u5347\u5B66\u89C4\u5212"), _react["default"].createElement("span", {
      className: 'c-miniHeader_line'
    }, " | "), _react["default"].createElement("a", {
      href: _config.indexUrl.mallServerName,
      target: "_blank"
    }, "\u4E50mall")), !isLogin && _react["default"].createElement(Login, null), _react["default"].createElement("div", {
      className: 'c-miniHeader_right'
    }, _react["default"].createElement("ul", null, _react["default"].createElement(_components.ShopCart, {
      count: count
    }), _react["default"].createElement(_components.MessageBox, {
      total: total
    }), isLogin && _react["default"].createElement(_components.UserInfoMini, {
      isLogin: isLogin,
      user: user
    }), isLogin && _react["default"].createElement(_components.SelectRole, {
      isLogin: isLogin,
      user: user
    })))));
  };

  return MiniHeader;
}(_react["default"].Component);

exports["default"] = MiniHeader;
MiniHeader.defaultProps = {
  setUserLoginInfoToRedux: function setUserLoginInfoToRedux() {}
};
MiniHeader.propTypes = {
  defaultValue: _propTypes["default"].object,
  setUserLoginInfoToRedux: _propTypes["default"].func
};

var LogoImg = function LogoImg() {
  return _react["default"].createElement("div", {
    className: 'c-miniHeader_left'
  }, _react["default"].createElement("img", {
    src: logoImgUrl,
    alt: "",
    className: 'c-logo_img'
  }));
};

var Resource = function Resource() {
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("span", {
    className: 'c-miniHeader_line'
  }, " | "), _react["default"].createElement("a", {
    href: _config.indexUrl.repositoryServerName,
    target: "_blank"
  }, "\u8D44\u6E90\u5E93"));
};

var Login = function Login() {
  return _react["default"].createElement("div", {
    className: 'c-miniHeader_loginregister'
  }, _react["default"].createElement("a", {
    href: _config.indexUrl.loginUrl(),
    className: 'c-miniHeader_headlogin'
  }, "\u767B\u5F55"), _react["default"].createElement("span", {
    className: 'c-miniHeader_line'
  }, " | "), _react["default"].createElement("a", {
    href: _config.indexUrl.registerUrl,
    className: 'c-miniHeader_headregister'
  }, "\u6CE8\u518C"));
};