<template>
    <div class="popover" ref="popover">
        <div ref="contentWrapper" class="content-wrapper" v-if="visible" :class="{[`position-${position}`]:true}">
            <slot name="content"/>
        </div>
        <div ref="triggerWrapper" class="triggerWrapper">
            <slot/>
        </div>

    </div>
</template>

<script lang='js'>
    export default {
        name: 'KPopover',
        data() {
            return {
                visible: false
            };
        },
        mounted() {
            if (this.trigger === 'click') {
                this.$refs.popover.addEventListener('click', this.onClick)
            } else {
                this.$refs.popover.addEventListener('mouseenter', this.open)
                this.$refs.popover.addEventListener('mouseleave', this.close)
            }
        },
        destroyed() {
            if (this.trigger === 'click') {
                this.$refs.popover.removeEventListener('click', this.onClick)
            } else {
                this.$refs.popover.removeEventListener('mouseenter', this.open)
                this.$refs.popover.removeEventListener('mouseleave', this.close)
            }
        },
        computed: {
            openEvent() {
                if (this.trigger === 'click') {
                    return 'click'
                } else {
                    return 'mouseenter'
                }
            },
            closeEvent() {
                if (this.trigger === 'click') {
                    return 'click'
                } else {
                    return 'mouseleave'
                }
            }
        },
        props: {
            position: {
                type: String,
                default:
                    'top',
                validator(value) {
                    return ['top', 'bottom', 'left', 'right'].indexOf(value) >= 0;

                }
            },
            trigger: {
                type: String,
                default: 'click'
            }
        },
        methods: {
            onClickDocument(event) {
                if (this.$refs.popover &&
                    this.$refs.popover.contains(event.target)) {
                    return;
                }
                if (this.$refs.contentWrapper === event.target || this.$refs.contentWrapper.contains(event.target)) {
                    return;
                }

                this.close();

            }
            ,
            positionContent: function () {
                const {contentWrapper, triggerWrapper} = this.$refs
                const {height: contentHeight} = contentWrapper.getBoundingClientRect()
                document.body.appendChild(contentWrapper);
                const {width, height, left, top} = triggerWrapper.getBoundingClientRect();
                let x = {
                    top: {
                        top: top + window.scrollY,
                        left: left + window.scrollX
                    },
                    bottom: {
                        top: top + window.scrollY + height,
                        left: left + window.scrollX
                    },
                    left: {
                        top: top + window.scrollY - (contentHeight - height) / 2,
                        left: left + window.scrollX
                    },
                    right: {
                        top: top + window.scrollY - (contentHeight - height) / 2,
                        left: left + width + window.scrollX
                    }
                }
                contentWrapper.style.top = x[this.position].top + 'px';
                contentWrapper.style.left = x[this.position].left + 'px';
            },
            open() {
                this.visible = true;
                this.$nextTick(() => {
                    this.positionContent();
                    document.addEventListener('click', this.onClickDocument);
                })
            }
            ,
            close() {
                this.visible = false;
                document.removeEventListener('click', this.onClickDocument);
            }
            ,
            onClick(event) {
                if (this.$refs.triggerWrapper.contains(event.target)) {
                    if (this.visible === true) {
                        this.close()
                    } else {
                        this.open()
                    }
                } else if (event.target === this.$refs.popover) {
                    if (this.visible === true) {
                        this.close()
                    }
                }
            }
        }
    }
    ;
</script>

<style lang='scss'>
    .popover {
        display: inline-block
    }

    .content-wrapper {
        position: absolute;
        border-radius: 2px;
        padding: 4px 8px;
        filter: drop-shadow(0 0 1px #333);
        background: white;
        font-size: 14px;

        &.position-top {
            transform: translateY(-100%);
            margin-top: -5px;

            &::after, &::before {
                left: 10px;
            }

            &::after {
                border-top-color: white;
                top: calc(100% - 1px)
            }

            &::before {
                border-top-color: white;
                top: 100%;
            }
        }

        &.position-bottom {
            margin-top: 5px;

            &::after, &::before {
                left: 10px;
            }

            &::after {
                border-bottom-color: white;
                bottom: calc(100% - 1px)
            }

            &::before {
                border-bottom-color: white;
                bottom: 100%;
            }
        }

        &.position-left {
            margin-left: -5px;
            transform: translateX(-100%);

            &::after, &::before {
                left: 10px;
            }

            &::after {
                border-left-color: white;
                left: calc(100% - 1px)
            }

            &::before {
                border-left-color: white;
                left: 100%;
            }
        }

        &.position-right {
            margin-left: 5px;

            &::after, &::before {
                /*right: 10px;*/
            }

            &::after {
                border-right-color: white;
                right: calc(100% - 1px)
            }

            &::before {
                border-right-color: white;
                right: 100%;
            }
        }

        &::after, &::before {
            content: '';
            position: absolute;
            border: 5px solid transparent;
        }
    }

    .triggerWrapper {
        border: solid 1px #ccc;
        display: inline-block;
        padding: 2px 8px;
        border-radius: 2px;
    }
</style>