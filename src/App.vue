<template>
  <div id="app">
    <Top />
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
// @ is an alias to /src
import Top from '@/components/Top'

export default {
  name: 'home',
  components: {
    Top
  },
  created() {
    // //在页面加载时读取localStorage里的状态信息
    // localStorage.getItem("pageInfo") && this.$store.replaceState(JSON.parse(localStorage.getItem("pageInfo")))

    // //在页面刷新时将vuex里的信息保存到localStorage里
    // window.addEventListener("beforeunload", () => {
    //   localStorage.setItem("pageInfo", JSON.stringify(this.$store.state))
    // })

    // this.check()

  },
  methods: {
    //检查是支持webp格式



    check() {
      

      let isWebp = document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') === 0
      if (!isWebp) {
        alert('不支持的图片格式，目前不支持edge18以下及safari浏览器。请升级您的浏览器')
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  color #2c3e50
</style>
