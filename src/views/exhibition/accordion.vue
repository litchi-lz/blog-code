<template>
  <div class="container">
    <div class="shell">
      <template v-for="(item, i) in imgList">
        <div class="box">
          <img class="pre" :src="item.preUrl" alt="" />
          <img class="next" :src="item.nextUrl" alt="" />
          <div>{{ item.desc }}</div>
        </div>
      </template>
    </div>
    <div class="bg-box">
       <img class="pre" :src="accordion5Min" alt="" />
       <img class="next" :src="accordion5" alt="" />
    </div>
    <div class="go-Back" @click="goBack">Go Back</div>
  </div>
</template>
<script lang="ts" setup>
import {optimizeLoad} from '@/utils/imgOptimize';
import { ElLoading } from "element-plus";
import { useRouter } from "vue-router";
import accordion1Min from "@/assets/imgs/accordion1-min.jpg";
import accordion1 from "@/assets/imgs/accordion1.jpg";
import accordion2Min from "@/assets/imgs/accordion2-min.jpg";
import accordion2 from "@/assets/imgs/accordion2.jpg";
import accordion3Min from "@/assets/imgs/accordion3-min.jpg";
import accordion3 from "@/assets/imgs/accordion3.jpg";
import accordion4Min from "@/assets/imgs/accordion4-min.jpg";
import accordion4 from "@/assets/imgs/accordion4.jpg";
import accordion5Min from "@/assets/imgs/accordion5-min.jpg";
import accordion5 from "@/assets/imgs/accordion5.jpg";
const router = useRouter();
const imgList = reactive([
  { preUrl: accordion1Min, desc: "Image", nextUrl: accordion1 },
  { preUrl: accordion2Min, desc: "Video", nextUrl: accordion2 },
  { preUrl: accordion3Min, desc: "File", nextUrl: accordion3 },
  { preUrl: accordion4Min, desc: "Music", nextUrl: accordion4 },
  { preUrl: accordion5Min, desc: "Lyric", nextUrl: accordion5 },
]);
onBeforeMount(() => {
  const loading = ElLoading.service({
    lock: true,
    text: "Loading",
    background: "rgba(0, 0, 0, 0.7)",
  });
  setTimeout(() => {
    loading.close();
  }, 500);
});

const goBack = () => {
  router.go(-1);
};
onMounted(() => {
  optimizeLoad()
});

</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
}

.container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  /* background-color: rgb(243, 230, 241); */
  /* background-image: url("@/assets/imgs/accordion5.jpg"); */
}
.bg-box{
  position: absolute;
  z-index: -1;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  overflow: hidden;
}
.bg-box img {
  width: 100%;
  position: absolute;
}
.shell {
  width: 90%;
  height: 700px;
  display: flex;
  position: absolute;
}
.box {
  flex: 1;
  overflow: hidden;
  transition: 0.5s;
  margin: 0 20px;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  border: 10px solid #fff;
  background-color: #fff;
  position: relative;
}
.box > img {
  width: 200%;
  height: 85%;
  object-fit: cover;
  transition: 0.5s;
  position: absolute;
  z-index: 1;
}
.box > div {
  font: 200 45px "优设标题黑";
  text-align: center;
  height: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  text-align: center;
  bottom: 0;
  z-index: 0;
}
.box:hover {
  flex-basis: 40%;
}
.box:hover > img {
  width: 100%;
  height: 100%;
}

.go-Back {
  position: absolute;
  left: 50%;
  bottom: 20px;
  margin-left: -100px;
  width: 200px;
  height: 60px;
  text-align: center;
  line-height: 60px;
  font-size: 24px;
  border-radius: 30px;
  transform: translate(-30px, -50%);
  color: #fff;
  text-transform: uppercase;
  cursor: pointer;
  background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
  background-size: 400%;
}

.go-Back:hover {
  animation: animate 8s linear infinite;
}

@keyframes animate {
  0% {
    background-position: 0%;
  }

  100% {
    background-position: 400%;
  }
}

.go-Back::before {
  content: "";
  position: absolute;
  top: -5px;
  left: -5px;
  right: -5px;
  bottom: -5px;
  z-index: -1;
  background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
  background-size: 400%;
  border-radius: 40px;
  opacity: 0;
  transition: 0.5s;
}

.go-Back:hover::before {
  filter: blur(20px);
  opacity: 1;
  animation: animate 8s linear infinite;
}
.pre {
  opacity: 1;
  filter: blur(10px);
  transition: filter 2s ease-in-out;
}
.pre.loaded {
  filter: blur(0);
}
.next {
  opacity: 0;
  transition: opacity 2s ease-in-out;
}
.next.loaded {
  opacity: 1;
}

.hidden {
  opacity: 0;
}
</style>
