<template>
  <div class="sub-body" :style="{ width: detailsArt.screenW }">
    <div class="markdown-body" :style="{ height: detailsArt.screenH, width: detailsArt.screenMdW }">
      <div v-highlight>
          <component :is="detailsArt.parameter"></component>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRoute } from "vue-router";
import { ElLoading } from "element-plus";
import { userArticle } from "@/store/article";
const articleStore = userArticle();
const route = useRoute();

const detailsArt = reactive({
  parameter: "WxRequest",
  screenH: "", //总高度
  screenW: "", //总宽度
  screenMdW: "", //md宽度
  screenAW: "", //动画宽度
});
onBeforeMount(() => {
  const height = document.documentElement.clientHeight;
  const width = document.documentElement.clientWidth;
  detailsArt.screenH = height - 80 + "px";
  detailsArt.screenW = width - 300 + "px";
  detailsArt.screenMdW = (width - 300) / 1.3 + "px";
  detailsArt.screenAW = (width - 300) / 2.1 + "px";
  articleStore.labelchang(false);
  detailsArt.parameter = typeof route.query.mdId === "string" ? route.query.mdId : "";
  // detailsArt.parameter = "hello"
  const loading = ElLoading.service({
    lock: true,
    text: "Loading",
    background: "rgba(0, 0, 0, 0.7)",
  });
  setTimeout(() => {
    loading.close();
  }, 500);
});
</script>
<style lang="scss" scoped>
.sub-body {
  display: flex;
  // background: linear-gradient(to bottom right, #50a3a2, #53e3a6);
  .markdown-body {
    box-sizing: border-box;
    font-weight: normal;
    padding-left: 40px;
    padding-right: 40px;
    overflow-y: scroll; /*只是y方向*/
  }

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-track {
    background-color: #f3f3f3;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #aaa;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #aaa;
  }

  ::-webkit-scrollbar-thumb:active {
    background-color: #aaa;
  }
}
</style>
