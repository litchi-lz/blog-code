#### 微信小程序实现自定义导航栏

##### 1. 全局进行相关配置或者当前页面配置
```js
/** app.json */
"window": {
    "navigationStyle": "custom"
},

/** index.json */
{
  "usingComponents": {
    "nav-bar": "/component/navbar/navbar"
  },
  "navigationStyle": "custom"
}
```
---

##### 2. app.js页面中获取设备顶部窗口的高度

```js
/** app.js*/

App({
 onLaunch: function(options) {
 var _this = this;
 //自定义导航栏 获取设备顶部窗口的高度（不同设备窗口高度不一样，根据这个来设置自定义导航栏的高度）
    wx.getSystemInfo({
    success: (res) => {
        // 基础库 2.1.0 开始支持wx.getMenuButtonBoundingClientRect()，低版本需要适配
         let custom = wx.getMenuButtonBoundingClientRect()
        // console.log('状态栏高度',res.statusBarHeight)
        // console.log('右上角胶囊按钮的高度', custom.height)
        // console.log('右上角胶囊按钮的上边界坐标', custom.top)
        // console.log('右上角胶囊按钮的下边界坐标', custom.bottom)
        _this.globalData.statusBarHeight = res.statusBarHeight
        _this.globalData.navBarHeight = custom.height + (custom.top - res.statusBarHeight) * 2
     }
    })
},

 globalData: { // 全局数据
    statusBarHeight: 0,
    navBarHeight: 0,
 },
})
```
----

##### 3. 创建自定义导航栏组件，组件目录为 /components/navbar

```html

<!-- 默认为黑色的返回键-->
<view class='nav-wrap nav-bgc-class' style='height: {{statusBarHeight + navBarHeight}}px;'>
 <!-- 左上角的返回按钮 其中wx:if='{{navbarData.showCapsule}}' 是控制左上角按钮的显示隐藏，1为显示，0为隐藏 -->
<view class='nav-capsule' style='margin-top: {{statusBarHeight}}px; height: {{navBarHeight}}px;' wx:if='{{navbarData.showCapsule}}' bindtap='_navback'>
 <image class='back-pre ex-back-pre' src='{{navbarData.backSrc || "/img/back4.png"}}' mode='aspectFill'></image>
 </view>
 <!-- 中间的标题 -->
<view class='nav-title nav-title-class' style='margin-top: {{statusBarHeight}}px; height: {{navBarHeight}}px;'>{{navbarData.title}}</view>
</view>
```

----

##### 4. navbar.js页面 (自定义组件)

```js

const app = getApp()
Component({
 // multipleSlots 为组件开启多插槽模式
options: {
    multipleSlots: true,
 },
 // externalClasses 为组件指定多个外部样式类
 externalClasses: ['nav-bgc-class', 'nav-title-class','ex-back-pre'],
 // properties 组件用来储存外部数据
 properties: {
     navbarData: { //navbarData  由父页面传递的数据，变量名字自命名
     type: Object,
     value: {},
     observer: function (newVal, oldVal) { }
     },
 },
 // 组件用来储存内部私有数据
 data: {
     // 自定义导航栏的高度
     statusBarHeight: app.globalData.statusBarHeight,
     navBarHeight: app.globalData.navBarHeight
 },
 // attached函数 当组件进入页面节点树时触发，可以使用setData，绝大多数初始化工作在这个时机进行
 attached: function () {},
 // methods对象 定义组件内的各种方法
 methods: {
     // 返回键，触发自定义事件，将返回的事件交给父级页面来分情况定义
     _navback() {
        this.triggerEvent('goBack')
     }
 }
})
```
----
##### 5. navbar.json页面 (自定义组件)

```js
{
    "component": true
}
```
----
##### 6. navbar.wxss页面 (自定义组件)

```css
/* 顶部固定定位   标题要居中   自定义按钮和标题要和右边微信原生的胶囊上下对齐 */
.nav-wrap {
 position: fixed;
 width: 750rpx;
 top: 0;
 left: 0;
 right: 0;
 background: #f4f4f4;
 /* background-color: pink; */
 z-index: 9999999;
 transform: translate3d(0, 0, 0);
}

/* 返回键 */
.nav-capsule {
 width: 140rpx;
 /* background-color: skyblue; */
 /* 让里面的图片元素垂直居中 */
 display: flex;
 align-items: center;
}

.back-pre {
 width: 100rpx;
 height: 68rpx;
 /* background-color: green; */
}

/* 标题 */
.nav-title {
 position: absolute;
 left: 0;
 right: 0;
 bottom: 0;
 max-width: 400rpx;
 margin: auto;
 /* background-color: deeppink; */
 /* 水平垂直居中 */
 display: flex;
 align-items: center;
 justify-content: space-around;
 /* 超出部分省略号显示 */
 overflow: hidden;
 text-overflow: ellipsis;
 white-space: nowrap;
 /* 字体设置 */
 color: #111111;
 font-size: 32rpx;
 font-weight: 500;
}
```
---
##### 7. 在其它页面使用自定义导航栏组件（需要修改默认样式)

```js
/* index.json */
{
    "usingComponents": {
    "nav-bar": "/components/navbar/navbar",
 }
}
```
---

##### 8. index.html页面（需要修改默认样式)

```html
<!-- index.html -->

<!-- 引入自定义导航栏组件 -->
<nav-bar bind:goBack="_goBack" nav-bgc-class="ex-nav-bgc-class" nav-title-class="ex-nav-title-class" ex-back-pre="ex-back-pre" navbar-data='{{nvabarData}}'>
</nav-bar>

```

---

##### 8. index.wxss页面（需要修改默认样式)

```css
/* 需要从外部传入导航栏组件的样式 */

/* 导航栏背景色 */

.ex-nav-bgc-class {
 background: transparent !important;
}

/* 导航栏标题颜色 */

.ex-nav-title-class {
 color: #fff !important;
}

/* 导航栏返回键样式 */
.ex-back-pre {
 width: 60rpx!important;
 height: 60rpx!important;
 margin-top: 4rpx!important;
 padding: 40rpx!important;
}
```
---

##### 9. index.js页面（需要修改默认样式)

```js
const app = getApp()
Page({
 /**
* 页面的初始数据
*/
 data: {
 // 自定义导航栏需要的参数
     nvabarData: {
     showCapsule: 1, //是否显示左上角图标  1表示显示 0表示不显示
     title: '', //导航栏 中间的标题
     backSrc: '/img/back3.png'// 返回键的样式
 },
 // 此页面 页面内容距最顶部的距离
    height: app.globalData.statusBarHeight + app.globalData.navBarHeight,
 },

 /**
* 生命周期函数--监听页面加载
*/
 onLoad: function(options) {},

 // 点击 顶部返回键时 要返回的页面
 _goBack() {
     wx.switchTab({
        url: '/pages/mer_index/mer_index',
     })
 },
})

```
---
##### 10. 自定义导航栏可以不传样式，这时会采用默认样式

```html
<!-- 引入自定义导航栏组件 -->
<nav-bar bind:goBack="_goBack" navbar-data='{{nvabarData}}'></nav-bar>


```

##### 11. 页面中默认
```js
const app = getApp()
Page({

 /**
* 页面的初始数据
*/
data: {
// 自定义导航栏需要的参数
     nvabarData: {
         showCapsule: 1, //是否显示左上角图标  1表示显示 0表示不显示
         title: '现有仓单', //导航栏 中间的标题
     },
// 此页面 页面内容距最顶部的距离
    height: app.globalData.statusBarHeight + app.globalData.navBarHeight,
}
})
```






