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
    export default {
        name: 'KCol',
        props:{
           span:{
               type:[String,Number]
           },
           offset:{
               type:[String,Number]
           },
        },
        data(){
            return{
                gutter:'',
            }
        },
        computed:{
            colClass(){
                return [`col-${this.span}`,this.offset&&`offset-${this.offset}`,this.gutter&&`gutter-${this.gutter}`]
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
        background: cadetblue;
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
}
</style>