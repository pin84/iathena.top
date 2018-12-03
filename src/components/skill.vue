<template>
  <div class="wrapper">
      <div class="signboard one">
        <div class="sign">html5、css3、js</div>
        <div class="strings"></div>
        <div class="pin top"></div>
        <div class="pin left"></div>
        <div class="pin right"></div>
      </div>
      <div class="signboard two">
        <div class="sign">vue、node、mysql</div>
        <div class="strings"></div>
        <div class="pin top"></div>
        <div class="pin left"></div>
        <div class="pin right"></div>
      </div>
      <div class="signboard three">
        <div class="sign">html5、css3、js、vue、node、mysql</div>
        <div class="strings"></div>
        <div class="pin top"></div>
        <div class="pin left"></div>
        <div class="pin right"></div>
      </div>

  </div>
</template>

<script>
import Goddess from './goddess.vue'
export default {
  components: {
    Goddess
  }
}
</script>

<style lang='stylus' scoped>
.wrapper
  width 100%
  height 100vh
  min-height 700px
  position relative
  background url(../assets/img/bg3.jpg)   no-repeat center center
  background-size cover
  .signboard
    width 400px
    height 300px
    transform-origin 200px 0
    position absolute
    &.one
      top 2%
      left 10%
      animation onemove 1.5s ease-in-out infinite alternate
    &.two
      top 2%
      left 60%  
      animation onemove 1s ease-in-out infinite alternate
    &.three
      display none  
      animation onemove 1.5s ease-in-out infinite alternate
    .sign
      width 100%
      height 200px
      background burlywood
      border-radius 15px
      position absolute
      bottom 0
      font-size 40px
      color saddlebrown 
      font-weight 600
      text-align center
      line-height 200px
      text-shadow 0 2px 0 rgba(255,255,255,0.3) ,0 -2px 0 rgba(0, 0, 0, 0.7);
    .strings
      width 150px
      height 150px
      border 5px solid brown 
      position absolute 
      transform rotate(45deg)
      top 38px
      left 125px
      border-right none
      border-bottom none
    .pin
      width 25px
      height 25px
      border-radius 50%
      position absolute 
      &.top
        background gray 
        left 187px
      &.left, &.right
        background brown 
        top 110px
        box-shadow 0 2px 0 rgba(255, 255, 255, 0.3)
      &.left
        left 80px
      &.right 
        right 80px
@keyframes onemove{
  from{
    transform:rotate(10deg)
  }
  to{
    transform:rotate(-10deg)
  }
}

@keyframes twomove{
  from{
    transform:rotate(10deg)
  }
  to{
    transform:rotate(-10deg)
  }
}

@media screen and (max-width:900px)
  .wrapper
    width 100%
    .signboard
      width 250px
      height 190px
      transform-origin 125px 0
      &.one
        top 12%
        left 10%
      &.two
        top 12%
        left 60%
      .sign
        height 130px
        font-size 25px
        line-height 120px
      .strings
        width 100px
        height 100px
        top 20px
        left 75px
      .pin
        position absolute 
        &.top
          left 115px
          top -4px
        &.left, &.right
          top 65px
        &.left
          left 44px
        &.right 
          right 40px  
@media screen and (max-width:768px) 
  .wrapper
    width 100%
    .signboard
      width 200px
      height 360px
      transform-origin 100px 0
      top 80px
      left 10vw
      position relative
      &.one , &.two
        display none
      &.three
        display block  
      .sign
        height 310px
        font-size 30px
        line-height 50px
        box-sizing border-box
        padding 50px 0 0 8px
      .strings
        width 80px
        height 80px
        top 20px
        left 60px
      .pin
        position absolute 
        &.top
          left 44%
          top -4px
        &.left, &.right
          top 50px
        &.left
          left 30px
        &.right 
          right 30px           
</style>
