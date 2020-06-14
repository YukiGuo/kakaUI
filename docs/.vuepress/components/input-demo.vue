<template>
    <div>
        <h4>一般输入框</h4>
        <div>
            <k-input value="默认值"> </k-input>
            <k-input value="禁用状态" disabled> </k-input>
            <k-input :value="value" value="成功输入" success/>
        </div>
        <div style="margin-top: 10px">
            <k-input value="这里填写名字" error="名字填写错误啦"> </k-input>

        </div>
        <pre><code>{{code1}}</code></pre>
        <h4>双向绑定输入框</h4>
        <div class="box">
            <k-input v-model="message"> </k-input>
            <span>message: {{message}}</span>
            <pre><code>{{code2}}</code></pre>
        </div>
    </div>
</template>

<script lang='ts'>
    import KInput from '../../../src/input/KInput.vue';

    export default {
        name: 'input-demo',
        components: {'k-input': KInput},
        data() {
            return {
                value: '',
                message: '值',
                code1: `
            <k-input value="默认值"> </k-input>
            <k-input value="禁用状态" disabled> </k-input>
            <k-input :value="value" value="成功输入" success/>
            <k-input value="这里填写名字" error="名字填写错误啦"> </k-input>
                `.replace(/^ {8}/gm, '').trim(),
                code2: `
        <k-input v-model="message"> </k-input>
        <span>message: {{message}}</span>
                `.replace(/^ {8}/gm, '').trim()
            };
        }
    };
</script>

<style lang='scss' scoped>

</style>