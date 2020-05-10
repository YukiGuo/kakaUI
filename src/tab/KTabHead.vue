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
        display: flex;
        justify-content: flex-start;
        align-items: center;
        border: #EE2C2C 1px solid;
        min-height: 40px;
        >.action-wrapper{
            margin-left: auto;
        }
    }
</style>