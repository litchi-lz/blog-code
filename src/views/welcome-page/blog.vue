<template>
  <div class="blog-content">
    <template v-for="(item, i) in pagingBlog" v-if="pagingBlog.length > 0">
      <div class="synopsis" @click="goDetails(item)">
        <div class="hvr-float">
          <div class="title">{{ item.blogTitle }}</div>
          <div class="des">{{ item.blogDescribe }}</div>
          <div class="Creation-time">
            <div class="iconfont icon-liulan"></div>
            <div class="text">{{ item.watchCount }}</div>
            <div class="iconfont icon-riqi"></div>
            <div class="text">{{ item.createDate }}</div>
          </div>
        </div>
      </div>
    </template>
    <template v-else>
      <div class="null-empty">
        <el-empty :image-size="200" />
      </div>
    </template>
    <div class="paging-pack" v-if="pagingBlog.length > 0">
      <el-pagination
        :page-size="queryInfo.pagesize"
        :current-page="queryInfo.currentPage"
        @current-change="currentChange"
        background
        layout="prev, pager, next"
        :total="queryInfo.total"
      />
    </div>
  </div>
</template>
<script lang="ts" setup>
import "hover.css";
import { ElLoading } from "element-plus";
import muster from "@/Administration/content/muster";
import { useRouter, useRoute } from "vue-router";
import { userArticle } from "@/store/article";
import { userPaging } from "@/store/paging";
import { getCurrentInstance, ComponentInternalInstance } from "vue";
const { appContext } = getCurrentInstance() as ComponentInternalInstance;
const router = useRouter();
const articleStore = userArticle();
const pagingStore = userPaging();
router.beforeEach(async (to, from) => {
  console.log(to);
});
onBeforeMount(() => {
  articleStore.labelchang(true);
  let aType = articleStore.articleType;
  sketchType.value = aType;
  blogs.value = muster[aType];
});
const blogs = ref([]);
type pagingType = {
  id: number;
  blogTitle: string;
  blogDescribe: string;
  mdId: string;
  createDate: string;
  watchCount: number;
  address?: string;
};
interface searchType {
  vaule: string;
  crux: number;
}
const arraynct: pagingType[] = []; // 定义类型数组

const pagingBlog = ref(arraynct);
const sketchType = ref("");
const searchKey = ref("");
const queryInfo = reactive({
  currentPage: 1,
  pagesize: 5, //每页显示条数
  total: null,
});
watchEffect(() => {
  let aType = articleStore.articleType;
  sketchType.value = aType;
  if (aType == "H5List" || aType == "AppList") {
    pagingBlog.value = [];
    return false;
  }
  
  sketchType.value = articleStore.articleType;
  blogs.value = muster[sketchType.value];
  queryInfo.currentPage = pagingStore[sketchType.value].currentPage;
  queryInfo.total = pagingStore[sketchType.value].totaltPage;
  queryInfo.pagesize = pagingStore[sketchType.value].pageSize;
  let start = (queryInfo.currentPage - 1) * 5;
  let end = queryInfo.currentPage * 5;
  if (searchKey.value == "") {
    pagingBlog.value = blogs.value.slice(start, end);
  } else {
    queryInfo.total = 1; //此处后面需改进
  }
});

const currentChange = (e: number) => {
  const loading = ElLoading.service({
    lock: true,
    text: "Loading",
    background: "rgba(0, 0, 0, 0.7)",
  });
  setTimeout(() => {
    loading.close();
  }, 500);
  pagingStore.changeTotal({ type: sketchType.value, attribute: "currentPage", value: e });
};
//详情
const goDetails = (e: any) => {
  console.log('title')
  console.log(e);
  articleStore.setBloge = e.blogTitle;
  let ListInformation = { blogeTitle: e.blogTitle, mdId: e.mdId };
  localStorage.setItem("articleInfo", JSON.stringify(ListInformation));
  if (ListInformation.mdId.indexOf("CSS") != -1) {
    //去CSS单独页面
    let mdIdname = ListInformation.mdId.split("-")[1];
    let name = mdIdname[0].toUpperCase() + mdIdname.substr(1);
    console.log(name);
    router.push({ name: name, params: { mdId: e.mdId } });
  } else {
    if(e.mdId == ''){
      let url:string = e.address;
       window.location.href = url
    }else{
      router.push({ path: "/substance", query: { mdId: e.mdId } });
    }
  }
};
onMounted(() => {
  appContext.config.globalProperties.$mitt.on("searchEvent", (parame: searchType) => {
    console.log(parame);
    resetPaging(parame);
  });
});
const resetPaging = (parame: searchType) => {
  console.log(parame);
  const loading = ElLoading.service({
    lock: true,
    text: "Loading",
    background: "rgba(0, 0, 0, 0.7)",
  });
  setTimeout(() => {
    loading.close();
  }, 500);
  let start = 0; //此处之后如何优化,搜索关键字有多条
  let end = 5; //
  if (parame.crux == 0) {
    pagingBlog.value = blogs.value.slice(start, end);
    queryInfo.total = blogs.value.length;
  } else {
    let keyVaule = parame.vaule;
    searchKey.value = keyVaule;
    const searchList = [];
    blogs.value.forEach((item: any) => {
      if (item.blogTitle.indexOf(keyVaule) !== -1) {
        searchList.push(item);
      }
    });
    pagingBlog.value = searchList.slice(start, end);
  }
};
onBeforeUnmount(() => {
  // store.commit("article/labelchang", false);
});
</script>
<style lang="scss" scoped>
.blog-content {
  position: relative;
  box-sizing: border-box;
  padding-left: 40px;
  height: calc(100vh - 100px);
  .synopsis {
    box-sizing: border-box;
    padding: 26px 0;
    border-bottom: 1px solid #dadada;
    cursor: pointer;
    .title {
      font-weight: 700;
      font-size: 16px;
      line-height: 24px;
      color: #323030;
    }
    .des {
      margin-top: 4px;
      font-size: 14px;
      color: #6c6c6c;
      padding: 5px 0;
    }
    .Creation-time {
      font-size: 10px;
      line-height: 20px;
      margin-right: 16px;
      display: flex;
      div {
        margin-right: 6px;
      }
    }
  }
  .null-empty {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-items: center;
    justify-content: center;
  }
  .box {
    z-index: 10;
    width: 300px;
    height: 100px;
    background-color: antiquewhite;
  }
  .paging-pack {
    position: absolute;
    bottom: 50px;
    left: 600px;
  }
}
</style>
