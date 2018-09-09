<template>
  <nav>
    <div class="container">
        <a href="/" class="title">
          iAthena
        </a>
        <ul>
          <router-link tag="li" to='/about' >
            <a href="javascript:;" >关于我</a>
          </router-link>
          <router-link tag="li" to='/job'>
            <a href="javascript:;">作品集</a>
          </router-link >
          <router-link tag="li" to='/skill'>
            <a href="javascript:;">技术栈</a>
          </router-link >
          <router-link tag="li" to='/blog'>
            <a href="javascript:;">我的博客</a>
          </router-link >
          <router-link tag="li" to='/contact'>
            <a href="javascript:;">联系我</a>
          </router-link >
        </ul>
    </div>
  </nav>
</template>
<script>
export default {};
</script>
<style lang="stylus" scoped>
nav 
  width: 100%;
  height: 80px;
  background: #2c3e50;
  color: #fff;
  .container 
    width: 80%;
    min-width: 800px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    // .active
    //   background red
    a 
      display: block;
      color: #fff;
      font-size: 1.4rem;
      line-height: 80px;
      height: 80px;
      padding: 0 20px
      &:hover
        color #FFFFCC
    .title 
      font-size: 2rem;
      font-weight: 600;
    ul 
      display: flex;
.router-link-active
  background #006699
</style>
