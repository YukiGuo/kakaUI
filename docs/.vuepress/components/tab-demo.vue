<template>
    <div>
        <h4> 横向tab</h4>
        <k-tab :selectedTab.sync="selectedTab" >
            <k-tab-head>
                <k-tab-item name="tab1"> Tab1</k-tab-item>
                <k-tab-item name="tab2"> Tab2</k-tab-item>
                <k-tab-item name="tab3"> Tab3</k-tab-item>
                <button slot="action"> 可设置其它按钮</button>
            </k-tab-head>
            <k-tab-body>
                <k-tab-pane name="tab1"> Content of Tab Pane 1</k-tab-pane>
                <k-tab-pane name="tab2"> Content of Tab Pane 2</k-tab-pane>
                <k-tab-pane name="tab3"> Content of Tab Pane 3</k-tab-pane>
            </k-tab-body>
        </k-tab>
        <pre><code>{{code1}}</code></pre>
        <h4> 竖向tab</h4>
        <k-tab :selectedTab.sync="selectedTab1" direction="vertical">
            <k-tab-head>
                <k-tab-item name="tab4"> Tab4</k-tab-item>
                <k-tab-item name="tab5"> Tab5</k-tab-item>
                <k-tab-item name="tab6"> Tab6</k-tab-item>
            </k-tab-head>
            <k-tab-body>
                <k-tab-pane name="tab4"> Content of Tab Pane 4</k-tab-pane>
                <k-tab-pane name="tab5"> Content of Tab Pane 5</k-tab-pane>
                <k-tab-pane name="tab6"> Content of Tab Pane 6</k-tab-pane>
            </k-tab-body>
        </k-tab>
        <pre><code>{{code2}}</code></pre>
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
                selectedTab:'tab1',
                selectedTab1:'tab5',
                code1:  `
        <k-tab :selectedTab.sync="selectedTab">
            <k-tab-head>
                <k-tab-item name="tab1"> Tab1</k-tab-item>
                <k-tab-item name="tab2"> Tab2</k-tab-item>
                <k-tab-item name="tab3"> Tab3</k-tab-item>
                 <button slot="action"> 可设置其它按钮</button>
            </k-tab-head>
            <k-tab-body>
                <k-tab-pane name="tab1"> Content of Tab Pane 1</k-tab-pane>
                <k-tab-pane name="tab2"> Content of Tab Pane 2</k-tab-pane>
                <k-tab-pane name="tab3"> Content of Tab Pane 3</k-tab-pane>
            </k-tab-body>
        </k-tab>

  data() {
    return {   selectedTab:'tab1'};
  },
`.replace(/^ {8}/gm, '').trim(),
                code2:`

       <k-tab :selectedTab.sync="selectedTab1" direction="vertical">
            <k-tab-head>
                <k-tab-item name="tab4"> Tab4</k-tab-item>
                <k-tab-item name="tab5"> Tab5</k-tab-item>
                <k-tab-item name="tab6"> Tab6</k-tab-item>
            </k-tab-head>
            <k-tab-body>
                <k-tab-pane name="tab4"> Content of Tab Pane 4</k-tab-pane>
                <k-tab-pane name="tab5"> Content of Tab Pane 5</k-tab-pane>
                <k-tab-pane name="tab6"> Content of Tab Pane 6</k-tab-pane>
            </k-tab-body>
        </k-tab>
                `.replace(/^ {8}/gm, '').trim()

            }
        }
    };
</script>

<style lang='scss' scoped>

</style>