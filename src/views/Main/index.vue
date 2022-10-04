<template>
  <el-container style="height: 100%">
    <!-- 侧边 -->
    <Commonaside></Commonaside>
    <!-- 内容 -->
    <el-container>
      <el-header>
        <CommonHeader></CommonHeader>
      </el-header>
      <CommonTag></CommonTag>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Commonaside from '@/components/CommonAside'
import CommonHeader from '@/components/CommonHeader'
import CommonTag from '@/components/CommonTag'
export default {
  name: 'Main',
  components: {
    Commonaside,
    CommonHeader,
    CommonTag
  },
  data () {
    return {}
  },
  created () {
  }
}
</script>

<style lang="less" scoped >
.el-header {
  background-color: #2d2d2d;
}
.el-main {
  padding: 0 20px;
}
</style>
