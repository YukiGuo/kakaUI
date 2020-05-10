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
            }
        },
        computed:{
            className(){
                return{
                    active:this.active,
                    disabled: this.disabled
                }
            }
        },
        props: {
            disabled: {
                type: Boolean,
                default: false
            },
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
        background:white;
        &.active{
            background: red;
        }
        &.disabled{
            background: #666666;
        }
    }
</style>