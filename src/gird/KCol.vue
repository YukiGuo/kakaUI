<template>
    <div
            class="col"
            :class="colClass"
            :style="colStyle"
    >
        <div class="col-item">
        <slot > </slot>
        </div>
    </div>
</template>

<script lang='js'>
    let validator=(value)=>{
        let keys=Object.keys(value)
        let valid=true
        keys.forEach(key=>{
            if(!['span','offset'].includes(key)){
                valid=false
            }
        })
        return valid
    }
    export default {
        name: 'KCol',
        props:{
           span:{
               type:[String,Number]
           },
           offset:{
               type:[String,Number]
           },
            m:{
              type:Object,
              //  validator
            },
            l:{
                type: Object,
                // validator
            },
            xl:{
                type: Object,
                // validator
            }
        },
        data(){
            return{
                gutter:'',
            }
        },
        methods:{
              createClass(obj,str=''){
                  const{span,offset,gutter,m,l,xl}=this
                  if (!obj){return []}
                  let arr=[]
                  if(obj.span){
                      arr.push(`col-${str}${obj.span}`)
                  }
                  if(obj.offset){
                      arr.push(`offset-${str}${obj.offset}`)
                  }
                  return arr
              }

        },
        computed:{
            colClass(){
                const{span,offset,gutter,m,l,xl,createClass}=this
                return [
                   ...createClass({span,offset}),
                   ...createClass(m,'m-'),
                  ...createClass(l,'l-'),
                  ...createClass(xl,'xl-'),
                ]
            },
            colStyle(){
                return{
                    paddingLeft: this.gutter/2+'px',paddingRight: this.gutter/2+'px'
                }
            }
        },

    };
</script>

<style lang='scss' scoped>
.col{
    width:50%;
    justify-content:center;
    $base-color: #036;
    >.col-item{
        height: 40px;
       border: 0.5px solid darkslategrey;

    }
    @for $n from 1 through 24 {
        &.col-#{$n} {
           width:  ($n/24)*100%
        }
    }

    @for $n from 1 through 24 {
        &.offset-#{$n} {
            margin-right:  ($n/24)*100%
        }
    }
    //ipad 屏幕
    @media(min-width: 576px){
        @for $n from 1 through 24 {
            &.col-m-#{$n} {
                width:  ($n/24)*100%;

            }
        }
        @for $n from 1 through 24 {
            &.offset-m-#{$n} {
                margin-right:  ($n/24)*100%

            }
        }
    }
    //窄pc
    @media(min-width: 769px){
        @for $n from 1 through 24 {
            &.col-l-#{$n} {
                width:  ($n/24)*100%;

            }
        }
        @for $n from 1 through 24 {
            &.offset-l-#{$n} {
                margin-right:  ($n/24)*100%

            }
        }
    }
   //更多
    @media(min-width:1200px){
        @for $n from 1 through 24 {
            &.col-xl-#{$n} {
                width:  ($n/24)*100%;

            }
        }
        @for $n from 1 through 24 {
            &.offset-xl-#{$n} {
                margin-right:  ($n/24)*100%

            }
        }
    }
}
</style>