<template>
    <div class="toast" :class="toastClass" ref="toast">
        <div class="wrapper">
            <slot v-if="!enableHtml"> </slot>
            <div v-else v-html="$slots.default[0]"></div>
        </div>
            <div class="line" ref="line"></div>
            <span v-if="!autoClose" @click="onClickClose">{{closeButton.text}}</span>
    </div>
</template>

<script lang='ts'>
    export default {
        name: 'KToast',
        props:{
            enableHtml:{
                type:Boolean,
                default:false
            },
            autoClose:{
                type:Boolean,
                default:false
            },
            autoCloseDelay:{
                type:Number,
                default:3
            },
            closeButton:{
                type:Object,
                default:()=>{
                    return{
                        text:'关闭',
                        callback: undefined
                    }
                }
            },
            position:{
                type:String,
                default:'top',
                validator(value) {
                   if( ['top', 'bottom', 'left', 'right', 'center'].indexOf(value) >= 0){
                       return true
                   }
                   return false
                }
            }
        },
        computed:{
            toastClass(){
                console.log(this.position);
                return {[`position-${this.position}`] : true}
            }
        },
        mounted() {
            if(this.autoClose){
                setTimeout(()=>{
                    this.close()
                },this.autoCloseDelay*1000)
            }
          this.$nextTick(()=> {
              this.$refs.line.style.height = this.$refs.toast.getBoundingClientRect().height + 'px'
          })
        },
        methods:{
            close(){
                this.$el.remove();
                this.$emit('close');
                this.$destroy()
            },
            test(){
                console.log('测试一下');
            },
            onClickClose(){
                    this.close();
                    if(this.closeButton.callback && typeof this.closeButton.callback ==='fuction'){
                        this.closeButton.callback();
                    }
             }
        },
    }
</script>

<style lang='scss' scoped>
.toast{
    color: #fff;
    min-height: 32px;
    background-color: rgba(0,0,0,0.6);
    position: absolute;
    border-radius: 4px;
    display: flex;
    align-items: center;
    padding: 0 10px;
    &.position-top{
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        animation:fade-in 2s;
    }
    &.position-bottom{
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        /*animation: slide-up 3s;*/
    }
    &.position-center{
       top:50%;
        left: 50%;
        transform: translate(-50%,-50%);
        animation: slide-down 3s;
    }
    &.position-left{
             top:50%;
             left: 0;
             transform: translateY(-50%);
         }
    &.position-right{
        top:50%;
        right: 0;
        transform: translateY(-50%);
    }
    .wrapper{
        margin-right: 5px;
        margin-top:8px;
        margin-bottom: 8px;
    }
    .line{
        height: 100%;
        background: rgba(255,255,255,0.5);
        width: 1px;
    }
    span{
   margin-left: 5px  ;
        flex-shrink: 0;
    }
    @keyframes slide-up {
        0% {opacity: 0; transform: translateY(100%);}
        100% {opacity: 1;transform: translateY(0%);}
    }
    @keyframes slide-down {
        0% {opacity: 0; transform: translateY(-100%);}
        100% {opacity: 1;transform: translateY(0%);}
    }
    @keyframes fade-in {
        0% {opacity: 0; }
        100% {opacity: 1;}
    }
}
</style>