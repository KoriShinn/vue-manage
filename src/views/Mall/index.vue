<template>
  <div>
    <input
      type="text"
      v-if="ishow"
      ref="inp"
    >
    <button @click="clickBtn">显示</button>
  </div>
</template>

<script>
export default {
  name: 'Mall',
  props: {},
  data () {
    return {
      ishow: true
    }
  },
  created () {

  },
  methods: {
    clickBtn () {
      this.ishow = !this.ishow
      if (this.ishow === true) {
        this.$nextTick(() => {
          this.$refs.inp.focus()
        })
      }
    }
  },
  computed: {

  }
}
</script>

<style lang="less" scoped>
</style>
