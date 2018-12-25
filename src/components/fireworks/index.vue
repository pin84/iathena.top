<template>
  <div
    id="fireworks"
    @click="init"
  >
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
      ref="canvasBg"
    ></canvas>
    <img
      src="../../assets/img/fireworks/girl.png"
      alt=""
    >
  </div>
</template>


<script>

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
        timer: null,
      },
      fireworkOpt: {
        x: undefined,
        y: undefined,
        xEnd: undefined,
        yEnd: undefined,
        count: 2,   //炸裂后粒子数
        wait: undefined,  //消失后 => 炸裂  等待时间
      },
      firework: {
        x: undefined,
        y: 380,
        width: 90,
        height: 140,
      },
      fireworks:[],
    }
  },

  mounted() {

  },

  methods: {


    move(){
      let ctx = this.$refs.canvasBg.getContext('2d')
      requestAnimationFrame(this.move)
      this.fireworks.forEach(item =>{
        this.render(ctx,item)

        // console.log(item);
        
      })
    },


    render(ctx,firework) {
      this.rise(firework)
      let { x, y, width, height } = firework

      ctx.clearRect(0, 0, 800, 400)
      ctx.fillStyle = 'red'
      ctx.fillRect(x, y, width, height)

      // if (firework.y + firework.height < 0) {
      //   cancelAnimationFrame(this.config.timer)
      // }
    },


    //创建微粒
    createParticles() {
      for (let i = 0; i < this.fireworkOpt.count; ++i) {
        // this.particles.push(new Particle({ x: this.xEnd, y: this.yEnd }));
      }
    },

    rise(firework) {
      // console.log(firework.y);
      let velocity = -3
      firework.y += velocity
      velocity += 0.005
    },

    generateFireworks() {


    },

    init(e) {
      if (e.offsetY > 190) {
        return
      }

      let firework = {
        x: Math.random() * 800,
        y: 380,
        width: 90,
        height: 140,
      }

      this.fireworks.push(firework)

      console.log(this.fireworks);
      
      // this.generateFireworks()
      this.move()

    }
  }

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
