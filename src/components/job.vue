<template>
  <div class="wrapper">
    <div class="title">
      <span>作品集</span>
    </div>
    <ul class="list">
       <li>
        <img src="../assets/img/02.jpg" alt="">
        <a href="http://df.iathena.top" target="_blank">
          <h4>静态页面-企业官网</h4>
          <p>业务范围下的数据都是用ajax从后台请求</p>
        </a>
      </li>
      <li>
        <img src="../assets/img/01.jpg" alt="">
        <a href="https://pin84.github.io/live/01_web/01_miaov/" target='_blank'>
          <h4>静态页面-企业官网</h4>
          <p></p>
        </a>
      </li>
     
      <li>
        <img src="../assets/img/03.jpg" alt="">
        <a href="https://pin84.github.io/live/05_css3/05_3dPictrues/" target="_blank">
          <h4>css3 3D旋转</h4>
          <p>请用 Google Chrome 浏览器打开(原因你懂的)</p>
        </a>
      </li>
      <li>
        <img src="../assets/img/04.jpg" alt="">
        <a href="http://seller.iathena.top" target="_blank">
          <h4>VUE 移动端，请将浏览器切换到手机端页面</h4>
          <p>仿'饿了吗'APP，所有数据都用axios从后台请求</p>
        </a>
      </li>
      <li>
        <img src="../assets/img/05.jpg" alt="">
        <a href="https://pin84.github.io/live/01_web/03_ResponsiveWeb/" target="_blank">
          <h4>理财网站-响应式页面</h4>
        </a>
      </li>
      <li>
        <img src="../assets/img/06.jpg" alt="">
        <a href="https://pin84.github.io/live/10_magnifier/" target="_blank">
          <h4>淘宝网的放大镜效果</h4>
        </a>
      </li>
      <li>
        <img src="../assets/img/07.jpg" alt="">
        <a href="https://pin84.github.io/live/01_web/04_JavaScriptDrumKit/" target="_blank">
          <h4>css+js</h4>
          <p>来弹钢琴吧~~只支持PC端</p>
        </a>
      </li>
      <li>
        <img src="../assets/img/08.jpg" alt="">
        <a href="https://github.com/pin84" target="_blank">
          <h4>更多请访问我的github</h4>
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
  margin 0 auto
  display flex
  flex-direction column
  .title
    font-size 3rem
    margin 3rem 0
    font-weight 600
    span
      padding .5rem 0
      border-bottom 2px solid #E87E04
  .list
    display flex
    flex-wrap wrap
    justify-content center
    li
      width 23%
      position relative
      transition 0.3s
      margin 4px  
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
      &:hover
        transform scale(1.04)
        a
          opacity 1
@media screen and (max-width:900px)
  .wrapper
    width 95%
    .list
      display flex
      justify-content start
      li
        width 31%
        margin 4px
    //     a
    //       opacity 1
    //       font-size 1.3rem
    //       line-height 18px
    //       padding 15px
    //       font-weight 100
    //       h4
    //         font-weight 100
    //     &:hover  
    //       transform scale(1)    
// @media screen and (max-width:768px)
//   .wrapper
//     width 95%
//     .list
//       display flex
//       justify-content start
//       li
//         width 32%
//         margin 2px
        
@media screen and (max-width:480px)
  .wrapper
    width 95%
    .list
      display flex
      margin-bottom 80px
      li
        width 48%
        margin 2px
        a
          opacity 1
          font-size 1.3rem
          line-height 18px
          padding 15px
          font-weight 100
          h4
            font-weight 100
        &:hover  
          transform scale(1)    
</style>
