
import { apiHelper } from '../utils';

// 获取用户基本信息
const fetchUserDataHttpRequest = ({ successCb }) => {
    apiHelper({
        url: 'https://webapp.leke.cn/auth/global/tutor/common/getMiniMenu.htm',
        method: 'GET',
        success: function(data) {
            if (data && data.code === '200' && data.success && successCb) {
                successCb(data);
            }
        }
    });
}

// 获取消息数
const fetchNoticeNumHttpRequest = ({ successCb }) => {
    apiHelper({
        url: 'https://webapp.leke.cn/auth/global/notice/common/todo/findNoticeAndAfficheNum.htm',
        method: 'GET',
        success: function(json) {
            if(json.success && successCb) {
                successCb(json.data);
            }
        }
    });
}

// 获取购物车数量
const fetchPayServerNumHttpRequest = ({ successCb }) => {
    apiHelper({
        url: 'https://pay.leke.cn/auth/common/shopCart/cartItemCount.htm',
        jsoncallback: 'jsoncallback',
        method: 'GET',
        success: function(data) {
            if (data.datas && successCb) {
                successCb(data.datas);
            }
        }
    });
}
export {
    fetchUserDataHttpRequest,
    fetchNoticeNumHttpRequest,
    fetchPayServerNumHttpRequest
}