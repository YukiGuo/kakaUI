<template>
    <div>
        <k-collapse :selected-name.sync="selectedName" >
            <k-collapse-item title="title1" name="1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </k-collapse-item>
            <k-collapse-item title="title2" name="2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</k-collapse-item>
            <k-collapse-item title="title3" name="3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </k-collapse-item>
        </k-collapse>
       选中的Item的name: {{selectedName}}
        <pre><code>{{code}}</code></pre>
    </div>
</template>

<script lang='ts'>
    import KCollapse from '../../../src/collapse/KCollapse.vue';
    import KCollapseItem from '../../../src/collapse/KCollapseItem.vue';
    export default {
        name: 'collapse',
        components:{'k-collapse':KCollapse,'k-collapse-item':KCollapseItem},
        data(){return{
            selectedName:['2'],
            code:`
     <k-collapse :selected-name.sync="selectedName" >
            <k-collapse-item title="title1" name="1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </k-collapse-item>
            <k-collapse-item title="title2" name="2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</k-collapse-item>
            <k-collapse-item title="title3" name="3">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </k-collapse-item>
        </k-collapse>
       选中的Item的name: {{selectedName}}
    export default {
        data(){return{
            selectedName:['2']
    }} `.replace(/^ {8}/gm, '').trim()
                }
            }
    };
</script>

<style lang='scss' scoped>

</style>