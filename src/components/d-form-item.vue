<template>
  <section class="d-form-item">
    <span
      class="item-label"
      :style="getLabelWidth"
    >{{label}}</span>
    <div class="item-el">
      <slot></slot>
    </div>
  </section>
</template>

<script>
export default {
  name: "d-form-item",

  componentName: "d-form-item",

  props: {
    label: {
      type: String
    },
    labelWidth: {
      type: String
    }
  },

  inject: ["dFormNormal"],

  data() {
    return {};
  },

  computed: {
    getLabelWidth() {
      if (this.dFormNormal.labelPosition === "top") return { width: "100%" };
      return {
        width: this.labelWidth ? this.labelWidth : this.dFormNormal.labelWidth
      };
    }
  }
};
</script>
