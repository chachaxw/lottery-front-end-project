
## Webpack-React-Redux-ES6-Boilerplate Environment

This is a react single page application quick start project, you can clone it and start your project quickly. It includes react, redux and react-router. If any problems, you can commit your issues on the github.

## Getting start

  1. Clone repo:
  ```
  $ git clone https://git.coding.net/chacha/lottery-front-end-project.git
  ```

  2. Install dependencies
  ```
  $ npm install or yarn install
  ```

  3. Debug
  ```
  $ npm start
  ```
  then access browser: `http://localhost:3000`

  4. Build for production
  ```
  $ npm build
  ```

  ## Project Structure

```
.
├── cheatsheet/                   # react cheatsheet and redux cheatsheet
│   └── ...
├── src/
│   ├── actions/                  # Redux actions
│   │   └── ...
│   ├── components/               # React components
│   │   └── ...
│   ├── store/                    # Redux store
│   │   └── ...
│   ├── helpers/                  # helper tools
│   │   └── ...
│   ├── reducers/                 # Redux reducers
│   │   └── ...
│   ├── app.js                    # app entry file
│   ├── routes.js                 # app router
│   ├── App.vue                   # app main component
│   └── index.html                # index page
├── dist/                         # pure static assets (directly copied)
├── .babelrc                      # babel config
├── .editorconfig.js              # editor config
├── .eslintrc.js                  # eslint config
├── webpack.config.js             # webpack config
├── webpack.development.js        # webpack dev config
├── webpack.production.js         # webpack production config
├── server.js                     # Dev server
└── package.json                  # build scripts and dependencies
└── yarn.lock                     # Yarn file

```
### 第一周计划
已完成主页面框架搭建，添加页面之间的路由跳转，添加页面公用组件，页面模拟数据的添加。目前已完成的页面: 添加银行卡，设置，收益统计，添加下级，资料编辑，消息通知，登录，注册，首页，个人管理，我的钱包，图文混排。

### 第二周计划
完成投注页面，下注下单，数据统计，充值，提现，转账，投注记录，收益统计，下级管理，开奖记录前端页面布局，部分数据渲染。

### 第三周计划
完善页面模拟数据，完善页面样式细节，添加部分页面弹窗，修复一些样式问题和页面交互bug。

### 第四周计划
完善页面细节，定义页面事件，完善页面样式，修复页面bug，配合需求方完成数据调试。

