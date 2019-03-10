<template>
  <div class="about">
    <div class="title">
      <span>关于我</span>
    </div>
    <div class="avartor">
      <img
        src="../assets/img/avartor.jpg"
        alt=""
      >
    </div>
    <div class="desc">
      我叫覃平，1984年生于广西柳州。现坐标广州，是一名从事前端工作的普通一员。前端是一门有容乃大的行业，我并不是计算机专业出身。 在自学前端之前，我一直从事的是印刷设备的售后服务工作。庆幸的是在慢长的自学中，让我体会到了乐趣，让我能一直走到今天。
    </div>

    <div class="title contact">
      <span>联系我</span>
    </div>
    <Contact class="con" />


    <!-- 引入的 web components  -->
    <!-- <popup-info ref='pop'></popup-info>     -->
  </div>
</template>

<script>
import Contact from './contact'
//以下两个组件为测试用，
// import {SimplePromise} from './abc.js'
// import {popup} from './1.js'

export default {
  components: {
    Contact,
  },

}



</script>

<style lang="stylus" scoped>
.about
  width 100%
  display flex
  flex-direction column
  align-items center
  background url(./contact/bg.jpg) no-repeat center
  background-size cover
  .title
    font-size 3rem
    font-weight 600
    margin 9rem 0  4rem 0
    &.contact
      margin 2rem 0 
    span
      padding .5rem 0
      border-bottom 2px solid #E87E04
  .avartor
    width 200px
    height 200px
    border-radius 50%
    overflow hidden
    img
      width 100%
      height 100%
  .desc
    width 60%
    margin 3rem 0 0 0 
    font-size 1.6rem
    text-indent 1.5em
  .con
    margin-bottom 120px
    background rgba(0,0,0,0)
@media screen and (max-width:480px)
  .wrapper
    background url(./contact/bg.jpg) no-repeat center 
    background-size cover
    .title
      margin 3rem 0
    .avartor
      width 150px
      height 150px  
    .desc
      width 95%
      font-size 1.4rem
</style>
