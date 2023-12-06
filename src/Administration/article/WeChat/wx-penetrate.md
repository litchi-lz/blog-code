##### 方案: 1
---
>###### 打开弹窗时，页面的最外层设置一个高度，溢出时隐藏，关闭弹窗后再去掉该设置

```css
.wrapper{
    heigth: 100vh;
    overflow: hidden;
}
```
##### 缺点
>###### 当页面滑动一定距离后再打开弹窗时，页面会滚动回顶部，体验比较差。当然这个问题也是可以解决的，监听页面滚动，记录滚动条位置，关闭弹窗的时候再恢复到原来的位置。该方案比较繁琐
---
##### 方案: 2 利用小程序自带的scroll-view组件

>###### 将整个页面包裹在scroll-view之内，在打开弹窗的时候设置scroll-y为false，关闭弹窗时恢复为true。

```html
<block>
  <scroll-view scroll-y="{{!disableScroll}}" style="height:100vh">
    <view class="page">
        ...
    </view>
  </scroll-view>
</block>
```
---
##### 3. [h5点击穿透、滚动穿透解决方案](https://note.youdao.com/)