
const config = {
  width: 800,
  height: 400,
  canvases: ['bg', 'firework'],
  // skyColor: '210, 60%, 5%, 0.2)',
  skyColor: '210, 60%, 5%, 0.2)',
  fireworkTime: { min: 30, max: 60 },
  //烟花参数本身有默认值 传入undefined则使用默认参数
  // fireworkOpt: {
  //   x: undefined,
  //   y: undefined,
  //   xEnd: undefined,
  //   yEnd: undefined,
  //   count: 300,   //炸裂后粒子数
  //   wait: undefined,  //消失后 => 炸裂  等待时间
  // }
}

class Particle {
  //默认值写法 
  constructor({ x, y, size = 1, radius = 1.2 } = {}) {
    this.x = x;
    this.y = y;
    this.size = size;

    this.rate = Math.random(); //每个微粒移动的速度都是随机不同的
    this.angle = Math.PI * 2 * Math.random(); //每个微粒的偏移角度

    //每次微粒移动速度分解为横纵坐标的移动。
    this.vx = radius * Math.cos(this.angle) * this.rate;
    this.vy = radius * Math.sin(this.angle) * this.rate;
  }

  go() {
    this.x += this.vx;
    this.y += this.vy;
    this.vy += 0.02; //重力影响 y越大实际越偏下

    //空气阻力
    this.vx *= 0.98;
    this.vy *= 0.98;
  }

  //画出微粒的位置
  render(ctx) {
    this.go();
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
    ctx.fill();
  }
}

class Firework {
  constructor({ x, y, xEnd, yEnd, count = 300, wait } = {}) {
    //烟花自身属性
    // this.x = x || config.width / 8 + Math.random() * config.width * 3 / 4;
    // this.y = y;
    // this.xEnd = xEnd || this.x;
    // this.yEnd = yEnd || config.width / 8 + Math.random() * config.width * 3 / 8;

    this.x = x
    this.y = y;
    this.xEnd = xEnd || this.x;
    this.yEnd = yEnd

    this.size = 2;
    this.velocity = -3;

    this.opacity = 0.8;
    this.color = `hsla(${360 * Math.random() | 0},80%,60%,1)`;
    this.wait = wait || 30 + Math.random() * 30;
    //微粒个数等
    this.count = count;
    this.particles = [];
    this.createParticles();

    this.status = 1;
  }
  //创建微粒
  createParticles() {
    for (let i = 0; i < this.count; ++i) {
      this.particles.push(new Particle({ x: this.xEnd, y: this.yEnd }));
    }
  }
  //升空
  rise() {
    this.y += this.velocity * 1;
    this.velocity += 0.005; //升空时产生的阻力
    //烟花升空到目标位置开始渐隐
    if (this.y - this.yEnd <= 50) {
      this.opacity = (this.y - this.yEnd) / 50;
    }
    //如果到了目标位置 就开始第二个状态
    if (this.y <= this.yEnd) {
      this.status = 2;
    }
  }

  //渲染烟花  烟花所有动作完成之后返回false
  render(ctx) {
    // console.log(this.x);
    // console.log(this.y, this.size);

    switch (this.status) {
      case 1: //升空
        ctx.save();
        ctx.beginPath();
        ctx.globalCompositeOperation = 'lighter';
        ctx.globalAlpha = this.opacity;
        ctx.translate(this.x, this.y);
        ctx.scale(0.8, 2.3);
        ctx.translate(-this.x, -this.y);
        ctx.fillStyle = this.color;
        ctx.arc(this.x + Math.sin(Math.PI * 2 * Math.random()) / 1.2, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fill();
        ctx.restore();

        this.rise();
        return true;
        break;
      case 2: //烟花消失阶段，等待炸裂
        if (--this.wait <= 0) {
          this.opacity = 1;
          this.status = 3;
        }
        return true;
        break;
      case 3: //炸裂之后 渲染烟花微粒
        this.color = this.color.replace(/1\b/, '0.3')

        ctx.save();
        ctx.globalCompositeOperation = 'lighter';
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = this.color;
        for (let i = 0; i < this.particles.length; ++i) {
          this.particles[i].render(ctx);
        }
        ctx.fillRect(0, 0, config.width, config.height)
        let bg = document.querySelector('#bg')
        ctx.restore();
        this.opacity -= 0.01;
        return this.opacity > 0;
        break;
      default:
        return false;
    }
  }
}

const canvas = {
  init: function () {
    //一些属性的设定 可以不用管
    this.setProperty();
    // this.renderBg();

    //循环体 **主要
    // this.loop();

    this.move()
  },
  setProperty: function () {
    this.fireworks = [];
    this.width = config.width;
    this.height = config.height;
    this.fireworkTime = (config.fireworkTime.min + (config.fireworkTime.max - config.fireworkTime.min) * Math.random()) | 0;

    // this.bgCtx = document.querySelector('#bg').getContext('2d');
    let firework = document.querySelector('#firework')
    firework.width = this.width
    firework.height = this.height
    this.fireworkCtx = firework.getContext('2d');
    // this.fireworkCtx.fillStyle = 'rgba(0,0,0,0.1)';
    // this.fireworkCtx.fillRect(0,0,this.width,this.height);   


    let bg = document.querySelector('#bg')
    bg.width = this.width
    bg.height = this.height
    this.bgCtx = bg.getContext('2d');

  },
  // renderBg() {

  //   // this.bgCtx.fillStyle = 'hsla(210, 60%, 5%, 0.9)'
  //   this.bgCtx.fillStyle = 'rgba(0,0,0,0)'
  //   this.bgCtx.fillRect(0, 0, this.width, this.height);

  // },

  te(fireworkOpt) {
    // this.fireworkCtx.clearRect(0, 0, this.width, this.height);

    if (this.fireworks.length > 7) {
      return
    }

    this.fireworks.push(new Firework(fireworkOpt));

    console.log(this.fireworks);
    //每次到点之后重新设置烟花产生时间 （|0转化为整数）
    this.fireworkTime = (config.fireworkTime.min + (config.fireworkTime.max - config.fireworkTime.min) * Math.random()) | 0;
  },

  move() {
    requestAnimationFrame(this.move.bind(this));
    this.fireworkCtx.clearRect(0, 0, this.width, this.height);

    for (let i = this.fireworks.length - 1; i >= 0; --i) {
      //渲染烟花 （若返回值为false则移除烟花）
      !this.fireworks[i].render(this.fireworkCtx) && this.fireworks.splice(i, 1);
    }
  },

}

let firework = document.getElementById('firework')


firework.addEventListener('click', (e) => {
  if (e.clientY > 177) { //指定点击区域。
    return
  }
  let fireworkOpt = {
    x: e.clientX,
    y: 380,
    xEnd: e.clientX,
    yEnd: e.clientY,
    count: 300,   //炸裂后粒子数
    wait: undefined,  //消失后 => 炸裂  等待时间
  }


  canvas.te(fireworkOpt)
})

module.exports = canvas.init();


