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
    .moon
      background-color slategray 
      transform translateX(-10%)
      

</style>
