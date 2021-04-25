<template>
  <div class="arrowWrapper">
    <div class="arrow">
      <span class="square"></span>
      <div class="triangle"></div>
    </div>

    <div class="desc">
      <!-- <p class="title">github</p> -->
      <p class="detail">了解更多，请访问我的github</p>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style lang='stylus' scoped>
@import './common.styl';

.arrowWrapper {
  position: relative;
  display: block;
  width: 260px;
  height: 260px;
  border-radius: 5px;
  // background-color #ccc
  box-shadow: 0 2px 30px rgba(0, 0, 0, 0.2);
  background-image: linear-gradient(
    0deg,
    #6699CC,
    rgba(255, 255, 255, 0) 70%
  );

  &:hover {
    box-shadow: 0 2px 30px #FF0033;

    .square {
      animation: move1 2s linear infinite;
    }

    .triangle {
      animation: move2 2s linear infinite;
    }
  }

  .arrow {
    position: relative;
    top: 50px;
    width: 100%;
    height: 100px;
    transform: rotate(-10deg);

    .square {
      position: absolute;
      top: 30px;
      left: 20px;
      display: block;
      width: 150px;
      height: 30px;
      background: burlywood;
      box-shadow: 0 2px 0 rgba(255, 255, 255, 0.3), 0 -2px 0 rgba(0, 0, 0, 0.7);

      &::before {
        position: relative;
        left: 40px;
        content: 'to github';
        font-size: 18px;
        font-weight: 600;
        line-height: 30px;
        text-transform: uppercase;
        color: saddlebrown;
        text-shadow: 0 2px 0 rgba(255, 255, 255, 0.3), 0 -2px 0 rgba(0, 0, 0, 0.7);
      }
    }

    .triangle {
      position: absolute;
      top: -5px;
      left: 170px;
      border-top: 50px solid transparent;
      border-bottom: 50px solid transparent;
      border-left: 50px solid burlywood;
    }
  }
}

@keyframes move1 {
  0% {
    left: 20px;
  }

  50% {
    left: 40px;
  }

  100% {
    left: 20px;
  }
}

@keyframes move2 {
  0% {
    left: 170px;
  }

  50% {
    left: 190px;
  }

  100% {
    left: 170px;
  }
}
</style>