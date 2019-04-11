<template>
  <section class="testwrap">
    <div>
      <h2>Demo</h2>
      <inp
        :disabled="false"
        :placeholder="'rua'"
        v-model="v1"
        ref="inp"
      >
        <i
          slot="left_icon"
          class="el-input__icon el-icon-share"
        ></i>
        <i
          slot="right_icon"
          class="el-input__icon el-icon-edit"
          @click="fn"
        ></i>
      </inp>
      <br />
      <br>
      <div style="word-wrap: break-word;word-break: normal;">{{v1}}</div>
      <br />
      <minp
        @change="fn"
        :disabled="false"
        :placeholder="'rua'"
        v-model="v1"
      >
        <i
          slot="left_icon"
          class="el-input__icon el-icon-share"
        ></i>
        <i
          slot="right_icon"
          class="el-input__icon el-icon-edit"
        ></i>
      </minp>
    </div>

    <attr-table v-for="(option,index) in tables" :key="index" :option="option"></attr-table>
  </section>
</template>

<script>
import inp from "@/pc/d-input.vue";
import minp from "@/mobile/d-input.vue";
export default {
  name: "d-input",
  components: {
    inp,
    minp
  },
  data() {
    return {
      v1: "value",
      rows: 1,
      autosize: {
        minRows: 2,
        maxRows: 5
      },
      tables: [
        {
          title: "Attr",
          introduction: "v-bind:name",
          column: ["name", "type", "accepted values", "default"],
          values: [
            ["type", "String", "textarea", ""],
            ["rows", "Number", "", 4],
            [
              "autosize",
              "boolean || object",
              "true,false,{minRows:1,maxRows:6}",
              "false"
            ],
            ["placeholder", "String", "", ""]
          ]
        }, {
          title: "Event",
          introduction: "v-on:eventName",
          column: ["event name", "params"],
          values: [
            ["input","value(String||Number)"],
            ["change","value(String||Number)"],
            ["focus","event(Event)"],
            ["blur","event(Event)"]
          ]
        }, {
          title: "Method",
          introduction: "$el.methodName()",
          column: ["method name", "params"],
          values: [
            ["focus",""],
            ["blur", ""],
            ["select", ""]
          ]
        },{
          title: "Slot",
          introduction: "<tag slot='slotName' />",
          column: ["slot name", "introduction"],
          values: [
            ["left_icon",""],
            ["right_icon", ""],
          ]
        }

      ]
    };
  },
  methods: {
    fn(ev) {
      //alert(1)
      this.$refs.inp.select();
    }
  }
};
</script>

<style scoped lang="scss">
</style>