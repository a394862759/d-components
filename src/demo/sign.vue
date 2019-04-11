<template>
    <div class="sign">
        <div class="sign-box">
            <VueSignaturePad :images="imgs" ref="sign"/>
        </div>
        <button @click="clear">clear</button>
        <button @click="save">save</button>
        <button @click="undo">undo</button>
        <button @click="mix">mix</button>
        <button @click="addImg">addImage</button>
        <br>
        <button @click="toggoleLock">{{isLock? "unLock" : "lock"}}</button>
        <div>
            <img :src="pic" alt>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            imgs: [
                {
                    src: require("@/assets/a.jpg"),
                    x: -100,
                    y: -100
                }
            ],
            pic: "",
            isLock: false,
            url: process.env.BASE_URL
        };
    },
    methods: {
        //保存
        save() {
            let obj = this.sign.saveSignature();
            if (obj.isEmpty) return;
            this.pic = obj.data;
        },

        //撤回
        undo() {
            this.sign.undoSignature();
        },

        //清空
        clear() {
            this.sign.clearSignature();
        },

        mix() {
            this.sign
                .mergeImageAndSignature(this.pic)
                .then(d => {
                    console.log(d);
                    this.pic = d;
                });
        },

        addImg() {
            this.sign.addImages([require("@/assets/b.jpg")]).then(d => {
                console.log(d);
                this.pic = d;
            });
        },

        toggoleLock() {
            if (this.isLock) {
                this.sign.openSignaturePad();
            } else {
                this.sign.lockSignaturePad();
            }

            this.isLock = !this.isLock;
        }
    },
    computed: {
        sign() {
            return this.$refs.sign;
        }
    }
};
</script>

<style scoped lang="scss">
.sign {
    padding: 20px;
}
.sign-box {
    height: 200px;
    border: 1px solid #e8e8e8;
}
</style>