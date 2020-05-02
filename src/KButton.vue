<template>
    <button class="k-button"
            :class="{[`icon-${iconPosition}`] : true}"
            @click="$emit('click')"
    >
        <div  class="icon">
            <Icon v-if ="iconName && !loading" :icon-name="iconName"/>
        </div>
        <div v-if="loading" class="icon">
            <Icon icon-name="loading" class="loading icon" />
        </div>
        <div class="content" >
            <slot class="content"/>
        </div>

    </button>
</template>
<script lang='js'>
    export default {
        name: 'Button',
        props:{
            iconName:{},
            loading:{
                type: Boolean,
                default:false
            },
            iconPosition:{
                type:String,
                default:"left",
                validator(value){
                return( value === 'left' || value === "right" )
                }
            }
        }
    };
</script>
<style lang="scss">
    .k-button{
        font-size: var(--font-size);
        height:var(--button-height);
        padding:0 1em;
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        background: var(--button-bg);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        &:hover{
            border-color: var(--border-color-hover);
        }
        &:active{
            background: var( --button-active-bg);
        }
        &:focus{
            outline:none;
        }
       >.icon{
            order: 1;
            margin-right:0.3em
        }
        >.content{
            order: 2;
        }
         &.icon-right{
            >.icon{
                order: 2;
                margin-right:0;
                margin-left:0.3em;
            }
            >.content{
                order: 1;
            }
        }
    }
    @keyframes spin {
        0%{transform: rotate(0deg)}
        100%{transform: rotate(360deg)}
    }
    .loading{
        animation: spin 2s infinite linear;
    }
</style>
