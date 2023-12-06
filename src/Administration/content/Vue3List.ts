/**
 * @mdId
 * 当前md文件的标识
 */
/**
 * @careless
 * 粗心引起标识
 */
const Vue3List = [

  {
    id: 1,
    blogTitle: "Vue3中监测Vuex中数据变化",
    blogDescribe: "监测Vuex中的某个值作为key,实时更新当前页面中的数据",
    mdId: "vue3-monitorVuex",
    createDate: "2022-6-21 13:41:33",
    watchCount: 8
  },
  {
    id: 2,
    blogTitle: "less中修改element-plus样式",
    blogDescribe: "修改elementplus样式在调试器中无法显示(vue2也适用)",
    mdId: "vue3-alterStyle",
    createDate: "2022-6-21 14:11:10",
    watchCount: 51
  },
  {
    id: 3,
    blogTitle: "vue打包Markdown文件报错(webpack)",
    blogDescribe: "Cannot read property '__vueMarkdownOptions__' of undefined",
    mdId: "vue3-markdown",
    address: ' https://blog.csdn.net/weixin_42681555/article/details/121603656(使用),https://blog.csdn.net/weixin_42681555/article/details/121931367(误以为是node版本),',
    base: "node-sass:^4.14.1,sass-loader:^8.0.2, node 12.16.2",
    createDate: "2021-11-12 20:11:13",
    watchCount: 51
  },
  {
    id: 4,
    blogTitle: "SCSS安装及使用时报错",
    blogDescribe: "",
    mdId: "vue3-scss",
    createDate: "2021-11-12 20:11:13",
    address: 'https://blog.51cto.com/u_15075520/4152764',
    issue:'https://blog.csdn.net/qq_36657291/article/details/121995360(scss新老版本冲突问题,语法废弃)',
    watchCount: 51
  },
  {
    id: 5,
    blogTitle: "vue-cli4,Vue3打包后页面无内容,",
    blogDescribe: "Vue3打包后,静态文件无法显示,初始路由为history",
    mdId: "vue3-config",
    createDate: "https://codepen.io/alphardex/pens/public?cursor=ZD0xJm89MCZwPTEmdj01NTc3OTkwNQ==",
    address: 'https://www.cnblogs.com/shiyixirui/p/15026312.html',
    watchCount: 51
  },
  {
    id: 5,
    blogTitle: "vue3 兄弟组件传值之mitt",
    blogDescribe: "Vue2.x 使用 EventBus 事件总线进行兄弟组件通信，而在Vue3中事件总线模式已经被移除，官方建议使用外部的、实现了事件触发器接口的库,例如 mitt 或 tiny-emitter。",
    mdId: "",
    createDate: "2022-8-12 17:13:43",
    address: 'https://juejin.cn/post/7106311753717252132',
    watchCount: 68
  },
  {
    id: 5,
    blogTitle: "vue3 ts vite项目 读取本地markdown文件,",
    blogDescribe: "Vue3打包后,静态文件无法显示,初始路由为history",
    mdId: "",
    createDate: "2022-8-19 18:20:43",
    address: 'https://blog.csdn.net/weixin_45291937/article/details/125275996',
    watchCount: 51
  },
  {
    id: 1,
    blogTitle: "关于Vue3中不使用单文件组件<script setup>出现的问题",
    blogDescribe: "无法使用动态参数在vuex中,及推荐写法",
    mdId: "vue3-setup",
    createDate: "2022-7-6 13:41:33",
    watchCount: 8
  },
  {
    id: 1,
    blogTitle: "Vue3中unplugin-auto-import的配置和eslint报错解决",
    blogDescribe: "找不到名称“ref”",
    mdId: "vue3-unpluginAutoImport",
    createDate: "2022-7-6 13:41:33",
    address: 'https://blog.csdn.net/sayUonly/article/details/123482912',
    watchCount: 8
  },
  {
    id: 1,
    blogTitle: "Vue3中添加一个包含 `declare module ‘xxxxx‘；",
    blogDescribe: "找不到名称“ref”",
    mdId: "",
    createDate: "2022-7-6 13:41:33",
    address: 'https://blog.csdn.net/m0_67391677/article/details/123395221',
    watchCount: 8
  },
  {
    id: 1,
    blogTitle: "vite使用 unplugin-vue-components 自动注册插件后,  <component :is='parameter'></component>无法显示问题 ",
    blogDescribe: "找不到名称“ref”",
    mdId: "",
    createDate: "2022-7-6 13:41:33",
    address: 'https://blog.csdn.net/m0_67391677/article/details/123395221',
    watchCount: 8
  },
  {
    id: 6,
    blogTitle: "鼠标视觉差效果实现parallax-js",
    blogDescribe: "使用parallax及遇到点击无法触发事件问题",
    mdId: "",
    createDate: "2022-07-3 16:50:33",
    address: 'https://blog.csdn.net/qq_38057434/article/details/115962466,https://codepen.io/alphardex/pens/public?cursor=ZD0xJm89MCZwPTEmdj01NTc3OTkwNQ==',
    watchCount: 51
  },
  {
    id: 7,
    blogTitle: "路由前置守卫",
    blogDescribe: "使用parallax及遇到点击无法触发事件问题",
    mdId: "",
    createDate: "2022-07-3 18:45:33",
    address: 'https://blog.csdn.net/qq_38057434/article/details/115962466,',
    watchCount: 51
  },

];

import { userPaging } from "@/store/paging";
const pagingStore = userPaging();
pagingStore.changeTotal({ type: 'Vue3List', attribute: 'totaltPage', value: Vue3List.length })
export {
  Vue3List
}