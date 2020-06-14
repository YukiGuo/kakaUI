<template>
    <div class="wrapper" :class="{[direction]:true}">
        <slot/>
    </div>
</template>

<script lang='ts'>
    import Vue from 'vue'
    export default {
        name: 'KTab',
        props: {
            selectedTab: {
                type: String,
                required:true,
                default: ''
            },
            direction:{
                type:String,
                default: ' horizontal',
                validator(value){
                    return [' horizontal', 'vertical'].indexOf(value) >= 0;

                }
            }
        },
        data(){
            return{
               eventBus:new Vue(),
                tab:{name:'这是一个测试tab'}

            }
        },
        provide(){
            return {
                eventBus:this.eventBus
            }
        },
        mounted(){
            this.eventBus.$emit('update:selected',this.selectedTab);
            this.eventBus.$emit('update:direction',this.direction);
        }
    };
</script>

<style lang='scss' scoped>
.wrapper{
    display: flex;

    &.horizontal{
        flex-direction: column;
        >.k-tab-head{
            display: flex;
            flex-direction: row;
        }
    }
    &.vertical{
        flex-direction: row;
        >.k-tab-head{
            display: flex;
            flex-direction: column;
        }
    }
}
</style>