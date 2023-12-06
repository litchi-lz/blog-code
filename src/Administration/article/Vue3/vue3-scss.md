##### 老版安装sass
#####  VUE 提示 Failed to resolve Loader: sass-loader









###### 查找问题：说明项目中没有 sass-loader依赖，由于sass-loader需要node-sass组件,所以我们需要安装的是两个组件：




```js
node-sass

sass-loader
```

---
##### 但不能直接安装最新的：
```js

npm i node-sass -D

npm i sass-loader -D

这样会报错：Syntax Error: TypeError: this.getOptions is not a function
```

---

##### 结合报错原因得出：
```js

安装时指定版本即不会出现Syntax Error: TypeError: this.getOptions is not a function

npm i -D sass-loader@8.x // 安装

npm i -D node-sass@4.14.1 // 安装

```
--- 
##### 新版安装sass
```
npm i -D sass
```
---

##### 同理也可能是less-loader导致的

通常提示

```js
Syntax Error: TypeError: this.getOptions is not a function

提示语法错误都是 版本问题

```
---
##### 所以解决问题与安装过程中记得指定版本，不要最新版的直接安装

###### 通过降级版本号是最快捷的方法

```js
卸载 less-loader

npm uninstall --save less-loader
```
---
##### 安装一个低版本的

```js
npm install -D less-loader@7.3.0
```
-----------------------------------
