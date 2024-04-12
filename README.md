### 迷你头部:
- #### 网络请求：

    1. 获取用户基本信息，若成功登陆code为200。https://tutor.leke.cn/auth/global/tutor/common/getMiniMenu.htm, GET类型，无参数。

    2. 获取用户未读消息数量
https://webapp.leke.cn/auth/global/notice/common/todo/findNoticeAndAfficheNum.htm, GET类型，无参数。

    3. 获取用户购物车数量
https://pay.leke.cn/auth/common/shopCart/cartItemCount.htm, GET类型，无参数。
- #### 使用方法：

    1. 组件引入：```import MiniHeader from '@cnstrong/components-mini-header' ```;

    2. 组件使用：```<MiniHeader />```
- #### API：
    1. 属性：setUserLoginInfoToRedux

		说明：拿到用户登陆信息

		类型：函数

		默认值：() => {}

		要求结构： -
	2. 属性：defaultValue
		
		说明：给定用户信息，组件内部不再请求

		类型：对象

		默认值：-

		要求结构：```{ userInfo: <object>, shopCartCount: <number | string>, messageBoxCount: <number | string> }```


- #### tips:

    1. 组件向外暴露setUserLoginInfoToRedux方法，此方法在获取用户信息后执行，并传递用户信息，可根据需要自行操作redux或其他存储方式。

    2. 网络请求中使用的“apiHelper"方法，实际开发中可自行修改，默认使用axios和jsonp进行请求。
   
    3. 组件样式使用less进行预处理，样式文件命名为index.module.less，未使用css-moduls。若项目开启css-module时，需要排除迷你头文件。附上处理方法：
		```javascript
			{
				test: /\.module.(less)$/,
				include: /(MiniHeader)/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
					},
					{
						loader: 'less-loader',
					},
				]
			},
		```

    

- #### 疑问:

    1. 用户信息中的roleid是否会有重复的。

- #### 备注:

    1. 对于年级组长及学科组长这两种角色，现无人使用，为方便以后配置仍然保留，对于接口403的情况暂不处理。
- #### 更新日志:

    1. v1.2.0

    	1.发布时间：2019.04.17

    	2.更新内容：

		(1). mini头的未读计数: 未读数为个位数时，为圆形背景; 为双位数时，为椭圆形背景; 为零时，不显示。

		(2). 老项目老mini头的跳转链接由${initParam.noticeServerName}/auth/common/todo/myTodoList.htm"替换成${initParam.noticeServerName}/auth/common/receivedAffiche.htm。

		(3). 跳转链接与新链接（https://webapp.leke.cn/notice-web/notice.html#/）的重定向由运维配置完成。
- #### 已使用项目备注:
	1.  项目名：校历设置
	
		使用时版本号：1.2.0

		页面链接：https://webapp.leke.cn/schoolCalendar-web/index.html#/schoolCalendar

		仓库地址：https://gitlab.leke.cn/frontend/leke-webapp/fe-education/schoolCalendar-web
	
	2.  项目名：选排课

		使用时版本号：1.2.2-beta

		页面链接：https://webapp.leke.cn/lesson-web/index.html#/smartPaike/publishDaliySchedule?paikeTaskId=2597

		仓库地址：https://gitlab.leke.cn/frontend/leke-webapp/fe-education/lesson-web


PROJECT.md为组件脚手架介绍

ROLEID.md为角色Id介绍文件
