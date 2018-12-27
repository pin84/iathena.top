<template>
  <div class="box">
    <canvas
      id="canvas"
      width="800"
      height="400"
      @click="generatorParticle"
      ref="canvas"
    ></canvas>
  </div>
</template>
<script>
export default {
  data() {
    return {
      particles: [],
      timer: null,
      count:50,
      i: 0

    }
  },
  mounted() {
    this.getParticle()
  },
  methods: {
    test(e) {
      let radius = 1.2
      let rate = Math.random()
      let angle = Math.PI * 2 * Math.random()
      let particle = {
        x: e.offsetX,
        y: e.offsetY,
        size: 3,
        color: `hsla(${360 * Math.random() | 0},80%,60%,1)`,
        vx: radius * Math.cos(angle) * rate,
        vy: radius * Math.sin(angle) * rate,
      }

      return particle
    },

    generatorParticle(e){
      // console.log(this.test(e));
      
      for(let i = 0; i < this.count; i++){
        this.particles.push(this.test(e))
      }
    },





    getParticle() {
      let ctx = this.$refs.canvas.getContext('2d')
      this.timer = requestAnimationFrame(this.getParticle)
      ctx.fillStyle(0,0,0,0.1)
      ctx.fillRect(0,0,800,400)
      this.particles.forEach((item) => {
        this.render(ctx, item)

      })

      // this.i++
      // console.log(this.i);

      // if(this.i > 60 ){
      //   cancelAnimationFrame(this.timer)
      // }

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
      let { x, y, size, color } = particle
      ctx.beginPath()
      ctx.fillStyle = color
      ctx.arc(x, y, size, 0, Math.PI * 2, false)
      ctx.fill()
    }
  }

}
</script>
<style lang='stylus' scoped>

#canvas
  border 1px solid red
  
</style>