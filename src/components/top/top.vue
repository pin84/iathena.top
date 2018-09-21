<template>
  <nav>
    <div class="container">
      <a href="/" class="title">
        iAthena
      </a>
      <ul class="pc">
        <router-link tag="li" to='/about'>
          <a href="javascript:;">关于我</a>
        </router-link>
        <router-link tag="li" to='/job'>
          <a href="javascript:;">作品集</a>
        </router-link>
        <router-link tag="li" to='/skill'>
          <a href="javascript:;">技术栈</a>
        </router-link>
        <router-link tag="li" to='/contact'>
          <a href="javascript:;">联系我</a>
        </router-link>
        <!-- <router-link tag="li" to='/blog'>
          <a href="javascript:;">我的博客</a>
        </router-link> -->
        <li>
          <a href="http://api.iathena.top" target="_blank">我的博客</a>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {
};
</script>
<style lang="stylus" scoped>
nav 
  width: 100%;
  height: 80px;
  background: #2c3e50;
  color: #fff;
  .container 
    width: 80%;
    // min-width: 800px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    a 
      display: block;
      color: #fff;
      font-size: 1.4rem;
      line-height: 80px;
      height: 80px;
      padding: 0 20px
      &:hover
        color #FFFFCC
      &.title 
        font-size: 2rem;
        font-weight: 600;
    .pc
      display flex
    .phone
      display none
   
@media screen and (max-width:768px)
  nav
    // position fixed
    z-index 999
    .container 
      width 90%
      justify-content space-between
      a
        padding 0 10px
        font-weight 200 
@media screen and (max-width:480px)
  nav
    position fixed
    bottom 0
    height 60px
    z-index 999
    .container 
      width 100%
      justify-content center
      a
        height 60px
        line-height 60px
        padding 0 8px
        font-size 1.4rem
        font-weight 400 
        &.title
          display none
.router-link-active
  background #006699
</style>
