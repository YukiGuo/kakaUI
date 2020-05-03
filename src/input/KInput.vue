<template>
<div class="wrapper">
    <input type="text"
           :value="value" class="k-input"
           @change="$emit('change',$event)"
           @focus="$emit('focus',$event)"
           @blur="$emit('blur',$event)"
           @input="$emit('input',$event.target.value)"
           :disabled="disabled"
           :readonly="readonly"
    />
    <template v-if="error">
        <Icon icon-name="error" class="icon-error"></Icon>
        <span class="error-massage">{{error}}</span>
    </template>
    <template v-if="success">
        <Icon icon-name="success" class="icon-success"></Icon>
    </template>
</div>
</template>

<script lang='js'>
    export default {
        name: 'KInput',
        props: {
            value: {
                    type: String
            },
            disabled:{
                type:Boolean,
                default:false
            },
            readonly:{
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
        display: inline-block;
    font-size: 12px;
        .k-input {
                vertical-align: middle;
                width: 130px;
                height: 30px;
                border-radius: 4px;
                border: var(--border-color) 1px solid;
                font-size: inherit;
                padding: 0 6px;

                &:focus {
                        outline: none;
                        box-shadow: inset 1px 1px 1px rgb(0, 0, 0, 0.2),
                        inset -1px -1px 1px rgb(0, 0, 0, 0.2);
                }
        }
    .icon-error{
        fill:#EE2C2C;
        font-size:14px;
    }
    .error-massage{
        color:#EE2C2C;
        font-size:12px;
    }
    .icon-success{
        font-size:14px;
      fill:#2E8B57;
    }
}


</style>