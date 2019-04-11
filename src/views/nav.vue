<template>
  <ul class="left-nav">
    <li
      v-for="(value,key) in component"
      :key="key"
    >
      <router-link active-class="link-active" class="link" :to="'/doc/'+key">{{value}}</router-link>
    </li>

  </ul>
</template>

<script>
import component from "@/demo/index.js";
export default {
  components: component,
  data() {
    return {
      component
    };
  },
  mounted() {
    //console.log(this)
  }
};
</script>

<style scoped lang="scss">
.left-nav {
    padding: 20px;
    height: 100%;
    border-right: 2px solid #999;
    overflow: auto;
    li {
        list-style: none;
        padding: 6px;
        .link {
            color: #333;
            text-decoration: none;
            &.link-active {
                color: orange;
            }
        }

    }
}

</style>