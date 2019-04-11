<template>
  <div>
    <div>
      <button
        v-for="(align,index) in aligns"
        :key="index"
        @click="changeLabelPosition(align)"
      >{{align}}</button>
    </div>
    <d-input
      v-model="column"
      placeholder="行数"
    ></d-input>

    <dFormNormal
      labelWidth="60px"
      :column="column"
      :labelPosition="labelPosition"
    >
      <d-form-item label="lb1">
        <d-input></d-input>
      </d-form-item>
      <d-form-item label="lb2">
        <el-select
          v-model="value"
          placeholder="请选择"
          :popper-append-to-body="true"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </d-form-item>
      <d-form-item label="lb3">
        <d-input></d-input>
      </d-form-item>
      <d-form-item
        label="textareatex tareatextarea"
        style="width:100%;"
      >
        <d-input
          v-model="v1"
          type="textarea"
        ></d-input>
      </d-form-item>
      <d-form-item label="rua">
        <d-input></d-input>
      </d-form-item>
      <d-form-item label="rua">
        <d-input></d-input>
      </d-form-item>
      <d-form-item label="rua">
        <d-input></d-input>
      </d-form-item>
      <d-form-item label="rua">
        <d-input></d-input>
      </d-form-item>
      <d-form-item label="rua">
        <d-input></d-input>
      </d-form-item>
      <d-form-item label="rua">
        <d-input></d-input>
      </d-form-item>
      <d-form-item label="rua">
        <d-input></d-input>
      </d-form-item>
      <d-form-item label="rua">
        <d-input></d-input>
      </d-form-item>
      <d-form-item label="rua">
        <d-input></d-input>
      </d-form-item>
      <d-form-item label="rua">
        <d-input></d-input>
      </d-form-item>
      <d-form-item label="rua">
        <d-input></d-input>
      </d-form-item>
      <d-form-item label="rua">
        <d-input></d-input>
      </d-form-item>
      <d-form-item label="rua">
        <d-input></d-input>
      </d-form-item>
      <d-form-item label="rua">
        <d-input></d-input>
      </d-form-item>
      <d-form-item label="rua">
        <el-select
          v-model="value"
          placeholder="请选择"
          :popper-append-to-body="false"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </d-form-item>
    </dFormNormal>
  </div>

</template>

<script>
import dFormNormal from "@/components/d-form-normal.vue";
import dFormItem from "@/components/d-form-item.vue";
import dInput from "@/mobile/d-input.vue";
export default {
  components: {
    dFormItem,
    dFormNormal,
    dInput
  },

  data() {
    return {
      v1: "value",
      column: "1",
      aligns: ["left", "right", "top"],
      labelPosition: "left",
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        },
        {
          value: "选项6",
          label: "黄金糕"
        },
        {
          value: "选项7",
          label: "双皮奶"
        },
        {
          value: "选项8",
          label: "蚵仔煎"
        },
        {
          value: "选项9",
          label: "龙须面"
        },
        {
          value: "选项10",
          label: "北京烤鸭"
        }
      ],
      value: ""
    };
  },

  methods: {
    changeLabelPosition(align) {
      this.labelPosition = align;
    }
  }
};
</script>

<style scoped lang="scss">
</style>