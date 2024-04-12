//专用react组件测试
import React, {Component} from "react";
import styles from "./index.scss";
// import MiniHeader from '../../src/components/MiniHeader'

//下面需要引入你要发布的组件
const CommonPage =process.env.NODE_ENV === "development"? require("../../src/index"): require("../../lib/index");

const {MiniHeader, Foot, BusHeader,Toolbar} = CommonPage;
window.Leke={
    user:{
        userId: 956502
    }
}
localStorage.setItem('Leke', JSON.stringify(Leke));
class App extends Component {
	constructor(props) {
		super(props);
        this.state = {
        icon: 'schoolclass',
        title: '校园课堂',
        subs: [{
            roleId: 100, // 角色id
            menus: [{
                key: '互批作业', // tab名
                url: 'http://localhost:8080/teachLesson.html#/361393/%E7%AC%AC%E4%B8%80%E8%8A%82%E8%AF%BE', // 跳转地址
                data: 'https://homework.leke.cn/auth/student/homework/getStuHwDoingCorrectTotal.htm?studentId='+Leke.user.userId,	// 请求
                defaultActive: true,	// 是否高亮
            },{
                key: '行为报告',
                url: 'https://www.google.com/',
                defaultActive: false,
            }]
        },{
            roleId: 101, // 角色id
            menus: [{
                key: '互批作业', // tab名
                url: 'https://www.baidu.com/', // 跳转地址
                data: 'https://homework.leke.cn/auth/student/homework/getStuHwDoingCorrectTotal.htm?studentId=356551',	// 请求
                defaultActive: true,	// 是否高亮
            },{
                key: '作业管理',
                url: 'https://www.google.com/',
                defaultActive: false,
            }]
        }],
    };
	}

	handleSetUserLoginInfo = userInfo => {
		console.log(userInfo);
	};

	render() {
        // console.log(MiniHeader)
		return (
			<div className={styles.container}>
				<MiniHeader
					setUserLoginInfoToRedux={this.handleSetUserLoginInfo}
				/>
                <BusHeader
                    icon={ this.state.icon }
					title={ this.state.title }
					subs={ this.state.subs }
                />
				<h1>react组件测试文件</h1>
                <Toolbar />
				<Foot />
			</div>
		);
	}
}

export default App;
