import React from 'react';
import { defaultUrl } from '../../global';
import { indexUrl } from '../../config';

// 根据服务端的sex字段显示相应的默认值
const defaultHeaderObj = {
    1: 'https://static.leke.cn/images/home/photo-man.png', // 男生默认头像
    2: 'https://static.leke.cn/images/home/photo-female.png', //女生默认头像
    3: 'https://static.leke.cn/images/home/photo.png', // 保密默认头像
};
export default class UserInfoMini extends React.Component {

    checkIfShowLogout = () => {
        const { logoutUrl } = indexUrl;
        const { user } = this.props;
        // 若currentSchoolId == -1，带上施强商学院
        if (user.schoolId === -1) {
            return `${logoutUrl}?service=sclass.leke.cn`;
        }
        return logoutUrl;
    }
 
    render() {
        const { user } = this.props;
        const { fileUrl } = defaultUrl;
        const { userCenter, myOrder } = indexUrl;
        // 根据服务端的sex字段显示相应的默认值
        let userImg = user.avatar ? `${fileUrl}${user.avatar}` : defaultHeaderObj[user.sex];
        // 如果sex为null 则设置保密默认头像
        userImg = userImg ? userImg : 'https://static.leke.cn/images/home/photo.png';
        // const userImg = user.avatar ? `${fileUrl}${user.avatar}` : defaultUserImg;
        const logoutUrl = this.checkIfShowLogout();
        return (
            <li className={'c-miniHeader_right_li c-miniHeaderRight_listselect c-miniHeader_userInfo'}>
                <div className={'c-miniHeaderRight_select'}>
                    <a href={userCenter} className={'c-miniHeaderRight_person'}>
                        <img src={userImg} alt="" />
                    </a>
                    <span>{user.userName || ''}</span>
                    <i></i>
                </div>
                <div className={'c-miniHeaderRight_list c-miniHeader_userInfoSelect'}>
                    <ul>
                        <i></i>
                        <li><a target="_blank" href={userCenter}>个人中心</a></li>
                        <li><a target="_blank" href={myOrder}>我的订单</a></li>
                    </ul>
                    <div className={'c-miniHeaderRight_logout'}>
                        <a href={logoutUrl}>退出登录</a>
                    </div>
                </div>
            </li>
        );
    }
}

