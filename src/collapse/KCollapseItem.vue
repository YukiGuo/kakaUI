<template>
    <div class="item-wrapper">
        <div class="title" @click="toggle">
            {{title}}
        </div>
        <div class="content" v-if="itemShow">
            <slot> </slot>
        </div>

    </div>
</template>

<script lang='ts'>
    export default {
        name: 'KCollapseItem',
        data(){
            return{
                itemShow: false
            }
        },
        inject:['eventBus'],
        props:{
            title:{
                type:String,
                required:true
            },
           name:{
                type:String,
                required:true
            }
        },
       methods:{
           toggle(){
               if(this.itemShow){
                   this.eventBus.$emit('update:removeSelected', this.name);
                   console.log('xxx');
               }else {
                   this.eventBus.$emit('update:addSelected',this.name);
               }
           }
       },
        mounted() {
            this.eventBus.$on('update:selected',(names)=>{
                if(names.indexOf(this.name)>=0){
                    this.itemShow = true
                }
                else{
                    this.itemShow=false
                }
            })
        }
    };
</script>

<style lang='scss' scoped>
    $borderRadius:4px;
    .item-wrapper {
        >.title {
            display: flex;
            align-items: center;
            min-height: 32px;
            border: solid 1px #ccc;
            margin: -1px;
        }
        &:first-child{
           >.title {
               border-top-left-radius: $borderRadius;
               border-top-right-radius: $borderRadius;
           }
        }
        &:last-child{
            &:last-child {
                border-bottom-left-radius: $borderRadius;
                border-bottom-right-radius: $borderRadius;
            }
        }
        .content {
            padding: 8px;
            min-height: 32px;
            display: flex;
            align-items: center;
        }
    }
</style>