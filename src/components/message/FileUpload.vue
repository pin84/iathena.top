<template>
  <div id="fileUpload">
    <div class="notice">
      {{notice}}
      <div id="close-notice">x</div>
    </div>
    <!-- <div class="reloadBtn">重新选择</div> -->
    <div id="blankMask">
      <img src="../../assets/img/message/bg.png" alt="">
    </div>

    <div id="canvasArea">
      <canvas width="200" height="200"></canvas>
    </div>
    
  </div>
</template>
<script>
export default {
  data() {
    return {
      notice: '拖拽鼠标框选所需要的区域'
    }
  }
}
</script>
<style lang='stylus' scoped>
#fileUpload
  position relative
  background #666
  width 300px
  height 300px
  margin-bottom 20px
  .notice
    height 30px
    line-height 30px
    text-align center
    background #ffffff
    position absolute
    width 90%
    bottom -30px
    margin-left 5%
    border-radius 2px
    box-shadow 0 0 5px rgba(0,0,0,0.3)
    user-select none
    #close-notice
      position absolute 
      right 0px
      top 0
      width 30px
      height 30px
      line-height 30px
      cursor pointer
      font-size 16px
      &:hover
        background #eee
  #blankMask
    position absolute 
    top 0
    left 0
    width 100%
    height 100%
    color red
    // border 1px solid blue
    background #ffffff
    display flex
    justify-content center
    align-items center
  #canvasArea
    display flex
    align-items center
    justify-content center
    height 100%
    width 100%
    canvas 
      border 1px solid blue
      z-index 2


</style>