<template>
  <!-- <div class="wrapper"> -->
  <div class="container">
    <div class="info">
      <div class="phone">
        <i>18610141858</i>
      </div>
      <div class="email">
        <a href="mailto:qp1984@live.com">
          <i>qp1984@live.com</i>
        </a>
      </div>
      <div class="github">
        <a href="https://github.com/pin84" target="_blank">
          <i>https://github.com/pin84</i>
        </a>
      </div>
    </div>
    <div class="qr-b">
      <div>关注我的公众号：</div>
      <div class="qrcode-box">
        <img src="@/assets/img/hs/qrcode_hs.jpg" alt="" />
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>


<script>
export default {};
</script>


<style lang='stylus' scoped>
.container {
  // width: 300px;
  margin: 0 auto;
  display: flex;

  .qr-b {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items center
    margin-left: 50px;
    .qrcode-box {
      width: 100px;
      height: 100px;

      img {
        height: 100%;
      }
    }
  }

  .title {
    font-size: 3rem;
    font-weight: 600;

    span {
      padding: 0.5rem 0;
      border-bottom: 2px solid #E87E04;
    }
  }

  .info {
    display: flex;
    flex-direction: column;
    font-size: 2rem;
    line-height: 35px;

    div {
      display: flex;
      align-items: center;
    }

    .github>a:hover {
      text-decoration: underline;
    }

    .phone::before, .email:before, .github::before {
      display: inline-block;
      content: '';
      width: 24px;
      height: 24px;
      margin-right: 10px;
    }

    .phone::before {
      background: url('./phone1.png') no-repeat center;
    }

    .email::before {
      background: url('./email.png') no-repeat center;
      // margin-bottom -5px
    }

    .github::before {
      background: url('./github.png') no-repeat center;
    }
  }
}

// }
@media screen and (max-width: 375px) {
  .wrapper {
    width: 100%;

    .container {
      width: 80%;
      margin: 0 auto;

      .info {
        font-size: 1.6rem;
      }
    }
  }
}
</style>

