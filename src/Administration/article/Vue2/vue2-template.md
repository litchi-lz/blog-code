###### 1.正确使用
```html
<template>
  <div class="blog-content">
    <template v-if="true">
        <el-empty :image-size="200" />
    </template>
  </div>
</template>
```

----
###### 2.错误使用

```html
<template>
    <div class="box">
      <template>
        <el-empty :image-size="200" />
      </template>
    </div>
</template>
```
----

#####   3.第二种方法
```
vue调试器中,组件显示加载;
浏览器控制台也可以看到改组件
最外层template标签.vue文件定义的格式
内层template标签,<template>标记用作容纳页面加载时对用户隐藏的HTML内容的容器。<template>中的内容可以稍后使用Javascript呈现。
如果您有一些需要重复使用的HTML代码，则可以使用<template〉标记。如果在没有〈template》标记的情况下执行此操作，必须使用Javascript 创建HTML代码，以防止浏览器呈现这些代码。
```
---

[template标签其余介绍](https://blog.csdn.net/sunhuaqiang1/article/details/111033797)
