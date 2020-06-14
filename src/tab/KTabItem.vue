<template>
    <div class='k-item-tab' @click="xxx" :class='className'>
        <slot/>
    </div>
</template>

<script lang='ts'>
    export default {
        name: 'KTabItem',
        data(){
            return{
                active:false,
                direction:''
            }
        },
        computed:{
            className(){
                return{
                    active:this.active,
                    disabled: this.disabled,
                    vertical:this.direction==="vertical"
                }
            }
        },
        props: {
            name:{
                type:String,
                required:true
            }
        },
        inject:['eventBus'],
        created(){
            this.eventBus.$on('update:selected',(name)=>{
                    this.active = name === this.name;
            });
            this.eventBus.$on('update:direction',(arg)=>{
                this.direction=arg
                }
            );
        },
        methods:{
            xxx(){
                this.eventBus.$emit('update:selected',this.name);
            }
        }
    };
</script>

<style lang='scss' scoped>
    .k-item-tab{
          width: 100px;
           padding: 0 2em;
        position: relative;
        &.vertical{
            &.active{
                &::after{
                    display: inline-block;
                    content: '';
                    height:100%;
                    width: 2px;
                    position: absolute;
                    bottom: 0;
                    left:50%;
                    background-color: #666666;
                }
        }
        }
        &.active{
           &::after{
               display: inline-block;
               content: '';
               height:2px;
               width: 100%;
               position: absolute;
               bottom: 0;
               left:0;
               background-color: #666666;
           }
        }
    }
</style>