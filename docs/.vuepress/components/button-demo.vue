<template>
    <div>
        <h4>单个按钮</h4>
        <k-button>默认按钮</k-button>
        <k-button loading>加载按钮</k-button>
        <k-button icon-name="success">按钮</k-button>
        <k-button icon-name="right" icon-position="right">右边按钮</k-button>
        <pre><code>{{code1}}</code></pre>
        <h4>按钮组合</h4>
        <k-button-group>
            <k-button icon-name="left">上一页</k-button>
            <k-button>其它</k-button>
            <k-button icon-name="right" icon-position="right">下一页</k-button>
        </k-button-group>
        <hr/>
        <pre><code>{{code2}}</code></pre>
    </div>
</template>

<script lang='js'>
    import KButton from "../../../src/button/KButton.vue"
    import KButtonGroup from "../../../src/button/KButtonGroup"

    export default {
        name: 'button-demo',
        components: {
            'k-button': KButton,
            'k-button-group': KButtonGroup
        },
        data() {
            return {
                code1: `
        <k-button>默认按钮</k-button>
        <k-button loading>加载按钮</k-button>
        <k-button icon-name="success">按钮</k-button>
        <k-button icon-name="right" icon-position="right">右边按钮</k-button>
         `.replace(/^ {8}/gm, '').trim(),
                code2: `
           <k-button-group>
               <k-button icon-name="left">上一页</k-button>
               <k-button>其它</k-button>
               <k-button icon-name="right">下一页</k-button>
            </k-button-group>
           `.replace(/^ {8}/gm, '').trim()
            };
        },
    };
</script>

<style lang='scss' scoped>

</style>