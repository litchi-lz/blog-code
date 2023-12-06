<template>
  <div class="box">
    <div class="snow-bodys" id="scene">
      <div>
        <template v-for=" in 150">
          <div class="snow"></div>
        </template>
      </div>
    </div>
    <div class="custom" id="introduce">
      <div data-depth="0.2">
        <div class="reveal" @click="getInto()">click to enter</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Parallax from "parallax-js";
import { ElLoading } from "element-plus";
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
onMounted(() => {
  revealAnimation();
  poorVision();
});
const revealAnimation = () => {
  let duration = 0.8;
  let delay = 0.3;
  let revealText = document.querySelector(".reveal");
  if (revealText && revealText.textContent) {
    let letters = revealText.textContent.split("");
    revealText.textContent = "";
    let middle = letters.filter((e) => e !== " ").length / 2;
    letters.forEach((letter, i) => {
      let span = document.createElement("span");
      span.textContent = letter;
      span.style.animationDelay = `${delay + Math.abs(i - middle) * 0.1}s`;
      if (revealText) revealText.append(span);
    });
  }
};
const poorVision = () => {
  let scene = document.getElementById("scene");
  let parallaxInstance = new Parallax(scene);
  let introduce = document.getElementById("introduce");
  let parallaxInintroduce = new Parallax(introduce);
};
const getInto = () => {
  const loading = ElLoading.service({
    lock: true,
    text: "Loading",
    background: "rgba(0, 0, 0, 0.7)",
  });
  setTimeout(() => {
    loading.close();
    router.push("blog");
  }, 500);
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Raleway:400,400i,700");
.box {
  position: relative;
}

.snow-bodys {
  width: 100vw;
  height: 100vh;
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
  overflow: hidden;
  filter: drop-shadow(0 0 10px white);
  position: absolute;
  z-index: -99;
}

@function random_range($min, $max) {
  $rand: random();
  $random_range: $min + floor($rand * (($max - $min) + 1));
  @return $random_range;
}

.snow {
  $total: 200;
  position: absolute;
  width: 10px;
  height: 10px;
  background: white;
  border-radius: 50%;

  @for $i from 1 through $total {
    $random-x: random(1000000) * 0.0001vw;
    $random-offset: random_range(-100000, 100000) * 0.0001vw;
    $random-x-end: $random-x + $random-offset;
    $random-x-end-yoyo: $random-x + ($random-offset / 2);
    $random-yoyo-time: random_range(30000, 80000) / 100000;
    $random-yoyo-y: $random-yoyo-time * 100vh;
    $random-scale: random(10000) * 0.0001;
    $fall-duration: random_range(10, 30) * 1s;
    $fall-delay: random(30) * -1s;

    &:nth-child(#{$i}) {
      opacity: random(10000) * 0.0001;
      transform: translate($random-x, -10px) scale($random-scale);
      animation: fall-#{$i} $fall-duration $fall-delay linear infinite;
    }

    @keyframes fall-#{$i} {
      #{percentage($random-yoyo-time)} {
        transform: translate($random-x-end, $random-yoyo-y) scale($random-scale);
      }

      to {
        transform: translate($random-x-end-yoyo, 100vh) scale($random-scale);
      }
    }
  }
}
</style>
<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Raleway:400,400i,700");
.custom {
  position: absolute;
  z-index: 2;
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  text-align: center;
  pointer-events: auto !important;
  cursor: pointer;
}

.reveal {
  position: relative;
  display: flex;
  color: #6ee1f5;
  font-size: 2em;
  font-family: Raleway, sans-serif;
  letter-spacing: 3px;
  text-transform: uppercase;
  white-space: pre;

  span {
    opacity: 0;
    transform: scale(0);
    animation: fadeIn 2.4s forwards;
  }

  &::before,
  &::after {
    position: absolute;
    content: "";
    top: 0;
    bottom: 0;
    width: 2px;
    height: 100%;
    background: white;
    opacity: 0;
    transform: scale(0);
  }

  &::before {
    left: 50%;
    animation: slideLeft 1.5s cubic-bezier(0.7, -0.6, 0.3, 1.5) forwards;
  }

  &::after {
    right: 50%;
    animation: slideRight 1.5s cubic-bezier(0.7, -0.6, 0.3, 1.5) forwards;
  }
}

@keyframes fadeIn {
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes slideLeft {
  to {
    left: -6%;
    opacity: 1;
    transform: scale(0.9);
  }
}

@keyframes slideRight {
  to {
    right: -6%;
    opacity: 1;
    transform: scale(0.9);
  }
}
</style>
