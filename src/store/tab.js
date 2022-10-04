export default {
  state: {
    isCollapse: true,
    tabList: [
      {
        path: '/home',
        name: 'Home',
        label: '首页',
        icon: 's-home',
        url: 'Home/Home'
      }
    ],
    currentMenu: null
  },
  getters: {

  },
  mutations: {
    COLLAPSEMENU (state) {
      state.isCollapse = !state.isCollapse
    },
    SELECTMENU (state, val) {
      if (val.name !== 'Home') {
        const res = state.tabList.findIndex(item => item.name === val.name)
        if (res === -1) {
          state.tabList.push(val)
          state.currentMenu = val
        } else {
          state.currentMenu = null
        }
      }
    },
    REMOVEMENU (state, val) {
      if (val.name !== 'Home') {
        state.tabList = state.tabList.filter(item => item.path !== val.path)
      }
    }
  },
  actions: {

  }
}
