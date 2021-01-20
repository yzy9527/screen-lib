<template>
  <div class="echarts"></div>
</template>

<script>
import { watch, onMounted } from 'vue'
import Echarts from 'echarts'
export default {
  name: 'VueEcharts',
  props: {
    options: Object,
    theme: [String, Object]
  },
  setup(ctx) {
    let dom
    let chart
    const initChart = () => {
      if (!chart) {
        dom = document.getElementsByClassName('echarts')[0]
        chart = Echarts.init(dom, theme)
      }
      chart.setOption(ctx.options)
    }
    onMounted(() => {
      initChart()
    })
    watch(() => ctx.option, () => {
      initChart()
      chart.setOption(ctx.options)
    })
  }
}
</script>

<style scoped lang="scss">
.echarts {
  height: 100%;
  width: 100%;
}
</style>
