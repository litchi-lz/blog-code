#####  1. 版本控制(多次尝试,符合vue 中展示、读取.md 文件)

```js
node 12.16.2,
node-sass:^4.14.1,
sass-loader:^8.0.2, 
```
----
##### 2. [使用教程链接](https://blog.csdn.net/weixin_42681555/article/details/121603656)
---
##### 3.编译打包时出现 
```js
 Cannot read property ‘__vueMarkdownOptions__‘ of undefined
```
##### 解决办法vue.config.js文件中配置
```js

module.exports = {
  parallel: false,
};
```
---
```
vue cli 官网：是否为 Babel 或 TypeScript 使用 thread-loader。该选项在系统的 CPU 有多于一个内核时自动启用，仅作用于生产构建。
```

---
```
灵异事件,不加有时候也没问题~~
```