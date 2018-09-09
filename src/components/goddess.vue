<template>
  <div class="wrapper">
    <span class="girl"></span>
    <div class="boys">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
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
  height 100%
  border 1px solid blue
  span 
    display block
    width 10px
    height 10px
    border 1px solid red
    --duration: 1.5s;
  .girl
    animation slide var(--duration) ease-in-out infinite alternate


  @keyframes slide{
    from{
      transform:translateX(0)
      filter:brightness(1)
    }
    to{
      transfrom:translateX(cale(30px - (10px*1.25)))
      filter:brightness(1.45)
    }
  }
</style>
