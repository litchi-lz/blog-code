#### 1. vue中动态修改animation效果无效问题
###### - 问题原因
---
```html

样式中添加了 scoped，会导致.alarmIcon中的 animation 和 keyframe 中的动画会添加一个唯一标识，然后调用函数的时候 animation 是没有对应的标识的。

```

###### -解决方法
```html
将 keyframes 下的内容放到 scoped 的外边或者去掉 scoped
```