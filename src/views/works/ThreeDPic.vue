<template>
  <div class="wrapper">
    <div id="wrap">
      <div class="sence" id="sence">
        <ul>
          <li class="img-box"><img src="@/assets/img/rotatePic/12.jpg" ></li>
          <li class="img-box"><img src="@/assets/img/rotatePic/19.jpg" ></li>
          <li class="img-box"><img src="@/assets/img/rotatePic/4.jpg" ></li>
          <li class="img-box"><img src="@/assets/img/rotatePic/5.jpg" ></li>
          <li class="img-box"><img src="@/assets/img/rotatePic/6.jpg" ></li>
          <li class="img-box"><img src="@/assets/img/rotatePic/7.jpg" ></li>
          <li class="img-box"><img src="@/assets/img/rotatePic/8.jpg" ></li>
          <li class="img-box"><img src="@/assets/img/rotatePic/3.jpg" ></li>
          <!-- 
          <li><img src="@/assets/img/rotatePic/3.jpg" /></li>
          <li><img src="@/assets/img/rotatePic/3.jpg" /></li>
          <li><img src="@/assets/img/rotatePic/3.jpg" /></li>
          <li><img src="@/assets/img/rotatePic/3.jpg" /></li>
          <li><img src="@/assets/img/rotatePic/3.jpg" /></li>
          <li><img src="@/assets/img/rotatePic/3.jpg" /></li>
          <li><img src="@/assets/img/rotatePic/3.jpg" /></li> -->
        </ul>
        <!-- 中间的圆 -->
        <p></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.initPage();
  },

  methods: {
    initPage() {
      let sence = document.getElementsByClassName("sence")[0];
      let aLi = sence.getElementsByTagName("li");
      // let sence = document.getElementById('sence')
      // let aLi = document.querySelectorAll('.img-box')

      let aliLen = aLi.length;
      let deg = 360 / aliLen;

      let startX, startY, nowX, nowY;
      let roX = -15,
        roY = 0; //原来的基础值 ，在css里设置的

      setTimeout(() => {
        for (let i = 0; i < aliLen; i++) {
          let  rotate = `rotateY(${deg * i}deg) translateZ(300px)`;
          let transition = `transform 1s linear  ${
            (aliLen - i - 1) * 0.1
          }s`

          console.log(rotate,transition);
          aLi[i].style.transform = rotate
          aLi[i].style.transition = transition;
          document.onmousedown = function (ev) {
            startX = ev.clientX;
            startY = ev.clientY;

            this.onmousemove = function (ev) {
              nowX = ev.clientX;
              nowY = ev.clientY;

              let tx = nowX - startX;
              let ty = nowY - startY;

              //加上基础值
              roX += tx;
              roY += ty;

              //把当前值赋给开始值，以便做累加
              startX = nowX;
              startY = nowY;

              sence.style.transform = `rotateX(${-roY / 5}deg) rotateY(${
                roX / 5
              }deg)`;
            };
            this.onmouseup = function () {
              this.onmousemove = null;
            };

            return false;
          };
        }
      }, 1000);
    },
  },
};
</script>
<style scoped>
.wrapper {
  font-size: 1.2rem;
  background: #000;
  height: 100%;
  overflow: hidden;
}
#wrap {
  perspective: 800px;
  -webkit-perspective: 800px; /* Safari 和 Chrome */
  background: #000;
  height: 100%;
}
#wrap .sence {
  position: relative;
  width: 20rem;
  height: 30rem;
  margin: 250px auto;
  transform-style: preserve-3d;
  -webkit-transform-style: preserve-3d;	/* Safari 和 Chrome */
  transform: rotateX(-15deg) rotateY(0deg);
}
#wrap .sence ul li {
  /* border: 1px solid blue; */
  position: absolute;
  transform: rotateY(0deg) translateZ(0px);
  transition: 1s;
}
#wrap .sence ul li img {
  width: 20rem;
  float: left;
  box-shadow: 0 0 8px #f9f;
  border-radius: 5px;
  /*方位 间隔 渐变色*/
  -webkit-box-reflect: below 5px -webkit-linear-gradient(top, rgba(0, 0, 0, 0)
        30%, rgba(0, 0, 0, 0.5) 100%);
}
#wrap .sence p {
  position: absolute;
  width: 60rem;
  height: 60rem;
  border-radius: 50%;
  background: radial-gradient(rgba(244, 23, 234, 0.3), rgba(0, 0, 0, 0));
  left: 50%;
  top: 90%;
  margin-left: -30rem;
  margin-top: -30rem;
  transform: rotateX(90deg);
}
</style>