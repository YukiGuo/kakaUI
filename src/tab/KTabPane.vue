<template>

    <div class="k-tab-pane" @click="xxx" :class='className' v-if="active">
        <slot/>
    </div>

</template>

<script lang='ts'>
    export default {
        name: 'KTabPane',
        props:{
            name:{
                type:String,
                required:true
            }
        },
        data(){
            return{
                active:false
            }
        },
        computed:{
            className(){
                return{
                    active:this.active
                }
            }
        },
        inject:['eventBus'],
        created() {
            this.eventBus.$on('update:selected',(name)=>{
                this.active = name === this.name;
            })
        },
        methods:{
          xxx(){
              this.eventBus.$emit('update:selected',this.name)
          }
        }
    };
</script>

<style lang='scss' scoped>
   .k-tab-pane{
       background: white;
       &.active{

       }
   }
</style>