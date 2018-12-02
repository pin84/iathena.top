<template>
  <div class="message">
    <div class="content">
      <div class="banner">
        <img src="../../assets/img/message/banner.jpg" alt="">
      </div>
      <div class="seach">
        <button class="write">签写留言</button>
        <div>
          <input type="text" placeholder="输入关键字搜索留言">
          <button>搜索</button>
        </div>
      </div>
      <ul class="msglist">
        <li class="item" v-for="(msg,i) in computedData" :key="i">
          <div class="top">
            <span>标题:</span> <span>{{msg.title}}</span> <span class="name">{{msg.username}}</span>  <time><span>发表于:</span>{{msg.created}}</time> 
          </div>
          <div class="bottom">
            <div class="avatar">
              <img :src="require(`../../assets/img/message/avatar/${msg.avatar}.gif`)" alt="">
              <h5>{{msg.username}}</h5>
            </div>
            <div class="detail">{{msg.msg}}</div>
          </div>
        </li>
      </ul>
      <PageChange />
      <SendMsg @refreshMsg="refreshMsg"/>
    </div>
    <div class="note">留言本于2018.12.1开放</div>
  </div>
</template>


<script>
import config from '../../config/config'
import PageChange from './PageChange'
import SendMsg from './SendMsg'
export default {
  data(){
    return{
      data:[]
    }
  },
  components:{
    PageChange,
    SendMsg
  },

  computed:{
    computedData:function(){
      return this.data
    }
  },

  mounted(){
    this.initData()
    
  },
  methods:{
    initData(){
      fetch(`${config.url}/initData`).then(res =>{
        return res.json()
      }).then(json =>{
        this.data = json.data
      })
    },
    refreshMsg(){
     this.initData()
    }
  }
}
</script>


<style lang='stylus' scoped>
.message
  width 100%
  padding-top 20px
  box-sizing border-box
  font-size 1.6rem
  margin-bottom 40px
  .content
    width 80%
    margin 0 auto
    .banner
      img
        width 100%
        height 100%
    .seach
      margin-top 10px
      font-size 1.6rem
      // margin-left auto
      // text-align right 
      display flex
      justify-content space-between
      input
        margin 0 10px
        padding 3px 8px
      button
        padding 3px 5px
        cursor pointer
        &.write
          background #FF9900 
          border none 
          outline none
          box-shadow 3px 3px 2px  #666
        &.write:hover
          background #FF6600
    .msglist
      margin-top 40px   
      line-height 24px
      .item
        border 1px dashed black 
        margin-bottom 20px
        .top
          background #FFA042
          padding 5px 10px
          span
            margin-right 10px
            &.name
              color #fff
        .bottom
          display flex
          text-align center
          background url('../../assets/img/message/avatar/bgorange.gif')  
          .avatar
            flex 0  0 150px
            background #fff
            img
              margin 10px 0
            h5
              margin-bottom 10px  
          .detail
            padding 10px   
            font-size 1.4rem 
            text-indent 1em
            text-align left
  .note
    margin 20px 0
    width 100%
    text-align center
    color #006633    
    font-size 1.6rem
</style>
