<template>
<div class="letter">
  <!-- <h1>letter</h1> -->
  <div class="bg-grid"></div>
</div>
</template>
<script>
export default {
}
</script>
<style lang='stylus' scoped>
.letter 
  position relative
  .bg-grid
    width 800px
    height 400px
    margin 0 auto
    padding 10px
    position relative
    padding-top: 64px;
    background-color #efefef
    background-image  linear-gradient(#e7e6e6 1px, transparent 0), linear-gradient(90deg, #e7e6e6 1px, transparent 0);
    background-size 21px 21px, 21px 21px
    background-position center
    &::before,
    &::after
      content: '';
      position: absolute;
      z-index: 0;
      left: 50%;
      transform: translateX(-50%);
      display: inline-block;
      background-color: #fff;
      height: 28px;
      box-shadow 68px 0 0 0 #fff, 
                calc(68px * 2) 0 0 0 #fff, 
                calc(68px * 3) 0 0 0 #fff, 
                calc(68px * 4) 0 0 0 #fff, 
                calc(68px * 5) 0 0 0 #fff, 
                -68px 0 0 0 #fff, 
                calc(68px * -2) 0 0 0 #fff, 
                calc(68px * -3) 0 0 0 #fff, 
                calc(68px * -4) 0 0 0 #fff, 
                calc(68px * -5) 0 0 0 #fff;
    &::before 
      top: 0;
      width: 10px;
    &::after 
      top: 26px;
      width: 28px;
      border-radius: 50%;
     

</style>