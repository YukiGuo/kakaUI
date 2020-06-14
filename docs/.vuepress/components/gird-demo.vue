<template>
    <div>
        <div class="box">
            <h4>第一种网格</h4>
            <k-row >
                <k-col span="6" >6 </k-col>
                <k-col span="6" >6 </k-col>
                <k-col :span=12 > 12</k-col>
            </k-row>
            <k-row>
                <k-col span="1">1 </k-col>
                <k-col span="3"> 3</k-col>
                <k-col :span=6> 6</k-col>
                <k-col span="8">8 </k-col>
                <k-col span="4"> 4</k-col>
                <k-col :span=2> 2</k-col>
            </k-row>
            <pre><code>{{code2}}</code></pre>
            <h4>第二种有offset的网格</h4>
            <k-row >
                <k-col span="5" offset="4">1 </k-col>
                <k-col :span=15> 15</k-col>
            </k-row>
            <k-row >
                <k-col span="4" offset="3">4 </k-col>
                <k-col span="3"> 3</k-col>
                <k-col :span=14> 14</k-col>
            </k-row>
            <pre><code>{{code2}}</code></pre>
            <h4>第三种有gutter的网格</h4>
            <k-row gutter="40" :wrap="false">
                <k-col span="12"> 2</k-col>
                <k-col span=12 > 3</k-col>
            </k-row>
            <k-row gutter="20" :wrap="false">
                <k-col span="6" >1</k-col>
                <k-col span=6> 3</k-col>
                <k-col span=12 > 3</k-col>
            </k-row>
            <pre><code>{{code4}}</code></pre>
            <h3>响应式网格</h3>
            <k-row  >
                <k-col span="24" :m="{span:8}" :l="{span:'6'}">1</k-col>
                <k-col span="24" :m="{span:8}" :l="{span:'6'}">2</k-col>
                <k-col span="24" :m="{span:8}" :l="{span:'6'}">3</k-col>
                <k-col span="4" :m="{span:8}" :l="{span:'6'}">4</k-col>
                <k-col span="24" :m="{span:8}" :l="{span:'6'}">5</k-col>
                <k-col span="24" :m="{span:8}" :l="{span:'6'}">6</k-col>
                <k-col span="24" :m="{span:12}" :l="{span:'6'}">7</k-col>
                <k-col span="24" :m="{span:12}" :l="{span:'6'}">8</k-col>
            </k-row>
            <pre><code>{{code4}}</code></pre>
        </div>
    </div>
</template>

<script lang='ts'>
    import KCol from '../../../src/gird/KCol.vue';
    import KRow from '../../../src/gird/KRow.vue';

    export default {
        name: 'gird-demo',
        components:{'k-col':KCol,'k-row': KRow},
        data(){
            return{
                code1:`
            <k-row >
                <k-col span="6" >6 </k-col>
                <k-col span="6" >6 </k-col>
                <k-col :span=12 > 12</k-col>
            </k-row>
            <k-row>
                <k-col span="1">1 </k-col>
                <k-col span="3"> 3</k-col>
                <k-col :span=6> 6</k-col>
                <k-col span="8">8 </k-col>
                <k-col span="4"> 4</k-col>
                <k-col :span=2> 2</k-col>
            </k-row>
                `.replace(/^ {8}/gm, '').trim(),
                code2:`
            <k-row >
                <k-col span="5" offset="4">1 </k-col>
                <k-col :span=15> 15</k-col>
            </k-row>
            <k-row >
                <k-col span="4" offset="3">4 </k-col>
                <k-col span="3"> 3</k-col>
                <k-col :span=14> 14</k-col>
            </k-row>
                `.replace(/^ {8}/gm, '').trim(),
                code3:`
             <k-row gutter="40" :wrap="false">
                <k-col span="12"> 2</k-col>
                <k-col span=12 > 3</k-col>
            </k-row>
            <k-row gutter="20" :wrap="false">
                <k-col span="6" >1</k-col>
                <k-col span=6> 3</k-col>
                <k-col span=12 > 3</k-col>
            </k-row>
                `.replace(/^ {8}/gm, '').trim(),
                code4:`
            <k-row >
                <k-col span="24" :m="{span:8}" :l="{span:'6'}">1</k-col>
                <k-col span="24" :m="{span:8}" :l="{span:'6'}">2</k-col>
                <k-col span="24" :m="{span:8}" :l="{span:'6'}">3</k-col>
                <k-col span="4" :m="{span:8}" :l="{span:'6'}">4</k-col>
                <k-col span="24" :m="{span:8}" :l="{span:'6'}">5</k-col>
                <k-col span="24" :m="{span:8}" :l="{span:'6'}">6</k-col>
                <k-col span="24" :m="{span:12}" :l="{span:'6'}">7</k-col>
                <k-col span="24" :m="{span:12}" :l="{span:'6'}">8</k-col>
            </k-row>`.replace(/^ {8}/gm, '').trim()
            }
        }
    };
</script>

<style lang='scss' scoped>

</style>