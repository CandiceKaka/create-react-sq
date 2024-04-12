<!-- 2019/01/16 -->
# react组件开发脚手架(发布到npm仓库)

## 介绍
> react组件开发脚手架(发布到公司私有npm仓库)

### 相关文件目录介绍:

````cmd
    ├── build                                   // webpack配置文件目录(此目录配置仅用于本地测试react组件)
    │   ├── webpack.config.base.js              // base 公用基础配置
    │   └── webpack.config.production.js       // production 生产环境配置
    ├── src                                     // 项目业务文件夹
    │   ├── assets                              // 项目资源文件夹
    │   ├── components                          // react公用组件库
    │   ├── containers                          // 页面组件
    │   ├── mock                                // 模拟数据
    │   ├── styles                              // css文件
    │   ├── utils                               // 一些工具
    │   └── index.jsx                           // 组件入口文件
    ├── lib                                     // 打包后生成的文件(package.json中的main是lib中的index.js)
    │   └──                                     
    ├── .babelrc                                // babel配置文件
    ├── .gitignore                              // git 忽略文件
    ├── changelog.md                            // 变更日志
    ├── package.json
    └── README.md
````

## 安装步骤 ##
项目开发人员可安装 npm 或者 yarn 进行包管理，进入项目根目录，运行：

````cmd
    // 安装项目依赖，等待安装完成之后
    yarn
    // !!!不推荐使用 npm
    npm install
````

### 组件开发阶段
- 在./test/src下的项目引入./src下的组件

```bash
npm run dev
```

### 组件开发完成后的测试
- 目标是在组件发布之前,在测试项目中引入开发完成的组件,实现对于组件的基本测试

```bash
npm run test
```

在此之前，需要在test/src/项目中引入lib中的index.js(开发的react组件)
该命令会先打包入口文件test/src/mount.js 然后启动node服务 访问 `http://localhost:8888`


### 项目生产环境编译
- babel命令转换js打包输出到lib文件
运行：
```bash
npm run build
```

## 变更日志

详见： [变更日志](./changelog.md)
