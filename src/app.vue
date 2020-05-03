<template>
    <div>
        <h3>按钮</h3>
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
        <h3>输入框</h3>
        <div class="box">
            <k-input value="hello"> </k-input>
            <k-input value="123" disabled > </k-input>
            <k-input value="123" readonly > </k-input>
        </div>
        <div class="box">
            <k-input value="小哈哈哈" error="名字填写错误"> </k-input>
            <k-input :value="value" value="成功输入" success/>
        </div>
        <div class="box" >
            <k-input v-model="message"> </k-input>
            <span>message: {{message}}</span>
        </div>
        <h3>网格</h3>
        <div class="box" style=" background: lightblue;">
            <h4>第一种</h4>
            <k-row>
                <k-col span="2">1 </k-col>
                <k-col span="22"> 2</k-col>
            </k-row>
            <k-row>
                <k-col span="4">1 </k-col>
                <k-col span="6"> 2</k-col>
                <k-col :span=14> 3</k-col>
            </k-row>
            <k-row>
                <k-col span="1">1 </k-col>
                <k-col span="3"> 2</k-col>
                <k-col :span=6> 3</k-col>
                <k-col span="8">1 </k-col>
                <k-col span="4"> 2</k-col>
                <k-col :span=2> 3</k-col>
            </k-row>
            <h4>第二种</h4>
            <k-row >
                <k-col span="5" offset="4">1 </k-col>
                <k-col :span=16> 3</k-col>
            </k-row>
            <k-row >
                <k-col span="4" offset="3">1 </k-col>
                <k-col span="3"> 2</k-col>
                <k-col :span=14> 3</k-col>
            </k-row>
            <h4>第三种</h4>
            <k-row gutter="40">
                <k-col span="12" > 2</k-col>
                <k-col span=12 > 3</k-col>
            </k-row>
            <k-row gutter="20">
                <k-col span="6" > 2</k-col>
                <k-col span=6> 3</k-col>
                <k-col span=12 > 3</k-col>
            </k-row>
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