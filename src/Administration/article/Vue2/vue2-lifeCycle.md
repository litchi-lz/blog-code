#### 1.created

---

###### 在Vue实例创建完毕状态，我们可以去访问data、computed、watch、methods上的方法和数据，但现在还没有将虚拟Dom挂载到真实Dom上，所以我们在此时访问不到我们的Dom元素（el属性，ref属性此时都为空）。

```html
我们在此时可以进行一些简单的Ajax，并可以对页面进行初始化之类的操作
```

#### 2.mounted
---
###### 虚拟Dom已经被挂载到真实Dom上，此时我们可以获取Dom节点，$ref在此时也是可以访问的。

```html
我们在此时可以去获取节点信息，做Ajax请求，对节点做一些操作
```

#### 3.beforUpdata
---
###### 在数据发生改变后，DOM 被更新之前被调用。这里适合在现有 DOM 将要被更新之前访问它。

```html
比如移除手动添加的事件监听器
```

#### 4. updated
---
###### 在数据更改导致的虚拟 DOM 重新渲染和更新完毕之后被调用(不包括子组件)

```html
但还是不建议在此时进行数据操作，避免进入死循环
```
#### 5. beforeDestroy
---
###### 在Vue实例销毁之前被调用，在此时我们的实例还未被销毁

```html
在此时可以做一些操作，比如销毁定时器，解绑全局事件，销毁插件对象等
```




