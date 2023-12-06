######  1. less中修改element-plus样式
```css
.tags {
  box-sizing: border-box;
  padding-left: 40px;
  height: 80px;
  .demo-tabs {
    width: 100%;
    :deep(.el-tabs__nav) {      //需要加deep
      height: 60px;
      line-height: 60px;
    }
  }
}
```
---

##### 2. [ElementUI 问题清单](https://juejin.cn/post/6981083988286767117#heading-19)

---