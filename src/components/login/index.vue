<template>
  <div class="wrapper">
    <h2>{{!isShowRegister ? '登录：' : '注册：'}}</h2>
    <form
      action=""
      id="login"
       v-if="!isShowRegister"
    > 
      <label for="">用户名：</label>
      <input type="text"><br>
      <label for="">密<span>&#12288;</span>码：</label>
      <input type="password"><br>
      <div id="btn">
        <div>
          <button>登录</button>
        </div>
        <div>
          <span>没有账号？</span>
          <button @click="register">立即注册</button>
        </div>
      </div>
    </form>
    <form
      action=""
      id="register"
      v-if="isShowRegister"
    > 
      <label for="">用&ensp;户&ensp;名：</label>
      <input type="text" placeholder="请输入昵称"><br> 
      <label for="">密<span>&#12288;&#12288;</span>码：</label>
      <input type="password"  placeholder="6到12位，必须包含英文和数字"><br>
      <label for="">确认密码：</label>
      <input type="password" placeholder="再次输入密码">
      <div id="btn">
        <div>
          <button>确认注册</button>
        </div>
        <!-- <div>
          <button>立即登录</button>
        </div> -->
      </div>
    </form>
    <span class="close"> x </span>
  </div>
</template>
<script>
export default {
  data(){
    return {
      isShowRegister:false
    }
  },
  methods:{
    register(){
      this.isShowRegister = true
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
    padding 20px 40px
    border-radius 5px
    box-shadow 3px 3px  3px  #ccc
    box-sizing border-box
    #login , #register
      // display none
      // flex-direction  column
      input
        width 200px
        height 20px
        padding 0 5px
        margin-top 10px
      button 
        margin-top 5px
        padding 1px 4px  
      #btn
        display flex
        flex-direction column
        align-items flex-end

</style>  