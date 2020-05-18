<template>
    <div>
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
    </div>
</template>

<script lang='ts'>
    import KTab from '../../../src/tab/KTab.vue';
    import KTabItem from '../../../src/tab/KTabItem.vue';
    import KTabHead from '../../../src/tab/KTabHead.vue';
    import KTabBody from '../../../src/tab/KTabBody.vue';
    import KTabPane from '../../../src/tab/KTabPane.vue';

    export default {
        name: 'tab-demo',
        components:{
            'k-tab':KTab,
            'k-tab-item':KTabItem,
            'k-tab-head':KTabHead,
            'k-tab-body':KTabBody,
            'k-tab-pane':KTabPane
        },
        data(){
            return{
                selectedTab:'sport'
            }
        }
    };
</script>

<style lang='scss' scoped>

</style>