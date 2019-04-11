<template>
  <el-input
    :disabled="disabled"
    :type="type"
    :placeholder="placeholder"
    :rows="rows"
    :autosize="autosize"
    resize="none"
    :value="value"
    v-on="events"
    ref="input"
  >
    <slot
      name="left_icon"
      slot="prefix"
    ></slot>
    <slot
      name="right_icon"
      slot="suffix"
    ></slot>
  </el-input>
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: "text"
    },
    rows: {
      type: Number,
      default: 4
    },
    autosize: {
      type: [Boolean, Object],
      default: false
    },
    value: {
      type: [String, Number],
      required: true
    }
  },
  data() {
    return {
      events: {
        input: this.handelInput,
        change: this.handelChange,
        focus: this.handelFocus,
        blur: this.handelBlur
      }
    };
  },
  methods: {
    handelInput(val) {
      this.$emit("input", val);
    },

    handelChange(val) {
      this.$emit("change", val);
    },

    handelFocus(ev) {
      this.$emit("focus", ev);
    },

    handelBlur(ev) {
      this.$emit("blur", ev);
    },

    focus() {
      this.$refs.input.focus()
    },

    blur() {
      this.$refs.input.blur()
    },

    select() {
      this.$refs.input.select()
    }
  },
  mounted() {
    //console.log(this.textAreaParam.autosize);
  }
};
</script>

<style scoped>
</style>