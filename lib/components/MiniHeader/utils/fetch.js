"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _fetchJsonp = _interopRequireDefault(require("fetch-jsonp"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

require('es6-promise');

require('isomorphic-fetch');

var ContentType = {
  JSON: 'Content-Type: application/json;charset=UTF-8',
  FORM: 'Content-Type: application/x-www-form-urlencoded; charset=UTF-8'
};
var fetchHelp = {
  getJSON: function getJSON(url, params) {
    if (params) {
      var paramsArray = [];
      Object.keys(params).forEach(function (key) {
        return paramsArray.push(key + '=' + params[key]);
      });

      if (url.search(/\?/) === -1) {
        url += '?' + paramsArray.join('&');
      } else {
        url += '&' + paramsArray.join('&');
      }

      url += '&t=' + new Date().getTime();
    } else {
      url += '?t=' + new Date().getTime();
    }

    return new Promise(function (resolve, reject) {
      fetch(url, {
        method: 'GET',
        credentials: 'include'
      }).then(function (response) {
        return response.json();
      }).then(function (response) {
        resolve(response);
      })["catch"](function (error) {
        console.log(error);
      });
    });
  },
  postJSON: function postJSON(url, params) {
    return new Promise(function (resolve, reject) {
      fetch(url, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json;charset=UTF-8'
        },
        body: JSON.stringify(params)
      }).then(function (response) {
        return response.json();
      }).then(function (response) {
        resolve(response);
      })["catch"](function (error) {
        console.log(error);
      });
    });
  },
  deleteJSON: function deleteJSON(url, params) {
    if (params) {
      var paramsArray = [];
      Object.keys(params).forEach(function (key) {
        return paramsArray.push(key + '=' + params[key]);
      });

      if (url.search(/\?/) === -1) {
        url += '?' + paramsArray.join('&');
      } else {
        url += '&' + paramsArray.join('&');
      }

      url += '&t=' + new Date().getTime();
    } else {
      url += '?t=' + new Date().getTime();
    }

    return new Promise(function (resolve, reject) {
      fetch(url, {
        method: 'DELETE',
        credentials: 'include'
      }).then(function (response) {
        return response.json();
      }).then(function (response) {
        resolve(response);
      })["catch"](function (error) {
        console.log(error);
      });
    });
  },
  putJSON: function putJSON(url, params) {
    if (params) {
      var paramsArray = [];
      Object.keys(params).forEach(function (key) {
        return paramsArray.push(key + '=' + params[key]);
      });

      if (url.search(/\?/) === -1) {
        url += '?' + paramsArray.join('&');
      } else {
        url += '&' + paramsArray.join('&');
      }

      url += '&t=' + new Date().getTime();
    } else {
      url += '?t=' + new Date().getTime();
    }

    return new Promise(function (resolve, reject) {
      fetch(url, {
        method: 'PUT',
        credentials: 'include'
      }).then(function (response) {
        return response.json();
      }).then(function (response) {
        resolve(response);
      })["catch"](function (error) {
        console.log(error);
      });
    });
  },
  jsonp: function jsonp(url, params) {
    if (params) {
      var paramsArray = [];
      Object.keys(params).forEach(function (key) {
        return paramsArray.push(key + '=' + params[key]);
      });

      if (url.search(/\?/) === -1) {
        url += '?' + paramsArray.join('&');
      } else {
        url += '&' + paramsArray.join('&');
      }

      url += '&t=' + new Date().getTime();
    } else {
      url += '?t=' + new Date().getTime();
    }

    return new Promise(function (resolve, reject) {
      (0, _fetchJsonp["default"])(url, {
        jsonpCallback: 'jsoncallback'
      }).then(function (response) {
        return response.json();
      }).then(function (response) {
        resolve(response);
      })["catch"](function (error) {
        console.log(error);
      });
    });
  }
};
var _default = fetchHelp;
exports["default"] = _default;