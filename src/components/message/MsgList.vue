<template>
  <ul class="msglist">
    <li
      class="item"
      v-for="(msg,i) in currentData"
      :key="i"
    >
      <div class="top">
        <span>标题:</span> <span>{{msg.title}}</span> <span class="name">{{msg.username}}</span> <time><span>发表于:</span>{{msg.created}}</time> <h2>删除</h2>
      </div>
      <div class="bottom">
        <div class="avatar">
          <div class="imgbox">
            <img
              v-if="!msg.isUploadAvatar"
              :src="require(`../../assets/img/message/avatar/${msg.avatar}.gif`)"
              alt=""
            >
            <img
              v-else
              :src="`http://106.13.93.149:9000/static/${msg.avatar}`"
              alt=""
            >
          </div>

          <h5>{{msg.username}}</h5>
        </div>
        <div
          class="detail"
          :class="{red:msg.isSecret === 1 }"
        >{{msg.msg}}</div>
      </div>
    </li>
  </ul>
</template>
<script>
export default {
  props: {
    allData: {
      type:Array
    }
  },
  computed: {
    currentData: function () {
      return this.allData
    },
  }

}
</script>
<style lang='stylus' scoped>
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
        display flex
        flex 0  0 150px
        background #fff
        flex-direction column
        align-items center
        padding 5px
        .imgbox
          width 100px
          height 100px
          margin-bottom 5px
          img
            width 100%
            height 100%
            border-radius 50%
      .detail
        padding 10px   
        font-size 1.4rem 
        text-indent 1em
        text-align left
        word-break break-all
        &.red
          color red
</style>