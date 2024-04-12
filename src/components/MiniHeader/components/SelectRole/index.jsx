import React from 'react';
import { indexUrl } from '../../config';

export default class SelectRole extends React.Component {
    // 用form表单提交
    handleChangeRole = (roleId) => {
        const { user } = this.props;
        const { changeRole } = indexUrl;
        var form = document.createElement('form');
        form.method = 'post';
        form.action = `${changeRole}&userId=${user.userId}&roleId=${roleId}&schoolId=${user.schoolId}`;
        document.body.appendChild(form);
        form.submit();
    }
    showRoleSchoolList = () => { 
        const { user } = this.props;
        return user.roleSchoolList && user.roleSchoolList.map(ele => {
            const preTitle = ele.schoolNature === 3 && '入驻' || '';
            const roleSchoolTitle = `${preTitle}${ele.roleName}空间`;
            const active = (ele.roleId === user.roleId && ele.schoolId === user.schoolId) ? 'c-miniHeaderRight_list--active' : '';
            return <li className={active} key={ele.roleId}>
                <a onClick={() => this.handleChangeRole(ele.roleId)}>{roleSchoolTitle}</a>
            </li>;
        });
    }
    checkIfShowLearnCenter = () => {
        const { learnCenter } = indexUrl;
        const { user } = this.props;
        if (user.roleId !== 100) {
            const active = user.isLearnCenter && 'c-miniHeaderRight_list--active' || '';
            return <li className={active}>
                <a href={learnCenter}>学习中心</a>
            </li>;
        }
        return '';
    }
    render() {
        return (
            <li className={'c-miniHeader_right_li c-miniHeaderRight_listselect c-miniHeaderRight_role'}>
                <div className={'c-miniHeader_mySpace'}>
                    <i className={' icon iconfont icon-global-space c-miniHeader_spaceLogo mySpace_headerspace' }></i>
                    <span><a>我的空间</a></span>
                    <i className={'c-miniHeader_selectii'}></i>
                </div>
                <div className={'c-miniHeaderRight_list c-miniHeader_spaceList'}>
                    <ul>
                        <i></i>
                        {
                            this.showRoleSchoolList()
                        }
                        {
                            this.checkIfShowLearnCenter()
                        }
                    </ul> 
                </div>
            </li>
        );
    }
}
