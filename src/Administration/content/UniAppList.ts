
const UniAppList = [
  {
    id: 1,
    blogTitle: "设置某个页面横屏后，恢复竖屏，返回再次进入其他页面时，页面内容放大错乱",
    blogDescribe: "初次进入横屏页面，显示正常，返回，进入其他页面（竖屏），页面内容放大",
    mdId: "",
    createDate: "2023-08-04 15:49",
    address: 'https://blog.csdn.net/xialong_927/article/details/123223436',
    watchCount: 51
  },
  {
    id: 1,
    blogTitle: "uni-app手机横屏后返回后出现页面错乱",
    blogDescribe: "A->B(横屏)->C(样式错乱)",
    mdId: "",
    createDate: "2022-08-31 15:49",
    address: 'https://blog.csdn.net/hu104160112/article/details/131511067',
    watchCount: 51
  },
  {
    id: 1,
    blogTitle: "解决uniapp使用web-view嵌套H5页面返回直接退出的问题",
    blogDescribe: "返回直接退出更改为返回上一层",
    mdId: "",
    createDate: "2022-08-31 15:49",
    address: 'https://blog.csdn.net/yezi20189/article/details/128854342',
    watchCount: 51
  },
  {
    id: 1,
    blogTitle: "html5+ push-消息推送Api列表及如何使用",
    blogDescribe: "Push模块管理推送消息功能，可以实现在线、离线的消息推送，通过plus.push可获取推送消息管理对象。",
    mdId: "",
    createDate: "2022-11-14 10:22",
    address: 'https://blog.csdn.net/weixin_41961749/article/details/82968369?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522166839196516800186581368%2522%252C%2522scm%2522%253A%252220140713.130102334..%2522%257D&request_id=166839196516800186581368&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~blog~sobaiduend~default-1-82968369-null-null.nonecase&utm_term=html5%20plus.push&spm=1018.2226.3001.4450',
    watchCount: 16
  },
  {
    id: 1,
    blogTitle: "Uni-push 推送实现全过程(Uni-push1)",
    blogDescribe: "Uni-push 推送实现全过程",
    mdId: "",
    createDate: "2022-08-31 15:49",
    address: 'https://blog.csdn.net/hkw20/article/details/122489887',
    watchCount: 51
  },
  {
    id: 1,
    blogTitle: "Unipush实现消息推送（在线&离线）",
    blogDescribe: "Unipush实现消息推送（在线&离线）",
    mdId: "",
    createDate: "2022-08-31 17:47",
    address: 'https://blog.csdn.net/weixin_45122120/article/details/109362385?spm=1001.2101.3001.6650.2&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-2-109362385-blog-122489887.pc_relevant_multi_platform_featuressortv2dupreplace&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-2-109362385-blog-122489887.pc_relevant_multi_platform_featuressortv2dupreplace&utm_relevant_index=5',
    watchCount: 51
  },
  {
    id: 1,
    blogTitle: "uni-app 实现应用桌面图标角标提示及应用跳转",
    blogDescribe: "",
    mdId: "",
    createDate: "2022-11-4 15:49",
    address: 'https://blog.csdn.net/sunhuaqiang1/article/details/124398170',
    watchCount: 51
  },
  {
    id: 1,
    blogTitle: "uni-app中web-view中自 隐藏顶部导航栏",
    blogDescribe: "启动页隐藏顶部导航栏",
    mdId: "",
    createDate: "2022-11-4 15:49",
    address: 'https://blog.csdn.net/sunhuaqiang1/article/details/124398170',
    watchCount: 51
  },
];
import { userPaging } from "@/store/paging";
const pagingStore = userPaging();
pagingStore.changeTotal({ type: 'UniAppList', attribute: 'totaltPage', value: UniAppList.length })
export {
  UniAppList
}