<template>
  <div>
    <button @click="clickBtn">创建axios</button>
  </div>
</template>

<script>
import theAxios from 'axios'
export default {
  name: '',
  props: {},
  data () {
    return {

    }
  },
  created () {

  },
  methods: {
    clickBtn () {
      const axios = theAxios.create()
      axios.defaults.baseURL = 'http://127.0.0.1:3010'
      // console.log(axios)

      axios.interceptors.request.use((config) => {
        console.log(config, '请求')
        return config
      })

      axios.request({
        url: '/page'
      })
    }
  },
  computed: {

  }
}
</script>

<style lang="less" scoped>
</style>
