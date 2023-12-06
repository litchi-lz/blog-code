import { createApp } from 'vue'
import router from './router'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import mitt from 'mitt'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import hljs from 'highlight.js' //导入代码高亮文件
import 'highlight.js/styles/monokai-sublime.css'  //导入代码高亮样式
import "./assets/font.css"
import "./assets/css/article.css"
// 引入md文章组件列表
import { mdArticle } from "./Administration/article/index";
const app = createApp(App);
// vue3挂载到全局
app.config.globalProperties.$mitt = mitt();
const store = createPinia()
app.directive('highlight', function (el) {
    const blocks = el.querySelectorAll('pre code');
    blocks.forEach((block: any) => {
        hljs.highlightBlock(block)
    })
})

app.use(ElementPlus).use(store).use(router).use(mdArticle).mount('#app')
