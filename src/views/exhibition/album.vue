<template>
  <div class="container">
    <div class="content">
      <div class="box" v-for="(item, i) in list">
        <img class="pre" :src="item.preUrl" alt="" />
        <img class="next" :src="item.nextUrl" alt="" />
      </div>
    </div>
    <div class="go-Back" @click="goBack">Go Back</div>
  </div>
</template>
<script lang="ts" setup>
import {optimizeLoad} from '@/utils/imgOptimize';
import Evil1Min from "@/assets/imgs/Evil1-min.jpg";
import Evil1 from "@/assets/imgs/Evil1.jpg";
import Evil2Min from "@/assets/imgs/Evil2-min.jpg";
import Evil2 from "@/assets/imgs/Evil2.jpg";
import Evil3Min from "@/assets/imgs/Evil3-min.jpg";
import Evil3 from "@/assets/imgs/Evil3.jpg";
import Evil4Min from "@/assets/imgs/Evil4-min.jpg";
import Evil4 from "@/assets/imgs/Evil4.jpg";
import Evil5Min from "@/assets/imgs/Evil5-min.jpg";
import Evil5 from "@/assets/imgs/Evil5.jpg";
import { reactive, onBeforeMount } from "vue";
import { ElLoading } from "element-plus";
import { useRouter } from "vue-router";

const router = useRouter();
const list = reactive([
  { preUrl: Evil1Min, nextUrl: Evil1 },
  { preUrl: Evil2Min, nextUrl: Evil2 },
  { preUrl: Evil3Min, nextUrl: Evil3 },
  { preUrl: Evil4Min, nextUrl: Evil4 },
  { preUrl: Evil5Min, nextUrl: Evil5 },
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
onMounted(() => {
  optimizeLoad()
});

const goBack = () => {
  router.go(-1);
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.container {
  height: 100vh;
  perspective: 3200px;
  background-image: linear-gradient(to top, #f3e7e9 0%, #e3eeff 99%, #e3eeff 100%);
  background-image: url(@/assets/background/bg.jpeg);
}
/*3d*/
.content {
  width: 280px;
  height: 400px;
  position: fixed;
  right: 0;
  left: 0;
  bottom: 200px;
  top: 0;
  margin: auto;
  transform-style: preserve-3d;
  animation: ani 25s linear infinite;
  transform: rotateY(90deg);
}
@keyframes ani {
  from {
    transform: rotateX(-10deg) rotateY(0deg);
  }
  to {
    transform: rotateX(-10deg) rotateY(360deg);
  }
}
.box {
  width: 280px;
  height: 400px;
  position: absolute;
  border: 2px solid wheat;
}
.box img {
  width: 100%;
  height: 100%;
  display: block;
  position: absolute;
}
.box:nth-child(1) {
  transform: rotateY(72deg) translateZ(600px);
}

.box:nth-child(2) {
  transform: rotateY(144deg) translateZ(600px);
}
.box:nth-child(3) {
  transform: rotateY(216deg) translateZ(600px);
}

.box:nth-child(4) {
  transform: rotateY(288deg) translateZ(600px);
}
.box:nth-child(5) {
  transform: rotateY(360deg) translateZ(600px);
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
  background-size: 200%;
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
