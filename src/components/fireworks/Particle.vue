<template>
  <div class="box">
    <canvas
      id="canvas"
      width="800"
      height="400"
      @click="generatorParticle"
      ref="canvas"
    ></canvas>
    <img
      src="../../assets/img/fireworks/bg.jpg"
      id="bg"
      alt=""
    >
  </div>
</template>
<script>
export default {
  data() {
    return {
      particles: [],
      timer: null,
      count: 50,  // 爆炸后微粒的个数
    }
  },
  mounted() {

    this.startAnimation()
  },
  methods: {

    generatorParticle(e) {
      for (let i = 0; i < this.count; i++) {
        let radius = 1.2
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
    },


    startAnimation() {
      let ctx = this.$refs.canvas.getContext('2d')
      this.timer = requestAnimationFrame(this.startAnimation)

      // ctx.clearRect(0,0,800,400)

      // let img = document.getElementById('bg')
      // let pat=ctx.createPattern(img,'no-repeat');
      // ctx.fillStyle = pat

      ctx.fillStyle = 'rgba(0,0,0,0.1)'
      ctx.fillRect(0, 0, 800, 400)
      this.particles.forEach((item, index) => {
        this.render(ctx, item)

        // 超时移除
        if (--item.timeout < 0) {
          this.particles.splice(index, 1)
        }
      })


    },

    rise(particle) {
      particle.x += particle.vx
      particle.y += particle.vy

      particle.vy += 0.02

      //空气阻力
      particle.vx *= 0.98
      particle.vy *= 0.98
    },



    render(ctx, particle) {
      this.rise(particle)
      let { x, y, size, color, opacity } = particle
      ctx.save()
      ctx.beginPath()
      ctx.globalCompositeOperation = 'lighter';
      ctx.globalAlpha = opacity;

      ctx.fillStyle = color

      ctx.arc(x, y, size, 0, Math.PI * 2, false)
      ctx.fill()

      ctx.restore();
      particle.opacity -= 0.01

    }
  }

}
</script>
<style lang='stylus' scoped>

#canvas
  border 1px solid red
 
</style>