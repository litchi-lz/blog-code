<template>
  <div class="bg">
    <div class="box">
      <div class="paopao"></div>
      <div class="shawo"></div>
    </div>
    <div class="go-Back" @click="goBack">Go Back</div>
  </div>
</template>
<script lang="ts" setup>
import { useRouter } from "vue-router";

const router = useRouter();
const goBack = () => {
  router.go(-1);
};
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.bg {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  /* background: linear-gradient(65deg, #966375, #adbf94); */
  /* background-image: linear-gradient(to top, #f3e7e9 0%, #e3eeff 99%, #e3eeff 100%); */
  background-image: url(@/assets/background/bg.jpeg);
}
.box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  position: relative;
}
.paopao {
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 70% 30%, #c4cb78 10%, #adbf94 60%, #ca815a 100%);
  border-radius: 50%;
  box-shadow: inset 0 0 20px #fff, inset 10px 0 50px #eaf5fc, inset 80px 0 60px #efcde6, inset -20px -60px 100px #f9f6de,
    inset 0 50px 150px #f9f6de, 0 0 90px #fff;
  animation: move 3s ease-in-out infinite;
}
.shawo {
  position: absolute;
  left: 70px;
  bottom: -100px;
  width: 150px;
  height: 50px;
  border-radius: 50%;
  background-color: #282826;
  filter: blur(5px);
  animation: move1 3s ease-in-out infinite;
}
@keyframes move {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-90px);
  }
  100% {
    transform: translateY(0);
  }
}
@keyframes move1 {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.5);
  }
  100% {
    transform: scale(1);
  }
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
</style>
