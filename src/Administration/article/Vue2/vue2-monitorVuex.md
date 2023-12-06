####  使用computed和watch监听vuex数据变化
---
#### 1. conputed从Vuex中获取需要监听的对象，赋值给Obj；

```javascript
export default{
    component:{},
    data(){
        return{}
    },
    computed:{
        Obj(){
            return this.$store.state.data.age
        }
    },
    watch:{
        Obj(newVal,oldVal){
            //可以对数据执行相应的操作
            console.log(newVal,oldVal)
        }
    },
    methods:{},
}

```
---

#### 2. 直接对Vuex对象进行watch监听

```js
export default{
    component:{},
    data(){
        return{}
    },
    watch:{
        '$store.state.data.age'(newVal,oldVal){
            //对数据执行操作
            console.log(newVal,oldVal)
        }
    },
    methods:{}
}
```


