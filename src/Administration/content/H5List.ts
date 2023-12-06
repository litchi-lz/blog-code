// import { useStore } from "vuex";
// export function useTest(){
//     const store  = useStore()
//     console.log(store,'w是store')
// }
const H5List = [
  {
    id: 1,
    blogTitle: "代码管理工具",
    blogDescribe: "git使用及命令",
    mdId: "widely-tool",
    createDate: "2021-11-12 20:11:13",
    address: 'https://mp.weixin.qq.com/s/Bf7uVhGiu47uOELjmC5uXQ',
    watchCount: 51
  }
];
import { userPaging } from "@/store/paging";
const pagingStore = userPaging();
pagingStore.changeTotal({ type: 'H5List', attribute: 'totaltPage', value: H5List.length })
export {
  H5List
}