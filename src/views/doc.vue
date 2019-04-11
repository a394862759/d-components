<template>
  <div class="doc">
    <cus-nav class="left-nav"></cus-nav>
    <div class="view">
      <d-scroll class="page-scroll">
        <router-view class="page"></router-view>
      </d-scroll>
    </div>
  </div>
</template>

<script>
import dScroll from "@/components/scroll/d-scroll.vue";
import cusNav from "@/views/nav.vue";
export default {
  components: {
    cusNav,
    dScroll
  }
};
</script>

<style scoped lang="scss">
.doc {
  height: 100%;
  display: flex;
  overflow: hidden;
  .left-nav {
    width: 200px;
    flex: none;
  }
  .view {
    flex: auto;
    overflow: hidden;
    .page-scroll {
      height: 100%;
    }
  }
  .page {
    padding: 0 20px;
    overflow: hidden
  }
}
</style>