<template>
  <div id="fireworks">
    <div id="canvasBox" v-if="PCOrPhone">
      <div>
        <canvas id="fireworksCtx" width="800" height="400" ref="fireworksCtx" @click="init"></canvas>
        <img src="../../assets/img/fireworks/girl.png" alt="">
      </div>
    </div>

    <div id="canvasBox" v-else>
      <div>
        <canvas id="fireworksCtx" width="375" height="400" ref="fireworksCtx" @click="init"></canvas>
        <!-- <img src="../../assets/img/fireworks/girl.png" alt=""> -->
      </div>
    </div>

    <dir id="text">
      那一夜 河对岸的烟火光彩耀眼 <br>
      震耳欲聋的声音 振奋着年少苦闷的情绪 <br>
      我们目不转睛地看着瞬间出现又消逝的奇幻瑰丽 <br>
      然后想起我们迷茫的将来 <br>
      想起我们如火花般的青春 <br>
      然后想起我们此刻灿烂的时光 <br>
      一切都是真的 一切都不是真的…
    </dir>
  </div>
</template>
<script>
export default {
  data() {
    return {
      fireworks: [],
      particles: [],
      count: 100,
      aa: false
    }
  },

  computed: {
    PCOrPhone: function () {
      return /Android|webOS|iPhone|BlackBerry/i.test(navigator.userAgent) ? false : true
    }
  },

  mounted() {
    this.startAnimation()

    console.log(navigator.userAgent)

  },

  methods: {
    init(e) {

      if (e.offsetY > 190) {
        return
      }

      if (this.fireworks.length > 7) {
        return
      }

      let firework = {
        x: e.offsetX,
        y: 380,
        size: 2,
        color: `hsla(${360 * Math.random() | 0},80%,60%,1)`,
        yEnd: e.offsetY,
        opacity: 1,
        timeout: 95,  // 95次调用后，移除
        velocity: -3,
        status: 1,
        particles: this.generatorParticle(e)
      }
      this.fireworks.push(firework)
    },


    generatorParticle(e) {
      //微粒
      let radius = 1.2
      let particles = []
      for (let i = 0; i < this.count; i++) {
        let rate = Math.random()
        let angle = Math.PI * 2 * Math.random()

        let particle = {
          x: e.offsetX,
          y: e.offsetY,
          size: 1,
          color: `hsla(${360 * Math.random() | 0},80%,60%,1)`,
          vx: radius * Math.cos(angle) * rate,
          vy: radius * Math.sin(angle) * rate,
          opacity: 1,
        }
        particles.push(particle)
      }
      return particles
    },

    startAnimation() {
      let ctx = this.$refs.fireworksCtx.getContext('2d')
      requestAnimationFrame(this.startAnimation)
      ctx.clearRect(0, 0, 800, 400)
      // ctx.fillStyle = 'rgba(0,0,0,0.1)'
      // ctx.fillRect(0, 0, 800, 400)

      this.fireworks.forEach((firework, index) => {
        //如果返回false则删除firework
        !this.render(ctx, firework) && this.fireworks.splice(index, 1)
      })
    },

    rise(firework) {
      firework.y += firework.velocity * 1
      firework.velocity += 0.005  //升空时产生的阻力

      // 如果到达目标高度，开始第二个状态
      if (firework.y <= firework.yEnd) {
        firework.status = 2
      }
    },

    render(ctx, firework) {
      switch (firework.status) {
        case 1:
          var { x, y, size, color } = firework
          x += Math.sin(Math.PI * 2 * Math.random()) / 1.2
          ctx.save()
          ctx.beginPath()

          ctx.translate(x, y);
          ctx.scale(0.8, 2.5);
          ctx.translate(-x, -y);

          ctx.fillStyle = color
          ctx.arc(x, y, size, 0, Math.PI * 2, false)
          ctx.fill()
          ctx.restore();

          this.rise(firework)
          return true
          break

        case 2:
          //在烟花上升到指定高度时不做其他处理。执行第三阶段
          // 可以做一些隐藏烟花的处理
          firework.status = 3

          return true
          break

        case 3:
          firework.color = firework.color.replace(/1\b/, '0.2')
          ctx.save()
          ctx.globalCompositeOperation = 'lighter';
          ctx.globalAlpha = firework.opacity

          ctx.fillStyle = firework.color

          firework.particles.forEach((particle) => {
            this.particleRender(ctx, particle)
          })

          ctx.fillRect(0, 0, 800, 400)
          ctx.restore()

          firework.opacity -= 0.01

          return --firework.timeout > 0

          break
        default:
          return false
      }
    },

    particleRender(ctx, particle) {
      let { x, y, size, color, opacity } = particle
      ctx.save()
      ctx.beginPath()
      ctx.globalCompositeOperation = 'lighter'
      ctx.globalAlpha = opacity;

      ctx.fillStyle = color

      ctx.arc(x, y, size, 0, Math.PI * 2, false)
      ctx.fill()
      ctx.restore()

      particle.opacity -= 0.01

      this.particleGo(particle)
    },

    particleGo(particle) {
      particle.x += particle.vx
      particle.y += particle.vy

      particle.vy += 0.02

      //空气阻力
      particle.vx *= 0.98
      particle.vy *= 0.98
    }

  }
}
</script>
<style lang='stylus' scoped>
#fireworks
  position absolute
  width 100%
  height 100%
  // margin 0 auto
  // display flex
  // flex-direction column
  background url('../../assets/img/fireworks/garden-bg.jpg') 
  padding 50px 0
  #canvasBox
    position relative
    width 800px 
    height 400px
    margin 0 auto
    #fireworksCtx
      position absolute
      background url('../../assets/img/fireworks/bg.jpg') no-repeat #000 bottom  
    img 
      position absolute
      bottom 0
      left 454px
      z-index 999
      user-select none
  #text
    width 800px
    height 200px
    margin 0 auto
    font-size 1.6rem
    color #fff
    padding 5px  0 0 20px
    line-height 28px
    box-sizing border-box
    user-select none
@media screen and (max-width:480px)
  #fireworks
    padding-bottom 60px
    #canvasBox
      position relative
      margin 0 auto
      width 100%
      height 400px
      #fireworksCtx
        width 100%
        height 400px
      img 
        left 241px
        z-index 999
        user-select none
    #text
      width 100%
      font-size 16px
      color #fff
      padding-bottom 120px
      line-height 28px
      box-sizing border-box
      user-select none
      box-sizing border-box


</style>