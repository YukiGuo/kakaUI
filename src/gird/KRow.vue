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
            },
            wrap:{
                type:Boolean,
                default:true,
            }
        },
        computed:{
            rowStyle(){
                const{gutter,wrap}=this
                return{
                    marginLeft:-gutter/2+'px',
                    marginRight:-gutter/2+'px',
                    flexWrap: wrap ? "wrap":"nowrap"
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