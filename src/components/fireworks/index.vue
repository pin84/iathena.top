<template>
  <div id="fireworks">
    <h1>fireworks</h1>
    <canvas
      id="firework"
      class="container"
      width="800"
      height="400"
    ></canvas>
    <canvas
      id="bg"
      class="container"
      width="800"
      height="400"
    ></canvas>
    <img
      src="../../assets/img/fireworks/girl.png"
      alt=""
    >
  </div>
</template>


<script>
import a from './test'
export default {
  data() {
    return {
      config: {
        width: 360,
        height: 600,
        canvases: ['bg', 'firework'],
        skyColor: '210, 60%, 5%, 0.2)',
        fireworkTime: { min: 30, max: 60 },
        //烟花参数本身有默认值 传入undefined则使用默认参数
      },
      fireworkOpt: {
        x: undefined,
        y: undefined,
        xEnd: undefined,
        yEnd: undefined,
        count: 300,   //炸裂后粒子数
        wait: undefined,  //消失后 => 炸裂  等待时间
      }
    }
  },

  mounted() {
    // console.log(a);

  },
}



</script>


<style lang='stylus' scoped>
#fireworks
  position relative
  width 800px
  height 400px
  margin 0 auto
  text-align center
  margin-top 20px
  canvas 
    position absolute
    left 0
    top 0
  #bg
    background url('../../assets/img/fireworks/bg.jpg') #000 no-repeat bottom 
    z-index 5
  img
    position absolute
    bottom 0
    left 454px
    z-index 999
    user-select none

</style>
