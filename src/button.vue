<template>
<div>
    <button class="k-button">按钮</button>
</div>


</template>
<script>
  export default {
  }
</script>
<style lang="scss">

    .k-button{
        font-size: var(--font-size);
        height:var(--button-height);
        padding:0 1em;
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        background: var(--button-bg);
        &:hover{
            border-color: var(--border-color-hover);
        }
        &:active{
            background: var( --button-active-bg);
        }
        &:focus{
            outline:none;
        }
    }

</style>
