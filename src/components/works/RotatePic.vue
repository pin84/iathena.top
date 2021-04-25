<template>
  <div id="wrap">
    <div class="sence">
      <ul>

        aa
        <!-- <li><img src="@/src/assets/img/rotatePic/12.jpg" /></li> -->
        <!-- <li><img src="../../common/img/imgCartoon/19.jpg" /></li>
        <li><img src="../../common/img/imgCartoon/4.jpg" /></li>
        <li><img src="../../common/img/imgCartoon/5.jpg" /></li>
        <li><img src="../../common/img/imgCartoon/6.jpg" /></li>
        <li><img src="../../common/img/imgCartoon/7.jpg" /></li>
        <li><img src="../../common/img/imgCartoon/8.jpg" /></li>
        <li><img src="../../common/img/imgCartoon/3.jpg" /></li> -->
      </ul>
      <!-- 中间的圆 -->
      <p></p>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    // this.initPage();
  },
  methods: {
    initPage() {
      let sence = document.getElementsByClassName("sence")[0];
      let aLi = sence.getElementsByTagName("li");

      let aliLen = aLi.length;
      let deg = 360 / aliLen;

      let startX, startY, nowX, nowY;
      let roX = -15,
        roY = 0; //原来的基础值 ，在css里设置的

      // window.onload = function () {
      for (let i = 0; i < aliLen; i++) {
        aLi[i].style.transform = `rotateY(${deg * i}deg) translateZ(300px)`;
        aLi[i].style.transition = `transform 1s linear  ${
          (aliLen - i - 1) * 0.1
        }s`;

        document.onmousedown = function (ev) {
          startX = ev.clientX;
          startY = ev.clientY;

          this.onmousemove = function (ev) {
            nowX = ev.clientX;
            nowY = ev.clientY;

            tx = nowX - startX;
            ty = nowY - startY;

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
      // };
    },
  },
};
</script>

<style lang="css" scoped>
body {
  font-size: 1.2rem;
  background: #000;
}
#wrap {
  perspective: 800px;
}
#wrap .sence {
  position: relative;
  width: 20rem;
  height: 30rem;
  margin: 10rem auto;
  transform-style: preserve-3d;
  transform: rotateX(-15deg) rotateY(0deg);
}
#wrap .sence ul li {
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
  background: radial-gradient(rgba(244, 23, 234, 0.2), rgba(0, 0, 0, 0));
  left: 50%;
  top: 90%;
  margin-left: -30rem;
  margin-top: -30rem;
  transform: rotateX(90deg);
}
</style>

<style lang="scss" scoped>
body {
  font-size: 1.2rem;
  background: black;
}

#wrap {
  perspective: 800px; // 1、开启景深

  .sence {
    position: relative;
    width: 20rem;
    height: 30rem;
    // border 1px solid red
    margin: 10rem auto;
    transform-style: preserve-3d; // 2、子元素保留3d
    transform: rotateX(-15deg) rotateY(0deg);

    ul {
      li {
        position: absolute;
        transform: rotateY(0deg) translateZ(0px);
        transition: 1s;

        img {
          width: 20rem;
          float: left;
          box-shadow: 0 0 8px #f9f;
          border-radius: 5px;
          /* 方位 间隔 渐变色 */
          -webkit-box-reflect: below 5px -webkit-linear-gradient(top, rgba(
                  0,
                  0,
                  0,
                  0
                )
                30%, rgba(0, 0, 0, 0.5) 100%);
        }
      }
    }

    p {
      position: absolute;
      width: 60rem;
      height: 60rem;
      border-radius: 50%;
      // border 1px solid red
      background: radial-gradient(rgba(244, 23, 234, 0.2), rgba(0, 0, 0, 0));
      left: 50%;
      top: 90%;
      margin-left: -30rem;
      margin-top: -30rem;
      transform: rotateX(90deg);
    }
  }
}
</style>



