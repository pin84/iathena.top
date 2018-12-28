<template>
  <div id="canvasBox">
    <canvas
      id="particleCtx"
      width="800"
      height="400"
    ></canvas>
    <canvas
      id="fireworksCtx"
      width="800"
      height="400"
      ref="fireworksCtx"
      @click="init"
    ></canvas>

  </div>
</template>
<script>
export default {
  data() {
    return {
      fireworks: [],
      particles: [],
      count: 50,
      i: 1,
      timer: null,
    }
  },

  mounted() {
    this.startAnimation()
  },

  methods: {
    init(e) {
      let firework = {
        x: e.offsetX,
        y: 380,
        size: 2,
        color: `hsla(${360 * Math.random() | 0},80%,60%,1)`,
        yEnd: e.offsetY + 30,
        opacity: 1,
        timeout: 20,  // 95次调用后，移除
        velocity: -3,
        status: 1
      }

      //微粒
      let radius = 1.2
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
          timeout: 95,  // 95次调用后，移除
        }

        this.particles.push(particle)
      }
      this.fireworks.push(firework)
    },

    startAnimation() {
      let ctx = this.$refs.fireworksCtx.getContext('2d')
      this.timer = requestAnimationFrame(this.startAnimation)
      // ctx.clearRect(0, 0, 800, 400)
      ctx.fillStyle = 'rgba(0,0,0,0.1)'
      ctx.fillRect(0, 0, 800, 400)

      this.fireworks.forEach((firework, index) => {


        this.render(ctx, firework)


        if (!firework) {
          console.log('aaaaaaaaaaaaa');
          
        }

        // if (firework.status === 4) {
        //   this.fireworks.splice(index, 1)
        // }
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
          let { x, y, size, color } = firework
          x += Math.sin(Math.PI * 2 * Math.random()) / 1.2
          ctx.save()
          ctx.beginPath()

          ctx.translate(x, y);
          ctx.scale(0.8, 2);
          ctx.translate(-x, -y);

          ctx.fillStyle = color
          ctx.arc(x, y, size, 0, Math.PI * 2, false)
          ctx.fill()
          ctx.restore();

          this.rise(firework)
          return true
          break

        case 2:
          if (--firework.timeout <= 0) {
            firework.status = 3
          }
          return true
          break

        case 3:
          this.particles.forEach((particle, index) => {
            this.particleRender(ctx, particle)

            // 超时移除
            if (--particle.timeout < 0) {
              this.particles.splice(index, 1)
            }
          })
          return false
          break
        default:
          return false
      }
    },

    particleRender(ctx, particle) {

      let { x, y, size, color, opacity } = particle
      ctx.save()
      ctx.beginPath()
      ctx.globalCompositeOperation = 'lighter';
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
#canvasBox
  position relative
  #fireworksCtx
    position absolute
    background url('../../assets/img/fireworks/bg.jpg') no-repeat bottom 
    
  #particleCtx
    position absolute
    background #000  
</style>