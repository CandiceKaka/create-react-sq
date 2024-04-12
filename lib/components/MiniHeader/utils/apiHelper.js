"use strict";

exports.__esModule = true;
exports["default"] = _default;

var _axios = _interopRequireDefault(require("axios"));

var _jsonp = _interopRequireDefault(require("jsonp"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _default(_ref) {
  var _ref$method = _ref.method,
      method = _ref$method === void 0 ? 'GET' : _ref$method,
      url = _ref.url,
      _ref$data = _ref.data,
      data = _ref$data === void 0 ? {} : _ref$data,
      _success = _ref.success,
      _error = _ref.error,
      done = _ref.done,
      jsonp = _ref.jsonp,
      jsoncallback = _ref.jsoncallback,
      _ref$dataType = _ref.dataType,
      dataType = _ref$dataType === void 0 ? 'json' : _ref$dataType,
      res = _objectWithoutPropertiesLoose(_ref, ["method", "url", "data", "success", "error", "done", "jsonp", "jsoncallback", "dataType"]);

  var _url = url;

  var _data = _objectSpread({}, data);

  var param = {
    method: method,
    url: _url,
    data: _data,
    withCredentials: true,
    crossDomain: true,
    success: function success(data) {
      if (_success) {
        _success(data);
      }
    },
    error: function error(err) {
      if (_error) {
        _error(err);
      }
    },
    complete: function complete(xhr, status) {
      if (done) {
        done(xhr, status);
      }
    }
  };

  if (method.toUpperCase() === 'POST') {
    param = Object.assign({}, param, {
      dataType: 'json',
      contentType: 'application/json;charset=utf-8'
    });
  }

  param = Object.assign({}, param, jsoncallback && {
    jsoncallback: jsoncallback
  });

  if (param.jsoncallback) {
    doJsonp(param);
    return;
  }

  doAxios(param);
}

var doJsonp = function doJsonp(param) {
  var url = param.url,
      jsoncallback = param.jsoncallback;
  (0, _jsonp["default"])(url, {
    param: jsoncallback
  }, function (err, data) {
    if (err) {
      console.error(err.message);
    } else {
      param.success(data);
    }
  });
};

var doAxios = function doAxios(param) {
  (0, _axios["default"])(param).then(function (res) {
    var data = res.status ? res.data : res;
    param.success(data);
  })["catch"](function (err) {
    param.error(err);
  });
};