"use strict";

exports.__esModule = true;
exports.fetchPayServerNumHttpRequest = exports.fetchNoticeNumHttpRequest = exports.fetchUserDataHttpRequest = void 0;

var _utils = require("../utils");

var fetchUserDataHttpRequest = function fetchUserDataHttpRequest(_ref) {
  var successCb = _ref.successCb;
  (0, _utils.apiHelper)({
    url: 'https://webapp.leke.cn/auth/global/tutor/common/getMiniMenu.htm',
    method: 'GET',
    success: function success(data) {
      if (data && data.code === '200' && data.success && successCb) {
        successCb(data);
      }
    }
  });
};

exports.fetchUserDataHttpRequest = fetchUserDataHttpRequest;

var fetchNoticeNumHttpRequest = function fetchNoticeNumHttpRequest(_ref2) {
  var successCb = _ref2.successCb;
  (0, _utils.apiHelper)({
    url: 'https://webapp.leke.cn/auth/global/notice/common/todo/findNoticeAndAfficheNum.htm',
    method: 'GET',
    success: function success(json) {
      if (json.success && successCb) {
        successCb(json.data);
      }
    }
  });
};

exports.fetchNoticeNumHttpRequest = fetchNoticeNumHttpRequest;

var fetchPayServerNumHttpRequest = function fetchPayServerNumHttpRequest(_ref3) {
  var successCb = _ref3.successCb;
  (0, _utils.apiHelper)({
    url: 'https://pay.leke.cn/auth/common/shopCart/cartItemCount.htm',
    jsoncallback: 'jsoncallback',
    method: 'GET',
    success: function success(data) {
      if (data.datas && successCb) {
        successCb(data.datas);
      }
    }
  });
};

exports.fetchPayServerNumHttpRequest = fetchPayServerNumHttpRequest;