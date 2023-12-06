##### 解决方法
##### 1.在项目根目录下，新建  vue.config.js
---
```js
module.exports = {
    publicPath: './'
}
```
##### 2.修改路由配置，router/index.js
```
默认使用的 createWebHistory，就是因为使用的 createWebHistory，所以不显示内容，我们需要改成  createWebHashHistory
```
----
```js
// 1.需要引入 
import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

// 2.修改配置
const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})
```
##### 3.重新打包