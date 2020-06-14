<template>
<div class="wrapper">
    <label>
    <input type="text"
           :value="value" class="k-input"
           @change="$emit('change',$event)"
           @focus="$emit('focus',$event)"
           @blur="$emit('blur',$event)"
           @input="$emit('input',$event.target.value)"
           :disabled="disabled"
           :readonly="readonly"
    /></label>
    <div v-if="error" class="error">
        <Icon icon-name="error" class="icon-error"> </Icon>
        <span class="error-massage">{{error}}</span>
    </div>
    <div v-if="success" class="success">
        <Icon icon-name="success" class="icon-success"> </Icon>
    </div>
</div>
</template>

<script lang='js'>
    import Icon from "../Icon"

    export default {
        name: 'KInput',
        components:{'Icon':Icon},
        props: {
            value: {
                    type: String
            },
            disabled:{
                type:Boolean,
                default:false
            },
            error:{
                type:String
            },
            success:{
                type:Boolean
            }
        }

    };
</script>

<style lang='scss' scoped>
.wrapper{
        display: inline-flex;
         align-items: center;
        vertical-align: center;
        font-size: 14px;
        .k-input {
                vertical-align: middle;
                width: 130px;
                height: 30px;
                border-radius: 4px;
                border: #999 1px solid;
                font-size: inherit;
                padding: 0 6px;

                &:focus {
                        outline: none;
                        box-shadow: inset 1px 1px 1px rgba(0, 0, 0, 0.2),
                        inset -1px -1px 1px rgba(0, 0, 0, 0.2);
                }
        }
    .icon-error{
        fill:#EE2C2C;
        font-size:14px;
    }
    .error-massage{
        color:#EE2C2C;
    }
    .success,.error{
        display: inline-block;
        padding-left: 6px;
    }
    .icon-success{
        font-size:14px;
         fill:#2E8B57;
    }
}


</style>