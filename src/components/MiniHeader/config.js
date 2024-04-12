const getLoginUrl = () => {
    const CAS_SVR = 'https://cas.leke.cn';
    const href = window.location.href;
    let url = '';
    if(href.indexOf('eduplan.leke.cn')>-1){
        url = CAS_SVR + '/login?service='+encodeURIComponent(href);
    }else{
        url = CAS_SVR + '/login?service=';
    }
    return url;
};

export const indexUrl = {
    lekeServerName: 'https://www.leke.cn',
    repositoryServerName: 'https://repository.leke.cn',
    eduplanServerName: 'https://eduplan.leke.cn',
    mallServerName: 'https://mall.leke.cn',
    loginUrl: () => getLoginUrl(),
    registerUrl: 'https://tutor.leke.cn/unauth/user/register.htm',
    // 购物车
    payServerName: 'https://pay.leke.cn/auth/common/shopCart/cartItemList.htm',
    // 消息
    // noticeServerName: 'https://notice.leke.cn/auth/common/receivedAffiche.htm',
    noticeServerName: 'https://webapp.leke.cn/notice-web/notice.html#/',
    // 用户头像
    // 个人中心
    userCenter: 'https://tutor.leke.cn/auth/common/user/myDetail.htm',
    // 我的订单
    myOrder: 'https://pay.leke.cn/auth/common/order/orderListForUser.htm',
    helpCenter: 'https://tutor.leke.cn/auth/common/help/help.htm',
    // 默认用户头像
    defaultUserImg: 'https://static.leke.cn/images/home/photo.png',
    // 退出登陆
    logoutUrl: 'https://cas.leke.cn/logout',
    // 学习中心
    learnCenter: 'https://cas.leke.cn/changeLearnCenter',
    // 切换用户空间
    changeRole: 'https://cas.leke.cn/changeRole?ticket=null',
};


