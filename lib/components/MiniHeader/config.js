"use strict";

exports.__esModule = true;
exports.indexUrl = void 0;

var getLoginUrl = function getLoginUrl() {
  var CAS_SVR = 'https://cas.leke.cn';
  var href = window.location.href;
  var url = '';

  if (href.indexOf('eduplan.leke.cn') > -1) {
    url = CAS_SVR + '/login?service=' + encodeURIComponent(href);
  } else {
    url = CAS_SVR + '/login?service=';
  }

  return url;
};

var indexUrl = {
  lekeServerName: 'https://www.leke.cn',
  repositoryServerName: 'https://repository.leke.cn',
  eduplanServerName: 'https://eduplan.leke.cn',
  mallServerName: 'https://mall.leke.cn',
  loginUrl: function loginUrl() {
    return getLoginUrl();
  },
  registerUrl: 'https://tutor.leke.cn/unauth/user/register.htm',
  payServerName: 'https://pay.leke.cn/auth/common/shopCart/cartItemList.htm',
  noticeServerName: 'https://webapp.leke.cn/notice-web/notice.html#/',
  userCenter: 'https://tutor.leke.cn/auth/common/user/myDetail.htm',
  myOrder: 'https://pay.leke.cn/auth/common/order/orderListForUser.htm',
  helpCenter: 'https://tutor.leke.cn/auth/common/help/help.htm',
  defaultUserImg: 'https://static.leke.cn/images/home/photo.png',
  logoutUrl: 'https://cas.leke.cn/logout',
  learnCenter: 'https://cas.leke.cn/changeLearnCenter',
  changeRole: 'https://cas.leke.cn/changeRole?ticket=null'
};
exports.indexUrl = indexUrl;