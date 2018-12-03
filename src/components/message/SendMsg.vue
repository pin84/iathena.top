<template>
  <div class="sendMsg">
    <hr style="margin-bottom:20px;">
    <form action="">
      <div class="userinfo">
        <label for="username">昵称: </label><input type="text" id="username" autocomplete="off" v-model="message.username"> <br><br>
        <label for="title">标题: </label><input type="text" id="title" autocomplete="off" v-model="message.title">
      </div>
      <br>
      <div class="avatar">
        <p>请选择头像：</p>
        <br>
        <ul class="list">
          <li class="item" v-for="(item,i) in 16" :key="i">
            <input class="ra" type="radio" name="avatar" @click="selectedAvatar(i)">
            <img :src="require('../../assets/img/message/avatar/'+((i+1)>9? (i+1) : '0'+(i+1) )+'.gif')">
          </li>
        </ul>
      </div>
      <div class="content">
        <h4>留言内容 (<span class="red">必填</span>)</h4>
        <textarea name="msg" cols="50" rows="10" v-model="message.msg"></textarea>
        <p id="silent">
          <span>是否为悄悄话(只有管理员才能看得见): </span>
          <input type="checkbox">
        </p>
        <button id="send" @click.prevent="send">发表</button>
      </div>
    </form>
  </div>
</template>


<script>
import config from '../../config/config'
export default {
  data() {
    return {
      message: {
        username: '',
        title: '',
        avatar: '',
        msg: ''
      }
    }
  },

  methods: {
    selectedAvatar(i) {
      this.message.avatar = (i + 1) > 9 ? (i + 1) : '0' + (i + 1)
    },

    send() {
      if (!this.message.msg) {
        return alert('请输入留言信息')
      }

      fetch(`${config.url}/addmsg`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.message)
      }).then(res => {
        return res.json()
      }).then(data => {
        if (!data.code) {
          this.message.msg = ''
          alert(data.data)
          this.$emit('refreshMsg')
          window.scrollTo(0,210)  //滚动窗口到指定坐标
        }
      })
    }
  }

}
</script>


<style lang='stylus' scoped>
.red
  color red
.sendMsg
  width 100%
  margin-top 20px
  box-sizing border-box
  font-size 1.4rem
  .userinfo 
    #username, #title
      padding 3px 5px
  .avatar 
    .list
      display flex
      flex-wrap wrap
      .item
        margin 10px 15px
        .ra
          width 15px
          height 15px
          vertical-align top
          margin 20px 10px 0 0 
          &:hover
            cursor pointer
  .content
    margin-top 10px
    h4
      margin-bottom 10px
    textarea
      padding 5px 
      text-indent 1em 
    #silent
      margin 10px 0
      input 
        width 15px 
        height 15px
        vertical-align middle
        &:hover
          cursor pointer
    #send
      padding 0 5px
      &:hover
        cursor pointer


@media screen and (max-width:480px)
  .sendMsg
    padding 5px        
</style>
