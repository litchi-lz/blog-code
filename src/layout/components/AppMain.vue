<template>
  <section class="app-main">
    <router-view />
  </section>
</template>

<script lang="ts" setup>
import { ElLoading } from "element-plus";
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
</script>

<style></style>
