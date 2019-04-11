<template>
  <div class="table-wrap">
    <h2>{{option.title}} <span>{{option.introduction}}</span></h2>
    <table class="table">
      <thead>
        <tr>
          <th
            v-for="(v,i) in option.column"
            :key="i"
          >{{v}}</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item,index) in option.values"
          :key="index"
        >
          <td
            v-for="(value,index_) in item"
            :key="index_"
          >{{value || "--"}}</td>
        </tr>
      </tbody>

    </table>
  </div>
</template>

<script>
export default {
  props: {
    option: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped lang="scss">
.table-wrap {
  padding: 20px 0 40px;
}
.table {
  color: #333;
  width: 100%;
  thead th,
  tbody tr td {
    text-align: left;
    border-bottom: 1px solid #e8e8e8;
    padding: 14px;
    line-height: 1.5;
  }
}
</style>