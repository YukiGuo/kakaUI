<template>
    <div style="padding:20px">
        <h3>Collapse</h3>
<div>
        <k-collapse :selected-name.sync="selectedName">
            <k-collapse-item title="标题1" name="1">
            内容1</k-collapse-item>
            <k-collapse-item title="标题2" name="2">
            内容2</k-collapse-item>
            <k-collapse-item title="标题3" name="3">
                内容3
            </k-collapse-item>
            {{selectedName}}
        </k-collapse>
</div>
        <h3>popover</h3>
        <k-popover style="padding: 10px ; " position="bottom" >
            <template slot="content">
                <span> 这是弹出框</span>
            </template>
            <span>点我</span>
        </k-popover>
        <k-popover style="padding: 10px ;" >
            <template slot="content">
                <span> 这是弹出框</span>
            </template>
            <span>点我</span>
        </k-popover>
        <k-popover style="padding: 10px ; " position="left" >
            <template slot="content">
                <span> 这是弹出框</span>
            </template>
            <span>点我</span>
        </k-popover>
        <k-popover style="padding: 10px ; " position="right">
            <template slot="content">
                <span> 这是弹出框</span>
            </template>
            <span>点我</span>
        </k-popover>
        <hr/>
        <k-popover style="padding: 10px ; " position="top" trigger="hover">
            <template slot="content">
                <span> 这是弹出框</span>
            </template>
            <span>点我</span>
        </k-popover>
        <k-popover style="padding: 10px ; " position="bottom" trigger="hover">
            <template slot="content">
                <span> 这是弹出框</span>
            </template>
            <span>点我</span>
        </k-popover>
        <k-popover style="padding: 10px ; " position="left" trigger="hover">
            <template slot="content">
                <span> 这是弹出框</span>
            </template>
            <span>点我</span>
        </k-popover>
        <k-popover style="padding: 10px ; " position="right" trigger="hover">
            <template slot="content">
                <span> 这是弹出框</span>
            </template>
            <span>点我</span>
        </k-popover>
        <hr>
        <h3>Tab</h3>
        <k-tab :selectedTab.sync="selectedTab">
            <k-tab-head>
                <template slot="action">
                    <button>设置</button>
                </template>
                <k-tab-item name="sport"> 体育</k-tab-item>
                <k-tab-item name="finance"> 财经</k-tab-item>
                <k-tab-item name="food"> 美食</k-tab-item>
            </k-tab-head>
            <k-tab-body>
                <k-tab-pane name="sport"> 这里是体育</k-tab-pane>
                <k-tab-pane name="finance"> 这里是财经</k-tab-pane>
                <k-tab-pane name="food"> 这里是美食</k-tab-pane>
            </k-tab-body>
        </k-tab>
        <div class="box"></div>
        <h3>Toast</h3>
        <div class="box">
            <button @click="showToast">点我</button>
        </div>
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
            <k-input value="123" disabled> </k-input>
            <k-input value="123" readonly> </k-input>
        </div>
        <div class="box">
            <k-input value="小哈哈哈" error="名字填写错误"> </k-input>
            <k-input :value="value" value="成功输入" success/>
        </div>
        <div class="box">
            <k-input v-model="message"></k-input>
            <span>message: {{message}}</span>
        </div>
                <h3>网格</h3>
                <div class="box" style=" background: lightblue;">
                    <h4>第一种</h4>
                    <k-row wrap>
                        <k-col span="12"  >1 </k-col>
                        <k-col span="12"   > 2</k-col>
                    </k-row>
                    <k-row wrap>
                        <k-col span="12" >1 </k-col>
                        <k-col span="12" >2 </k-col>
                        <k-col :span=24 > 3</k-col>
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
                        <k-col span="12"> 2</k-col>
                        <k-col span=12 > 3</k-col>
                    </k-row>
                    <k-row gutter="20">
                        <k-col span="6" >1</k-col>
                        <k-col span=6> 3</k-col>
                        <k-col span=12 > 3</k-col>
                    </k-row>
                  <h3>响应式</h3>
                    <k-row style="background:#666666" >
                        <k-col span="24" :m="{span:8}" :l="{span:'6'}">1</k-col>
                        <k-col span="24" :m="{span:8}" :l="{span:'6'}">2</k-col>
                        <k-col span="24" :m="{span:8}" :l="{span:'6'}">3</k-col>
                        <k-col span="4" :m="{span:8}" :l="{span:'6'}">4</k-col>
                        <k-col span="24" :m="{span:8}" :l="{span:'6'}">5</k-col>
                        <k-col span="24" :m="{span:8}" :l="{span:'6'}">6</k-col>
                        <k-col span="24" :m="{span:12}" :l="{span:'6'}">7</k-col>
                        <k-col span="24" :m="{span:12}" :l="{span:'6'}">8</k-col>
                    </k-row>
                </div>
        <h2>普通布局</h2>
        <div class="box">
                        <k-layout>
                            <k-header>header </k-header>
                            <k-layout>
                                <k-content>content </k-content>
                                    <k-sider> side</k-sider>
                            </k-layout>

                            <k-footer>footer</k-footer>
                        </k-layout>
            <h3>ggg</h3>
            <k-layout>
                <k-sider> side</k-sider>
                <k-layout>
                    <k-header>header</k-header>
                    <k-content>content</k-content>
                    <k-footer>footer</k-footer>
                </k-layout>
            </k-layout>
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
                message: '这是一个双向绑定',
                selectedTab: 'sport',
                selectedName:['2']
            }
        },
        methods: {
            a(e) {
                console.log(e)
            },
            showToast() {
                this.$toast(`已提或或或或或或或或或`, {
                    position: 'bottom',
                    closeButton: {
                        text: '关闭',
                        callback() {
                            console.log('他说已经充值智商了')
                        }
                    },
                })
            }
        }
    }
</script>
<style lang="scss" scoped>
    .box {
        margin: 10px;
    }

    .layout {
        height: 400px;

        .content {
            background-color: #eee;
        }

        .sider {
            width: 100px;
            background-color: #bbb;
        }

        .header {
            height: 50px;
            background-color: #ccc;
        }

        .footer {
            height: 50px;
            background-color: #ccc;
        }
    }

</style>