<template>
  <div
    class="wrapper"
    v-if="isClose"
  >
    <h2>{{!isShowRegister ? '登录：' : '注册：'}}</h2>
    <form
      action=""
      id="login"
      v-if="!isShowRegister"
    >
      <label for="">用&ensp;户&ensp;名：</label>
      <input type="text"><br>
      <label for="">密<span>&#12288;&#12288;</span>码：</label>
      <input type="password"><br>
      <div id="btn">
        <div>
          <button>登录</button>
        </div>
        <div>
          <span>没有账号？</span>
          <button @click.prevent="register">立即注册</button>
        </div>
      </div>
    </form>
    <form
      action=""
      id="register"
      v-if="isShowRegister"
    >
      <label for="">用&ensp;户&ensp;名：</label>
      <input
        type="text"
        placeholder="请输入昵称,不能有特殊符号"
        v-model="userInfo.name"
        @input='abc'
      >
      <span class="notice">
        <span
          class="ok"
          v-show="isUsernameOk"
        >&radic;</span>
        <span
          class="ng"
          v-show="isUsernameOk"
        >&times;</span>
      </span><br>
      <label for="">密<span>&#12288;&#12288;</span>码：</label>
      <input
        type="password"
        placeholder="6到12位，必须包含英文和数字"
      >
      <span class="notice"><span class="ok">&radic;</span> <span class="ng">&times;</span></span><br>
      <label for="">确认密码：</label>
      <input
        type="password"
        placeholder="再次输入密码"
      >
      <span class="notice"><span class="ok">&radic;</span><span>密码不一致</span> </span>
      <div id="btn">
        <div>
          <button @click.prevent="">确认注册</button>
        </div>
        <!-- <div>
          <button>立即登录</button>
        </div> -->
      </div>
    </form>
    <span
      class="close"
      title="关闭"
      @click="closeRegister"
    > x </span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isShowRegister: true,
      isClose: true,
      isUsernameOk: false,
      userInfo: {
        name: '',
        pwd: '',
        rePwd: ''
      }
    }
  },
  methods: {
    abc(){
      console.log(this.userInfo.name.match(/\d{2}/g))
      // if(this.userInfo.name )

    },
    aaa() {
      console.log('aaaaaaaa')
    },
    register() {
      this.isShowRegister = true
    },
    closeRegister() {
      this.isClose = false
    }
  }
}
</script>
<style lang='stylus' scoped>
  .wrapper
    position relative
    width 366px
    height 215px
    border 1px solid #ccc
    padding 20px 0 20px 10px
    border-radius 5px
    box-shadow 3px 3px  3px  #ccc
    box-sizing border-box
    #login , #register
      input
        width 185px
        height 20px
        padding 0 5px
        margin-top 10px
      button 
        margin 10px 90px 0 0 
        padding 1px 4px 
        &:hover
          cursor pointer
      #btn
        display flex
        flex-direction column
        align-items flex-end
      .notice
        display inline-block
        color red    
        margin-left 5px
        font-weight 600
        span.ok
          color green
            
    .close
      position absolute  
      width 20px
      height 20px
      background #ccc
      text-align center
      line-height 20px
      top 5px 
      right 5px  
      color #fff
      &:hover
        background #888
        cursor pointer
</style>  