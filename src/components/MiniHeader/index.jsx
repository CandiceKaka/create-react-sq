import React from 'react';
import { defaultUrl, LEKE_DOMAIN as LD } from './global';
import { ShopCart, MessageBox, UserInfoMini, SelectRole } from './components';
import { indexUrl } from './config';
import PropTypes from 'prop-types';
import { 
    fetchUserDataHttpRequest,
    fetchNoticeNumHttpRequest,
    fetchPayServerNumHttpRequest
} from './service';

import './style/index.module.less';

const { assetsUrl } = defaultUrl;
const logoImgUrl = `${assetsUrl}/images/home/topbar/logo.png`;

export default class MiniHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: false,
            currentRoleId: 0,
            showLogo: false,
            user: {}, // 用户信息
            total: '', // 消息数
            count: 0, // 购物车数
        };
    }
    componentDidMount() {
        this.checkIfNetworkReq();
        // 特殊情况不显示Logo
        this.checkIfHideLogo();
    }
    // 检查是否是定制的情况, 即不请求数据
    checkIfNetworkReq = () => {
        const { defaultValue } = this.props;
        if (defaultValue) {
            this.handleUserData(defaultValue.userInfo, this);
            this.setState({
                total: defaultValue.messageBoxCount,
                count: defaultValue.shopCartCount,
            });
        } else {
            // 获取用户信息
            this.fetchUserData();
        }
    }
    fetchUserData = () => {
        const _this = this;
        fetchUserDataHttpRequest({
            successCb: (data) => {
                _this.handleUserData(data.data, _this);
                // 获取消息数
                this.fetchNoticeNum();
                // 获取购物车数
                this.fetchPayServerNum();
            }
        })
    }
    fetchNoticeNum = () => {
        const _this = this;
        fetchNoticeNumHttpRequest({
            successCb: (data) => {
                _this.setState({
                    total: parseInt(data)
                });
            }
        })
    }
    fetchPayServerNum = () => {
        const _this = this;        
        fetchPayServerNumHttpRequest({
            successCb: data => {
                data.count && _this.setState({
                    count: data.count,
                });
            }
        })
    }
    handleUserData = (data, _this) => {
        const { setUserLoginInfoToRedux } = this.props;
        !!setUserLoginInfoToRedux && setUserLoginInfoToRedux({ ...data });
        _this.setState({
            isLogin: true,
            user: data || {},
            currentRoleId: data && data.roleId,
        });
    }
    checkIfHideLogo = () => {
        const serverList = [
            LD.eduplanServerName, LD.courseServerName,
            LD.repositoryServerName, LD.indexServerName,
            LD.lekeServerName, LD.questionServerName,
            LD.beikeServerName, LD.cloudServerName
        ];
        var origin = window.location.origin;
        if (serverList.indexOf(origin) === -1) {
            this.setState({
                showLogo: true,
            });
        }
    }
    checkIfShowResource = () => {
        const { isLogin, currentRoleId } = this.state;
        if (!isLogin) return false;
        if (currentRoleId < 106 && [100, 102, 103].indexOf(currentRoleId) === -1) {
            return true;
        }
        return false;
    }
    render() {
        const { isLogin, showLogo, user, total, count } = this.state;
        return (
            <div className={'c-miniHeader_container'}>
                <div className={`c-miniHeader_content ${isLogin?'':'c-miniHeader_notLogin'}`}>
                    {
                        /* 登陆了才显示logo*/
                        isLogin && showLogo && <LogoImg />
                    }
                    <div className={'c-miniHeader_center'}>
                        <a href={indexUrl.lekeServerName} target="_blank">乐课网首页</a>
                        {
                            /* currentRoleId 为...时才显示资源库*/
                           this.checkIfShowResource() && <Resource />
                        }
                        <span className={'c-miniHeader_line'}> | </span>
                        <a href={indexUrl.eduplanServerName} target="_blank">升学规划</a>
                        <span className={'c-miniHeader_line'}> | </span>
                        <a href={indexUrl.mallServerName} target="_blank">乐mall</a>
                    </div>
                        {
                            /**
                             * currentRoleId 为 null ，则表示未登陆
                             */
                            !isLogin && <Login />
                        }
                    <div className={'c-miniHeader_right'}>
                        <ul>
                            {/* 购物车 */}
                            <ShopCart count={count} />
                            {/* 消息 */}
                            <MessageBox total={total} />
                            {
                                /* 用户信息 */
                                isLogin && <UserInfoMini isLogin={isLogin} user={user} />
                            }
                            {
                                /* 用户空间 */
                                isLogin && <SelectRole isLogin={isLogin} user={user} />
                            }
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
MiniHeader.defaultProps = {
    // userInfo: {}, shopCartCount: 0, messageBoxCount: 0
    setUserLoginInfoToRedux: () => {}
};
MiniHeader.propTypes = {
    defaultValue: PropTypes.object,
    setUserLoginInfoToRedux: PropTypes.func,
};

const LogoImg = () =>
    <div className={'c-miniHeader_left'}>
        <img src={logoImgUrl} alt="" className={'c-logo_img'} />
    </div>;

const Resource = () =>
<React.Fragment>
    <span className={'c-miniHeader_line'}> | </span>
    <a href={indexUrl.repositoryServerName} target="_blank">资源库</a>
</React.Fragment>;

const Login = () =>
    <div className={'c-miniHeader_loginregister'}>
        <a href={indexUrl.loginUrl()} className={'c-miniHeader_headlogin'}>登录</a>
        <span className={'c-miniHeader_line'}> | </span>
        <a href={indexUrl.registerUrl} className={'c-miniHeader_headregister'}>注册</a>
    </div>;


