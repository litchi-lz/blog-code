const Vue2List = [
  {
    id: 1,
    blogTitle: "动态修改animation效果无效问题",
    blogDescribe: "动态修改animation效果无效问题(vue2与vue3通用)",
    mdId: "vue2-animation",
    createDate: "2021-11-12 20:11:13",
    address: 'https://blog.csdn.net/qq_38783557/article/details/124061163',
    watchCount: 51
  },
  {
    id: 1,
    blogTitle: "template标签使用不恰当问题",
    blogDescribe: "template标签使用不恰当导致标签内组件内容等无法正常显示(vue2与vue3通用)",
    mdId: "vue2-template",
    createDate: "2022-7-4 10:40",
    address: 'https://blog.csdn.net/sunhuaqiang1/article/details/111033797',
    watchCount: 51
  },
  {
    id: 2,
    blogTitle: "Vue中使用监听Vuex中的数据变化",
    blogDescribe: "通过监测Vuex中的数值进行其他操作",
    mdId: "vue2-monitorVuex",
    address: 'https://www.cnblogs.com/ly1368489670/p/16466498.html',
    createDate: "2021-11-15 14:36",
    watchCount: 18
  },
  {
    id: 2,
    blogTitle: "生命周期的每个阶段适合做什么",
    blogDescribe: "合适的生命周期做合适的事情",
    mdId: "vue2-lifeCycle",
    address: 'https://juejin.cn/post/7032881219524100132#heading-6',
    createDate: "2021-11-12 20:11:13",
    watchCount: 51
  },
  {
    id:3,
    blogTitle: "在单独js中引用vuex,及使用",
    blogDescribe: "单独js引入vuex出现underfind,以及传递动态参数出现问题",
    mdId: "",
    address: 'https://blog.csdn.net/Hua_explore/article/details/112917665',
    createDate: "2021-11-12 20:11:13",
    watchCount: 51
  },
  {
    id:4,
    blogTitle: "vue动态引入图片",
    blogDescribe: "Vue2中动态图片路径处理",
    mdId: "",
    address: 'https://blog.csdn.net/m0_68324632/article/details/126578099',
    createDate: "2021-11-12 20:11:13",
    watchCount: 51
  },
  {
    id: 2,
    blogTitle: "在单独js中引用vuex,及使用",
    blogDescribe: "单独js引入vuex出现underfind,以及传递动态参数出现问题",
    mdId: "",
    address: 'https://blog.csdn.net/Hua_explore/article/details/112917665',
    createDate: "2021-11-12 20:11:13",
    watchCount: 51
  },
  {
    id: 2,
    blogTitle: "调试台无法选中该DOM",
    blogDescribe: "层级为一个原因",
    mdId: "微信小程序",
    createDate: "2021-11-12 20:11:13",
    watchCount: 51
  },

];
import { userPaging } from "@/store/paging";
const pagingStore = userPaging();
pagingStore.changeTotal({ type: 'Vue2List', attribute: 'totaltPage', value: Vue2List.length })

export {
  Vue2List
}