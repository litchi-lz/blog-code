#### 1.自定义watch属性

######  watch.js文件
----

```JavaScript
const observe = (obj, key, watchFun, deep, page) =>
{
  let val = obj[key];
  if (val != null && typeof val === "object" && deep)
  {
    Object.keys(val).forEach((item) => {
      observe(val, item, watchFun, deep, page);
    });
  }
  
  Object.defineProperty(obj, key, {
    configurable: true,
    enumerable: true,
    set: (value) =>
    {
      watchFun.call(page, value, val);
      val = value;
      if (deep)
      {
        observe(obj, key, watchFun, deep, page);
      }
    },
    get: () => {
      return val;
    }
  });
}
  
/**
 * @name: 自定义watch 监听属性
 * @author: camellia
 * @date: 2021-11-12
 */
const setWatcher = (page) =>
{
  let data = page.data;
  let watch = page.watch;
  Object.keys(watch).forEach((item) => {
    let targetData = data;
    let keys = item.split(".");
    for (let i = 0; i < keys.length - 1; i++)
    {
      targetData = targetData[keys[i]];
    }
    let targetKey = keys[keys.length - 1];
    let watchFun = watch[item].handler || watch[item];
    let deep = watch[item].deep;
    observe(targetData, targetKey, watchFun, deep, page);
  });
}
  
module.exports = {
  setWatcher
};

```

####  2. 调用文件

----


```javascript
// 引入自定义监听属性
const watch = require("../../utils/watch.js");
Page({
  data: {
    name: "时间里的"
  },
  //在onload中实例化监听函数
  onLoad() {
    watch.setWatcher(this);
  },
  //调用watch监听属性
  watch: {
    name: function(newVal, oldVal) {
      console.log(newVal, oldVal);
    }
  }
});

```

