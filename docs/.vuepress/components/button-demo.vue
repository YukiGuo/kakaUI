<template>
    <div>
        <k-button >默认按钮</k-button>
        <k-button icon-name="setting">默认按钮</k-button>
        <pre><code>{{code}}</code></pre>
    </div>
</template>

<script lang='js'>
    import KButton from "../../../src/button/KButton.vue"
    import Icon from "../../../src/Icon"
    export default {
        name:'button-demo',
        components: {
            'k-button':KButton,
            'Icon':Icon
        },
        data() {
            return {
          code: `
        <k-button >默认按钮</k-button>
        <k-button icon-name="setting">按钮</k-button>
         `
            };
        },
    };
</script>

<style lang='scss' scoped>

</style>