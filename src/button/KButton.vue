<template>
    <button class="k-button"
            :class="{[`icon-${iconPosition}`] : true}"
            @click="$emit('click')"
    >
        <span  class="icon">
            <Icon v-if ="iconName && !loading" :icon-name="iconName"/>
        </span>
        <span v-if="loading" class="icon">
            <Icon icon-name="loading" class="loading icon" />
        </span>
        <span class="content" >
            <slot class="content"/>
        </span>

    </button>
</template>
<script lang='js'>
    import Icon from "../Icon"
    export default {
        name: 'KButton',
        components:{'Icon':Icon},
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
        font-size: 14px;
        height:36px;
        padding:0 1em;
        border-radius: 4px;
        border: 1px solid #ccc;
        background: white;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        &:hover{
            border-color: #999;
        }
        &:active{
            background: #eee;
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
