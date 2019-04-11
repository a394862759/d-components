<template>
  <div class="d-input">
    <textarea
      class="d-textarea"
      v-if="type==='textarea'"
      :rows="rows"
      :disabled="disabled"
      :placeholder="placeholder"
      :value="value"
      v-on="events"
      ref="textarea"
    ></textarea>

    <div
      class="d-input-wrapper"
      :class="[{
        'left-icon': $slots.left_icon,
        'right-icon': $slots.right_icon
      }]"
      v-else
    >
      <span
        v-if="$slots.left_icon"
        class="d-input-left-icon"
      >
        <slot name="left_icon"></slot>
      </span>
      <span
        v-if="$slots.right_icon"
        class="d-input-right-icon"
      >
        <slot name="right_icon"></slot>
      </span>

      <input
        class="d-input-inner"
        type="text"
        :placeholder="placeholder"
        :disabled="disabled"
        ref="input"
        :value="value"
        v-on="events"
      />
    </div>
  </div>
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
      default: 2
    },
    value: {
      type: [String, Number],
      default: ""
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
    handelFocus(ev) {
      this.$emit("focus", ev);
    },

    handelBlur(ev) {
      this.$emit("blur", ev);
    },

    handelChange(ev) {
      this.$emit("change", ev.target.value);
    },

    handelInput(ev) {
      if (ev.target.value == this.nativeInputValue) return;
      this.$emit("input", ev.target.value);
      this.$nextTick(() => {
        let input = this.getInput();
        input.value = this.value;
      });
    },

    focus() {
      this.getInput().focus();
    },

    blur() {
      this.getInput().blur();
    },

    change() {
      this.getInput().change();
    },

    getInput() {
      return this.$refs.input || this.$refs.textarea;
    },

  },
  computed: {
    nativeInputValue() {
      return this.value === null || this.value === undefined ? "" : this.value;
    }
  },
};
</script>

<style lang="scss" scope>
@import "./public.scss";
.d-input * {
    box-sizing: border-box;

    input:focus,
    textarea:focus {
        outline: none;
    }
}

.d-input {
    .d-textarea {
        display: block;
        resize: none;
        width: 100%;
        border-color: $border-color-default;
        border-radius: 4px;
        padding: 4px 14px;
        line-height: 1.5;
        font-size: inherit;

        &:focus {
            border-color: $border-color-focus;
        }
    }

    .d-input-wrapper {
        height: $single-row-height;
        position: relative;

        .d-input-left-icon,
        .d-input-right-icon {
            position: absolute;
            top: 0;
            height: 100%;
            text-align: center;
        }

        .d-input-left-icon {
            left: $icon-padding;
        }

        .d-input-right-icon {
            right: $icon-padding
        }

        .d-input-inner {
            border-radius: 4px;
            border: 1px solid $border-color-default;
            border-radius: 4px;
            height: 100%;
            width: 100%;
            padding: $el-normal-padding;

            &:focus {
                border-color: $border-color-focus;
            }
        }

        &.left-icon {
            .d-input-inner {
                padding-left: $icon-width;
            }
        }

        &.right-icon {
            .d-input-inner {
                padding-right: $icon-width;
            }
        }

    }
}
</style>
