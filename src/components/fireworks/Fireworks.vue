<template>
  <div id="fireworks">
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
        yEnd: e.offsetY,
        opacity: 1,
        timeout: 95,  // 95次调用后，移除
        velocity: -3
      }

      console.log(firework.x);
      
      this.fireworks.push(firework)
    },


    startAnimation() {
      let ctx = this.$refs.fireworksCtx.getContext('2d')

      requestAnimationFrame(this.startAnimation)
      ctx.clearRect(0, 0, 800, 400)
      // ctx.fillStyle = 'rgba(0,0,0,0.1)'
      // ctx.fillRect(0, 0, 800, 400)

      this.fireworks.forEach((firework, index) => {
        this.render(ctx, firework)


        if (firework.y < firework.yEnd + 30) {
          this.fireworks.splice(index, 1)
        }
      })
    },

    rise(firework) {
      firework.y += firework.velocity * 1

      firework.velocity += 0.005  //升空时产生的阻力


    },


    render(ctx, firework) {
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
    }



  }
}
</script>
<style lang='stylus' scoped>
#fireworks
  position relative
  #fireworksCtx
    border 1px solid red
</style>