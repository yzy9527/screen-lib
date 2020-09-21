<template>
    <div>
        <div class="y-loading">

            <svg :width="width"
                 :height="height"
                 viewBox="0 0 50 50"
                preserveAspectRatio="xMidYMid meet"
            >
<!--                stroke-dasharray = 2pi r /4-->
                <circle
                        r="22"
                        cx="25"
                        cy="25"
                        fill="none"
                        stroke-width="3"
                        stroke-dasharray="34"
                        stroke-linecap="round"
                        :stroke="outsideColor">
<!--                    from="0 25 25"-->
<!--                    to="360 25 25"-->
<!--                        旋转中心坐标，等价values  默认 0 0-->
                    <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 25 25"
                    to="360 25 25"
                    :dur="`${duration }s`"
                    repeatCount="indefinite"
                    />
                    <animate
                    attributeName="stroke"
                    :values="outsideColorAnimation"
                    :dur="`${+duration * 2}s`"
                    repeatCount="indefinite"
                    />
                </circle>
                <circle
                        r="12"
                        cx="25"
                        cy="25"
                        fill="none"
                        stroke-dasharray="19"
                        stroke-width="3"
                        stroke-linecap="round"
                        :stroke="insideColor">
                    <animateTransform
                            attributeName="transform"
                            type="rotate"
                            values="360 25 25;0 25 25"
                            :dur="`${duration }s`"
                            repeatCount="indefinite"
                    />
                    <animate
                            attributeName="stroke"
                            :values="insideColorAnimation"
                            :dur="`${+duration * 2}s`"
                            repeatCount="indefinite"
                    />
                </circle>
            </svg>
            <div class="y-loading-content">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
    import { computed } from 'vue'

    export default {
        name: "yLoading",
        props: {
            width: {
                type: [Number,String],
                default: 50
            },
            height: {
                type: [Number,String],
                default: 50
            },
            outsideColor:{
                type:String,
                default:'#3be6cd'
            },
            insideColor:{
                type:String,
                default:'#02bcfd'
            },
            duration:{
                type:[Number,String],
                default:2
            }
        },
        setup(ctx){
            console.log('ctx',ctx)
            const outsideColorAnimation  = computed(()=>
            `${ctx.outsideColor};${ctx.insideColor};${ctx.outsideColor};`)
            const insideColorAnimation  = computed(()=>
                `${ctx.insideColor};${ctx.outsideColor};${ctx.insideColor};`)
            //返回一对象
            return{
                outsideColorAnimation,insideColorAnimation
            }
        }
    }
</script>

<style scoped lang="scss">
.y-loading{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
