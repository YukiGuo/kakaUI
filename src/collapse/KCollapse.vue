<template>
    <div class="wrapper">
        <slot></slot>
    </div>
</template>

<script lang='ts'>
    import Vue from 'vue';

    export default {
        name: 'KCollapse',
        props: {
            selectedName: {
                type: Array
            },
            single: {
                type: Boolean,
                default: true
            }
        },
        data() {
            return {
                eventBus: new Vue()
            };
        },
        provide() {
            return {
                eventBus: this.eventBus,
            };
        },
        mounted() {
            this.eventBus.$emit('update:selected', this.selectedName);

            this.eventBus.$on('update:addSelected', (name) => {
               let copy = JSON.parse(JSON.stringify(this.selectedName));
                if (this.single) {
                    copy = [name];
                } else {
                   copy.push(name);
                }
                this.$emit('update:selectedName', copy); //通知父组件
                this.eventBus.$emit('update:selected', copy);//通知子组件
            });
            this.eventBus.$on('update:removeSelected', (name) => {
                const index = this.selectedName.indexOf(name);
                let copy = JSON.parse(JSON.stringify(this.selectedName));
                copy.splice(index,1);
                this.$emit('update:selectedName', copy);
                this.eventBus.$emit('update:selected', copy);//通知子组件
            });
        }
    };
</script>

<style lang='scss' scoped>
    .wrapper {
        border: solid 1px #ccc;
        border-radius: 4px;
    }
</style>