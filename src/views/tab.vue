<template>
  <div class="wrap">
    <div class="tab">
      <span @click="nav=1">1</span>
      <span @click="nav=2">2</span>
    </div>
    <div class="content">
      <ul
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10"
        v-show="nav==1"
      >
        <li
          v-for="(item,index) in list"
          :key="index"
        >{{ item }}</li>
      </ul>
      <ul
        v-show="nav==2"
        v-infinite-scroll="loadMore2"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10"
      >
        <li
          v-for="(item,index) in list2"
          :key="index"
        >{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nav: 1,
      list: [],
      list2: [],
    };
  },
  methods: {
    loadMore() {
      this.loading = true;
      setTimeout(() => {
        let last = this.list[this.list.length - 1];
        for (let i = 1; i <= 10; i++) {
          this.list.push(last + i);
        }
        this.loading = false;
      }, 500);
    },
    loadMore2() {
        console.log(2)
      this.loading = true;
      setTimeout(() => {
        let last = this.list2[this.list2.length - 1];
        for (let i = 1; i <= 10; i++) {
          this.list2.push(last + i);
        }
        this.loading = false;
      }, 500);
    }
  },
  mounted() {
      let i = 0
    while(i<30) {
        this.list.push(i)
        this.list2.push(i)
        i++
    }
  }
};
</script>

<style scoped lang="scss">
.wrap {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  .tab {
    height: 20px;
    float: none;
  }
  .content {
    flex: none;
    height: 500px;
    overflow: hidden;
    //overflow: scroll;
    ul {
      height: 100%;
      background-color: orange;
      overflow: scroll;
      li {
        height: 30px;
      }
    }
  }
}
</style>