<template>
    <div class="imooc-fly-box" :ref="refName">
      <svg :height="height" :width="width">
        <defs>
          <path
            :id="pathId"
            :d="path"
            fill="none"
          />
          <radialGradient
            :id="radialGradientId"
            r="50%"
            cx="50%"
            cy="50%"
            fx="100%"
            fy="50%"
          >
            <stop offset="0%" stop-color="#fff" stop-opacity="1"></stop>
            <stop offset="100%" stop-color="#fff" stop-opacity="0"></stop>
          </radialGradient>
          <mask
            :id="maskId"
            fill="white"
          >
            <circle :r="starLength" cx="0" cy="0" :fill="`url(#${radialGradientId})`">
              <animateMotion
                :dur="`${duration}s`"
                :path="path"
                rotate="auto"
                repeatCount="indefinite"
              />
            </circle>
          </mask>
        </defs>
        <use
          :href="`#${pathId}`"
          stroke-width="1"
          :stroke="lineColor"
        />
        <use
          :href="`#${pathId}`"
          stroke-width="3"
          :stroke="starColor"
          :mask="`url(#${maskId})`"
        />
      </svg>
      <div class="y-fly-box-content">
        <div>121</div>
        <div>222</div>
        <div>133321</div>
      </div>
    </div>
</template>

<script>
    import {ref, computed, onMounted, getCurrentInstance} from 'vue'
    import {v4 as uuidv4} from 'uuid'

    export default {
        name: 'YFlyBox',
        props:{
            lineColor:{
                type:String,
                default:'#235fa7'
            },
            //流行颜色
            starColor:{
                type:String,
                default:'#4fd2dd'
            },
            //流星长度
            starLength:{
                type:[String,Number],
                default:50
            },
            // 流星速度
            duration:{
                type:[String,Number],
                default:3
            }
        },
        setup(ctx) {
            const uuid = uuidv4()
            const width = ref(0)
            const height = ref(0)
            const refName = 'yFlyBox'
            const pathId = `${refName}-path-${uuid}`
            const radialGradientId = `${refName}-gradient-${uuid}`
            const maskId = `${refName}-maskId-${uuid}`

            const path = computed(()=>{
               return `M5 5 L${width.value - 5} 5  L${width.value - 5}
                 ${height.value - 5} L5 ${height.value - 5} Z`
            })

            const init = () => {
                //getCurrentInstance获取vue实例
                const instance = getCurrentInstance()
                const dom = instance.ctx.$refs[refName]
                width.value = dom.clientWidth
                height.value = dom.clientHeight
            }

            onMounted(() => {
                init()
            })
            return {
                width,
                height,
                refName,
                path,
                pathId,
                radialGradientId,
                maskId
            }
        }

    }
</script>

<style scoped lang="scss">
  .imooc-fly-box {
    position: relative;
    width: 100%;
    height: 100%;

    svg {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }

    .y-fly-box-content {
      width: 100%;
      height: 100%;
      padding: 5px;
      box-sizing: border-box;
    }
  }
</style>
