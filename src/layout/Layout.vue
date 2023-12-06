<template>
  <div class="app-wrapper">
    <Sidebar></Sidebar>
    <div class="right-content">
      <TagsView></TagsView>
      <AppMain></AppMain>
    </div>
  </div>
</template>
<script lang="ts">
/*可以设置默认的名字*/
export default {
  name: 'Layout'
}
</script>
<script lang="ts" setup>
import { AppMain, Sidebar, TagsView } from "./components";


</script>

<style lang="scss" scoped>
.app-wrapper {
  position: relative;
  display: flex;
  .right-content {
    overflow: hidden;
  }
}
</style>
