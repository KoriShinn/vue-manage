<template>
  <el-container style="height: 100%">
    <!-- 侧边 -->
    <Commonaside></Commonaside>
    <!-- 内容 -->
    <el-container>
      <el-header>
        <CommonHeader></CommonHeader>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Commonaside from '@/components/CommonAside'
import CommonHeader from '@/components/CommonHeader'
export default {
  name: 'Main',
  components: {
    Commonaside,
    CommonHeader
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
  background-color: #2a2b29;
}
.el-main {
}
</style>
