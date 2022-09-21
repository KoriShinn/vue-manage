<template>
  <div>
    <div
      style="height: 380px;"
      ref="echart"
    ></div>
  </div>
</template>
<script>
import * as echarts from 'echarts'
export default {
  name: 'Echart',
  props: {
    // true是柱状图&折线图，false是饼图
    isAxis: {
      type: Boolean,
      default: true
    },
    chartDate: {
      type: Object,
      default () {
        return {
          // 数据
          series: [],
          // x轴坐标
          xData: []
        }
      }
    }
  },
  data () {
    return {
      // 柱状&折线的option
      axisOption: {
        legend: {
          // 图例文字颜色
          textStyle: {
            color: '#333'
          }
        },
        grid: {
          left: '20%'
        },
        // 提示框
        tooltip: {
          trigger: 'axis'
        },
        xAxis: {
          type: 'category', // 类目轴
          data: [],
          axisLine: {
            lineStyle: {
              color: '#17b3a3'
            }
          },
          axisLabel: {
            interval: 0,
            color: '#333'
          }
        },
        yAxis: [
          {
            type: 'value',
            axisLine: {
              lineStyle: {
                color: '#17b3a3'
              }
            }
          }
        ],
        color: ['#2ec7c9', '#b6a2de', '#5ab1ef', '#ffb980', '#d87a80', '#8d98b3'],
        series: []
      },
      // 饼状的option
      pieOption: {
        tooltip: {
          trigger: 'item'
        },
        color: [
          '#0f78f4',
          '#dd536b',
          '#9462e5',
          '#a6a6a6',
          '#e1bb22',
          '#39c362',
          '#3ed1cf'
        ],
        series: []
      },
      // echarts的实例对象
      // 下方initEchartOption()会以此处判断是否已经渲染过echarts对象
      echartsInstance: null
    }
  },
  // 监听chartDate对象数据的变化
  watch: {
    chartDate: {
      // 数据发生变化watch中定义的方法会被调用
      handler () {
        console.log(this.isAxis)
        this.createEchart()
      },
      // 深度监听，监听对象内部所有的属性，监听器会一层层的往下遍历，给对象的所有属性都加上这个监听器
      deep: true
    }
  },
  methods: {
    createEchart () {
      this.initEchartOption()
      // 是否已经存在echarts的实例，存在就不用重新创建dom，不存在就创建并赋值给对象'echartsInstance'，然后使用对象'echartsInstance'来setOption
      if (this.echartsInstance) {
        this.echartsInstance.setOption(this.options)
        // 不存在就创建echarts实例并setOption
      } else {
        this.echartsInstance = echarts.init(this.$refs.echart)
        this.echartsInstance.setOption(this.options)
        console.log(this.pieOption)
      }
    },
    // 根据 props -- isAxis 判断本次组件创建 柱状&折线 还是 饼图的option
    initEchartOption () {
      if (this.isAxis) {
        this.axisOption.xAxis.data = this.chartDate.xData
        this.axisOption.series = this.chartDate.series
      } else {
        // 饼图只需要数据
        this.pieOption.series = this.chartDate.series
      }
    }
  },
  computed: {
    // 根据isAxis判断返回 柱状图&折线图的option 或者 饼图的option
    options () {
      return this.isAxis ? this.axisOption : this.pieOption
    }
  }
}
</script>

<style lang="less" scoped>
</style>
