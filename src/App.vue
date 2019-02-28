<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <Top />
    <!-- <keep-alive> -->
      <router-view />
    <!-- </keep-alive> -->
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
  data() {
    return {
      isClose: false
    }
  },
  created() {
    // //在页面加载时读取localStorage里的状态信息
    // localStorage.getItem("pageInfo") && this.$store.replaceState(JSON.parse(localStorage.getItem("pageInfo")))

    // //在页面刷新时将vuex里的信息保存到localStorage里
    // window.addEventListener("beforeunload", () => {
    //   localStorage.setItem("pageInfo", JSON.stringify(this.$store.state))
    // })
  }
}
</script>

<style lang="stylus">
@import  './assets/stylus/common.styl'
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  // text-align center
  color #2c3e50
#nav
  padding 30px
  a
    font-weight bold
    color #2c3e50
    &.router-link-exact-active
      color #42b983
</style>
