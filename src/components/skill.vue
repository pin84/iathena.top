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
  </div>
</template>

<script>
 export default{

}
</script>

<style lang='stylus' scoped>
.wrapper
  width 100%
  height 100vh
  // display relative
  // flex-direction column
  // justify-content center
  position relative
  background url(../assets/img/skill/skills-bg.jpg) no-repeat center
  .signboard
    width 400px
    height 300px
    // border 1px solid red
    position relative
    transform-origin 200px 0
    position absolute
    &.one
      top 2%
      left 10%
      animation onemove 1.5s ease-in-out infinite alternate
    &.two
      top 2%
      left 60%  
      // animation twomove 1s ease-in-out infinite alternate
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
    transform:rotate(5deg)
  }
  to{
    transform:rotate(-5deg)
  }
}
</style>
