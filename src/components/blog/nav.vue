<template>
  <div class="wrapper">
    <ul>
      <router-link tag="li" to='/blog/one'> <a>测试用的第一篇博文</a></router-link>
      <router-link tag="li" to='/blog/two'> <a>测试用的第二篇博文</a></router-link>
      <a href="../books/abc.html">abc</a>
    </ul>
  </div>
</template>
<script>
export default {
}
</script>
<style lang='stylus' scoped>
.wrapper
  ul
    li
      a
        display inline-block
        color #2c3e50
        font-size 1.4rem
        padding 5px
        &:hover
          color #66CCCC
      &.router-link-active > a
        color rgb(62, 175, 124)

</style>