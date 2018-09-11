<template>
  <div class="wrapper">
    <div class="container">
      <div class="title">
        <span>联系我</span>
      </div>
      <div class="info">
        <div class="phone">
          <i>18610141858</i>
        </div>
        <div class="email">
          <i>qp1984@live.com</i>
        </div>
        <div class="github">
          <a href="https://github.com/pin84" target="_blank">
            <i>https://github.com/pin84</i>
          </a>
        </div>
        <!-- <div class="wechat">
          <img src="./wechat.png" alt="">
        </div> -->
      </div>
    </div>
  </div>
</template>


<script>
export default {

}
</script>


<style lang='stylus' scoped>
.wrapper
  width 100%
  height 100vh
  display flex
  flex-direction column
  background url(./bg.jpg) no-repeat center
  .container
    width 300px
    margin 0 auto
    // border 1px solid red
    .title
      font-size 3rem
      font-weight 600
      margin 9rem 0  4rem 0
      span
        padding .5rem 0
        border-bottom 2px solid #E87E04
    .info
      display flex
      flex-direction column
      font-size 2rem
      line-height 35px
      .github>a:hover
        text-decoration underline
      .phone::before,.email:before, .github::before
        display inline-block
        content '' 
        width 24px
        height 24px
        margin-right 10px
      .phone::before
        background url('./phone1.png') no-repeat center
      .email::before
        background url('./email.png') no-repeat center
        // margin-bottom -5px
      .github::before
        background url('./github.png') no-repeat center


@media screen and (max-width:375px)
  .wrapper
    width 100%
    .container
      width 80%
      margin 0 auto
      .info
        font-size 1.6rem
</style>

