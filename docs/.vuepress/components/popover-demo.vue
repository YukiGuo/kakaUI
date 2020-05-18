<template>
    <div>
      <h4>点击弹出</h4>
        <k-popover style="padding: 10px ; " position="bottom" >
            <template slot="content">
                <span> 这是弹出框</span>
            </template>
            <span class="button">点我</span>
        </k-popover>
        <k-popover style="padding: 10px ; " position="top" >
            <template slot="content">
                <span> 这是弹出框</span>
            </template>
            <span class="button">点我</span>
        </k-popover>
        <k-popover style="padding: 10px ; " position="left" >
            <template slot="content">
                <span> 这是弹出框</span>
            </template>
            <span class="button">点我</span>
        </k-popover>
        <k-popover style="padding: 10px ; " position="right" >
            <template slot="content">
                <span> 这是弹出框</span>
            </template>
            <span class="button">点我</span>
        </k-popover>
        <hr>
        <h4>hover弹出</h4>
        <k-popover style="padding: 10px ; " position="bottom"  trigger="hover">
            <template slot="content">
                <span> 这是弹出框</span>
            </template>
            <span class="button">点我</span>
        </k-popover>
        <k-popover style="padding: 10px ; " position="top"  trigger="hover" >
            <template slot="content">
                <span> 这是弹出框</span>
            </template>
            <span class="button">点我</span>
        </k-popover>
        <k-popover style="padding: 10px ; " position="left"   trigger="hover">
            <template slot="content">
                <span> 这是弹出框</span>
            </template>
            <span class="button">点我</span>
        </k-popover>
        <k-popover style="padding: 10px ; " position="right"  trigger="hover">
            <template slot="content">
                <span> 这是弹出框</span>
            </template>
            <span class="button">点我</span>
        </k-popover>
    </div>
</template>

<script lang='js'>

    import KPopover from "../../../src/popover/KPopover"

    export default {
        name:'popover-demo',
        components: {
            'k-popover': KPopover
        },
        data() {
            return {
            };
        },
    };
</script>

<style lang='scss' scoped>
.button{
    min-height: 30px;
}
</style>