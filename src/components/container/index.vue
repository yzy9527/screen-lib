<template>
  <div id="y-container" :ref="refName">
      <slot></slot>
  </div>
</template>

<script>
    import {ref, getCurrentInstance, onMounted, onUnmounted, nextTick} from 'vue'
    import {debounce} from "../../utils"

    export default {
        name: 'YContainer',
        props: {
            options: Object
        },
        setup(ctx) {
            //screen 电脑屏幕的宽高
            //client 网页实际展示的宽高
            const refName = 'yContainer'
            const width = ref(0)
            const height = ref(0)
            const originalWidth = ref(0)
            const originalHeight = ref(0)
            let context, dom

            const initSize = () => {
                return new Promise((resolve) => {
                    nextTick(()=>{
                        dom = context.$refs[refName]
                        console.log(dom)
                        //获取大屏的真实尺寸
                        if (ctx.options && ctx.options.width && ctx.options.height) {
                            width.value = ctx.options.width
                            height.value = ctx.options.height
                        } else {
                            width.value = dom.clientWidth
                            height.value = dom.clientHeight
                        }
                        //获取画布的尺寸，即电脑屏幕 第一次为0时调用
                        if (!originalWidth.value || !originalHeight.value) {
                            originalWidth.value = window.screen.width
                            originalHeight.value = window.screen.height
                        }
                        console.log(dom.clientWidth,dom.clientHeight)
                        console.log(width.value, height.value, originalWidth.value, originalHeight.value)
                        resolve()
                    })
                })
            }

            const updateSize = () => {
                if (width.value && height.value) {
                    dom.style.width = `${width.value}px`
                    dom.style.height = `${height.value}px`
                } else {
                    console.log('99999999999')
                    dom.style.width = `${originalWidth.value}px`
                    dom.style.height = `${originalHeight.value}px`
                }
            }

            const updateScale = () => {
                //网页当前可视区域的宽高，真实视口的尺寸
                const currentWidth = document.body.clientWidth
                const currentHeight = document.body.clientHeight
                console.log(currentWidth, currentHeight)
                //获取大屏真实尺寸
                const realWidth = width.value || originalWidth.value
                const realHeight = height.value || originalHeight.value

                const widthScale = currentWidth / realWidth
                const heightScale = currentHeight / realHeight
                dom.style.transform = `scale(${widthScale},${heightScale})`

            }

            const onResize = async()=>{
                console.log('onResize')
                await initSize()
                updateScale()
            }

            onMounted(async () => {
                context = getCurrentInstance().ctx
                await initSize()
                updateSize()
                updateScale()
                window.addEventListener('resize',debounce(100,onResize))
                console.log(require('vue'))

            })
            onUnmounted(()=>{
                window.removeEventListener('resize',onResize)
            })

            return {
                refName,
                width,
                height
            }
        }
    }
</script>

<style scoped lang="scss">
#y-container{
    position: fixed;
    top: 0;
    left: 0;
    overflow: hidden;
    transform-origin: left top;
    z-index: 999;
}
</style>
