<template>
    <svg class="icon" aria-hidden="true">
        <use :xlink:href=`#kaka-${iconName}` />
    </svg>
</template>

<script lang='ts'>
    export default {
        name: 'Icon',
        props:{
            iconName:{}
        }
    };
</script>

<style lang='scss' scoped>

    .icon {
        width: 1em;
        height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;

    }

</style>