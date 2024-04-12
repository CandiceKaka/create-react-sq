"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _config = require("../../config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SelectRole = function (_React$Component) {
  _inheritsLoose(SelectRole, _React$Component);

  function SelectRole() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_this), "handleChangeRole", function (roleId) {
      var user = _this.props.user;
      var changeRole = _config.indexUrl.changeRole;
      var form = document.createElement('form');
      form.method = 'post';
      form.action = changeRole + "&userId=" + user.userId + "&roleId=" + roleId + "&schoolId=" + user.schoolId;
      document.body.appendChild(form);
      form.submit();
    });

    _defineProperty(_assertThisInitialized(_this), "showRoleSchoolList", function () {
      var user = _this.props.user;
      return user.roleSchoolList && user.roleSchoolList.map(function (ele) {
        var preTitle = ele.schoolNature === 3 && '入驻' || '';
        var roleSchoolTitle = "" + preTitle + ele.roleName + "\u7A7A\u95F4";
        var active = ele.roleId === user.roleId && ele.schoolId === user.schoolId ? 'c-miniHeaderRight_list--active' : '';
        return _react["default"].createElement("li", {
          className: active,
          key: ele.roleId
        }, _react["default"].createElement("a", {
          onClick: function onClick() {
            return _this.handleChangeRole(ele.roleId);
          }
        }, roleSchoolTitle));
      });
    });

    _defineProperty(_assertThisInitialized(_this), "checkIfShowLearnCenter", function () {
      var learnCenter = _config.indexUrl.learnCenter;
      var user = _this.props.user;

      if (user.roleId !== 100) {
        var active = user.isLearnCenter && 'c-miniHeaderRight_list--active' || '';
        return _react["default"].createElement("li", {
          className: active
        }, _react["default"].createElement("a", {
          href: learnCenter
        }, "\u5B66\u4E60\u4E2D\u5FC3"));
      }

      return '';
    });

    return _this;
  }

  var _proto = SelectRole.prototype;

  _proto.render = function render() {
    return _react["default"].createElement("li", {
      className: 'c-miniHeader_right_li c-miniHeaderRight_listselect c-miniHeaderRight_role'
    }, _react["default"].createElement("div", {
      className: 'c-miniHeader_mySpace'
    }, _react["default"].createElement("i", {
      className: ' icon iconfont icon-global-space c-miniHeader_spaceLogo mySpace_headerspace'
    }), _react["default"].createElement("span", null, _react["default"].createElement("a", null, "\u6211\u7684\u7A7A\u95F4")), _react["default"].createElement("i", {
      className: 'c-miniHeader_selectii'
    })), _react["default"].createElement("div", {
      className: 'c-miniHeaderRight_list c-miniHeader_spaceList'
    }, _react["default"].createElement("ul", null, _react["default"].createElement("i", null), this.showRoleSchoolList(), this.checkIfShowLearnCenter())));
  };

  return SelectRole;
}(_react["default"].Component);

exports["default"] = SelectRole;