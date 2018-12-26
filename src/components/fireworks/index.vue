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
      ref="firework"
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
        i: 0 //测试停止用
      },
      fireworkOpt: {
        x: undefined,
        y: undefined,
        xEnd: undefined,
        yEnd: undefined,
        count: 2,   //炸裂后粒子数
        wait: undefined,  //消失后 => 炸裂  等待时间
        status: 0,
      },
      firework: {
        x: undefined,
        y: 380,
        width: 90,
        height: 140,
      },
      fireworks: [],
    }
  },

  mounted() {
    // this.move()
    this.test()
  },

  methods: {

    test() {


    },


    move() {
      let ctx = this.$refs.firework.getContext('2d')
      this.config.i++
      // this.timer = requestAnimationFrame(this.move)

      ctx.clearRect(0, 0, 800, 400);
      this.fireworks.forEach((item, index) => {
        this.render(ctx, item)
        if (item.status === false) {
          this.fireworks.splice(index, 1)
        }

      })

      // if(this.config.i > 141 ){
      //   cancelAnimationFrame(this.timer)
      // }
    },


    render(ctx, firework) {
      switch (firework.status) {
        case 1: //升空
          this.rise(firework)
          let { x, y, size, sAngle, eAngle, opacity } = firework


          ctx.save();
          ctx.beginPath();

          ctx.translate(x, y);
          ctx.scale(0.5, 1.5);
          ctx.translate(-x, -y);
          ctx.fillStyle = firework.color
          // ctx.globalCompositeOperation = 'lighter';
          // ctx.globalAlpha = opacity
          ctx.arc(x, y, size, sAngle, eAngle, false)
          ctx.fill();
          ctx.restore();
          break;

        case 2:

          // console.log(firework.wait);

          if (--firework.wait <= 0) {
            firework.status = 3
          }
          break;

        case 3:


          firework.status = false
          break;
      }


      if (firework.y + firework.height < 0) {
        cancelAnimationFrame(this.config.timer)
      }
    },


    //创建微粒
    createParticles() {
      for (let i = 0; i < this.fireworkOpt.count; ++i) {
        // this.particles.push(new Particle({ x: this.xEnd, y: this.yEnd }));
      }
    },

    rise(firework) {
      let velocity = -3
      firework.y += velocity * 1
      velocity += 0.005

      // //烟花升空到目标位置开始渐隐
      if (firework.y - firework.yEnd <= 20) {
        firework.opacity = (firework.y - firework.yEnd) / 20;
      }

      //如果到了目标位置 就开始第二个状态
      if (firework.y <= firework.yEnd) {
        firework.status = 2;
      }

      // 移除(在move()移除)
      if (firework.y < 0) {
        firework.status = false
      }
    },

    generateFireworks() {


    },

    init(e) {
      let firework = {
        x: e.offsetX,
        y: 380,
        size: 5,
        sAngle: 0,
        eAngle: 2 * Math.PI,
        opacity: 1,
        yEnd: e.offsetY,
        status: 1,
        color: `hsla(${360 * Math.random() | 0},80%,60%,1)`,
        wait: 30 + Math.floor(Math.random() * 30)
      }
      this.fireworks.push(firework)

      this.move()

    },

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
  #firework
    z-index 8
  img
    position absolute
    bottom 0
    left 454px
    z-index 999
    user-select none

</style>
