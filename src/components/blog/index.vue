<template>
  <div class="wrapper" >
    <Nav class="nav"/>
    <router-view class="blog"></router-view>
  </div>
</template>
<script>
import Nav from './nav'
// import Blog from './blog'
export default {
  components: {
    Nav,
    // Blog
  },
}
</script>
<style lang='stylus' scoped>
.wrapper
  padding 20px 0
  box-sizing border-box
  .nav
    width 350px
    position fixed
    left 0
    bottom 0
    top 80px
    overflow-y auto
    padding 20px 20px 20px 40px
    box-sizing border-box
  .blog
    padding-left 400px
    padding-right 10%
    box-sizing border-box
</style>