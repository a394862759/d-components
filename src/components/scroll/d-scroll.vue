<template>
    <div class="d-scroll">
        <div
            class="scroll-wrap"
            :style="{
            'margin-right': -nativeBarWidth + 'px',
            'margin-bottom': -nativeBarWidth + 'px',
            'width': showYBar? `calc(100% + ${nativeBarWidth}px)`: '100%',
            'height': showXBar? `calc(100% + ${nativeBarWidth}px)`: '100%'
        }"
            @scroll="handelScroll"
            ref="scrollEl"
        >
            <slot></slot>
        </div>
        <Bar v-if="showYBar" :size="barSizeY" :move="barMoveY"></Bar>
        <Bar v-if="showXBar" :size="barSizeX" :move="barMoveX" :isVertical="false"></Bar>
    </div>
</template>

<script>
import { getNativeScrollBarWidth } from "./utils.js";
import Bar from "./bar.vue";
export default {
    components: {
        Bar
    },
    data() {
        return {
            nativeBarWidth: getNativeScrollBarWidth(),
            barSizeY: "",
            barMoveY: "",
            barSizeX: "",
            barMoveX: ""
        };
    },
    methods: {
        handelScroll(ev) {
            let el = ev.target;
            this.barMoveY = (el.scrollTop / el.clientHeight) * 100 + "%";
            this.barMoveX = (el.scrollLeft / el.clientWidth) * 100 + "%";
        },
        calcBarSize() {
            let el = this.$refs.scrollEl;

            let height = el.scrollHeight;
            let clientHeight = el.clientHeight;
            this.barSizeY = (clientHeight / height) * 100 + "%";

            let width = el.scrollWidth;
            let clientWidth = el.clientWidth;
            this.barSizeX = (clientWidth / width) * 100 + "%";
        }
        /* handelDrag(percentage) {
      let num = parseFloat(this.barMoveY)
      let nowMovePercentage = num + percentage
      this.barMoveY = nowMovePercentage >= 0 ? nowMovePercentage + "%" : "0%"
    } */
    },
    computed: {
        showYBar() {
            return this.barSizeY !== "100%";
        },
        showXBar() {
            return this.barSizeX !== "100%";
        }
    },
    mounted() {
        this.$nextTick(this.calcBarSize);
        addResizeListener(this.$refs.scrollEl, this.calcBarSize);
    },
    updated() {
        this.calcBarSize();
    },
    beforeDestroy() {
        removeResizeListener(this.$refs.scrollEl, this.calcBarSize);
    }
};
</script>

<style scoped lang="scss">
.d-scroll {
    overflow: hidden;
    position: relative;
    &:hover /deep/ .bar-outer {
        opacity: 1;
    }
    /* &.page-scroll {
        .scroll-wrap {
            overflow-x: auto;
        }
    } */
    .scroll-wrap {
        height: 100%;
        overflow: auto;
    }
}
</style>