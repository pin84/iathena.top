<template>
  <div class="fireworks">
    <h1>fireworks</h1>
    <canvas id="canvas" width="800" height="400"></canvas>
  </div>
</template>


<script>
export default {

  mounted() {
    this.getCanvas()
  },

  methods: {

    
    getCanvas() {
      let canvas = document.getElementById('canvas')
      let context = canvas.getContext('2d')

      context.fillStyle = "red";
      context.font = "bold 26px"; //字体样式
      context.textAlign = "statr"; //对齐方式为左对齐
      context.textBaseline = "top"; //基线
      context.fillText("你好", 100, 100, 200);



    }
  }

}
</script>


<style lang='stylus' scoped>
.fireworks
  position relative
  text-align center
  #canvas
    background url('../../assets/img/fireworks/bg.jpg') #000 no-repeat center 
</style>
