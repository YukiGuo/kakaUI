<template>
    <div class="layout" :class="layoutClass">
        <slot></slot>
    </div>
</template>

<script lang='ts'>
    export default {
        name: 'KLayout',
        data(){
            return{
                layoutClass:{
                    hasSider:false
                }
            }
        },
        mounted: function () {
            this.$children.forEach((vm)=>{
                if(vm.$options.name==='KSider'){
                    this.layoutClass.hasSider=true;
                }

            })
        }
    };
</script>

<style lang='scss' scoped>
.layout{
    display: flex;
    flex-grow:1;
    flex-direction:column;
    min-height: 100px;
    &.hasSider{
        flex-direction:row;
    }
}
</style>