<template>
    <div class="wrapper">
        <k-button @click="$toast('已提交',{position:'top'})">上方弹出</k-button>
        <k-button @click="$toast('已提交',{position:'center'})">中间弹出</k-button>
        <k-button @click="$toast('已提交',{position:'bottom'})">下方弹出</k-button>
        <k-button @click="$toast('已提交',{position:'left'})">左边弹出</k-button>
        <k-button @click="$toast('已提交',{position:'right'})">右边弹出</k-button>
        <k-button @click="$toast('已提交',{autoClose:true,autoCloseDelay:5})">自动关闭</k-button>
        <h4>代码</h4>
        <pre><code>{{code1}}</code></pre>
    </div>
</template>

<script lang='ts'>
  import plugin from '../../../src/toast/plugin';
  import KButton from '../../../src/button/KButton.vue';
    import Vue from 'vue';
    Vue.use(plugin);
    export default {
        name: 'toast-demo',
        components:{'k-button':KButton},
        data(){
            return{
                code1:`
<k-button @click="$toast('已提交',{position:'top'})">上方弹出</k-button>
        <k-button @click="$toast('已提交',{position:'center'})">中间弹出</k-button>
        <k-button @click="$toast('已提交',{position:'bottom'})">下方弹出</k-button>
        <k-button @click="$toast('已提交',{position:'left'})">左边弹出</k-button>
        <k-button @click="$toast('已提交',{position:'right'})">右边弹出</k-button>
        <k-button @click="$toast('已提交',{autoClose:true,autoCloseDelay:5})">自动关闭</k-button>
                `.replace(/^ {8}/gm, '').trim()
            }
        }

    }
</script>

<style lang='scss' scoped>

</style>