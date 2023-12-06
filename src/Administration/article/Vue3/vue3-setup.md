######
顶层绑定
定义响应式的变量,还是需要从vue中引入
```js
import {ref } from 'vue'
```
引入组件不需要注册,直接使用
定义变量在模板中使用,不需要暴露出去,模板直接使用

js导出的是函数的话  
```js
 import { useStore } from "vuex";
```
js导出的是数组对象
```js
    import store from '../../store'
```
