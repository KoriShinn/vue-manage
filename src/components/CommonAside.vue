<template>
  <div>
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      text-color="#fff"
      background-color="#545c64"
      active-text-color="#ffb04b"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
    >
      <h3>{{ isCollapse ? '后台' : '通用后台管理系统' }}</h3>
      <el-menu-item
        v-for="item in noChildren"
        :index="item.path + ''"
        :key="item.path"
        @click="clickMenu(item)"
      >
        <i :class="'el-icon-' + item.icon"></i>
        <span slot="title">{{ item.label }}</span>
      </el-menu-item>
      <el-submenu
        v-for="item in hasChildren"
        :index="item.path + ''"
        :key="item.label"
      >
        <template slot="title">
          <i :class="'el-icon-' + item.icon"></i>
          <span slot="title">{{ item.label }}</span>
        </template>
        <el-menu-item-group v-for="child in item.children" :key="child.path">
          <span slot="title">{{ child.label }}</span>
          <el-menu-item :index="child.path + ''">
            <i :class="'el-icon-' + child.icon"></i>
            {{ child.name }}</el-menu-item
          >
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'CommonAside',
  data () {
    return {
      menu: [
        {
          path: '/home',
          name: 'Home',
          label: '首页',
          icon: 's-home',
          url: 'Home/Home'
        },
        {
          path: '/mall',
          name: 'Mall',
          label: '商品管理',
          icon: 'video-play',
          url: 'MallManager/MallManager'
        },
        {
          path: '/user',
          name: 'User',
          label: '用户管理',
          icon: 'user',
          url: 'UserManger/UserManger'
        },
        {
          label: '其他',
          icon: 'location',
          children: [
            {
              path: '/page1',
              name: 'Page1',
              label: '页面1',
              icon: 'setting',
              url: 'Other/PageOne'
            },
            {
              path: '/page2',
              name: 'Page2',
              label: '页面2',
              icon: 'setting',
              url: 'Other/PageTwo'
            }
          ]
        }
      ]
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    // 一级菜单点击
    clickMenu (item) {
      this.$router.push({
        name: item.name
      })
    }
  },
  computed: {
    noChildren () {
      return this.menu.filter((item) => !item.children)
    },
    hasChildren () {
      return this.menu.filter((item) => item.children)
    },
    isCollapse () {
      return this.$store.state.tab.isCollapse
    }
  }
}
</script>

<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
/deep/.el-menu {
  height: 100%;
  border: none;
  h3 {
    color: #fff;
    line-height: 48px;
    text-align: center;
  }
}
</style>
