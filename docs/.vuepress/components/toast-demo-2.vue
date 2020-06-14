<template>
    <div>
        <h4>自定义关闭按钮</h4>
        <k-button @click="onClickButton">上方弹出</k-button>
        <h4>代码</h4>
        <pre><code>{{code}}</code></pre>
        <k-button @click="showToast">上方弹出</k-button>
        <h4>代码</h4>
        <pre><code>{{code2}}</code></pre>
    </div>
</template>

<script lang='ts'>
    import KButton from '../../../src/button/KButton.vue';

    export default {
        name: 'toast-demo-2',
        components: {'k-button': KButton},
        data() {
            return {
                code: `
        <k-button  @click="onClickButton">上方弹出</k-button>
 methods: {
            onClickButton () {
                this.$toast('确认好了吗？', {
                    closeButton: {
                        text: '确认了',
                        callback: () => {console.log('确认好了')}
                    }})}}`.replace(/^ {8}/gm, '').trim(),

                code2: `
             <k-button  @click="showToast">上方弹出</k-button>
             methods: {
              showToast(){
                this.$toast('<strong style="color:red">已提交</strong>', {
                    enableHtml:true,
                })}}`.replace(/^ {8}/gm, '').trim()
            };
        },

        methods: {
            onClickButton() {
                this.$toast('准备好了吗', {
                    closeButton: {
                        text: '好了',
                        callback: () => {
                            console.log('确认好了');
                        }
                    }
                });
            },
            showToast() {
                this.$toast('<strong style="color:red">有样式的提示</strong>', {
                    enableHtml: true,
                });
            }
        },
    };
</script>

<style lang='scss' scoped>

</style>