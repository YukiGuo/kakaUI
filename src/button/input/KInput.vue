<template>

        <input type="text"  :value="value" class="k-input"/>

</template>

<script lang='js'>
    export default {
        name: 'KInput',
        props:{
            value:''
        }

    };
</script>

<style lang='scss' scoped>

        .k-input{
            vertical-align:middle;
            width:130px;
            height:30px;
            border-radius:4px;
            border:var(--border-color) 1px solid;
            font-size:inherit;
            padding: 4px;

            &:focus{
                outline: none;
                box-shadow: inset 1px 1px 1px rgb(0,0,0,0.2),
                inset -1px -1px  1px rgb(0,0,0,0.2);
            }
        }

</style>