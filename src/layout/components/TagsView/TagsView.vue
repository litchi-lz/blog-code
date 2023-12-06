<template>
  <div class="tags" :style="{ width: list.screenW }" v-show="list.labelBar">
    <el-tabs v-model="list.activeName" class="demo-tabs" @tab-click="handleClick">
      <template v-for="(item, i) in list.classList">
        <el-tab-pane class="tabPan" :label="item.mold" :name="item.type"></el-tab-pane>
      </template>
    </el-tabs>
    <div>
      <div class="mt-4 search">
        <el-input v-model="searchValue" placeholder="请输入关键字" @input="searchFor" class="w-50 m-2">
          <template #append>
            <el-button @click="searchInfo" :icon="Search" />
          </template>
        </el-input>
      </div>
    </div>
  </div>
  <div class="tags bolog-title" :style="{ width: list.titleW }" v-show="!list.labelBar">
    <div class="title-box">
      <div class="">{{ list.blogTitle }}</div>
      <div @click="goBack" class="iconfont icon-fanhui"></div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import "@/assets/font/font-icon/iconfont.css";
import { useRouter } from "vue-router";
import { ElLoading } from "element-plus";
import { userArticle } from "@/store/article";
import { Search } from "@element-plus/icons-vue";
import { getCurrentInstance, ComponentInternalInstance } from "vue";

type listType = {
  activeName: string;
  screenW: string;
  titleW: string;
  labelBar: boolean;
  blogTitle: string;
  classList: any[];
};
const router = useRouter();
const articleStore = userArticle();
const searchValue = ref("");
const { appContext } = getCurrentInstance() as ComponentInternalInstance;
const list = reactive<listType>({
  activeName: "",
  screenW: "0",
  titleW: "0",
  labelBar: true,
  blogTitle: "",
  classList: [
    { id: 1, mold: "微信小程序", type: "WeChatList" },
    { id: 2, mold: "Vue2", type: "Vue2List" },
    { id: 3, mold: "Vue3", type: "Vue3List" },
    { id: 4, mold: "CSS3", type: "CSS3List" },
    { id: 5, mold: "H5", type: "H5List" },
    { id: 6, mold: "App", type: "AppList" },
    { id: 7, mold: "uni-app", type: "UniAppList" },
    { id: 8, mold: "通用", type: "Universal" },
  ],
});
onBeforeMount(() => {
  const width: number = document.documentElement.clientWidth;
  list.screenW = width - 300 + "px";
  list.titleW = width - 340 + "px";
});
watchEffect(() => {
  list.activeName = articleStore.articleType;
  list.labelBar = articleStore.tagSwitch;
  list.blogTitle = articleStore.blogTitle;
  let cache = localStorage.getItem("articleInfo");
  if (!list.blogTitle && cache) {
    list.blogTitle = JSON.parse(localStorage.getItem("articleInfo") || "").blogeTitle;
  }
});
const handleClick = (TabsPaneContext: any) => {
  list.activeName = TabsPaneContext.props.name;
  articleStore.alterType(list.activeName);
  const loading = ElLoading.service({
    lock: true,
    text: "Loading",
    background: "rgba(0, 0, 0, 0.7)",
  });
  setTimeout(() => {
    loading.close();
  }, 300);
};

const searchFor = () => {
  if (searchValue.value == "") {
    //crux为0的时候触发
    appContext.config.globalProperties.$mitt.emit("searchEvent", { vaule: searchValue.value, crux: 0 });
  }
};
const searchInfo = () => {
  appContext.config.globalProperties.$mitt.emit("searchEvent", { vaule: searchValue.value, crux: 1 });
};
const goBack = () => {
  const loading = ElLoading.service({
    lock: true,
    text: "Loading",
    background: "rgba(0, 0, 0, 0.7)",
  });
  setTimeout(() => {
    loading.close();
    router.go(-1);
  }, 300);
};
</script>
<style lang="scss" scoped>
.tags {
  box-sizing: border-box;
  margin-left: 40px;
  height: 60px;
  display: flex;
  border-bottom: 2px solid #dadada;
  .demo-tabs {
    width: 50%;
    :deep(.el-tabs__nav) {
      height: 60px;
      line-height: 60px;
    }
  }
}
.bolog-title {
  padding: 0;
  margin-left: 78px;
  line-height: 60px;
  height: 62px;
  color: #383838;
  font-size: 14px;
  .title-box {
    display: flex;
    div {
      margin-right: 10px;
    }
  }
}
.search {
  margin-top: 12px;
  margin-left: 80px;
}
.el-tabs__nav {
  height: 60xp;
  line-height: 60px;
}
.el-tabs__item is-top {
  user-select: none;
}
</style>
