<template>
  <div>
    <el-row>
      <!-- 左侧信息栏 -->
      <el-col
        :span="8"
        style="margin-top: 20px"
      >
        <el-card>
          <div class="user">
            <img :src="userImg" />
            <div class="user-info">
              <h2>Admin</h2>
              <p>超级管理员</p>
            </div>
          </div>
          <hr />
          <div class="login-info">
            <p>上次登录的时间: <span>2022-9-19</span></p>
            <p>上次登录的地点: <span>北京</span></p>
          </div>
        </el-card>
        <!-- 左侧售卖表格 -->
        <el-card
          shadow="always"
          style="margin-top: 20px; height: 460px"
        >
          <el-table :data="tableData">
            <el-table-column
              v-for="(item, index) in tableLabel"
              :key="index"
              :prop="index"
              :label="item"
            ></el-table-column>
          </el-table>
        </el-card>
      </el-col>
      <!-- 右侧订单图表区域 -->
      <el-col
        :span="16"
        style="margin-top: 20px;"
      >
        <div class="num">
          <el-card
            v-for="item in countData"
            :key="item.name"
            :body-style="{ display: 'flex', padding: 0 }"
          >
            <i
              class="icon"
              :class="`el-icon-${item.icon}`"
              :style="{ background: item.color }"
            ></i>
            <div class="detail">
              <div class="sum">¥{{ item.value }}</div>
              <div class="txt">{{ item.name }}</div>
            </div>
          </el-card>
        </div>
        <!-- 折线图 -->
        <el-card class="lineChat">
          <div
            style="height: 280px;"
            ref="echarts"
          ></div>
        </el-card>
        <!-- 柱状图和饼状图 -->
        <div class="graph">
          <el-card>
            <div
              style="height: 260px;"
              ref="userEcharts"
            ></div>
          </el-card>
          <el-card>
            <div
              style="height: 260px;"
              ref="videoEcharts"
            ></div>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { getDate } from '@/api/data'
import * as echarts from 'echarts'
export default {
  name: 'Home',
  created () {
  },
  data () {
    return {
      userImg: require('@/assets/images/gitee.png'),
      // 左2标签
      tableLabel: {
        name: '名称',
        todayBuy: '今日购买',
        monthBuy: '本月购买',
        totalBuy: '总购买'
      },
      // 左2数据
      tableData: [],
      // 右1数据  -- 写死中
      countData: [
        {
          name: '今日支付订单',
          value: 1234,
          icon: 'success',
          color: '#2ec7c9'
        },
        {
          name: '今日收藏订单',
          value: 210,
          icon: 'star-on',
          color: '#ffb980'
        },
        {
          name: '今日未支付订单',
          value: 1234,
          icon: 's-goods',
          color: '#5ab1ef'
        },
        {
          name: '本月支付订单',
          value: 1234,
          icon: 'success',
          color: '#2ec7c9'
        },
        {
          name: '本月收藏订单',
          value: 210,
          icon: 'star-on',
          color: '#ffb980'
        },
        {
          name: '本月未支付订单',
          value: 1234,
          icon: 's-goods',
          color: '#5ab1ef'
        }
      ],
      // 右2折线图
      orderData: [],
      userData: [],
      videoData: []

    }
  },
  mounted () {
    getDate().then(res => {
      const { code, data } = res.data
      if (code === 20000) {
        this.tableData = data.tableData
        // 折线图
        const order = data.orderData
        const xDate = order.date
        const keyArray = Object.keys(order.data[0])
        const series = []
        keyArray.forEach(key => {
          series.push({
            name: key,
            data: order.data.map(item => item[key]),
            type: 'line'
          })
        })
        const option = {
          tooltip: {
            trigger: 'item'
          },
          xAxis: {
            data: xDate
          },
          yAxis: {},
          legend: {
            data: keyArray
          },
          series
        }
        const E = echarts.init(this.$refs.echarts)
        E.setOption(option)
      }
      // 柱状图
      const user = data.userData
      const userOption = {
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
          data: user.map(item => item.date),
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
        color: ['#2ec7c9', '#b6a2de'],
        series: [
          {
            name: '新增用户',
            data: user.map(item => item.new),
            type: 'bar'
          },
          {
            name: '活跃用户',
            data: user.map(item => item.active),
            type: 'bar'
          }
        ]
      }
      const UserE = echarts.init(this.$refs.userEcharts)
      UserE.setOption(userOption)
      // 饼状图
      const video = data.videoData
      console.log(video)
      const videoOption = {
        tooltip: {
          trigger: 'item'
        },
        series: [
          {
            type: 'pie',
            radius: '60%',
            data: video
          }
        ]
      }
      const ViedoE = echarts.init(this.$refs.videoEcharts)
      ViedoE.setOption(videoOption)
    })
  },
  methods: {
    clickBtn () {
      console.log('111')
    }
  }

}
</script>

<style lang="less" scoped>
.el-card {
  font-size: 10px;
}
.user {
  display: flex;

  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    max-width: 100%;
    max-height: 100%;
  }
  .user-info {
    padding-left: 20px;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    h2 {
      margin: 0;
      font-size: 25px;
    }
    p {
      margin: 0;
      color: #a3a7ae;
      font-size: small;
    }
  }
}
.login-info {
  font-size: 10px;
  padding-top: 20px;
  color: #a3a7ae;
  span {
    padding-left: 30px;
    color: #57595d;
  }
}
.el-table {
  font-size: 10px;
}
.num {
  display: flex;
  flex-wrap: wrap;
  margin-left: 20px;
  justify-content: space-around;
  .el-card {
    width: 285px; // 右1卡片宽度
    height: 60px;
    margin-bottom: 20px;
    margin-right: 20px;
    i {
      height: 60px;
      width: 60px;
      text-align: center;
      line-height: 60px;
      font-size: 22px;
      color: #fff;
    }
    .sum {
      font-size: 20px;
      font-weight: 500;
      padding-left: 15px;
      padding-top: 7px;
    }
    .txt {
      padding-left: 12px;
      color: #777b83;
    }
  }
}
.lineChat {
  margin-left: 20px;
}
// 柱状图和饼状图
.graph {
  display: flex;
  justify-content: space-between;
  margin-left: 20px;
  margin-top: 20px;
  .el-card {
    width: 48%;
  }
}
</style>
