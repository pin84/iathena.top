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
      <input
        type="text"
        v-model="loginUserInfo.name"
        @input="inputUserInfo"
      ><br>
      <label for="">密<span>&#12288;&#12288;</span>码：</label>
      <input
        type="password"
        v-model="loginUserInfo.pwd"
        @input="inputUserInfo"
      ><br>
      <div id="btn">
        <div>
          <span
            class="tip"
            v-if="isShowTip"
          >用户名或密码错误！</span>
          <button
            @click.prevent="login"
            v-else
          >登录</button>
        </div>
        <div>
          <label>没有账号？</label>
          <button @click.prevent="showRegister">立即注册</button>
        </div>
      </div>
    </form>
    <form
      action=""
      id="register"
      v-if="isShowRegister"
      autocomplete="off"
    >
      <label for="">用&ensp;户&ensp;名：</label>
      <input
        type="text"
        placeholder="请输入昵称,不能有特殊符号"
        v-model="userInfo.name"
        @input='checkUsername'
        @blur="hasUsername"
      >
      <span
        class="notice"
        v-if="isShowUsernameStatus"
      >
        <span
          class="ok"
          v-if="isUsernameOk===0"
        >&radic;</span>
        <span
          v-else-if="isUsernameOk===1"
          class="ng"
        >&times;</span>
        <span v-else-if="isUsernameOk===2">用户名已存在</span>
      </span><br>
      <label for="">密<span>&#12288;&#12288;</span>码：</label>
      <input
        type="password"
        placeholder="6位以上且必须包含英文和数字"
        v-model="userInfo.pwd"
        @input="checkPWD"
      >
      <span
        class="notice"
        v-if="isShowPWDStatus"
      >
        <span
          class="ok"
          v-if="isPWDok"
        >&radic;</span>
        <span
          class="ng"
          v-else
        >&times;</span>
      </span><br>
      <label for="">确认密码：</label>
      <input
        type="password"
        placeholder="再次输入密码"
        v-model="userInfo.repwd"
        @focus="recheckPWD"
        @input="recheckPWD"
      >
      <span
        class="notice"
        v-if="ifShowRePWDStatus"
      >
        <span
          class="ok"
          v-if="isRePWDok"
        >&radic;</span>
        <span v-else>密码不一致</span>
      </span>
      <div id="btn">
        <div>
          <button
            @click.prevent="register"
            v-bind:disabled=" isUsernameOk !== 0 || !isPWDok || !isRePWDok "
          >确认注册</button>
        </div>
        <!-- <div>
          <button>立即登录</button>
        </div> -->
      </div>
    </form>
    <div
      id="successTip"
      v-if="isShowSuccessTip"
      ref="successTip"
    >
    </div>
    <span
      class="close"
      title="关闭"
      @click="closeRegister"
    > x </span>
  </div>
</template>
<script>
import config from '../../config/config'
import { setTimeout } from 'timers';
export default {
  data() {
    return {
      isClose: true, //整个面板
      isShowRegister: false, //显示登录还是注册面板
      isShowUsernameStatus: false,
      isUsernameOk: 0,
      isShowPWDStatus: false,
      isPWDok: false,
      ifShowRePWDStatus: false,
      isRePWDok: false,
      isDisable: true,
      userInfo: {
        name: '',
        pwd: '',
        repwd: ''
      },
      isShowSuccessTip: true,
      loginUserInfo: {
        name: '',
        pwd: ''
      },
      isShowTip: false
    }
  },
  methods: {
    //以下为登录的方法
    inputUserInfo() {
      this.isShowTip = false
    },
    login() {
      fetch(`${config.url}/login`, {
        credentials: 'include',
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(this.loginUserInfo)
      }).then(res => {
        return res.json()
      }).then(data => {
        if (data.code === 1) {
          this.isShowTip = true
          return
        }
        this.$emit('loginSuccess',data.name) //sendMsg
      })
    },


    //以下为注册的方法
    checkUsername() {
      this.userInfo.name ? this.isShowUsernameStatus = true : this.isShowUsernameStatus = false
      let flag = this.userInfo.name.match(/^[\u4e00-\u9fa5_0-9a-zA-Z]{2,}$/g)

      flag ? this.isUsernameOk = 0 : this.isUsernameOk = 1
    },

    hasUsername() {
      fetch(`${config.url}/hasUsername?name=${this.userInfo.name}`).then(res => {
        return res.json()
      }).then(data => {
        data.code === 1 ? this.isUsernameOk = 2 : this.isUsernameOk = 0

      })
    },
    checkPWD() {
      this.userInfo.pwd ? this.isShowPWDStatus = true : this.isShowPWDStatus = false
      let flag = this.userInfo.pwd.match(/(?=.*\d)(?=.*[a-z]).{2,}$/)
      flag ? this.isPWDok = true : this.isPWDok = false

      this.recheckPWD()
    },
    recheckPWD() {
      this.userInfo.repwd ? this.ifShowRePWDStatus = true : this.ifShowRePWDStatus = false
      let flag = this.userInfo.pwd === this.userInfo.repwd
      flag ? this.isRePWDok = true : this.isRePWDok = false

    },
    register() {
      fetch(`${config.url}/register`, {
        method: 'post',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(this.userInfo)
      }).then(res => {
        return res.json()
      }).then(data => {
        if (data.code === 0) {
          this.$refs.successTip.style.transform = 'translate(-50%,-50%) scale(1)'
          setTimeout(() => {
            this.$refs.successTip.style.transform = 'translate(-50%,-50%) scale(0)'
            this.isShowRegister = false
            this.resetStatus()
          }, 2000)
        }
      })
    },
    closeRegister() {
      this.isShowRegister ? this.isShowRegister = false : this.isClose = false
      this.resetStatus()
      if (!this.isClose) {
        this.$emit('closeLogin')
      }
    },
    showRegister() {
      this.isShowRegister = true
    },
    resetStatus() {
      this.userInfo.name = ''
      this.userInfo.pwd = ''
      this.userInfo.repwd = ''
      //还原状态
      this.isUsernameOk = 0
      this.isPWDok = false
      this.isRePWDok = false
      this.isShowUsernameStatus = false
      this.isShowPWDStatus = false
      this.ifShowRePWDStatus = false
    }
  }
}
</script>
<style lang='stylus' scoped>
  .wrapper
    position relative
    width 370px
    height 215px
    border 1px solid #ccc
    padding 20px 0 20px 10px
    border-radius 5px
    box-shadow 3px 3px  3px  #ccc
    box-sizing border-box
    user-select none
    background #fff
    #login , #register
      input
        width 180px
        height 20px
        padding 0 5px
        margin-top 10px
      button 
        margin 10px 100px 0 0 
        padding 1px 4px 
        user-select none
        &:hover
          cursor pointer
      #btn
        display flex
        flex-direction column
        align-items flex-end
        .tip
          display inline-block
          color red
          margin-right 100px
          margin-top 10px
          height 23px
          line-height 23px

      .notice
        display inline-block
        color red    
        margin-left 5px
        font-weight 600
        span.ok
          color green
    #successTip
      position absolute 
      top 50%
      left 50%
      transform translate(-50%,-50%) scale(0)
      opacity 1
      transition all .8s 
      &::before
        display block
        text-align center
        content:'\2714'
        font-size 48px
        color #FF6666
        width 80px
        height 60px
        line-height 60px
        background rgba(51,102,102,.8)
        border-radius 5px
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