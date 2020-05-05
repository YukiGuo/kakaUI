<template>
    
    <div class="content"><slot></slot></div>
</template>

<script lang='ts'>
    export default {
        name: 'KContent'
    };
</script>

<style lang='scss' scoped>
.content{
    flex-grow:1;
}
</style>