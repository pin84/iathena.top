<template>
  <a
    :href="url"
    target="_blank"
    id="eclipse"
  >
    <div class="sky">
      <div class="sun"></div>
      <div class="moon"></div>
    </div>
    <div class="desc">
      <p class="title">放大镜</p>
      <p class="detail">淘宝网的放大镜效果</p>
    </div>
  </a>
</template>


<script>
export default {
  props:{
    url:''
  }
}
</script>


<style lang='stylus' scoped>
@import './common.styl'
#eclipse
  position relative
  display inline-block
  width 260px
  height 260px
  border-radius 5px
  box-shadow 0 2px 30px rgba(0,0,0,0.2)
  overflow hidden
  &:hover
    box-shadow 0 2px 30px #FF0033
  .sky
    width 100%
    height 100%
    // background skyblue  
    background rgba(0,0,0,0.9)
    display flex
    align-items center
    justify-content center
    position relative
    .sun ,.moon
      position absolute 
      width 50%
      height 50%
      border-radius 50%
    .sun
      background-color gold
      box-shadow 0 0 50px 10px white
      transform translateY(-20%)
    .moon
      background-color slategray 
      transform translate(-10% ,-20%)
    
  .desc
    height 80px
</style>
