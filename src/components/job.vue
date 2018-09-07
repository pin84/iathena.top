<template>
  <div class="wrapper">
    <div class="title">
      <span>作品集</span>
    </div>
    <ul class="list">
      <li>
        <img src="../assets/img/01.jpg" alt="">
        <a href="https://pin84.github.io/live/02_yiling/" target='_blank'>
          <h4>静态页面</h4>
          <p>html、css的练习</p>
        </a>
      </li>
      <li>
        <img src="../assets/img/02.jpg" alt="">
        <a href="https://pin84.github.io/live/01_web/02-daofeng/index.html" target="_blank">
          <h4>静态页面-企业官网</h4>
          <p>html、css的练习</p>
        </a>
      </li>
      <li>
        <img src="../assets/img/03.jpg" alt="">
        <a href="https://pin84.github.io/live/05_css3/05_3dPictrues/" target="_blank">
          <h4>3D旋转</h4>
          <p>请用 Google Chrome 浏览器打开(原因你懂的)(原因你懂的)(原因你懂的)</p>
        </a>
      </li>
      <li>
        <img src="../assets/img/04.jpg" alt="">
        <a href="">
          <h4>静态页面</h4>
          <p>html、css的练习</p>
        </a>
      </li>
      <li>
        <img src="../assets/img/05.jpg" alt="">
        <a href="">
          <h4>静态页面</h4>
          <p>html、css的练习</p>
        </a>
      </li>
      <li>
        <img src="../assets/img/06.jpg" alt="">
        <a href="">
          <h4>静态页面</h4>
          <p>html、css的练习</p>
        </a>
      </li>
      <li>
        <img src="../assets/img/07.jpg" alt="">
        <a href="">
          <h4>静态页面</h4>
          <p>html、css的练习</p>
        </a>
      </li>
      <li>
        <img src="../assets/img/08.jpg" alt="">
        <a href="">
          <h4>静态页面</h4>
          <p>html、css的练习</p>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {};
</script>
<style lang="stylus" scoped>
.wrapper
  width 80%
  height 600px
  margin 0 auto
  // border 1px solid red
  display flex
  flex-direction column
  .title
    font-size 3rem
    margin 3rem 0
    span
      padding .5rem 0
      border-bottom 2px solid #E87E04
  .list
    // width 80%
    // margin 0 auto
    display flex
    flex-wrap wrap
    justify-content center
    li
      width 23%
      position relative
      transition 0.3s
      margin 8px  
      img
        width 100%
        height 100%
      a
        position absolute
        top 0
        left 0
        width 100%
        height 100%
        background rgba(0, 0, 0, 0.5)
        color #fff
        display flex
        flex-direction column 
        align-items center
        justify-content center
        font-size 1.4rem
        opacity 0
        box-sizing border-box
        padding 30px
        line-height 25px
        h4
          margin-bottom 10px  

    :hover
      transform scale(1.04)
      a
        opacity 1
      


</style>
