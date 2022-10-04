<template>
  <div class="tabs">
    <el-tag
      :key="tag.path"
      v-for="(tag,index) in tabList"
      :closable="tag.label !== '首页'"
      :disable-transitions="false"
      :effect="$route.name === tag.name ? 'dark' : 'plain'"
      size="small"
      @close="handleClose(tag,index)"
      @click="clickBtn(tag)"
    >
      {{tag.label}}
    </el-tag>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'CommonTag',
  props: {},
  data () {
    return {

    }
  },
  created () {

  },
  methods: {
    handleClose (tag, index) {
      this.$nextTick(() => {
        this.$store.commit('REMOVEMENU', tag)
      })
      // 当要删除的tag 不是 当前页面，return无其他操作
      if (tag.path !== this.$route.path) return
      // 当要删除的tag 是 当前页面并且排列在最后，向 左 跳转路由
      if (index === this.tabList.length - 1) {
        this.$router.push({
          name: this.tabList[index - 1].name
        })
        // 当要删除的tag 是 当前页面并且排列在中间，向 右 跳转路由
      } else {
        console.log('向右')
        this.$router.push({
          name: this.tabList[index + 1].name
        })
      }
    },
    clickBtn (tag) {
      this.$router.push({
        name: tag.name
      }).catch(() => { console.log('repeat jump') })
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
.tabs {
  padding: 20px;
  .el-tag {
    margin-right: 15px;
    cursor: pointer;
  }
  .el-tag:hover {
    background-color: #75abeeaa;
    color: #fff;
  }
}
</style>
