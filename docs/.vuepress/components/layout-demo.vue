<template>
    <div class="wrapper">
        <h4>第一种布局</h4>
        <k-layout>
            <k-header>header</k-header>
             <k-content>content</k-content>
            <k-footer>footer</k-footer>
        </k-layout>
        <h4>第二种布局</h4>
        <k-layout>
            <k-sider> side</k-sider>
            <k-layout>
                <k-header>header</k-header>
                <k-content>content</k-content>
                <k-footer>footer</k-footer>
            </k-layout>
        </k-layout>
        <h4>第三种布局</h4>
        <k-layout>
            <k-header>header</k-header>
            <k-layout>
                <k-sider> side</k-sider>
                <k-content>content</k-content>
                <k-sider> side</k-sider>
            </k-layout>
            <k-footer>footer</k-footer>
        </k-layout>
        <pre><code>{{code}}</code></pre>
    </div>
</template>

<script lang='ts'>
    import KLayout from '../../../src/layout/KLayout.vue';
    import KHeader from '../../../src/layout/KHeader.vue';
    import KFooter from '../../../src/layout/KFooter.vue';
    import KContent from '../../../src/layout/KContent.vue';
    import KSider from '../../../src/layout/KSider.vue';

    export default {
        name: 'layout-demo',
        components: {
            'k-layout': KLayout,
            'k-header': KHeader,
            'k-footer': KFooter,
            'k-content': KContent,
            'k-sider':KSider
        },
        data(){
            return{
                code:`
        <k-layout>
            <k-header>header</k-header>
            <k-layout>
                <k-sider> side</k-sider>
                <k-content>content</k-content>
                <k-sider> side</k-sider>
            </k-layout>
            <k-footer>footer</k-footer>
        </k-layout>
                `.replace(/^ {8}/gm, '').trim()
            }
        }
    };
</script>

<style lang='scss' scoped>
.wrapper{

    div{
        border: solid 0.5px #6a8bad;
    }
}
</style>