<template>
    <div
            class="row"
            :style="rowStyle"
    >
      <slot> </slot>
    </div>
</template>

<script lang='js'>
    export default {
        name: 'KRow',
        props:{
            gutter:{
                type:[String,Number]
            }
        },
        computed:{
            rowStyle(){
                return{
                    marginLeft:-this.gutter/2+'px',marginRight:-this.gutter/2+'px'
                }
            }
        },
        mounted() {
            this.$children.forEach((vm)=>{
                vm.gutter=this.gutter
            })
        }
    };
</script>

<style lang='scss' scoped>
.row{
    display: flex;
}
</style>