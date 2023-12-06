
const WeChatList = [
  {
    id: 1,
    blogTitle: "原生接口的封装",
    blogDescribe: "基于小程序原生request封装Promise风格的请求,避免多级回调(回调地狱),对于网络请求错误统一处理分发",
    mdId: "wx-request",
    createDate: "2021-11-12 20:11:13",
    watchCount: 51
  },
  {
    id: 2,
    blogTitle: "GIS地图及导航的使用",
    blogDescribe: "基于小程序原生组件map与腾讯位置服务实现定位及导航的功能",
    mdId: "wx-gis",
    createDate: "2021-11-12 20:11:13",
    watchCount: 51
  },
  {
    id: 3,
    blogTitle: "自定义watch监听属性",
    blogDescribe: "通过Object.defineProperty()方法，来手动劫持对象的getter/setter，从而实现给对象赋值时(调用setter)执行watch对象中相对应的函数，达到监听效果",
    mdId: "wx-watch",
    createDate: "2022-6-28 09:11",
    watchCount: 51
  },
  {
    id: 3,
    blogTitle: "echarts曲线组件的封装",
    blogDescribe: "基于wx-echarts组件进行进一步封装,实现需求",
    mdId: "wx-echarts",
    address: "https://blog.csdn.net/ccc0720/article/details/125382220?spm=1001.2014.3001.5502",
    createDate: "2022-6-30 15:19",
    watchCount: 21
  },
  {
    id: 4,
    blogTitle: "弹窗如何防止滚动穿透?",
    blogDescribe: "在弹窗界面上触摸滑动会出现穿透效果使得弹窗下的界面也跟着滑动",
    mdId: "wx-penetrate",
    createDate: "2021-10-12 19:10",
    address: "https://juejin.cn/post/6850418110323752968",
    watchCount: 45
  },
  {
    id: 5,
    blogTitle: "微信小程序实现自定义导航栏",
    blogDescribe: "自定义导航栏组件中返回栏 , 标题等功能",
    mdId: "wx-custom",
    createDate: "2023-2-6 14:30",
    address: "https://www.jb51.net/article/243612.htm",
    watchCount: 45
  },
  {
    id: 4,
    blogTitle: "小程序内嵌web-view缓存问题",
    blogDescribe: "解决微信小程序web-view缓存问题",
    mdId: "",
    createDate: "2021-11-12 20:11:13",
    address:"https://blog.csdn.net/qq_37210523/article/details/115534130",
    other:'https://juejin.cn/post/7098522027291574280',
    watchCount: 51
  },
  {
    id: 5,
    blogTitle: "小程序使用web-view出现无法正常跳转",
    blogDescribe: "1.web-view提示已停止访问该网页,该网页涉及暴力，色情，低俗等内容,2,如需浏览，请长按网址复制后使用浏览器访问问题",
    mdId: "",
    address: "https://developers.weixin.qq.com/community/develop/doc/0002e252f58b68a3858d8d60251400?highLine=%25E5%25A6%2582%25E9%259C%2580%25E6%25B5%258F%25E8%25A7%2588%25EF%25BC%258C%25E8%25AF%25B7%25E9%2595%25BF%25E6%258C%2589%25E7%25BD%2591%25E5%259D%2580%25E5%25A4%258D%25E5%2588%25B6%25E5%2590%258E%25E4%25BD%25BF%25E7%2594%25A8%25E6%25B5%258F%25E8%25A7%2588%25E5%2599%25A8%25E8%25AE%25BF%25E9%2597%25AE",
    watchCount: 51
  },
  {
    id: 6,
    blogTitle: "自定义组件",
    blogDescribe: "数据监听器(observers),纯数据字段(pureDataPattern),组件监听页面的生命周期(pageLifetimes)",
    mdId: "微信小程序",
    createDate: "2021-11-12 20:11:13",
    watchCount: 51
  },
];

import { userPaging } from "@/store/paging";
const pagingStore = userPaging();
pagingStore.changeTotal({ type: 'WeChatList', attribute: 'totaltPage', value: WeChatList.length })
export {
  WeChatList
}