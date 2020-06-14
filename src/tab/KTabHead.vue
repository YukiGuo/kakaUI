<template>
    <div class="k-tab-head">
        <slot> </slot>
        <div class="action-wrapper">
            <slot name="action"/>
        </div>

<!--        多的按钮房租这里面-->
    </div>
</template>

<script lang='ts'>
    export default {
        name: 'KTabHead'
    };
</script>

<style lang='scss' scoped>
    .k-tab-head{
        min-height: 40px;
        >.action-wrapper{
            margin-left: auto;
        }
    }
</style>