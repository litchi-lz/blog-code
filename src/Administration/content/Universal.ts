const Universal = [
  {
    id: 1,
    blogTitle: "代码管理工具",
    blogDescribe: "git使用及命令",
    mdId: "widely-tool",
    createDate: "2021-11-12 20:11:13",
    address: 'https://mp.weixin.qq.com/s/Bf7uVhGiu47uOELjmC5uXQ',
    watchCount: 51
  },
  {
    id: 1,
    blogTitle: "js数组对比",
    blogDescribe: "js获取两个数组及数组对象中相同和不相同的值",
    mdId: "array-comparison",
    createDate: "2022-8-16 18:45",
    address: 'https://blog.csdn.net/weixin_42333548/article/details/102588696/',
    watchCount: 68
  },
  {
    id: 6,
    blogTitle: "JS树状结构处理（新增、删除、查找）",
    blogDescribe: "在遇到如下类型的树状结构列表时，在新增、修改、删除的时候需要即时更新列表。",
    mdId: "",
    createDate: "2023-5-6 18:45",
    address: 'https://blog.csdn.net/baidu_36095053/article/details/121649810',
    watchCount: 68
  },
  {
    id: 1,
    blogTitle: "vscode中在coding中拉取,推送代码",
    blogDescribe: "1，本地先初始化，并且上传，然后通过coding",
    mdId: "",
    createDate: "2023-1-12 10:45",
    address: 'https://blog.csdn.net/Aurora_1970s/article/details/118404223',
    watchCount: 10
  },
  {
    id: 1,
    blogTitle: "正则计算统计",
    blogDescribe: "正则大全",
    mdId: "",
    createDate: "2022-9-28 12:45",
    address: 'https://juejin.cn/post/7119242343798013959',
    watchCount: 68
  },
  {
    id: 1,
    blogTitle: "使用外部字体ttf",
    blogDescribe: "js获取两个数组及数组对象中相同和不相同的值",
    mdId: "",
    createDate: "2022-8-16 18:45",
    address: 'https://blog.csdn.net/qq_42566295/article/details/125868113',
    watchCount: 68
  },
  {
    id: 1,
    blogTitle: "导入导出详解",
    blogDescribe: "git使用及命令",
    mdId: "",
    createDate: "2021-11-12 20:11:13",
    address: 'https://www.jb51.net/article/240905.htm',
    watchCount: 51
  },
  {
    id: 1,
    blogTitle: "响应头控制预览及下载",
    blogDescribe: "预览、下载 让人操碎了心?",
    mdId: "",
    createDate: "2022-9-13 18:21:50",
    address: 'https://juejin.cn/post/7124847588070653983',
    watchCount: 51
  },
  {
    id: 1,
    blogTitle: "ts中定义一个数组对象在ref中使用",
    blogDescribe: "git使用及命令",
    mdId: "",
    createDate: "2021-11-12 20:11:13",
    address: 'https://mp.weixin.qq.com/s/Bf7uVhGiu47uOELjmC5uXQ',
    watchCount: 51
  },
  {
    id: 1,
    blogTitle: "图片加载缓慢及视觉优化",
    blogDescribe: "对于图片加载，咱们可以更酷炫一点！",
    mdId: "",
    createDate: "2021-11-12 20:11:13",
    address: 'https://juejin.cn/post/7122256732940107813',
    watchCount: 51
  },
  {
    id: 1,
    blogTitle: "CSS不写分号导致无法加载样式。。。",
    blogDescribe: "对于图片加载，咱们可以更酷炫一点！",
    mdId: "",
    createDate: "2021-11-12 20:11:13",
    address: 'https://juejin.cn/post/7122256732940107813',
    watchCount: 51
  },
  {
    id: 1,
    blogTitle: "BootCDN",
    blogDescribe: "稳定、快速、免费的前端开源项目 CDN 加速服务",
    mdId: "",
    createDate: "2021-11-12 20:11:13",
    address: 'https://www.bootcdn.cn/',
    watchCount: 60
  },  
];

import { userPaging } from "@/store/paging";
const pagingStore = userPaging();
pagingStore.changeTotal({ type: 'Universal', attribute: 'totaltPage', value: Universal.length })

export {
  Universal
}