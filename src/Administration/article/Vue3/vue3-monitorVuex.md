###### .vue文件
---
```js
import { reactive, onMounted, watch,watchEffect,} from "vue";
export default {
  setup(props) {
    const OverviewList = reactive({
      blogs: [],
      sketchType: "",
    });
    //方法1
    watch(()=>store.state.article.articleType,(newValue,oldValue)=>{
        OverviewList.blogs = muster[OverviewList.sketchType]
     })
    //方法2(推荐)
    watchEffect(() => {
      OverviewList.sketchType = store.state.article.articleType;
      OverviewList.blogs = muster[OverviewList.sketchType];
    });
    return {
      ...toRefs(OverviewList),
      goDetails,
    };
  },
};
```
