<template>
    <div>
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
            this.eventBus.$emit('update:selected',this.selectedTab)
        }
    };
</script>

<style lang='scss' scoped>

</style>