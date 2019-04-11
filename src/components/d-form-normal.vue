<template>
  <div :class="['d-form-normal','column-'+ Number(column), labelPosition ? 'label-'+labelPosition: '']" @dblclick="$emit('add-item')">
    <div class="d-form-container">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    column: {
      type: [Number, String],
      default: 1
    },
    labelWidth: {
      type: String,
      default: "80px"
    },
    labelPosition: {
      type: String,
      default: "left"
    }
  },

  data() {
    return {};
  },

  provide() {
    return {
      dFormNormal: this
    };
  },

  mounted() {}
};
</script>

<style scoped lang="scss">
</style>