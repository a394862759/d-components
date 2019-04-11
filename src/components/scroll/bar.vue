<template>
    <div :class="['bar-outer', {'horizontal': !isVertical}]" @mousedown="handleClick">
        <div
            class="bar-inner"
            ref="inner"
            :style="isVertical ?
                {'height': size, 'transform': `translateY(${move})`}:
                {'width': size, 'transform': `translateX(${move})`}"
            @mousedown.passive.stop="startDrag"
        ></div>
    </div>
</template>

<script>

import { on, once, off } from "@/utils/dom.js";

const MAP = {
    vertical: {
        direction: "top",
        offset: "offsetHeight",
        client: "clientY",
        axis: "Y",
        scroll: "scrollTop",
        scrollSize: "scrollHeight"
    },
    horizontal: {
        direction: "left",
        offset: "offsetWidth",
        client: "clientX",
        axis: "X",
        scroll: "scrollLeft",
        scrollSize: "scrollWidth"
    }
};

export default {
    data() {
        return {
            cursorDown: false,
            lastScroll: null
        };
    },
    props: {
        size: { type: String, default: "100%" },
        move: { type: String, default: "0" },
        isVertical: { type: Boolean, default: true }
    },

    computed: {
        map() {
            return MAP[this.isVertical ? "vertical" : "horizontal"];
        }
    },

    methods: {
        startDrag(ev) {
            //记录点击位置
            this.lastScroll = ev[this.map.client];
            this.cursorDown = true;

            on(document, "mousemove", this.handleMouseMove);
            on(document, "mouseup", this.handleMouseUp);
            document.onselectstart = () => false; 
        },

        handleMouseMove(ev) {
            if (this.cursorDown === false) return;
            // 获取当前位置 - 点击位置差值
            let num = ev[this.map.client] - this.lastScroll;
            this.lastScroll = ev[this.map.client];

            // 通过差值 计算占outer的百分比
            let percentage = num / this.$el[this.map.offset];

            // 映射到外部的scroll(外部视图变化)
            let el = this.$parent.$refs.scrollEl;
            let viewNum =
                el[this.map.scroll] + el[this.map.scrollSize] * percentage;
            el[this.map.scroll] = viewNum >= 0 ? viewNum : 0;
        },

        handleMouseUp() {
            this.cursorDown = false;
            off(document, "mousemove", this.handleMouseMove);
            document.onselectstart = null;
        },

        handleClick(ev) {
            let offset = Math.abs(
                this.$el.getBoundingClientRect()[this.map.direction] -
                    ev[this.map.client]
            );
            let half = this.$refs.inner[this.map.offset] / 2;
            let pos = offset - half > 0 ? offset - half : 0;
            let movePercentage =
                ((offset - half) * 100) / this.$el[this.map.offset];
            this.$parent[`barMove${this.map.axis}`] = movePercentage + "%";
            let scroll =
                (movePercentage *
                    this.$parent.$refs.scrollEl[this.map.scrollSize]) /
                100;
            this.$parent.$refs.scrollEl[this.map.scroll] = scroll;
        }
    },

    mounted() {
        //console.log(this.$parent.$el.offsetHeight)
    },

    beforeDestroy() {
        off(document, "mousemove", this.handleMouseMove);
    }
};
</script>

<style scoped lang="scss">
.bar-outer {
    position: absolute;
    right: 2px;
    top: 2px;
    bottom: 2px;
    background-color: rgba(50, 50, 50, 0.1);
    border-radius: 4px;
    width: 8px;
    overflow: hidden;
    transition: .5s;
    opacity: 0;
    &.horizontal {
        left: 2px;
        top: inherit;
        height: 8px;
        width: auto;
        opacity: 1;
    }
    .bar-inner {
        height: 100%;
        width: 100%;
        background-color: rgba(0, 150, 250, 0.8);
        border-radius: 4px;
    }
}
</style>