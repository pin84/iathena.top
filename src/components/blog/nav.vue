<template>
  <div class="wrapper">
    <ul>
      <router-link tag="li" to='/blog/one'> <a>测试用的第一篇博文</a></router-link>
      <router-link tag="li" to='/blog/two'> <a>测试用的第二篇博文</a></router-link>
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
      // color #2c3e50
      a
        display inline-block
        color blue
        &:hover
          color red

.router-link-active
  a
    color rgb(62, 175, 124)
</style>