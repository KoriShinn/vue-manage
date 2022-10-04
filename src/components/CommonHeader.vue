<template>
  <header>
    <div class="left">
      <!-- 按钮 -->
      <div class="header-botton">
        <el-button @click="collapseMenu">
          <i class="el-icon-menu"></i>
        </el-button>
      </div>
      <!-- 面包屑 -->
      <div class="header-crumb">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item
            v-for="item in tabList"
            :key="item.path"
            :to="{ name: item.name }"
          >{{item.label}}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    <!-- 头像 -->
    <div class="header-avatar">
      <el-dropdown size="mini">
        <el-avatar
          :size="40"
          :src="avatar"
        ></el-avatar>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>

<script>
import image from '@/assets/images/gitee.png'
import { mapState } from 'vuex'
export default {
  data () {
    return {
      avatar: image
    }
  },
  created () {
  },
  methods: {
    collapseMenu () {
      this.$store.commit('COLLAPSEMENU')
    }

  },
  computed: {
    ...mapState({
      tabList: state => state.tab.tabList,
      currentMenu: state => state.tab.currentMenu
    })
  }
}
</script>

<style lang="less" scoped>
header {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.left {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .header-botton {
    margin-right: 12px;
    .el-button {
      height: 30px;
      overflow: hidden;
      vertical-align: top;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
}

// /deep/.el-breadcrumb__inner.is-link {
//   color: red;
// }
// /deep/.el-breadcrumb__inner.is-link:hover {
//   color: rgb(128, 91, 91);
// }
/deep/.el-breadcrumb__item:last-child .el-breadcrumb__inner {
  color: #fff;
}
/deep/.el-breadcrumb__inner.is-link {
  color: #666;
}
/deep/.el-breadcrumb__inner.is-link:hover {
  color: #fff;
}
.header-avatar {
  height: 40px;
}
</style>
