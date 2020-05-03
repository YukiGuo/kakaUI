<template>
    <div>
        <div class="box">
            <k-button :loading="loading1" @click="loading1=!loading1">按钮1</k-button>
            <k-button icon-name="setting">按钮</k-button>
            <k-button :loading="loading2" @click="loading2=!loading2" icon-name="setting" icon-position="right">按钮
            </k-button>
            <k-button-group>
                <k-button icon-name="left">上一页</k-button>
                <k-button>其它</k-button>
                <k-button icon-name="right">下一页</k-button>
            </k-button-group>
        </div>
        <div class="box">
            <k-input value="hello"> </k-input>
            <k-input value="123" disabled > </k-input>
            <k-input value="123" readonly > </k-input>
        </div>
        <div class="box">
            <k-input value="小哈哈哈" error="名字填写错误"> </k-input>
            <k-input :value="value" value="成功输入" success/>
        </div>
        <div class="box">
            <k-input v-model="message"> </k-input>
            <span>message: {{message}}</span>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'App',
        data() {
            return {
                loading1: false,
                loading2: false,
                value: '',
                message:'这是一个双向绑定'
            }
        },
        methods:{
            a(e){
                console.log(e)
            }
        }
    }
</script>
<style lang="scss" scoped>
    .box {
        margin: 10px;
    }
</style>