<template>
  <div class="message">
    <div class="content">
      <div class="banner">
        <img
          src="../../assets/img/message/banner.jpg"
          alt=""
        >
      </div>
      <div class="search">
        <button
          class="write"
          @click="toWriteMsg"
        >签写留言</button>
        <div>
          <input
            type="text"
            placeholder="输入关键字搜索留言"
            v-model="searchKeyword"
          >
          <button @click="searchMsg">搜索</button>
        </div>
      </div>
      <!-- <Login class="btn-login"/> -->
      <ul class="msglist">
        <li
          class="item"
          v-for="(msg,i) in currentData"
          :key="i"
        >
          <div class="top">
            <span>标题:</span> <span>{{msg.title}}</span> <span class="name">{{msg.username}}</span> <time><span>发表于:</span>{{msg.created}}</time>
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

      <div
        v-if='isSearch'
        id="isSearch"
      >
        <span>搜索结果一共 <strong>{{data.length}}</strong> 条留言</span>
        <button @click="initData">确定</button>
      </div>

      <PageChange
        v-if='!isSearch'
        @toLastPage="toLastPage"
        @toFirstPage="toFirstPage"
        @toPre="toPre"
        @toNext="toNext"
        @selectPage="selectPage"
        @changePageNum="changePageNum"
      />
      <SendMsg
        v-if='isShowSendMsg'
        @refreshMsg="refreshMsg"
        @closeSendMsgWrapper='closeSendMsgWrapper'
        ref="send"
      />
    </div>
    <div class="note">留言本于2018.12.1开放 </div>
  </div>
</template>


<script>
import config from '../../config/config'
import PageChange from './PageChange'
import SendMsg from './SendMsg'
// import utils from '@/utils/dateFormat'


export default {
  data() {
    return {
      allData: [],//存后台所有的数据 用于上一页、下一页的操作，不从数据库取数据
      data: [], //从后台拿回来的数据，只有前两条
      isSearch: false,
      searchKeyword: '', // 搜索关键字
      searchRes: [],
      maxSearchResLength: 32,
      start: this.currentPageIndex || Number(this.$store.state.pageIndex),
      end: this.currentPageNum || Number(this.$store.state.pageNum),
      isShowSendMsg: false,
    }
  },
  components: {
    PageChange,
    SendMsg,
  },

  created() {
    this.initData()
  },

  computed: {
    currentData: function () {
      return this.data
    },
    currentPageNum: function () {
      return Number(this.$store.state.pageNum)
    },
    currentPageIndex() {
      return Number(this.$store.state.pageIndex)
    }
  },


  methods: {


    initData() {
      fetch(`${config.url}/initData?pageNum=${this.$store.state.pageNum}`, {
        method:'GET',
        cache: 'reload',
      }).then(res => {
        return res.json()
      }).then(json => {
        this.allData = json.allData.reverse()
        this.data = this.allData.slice(0, this.end)
        this.$store.commit('setPages', json.pages)
        window.scrollTo(0, 180)
        if (this.isSearch) {
          this.isSearch = false
        }
      })
    },

    searchMsg() {
      if (!this.searchKeyword) {
        return alert('请输入关键字搜索，可以搜索标题、作者、留言内容')
      }
      fetch(`${config.url}/searchmsg?keyword=${this.searchKeyword}`).then(res => {
        return res.json()
      }).then(json => {
        if (json.data.length > this.maxSearchResLength) { //防止搜索的结果过多，造成页面卡死
          json.data.length = this.maxSearchResLength
        }
        this.data = json.data
        this.searchKeyword = ''
      })
      this.isSearch = true
      this.isShowSendMsg = false
    },

    refreshMsg() {
      this.$store.commit('toFirstPage')
      this.initData()
    },


    toPre() {
      if (this.$store.state.pageIndex === 0) return
      this.$store.commit('minus')


      this.start -= this.currentPageNum
      this.end -= this.currentPageNum
      //防止 this.start - this.currentPageNum 小于0的情况 end 同理
      this.start = this.start < 0 ? 0 : this.start
      this.end = this.end < this.currentPageNum ? this.currentPageNum : this.end

      this.data = []
      this.data = this.allData.slice(this.start, this.end)
    },

    toNext() {
      if (this.$store.state.pageIndex === this.$store.state.pages - 1) return
      this.$store.commit('increment')

      this.start += this.currentPageNum
      this.end += this.currentPageNum

      this.data = []
      this.data = this.allData.slice(this.start, this.end)
    },

    toFirstPage() {
      if (this.$store.state.pageIndex === 0) return
      this.$store.commit('toFirstPage')
      this.start = 0
      this.end = Number(this.$store.state.pageNum)
      this.data = this.allData.slice(this.start, this.end)
    },

    toLastPage() {
      if (this.$store.state.pageIndex === this.$store.state.pages - 1) return
      this.$store.commit('toLastPage')
      this.start = this.allData.length - this.currentPageNum
      this.end = this.allData.length
      this.data = []
      this.data = this.allData.slice(this.start, this.end)
    },
    selectPage(s1) {
      this.$store.state.pageIndex = s1
      this.start = s1 * this.$store.state.pageNum
      this.end = s1 * this.$store.state.pageNum + Number(this.$store.state.pageNum)
      this.data = []
      this.data = this.allData.slice(this.start, this.end)
    },
    changePageNum(num) {
      this.$store.commit('toFirstPage')
      this.$store.commit('setPageNum', num)
      this.$store.commit('setPages', Math.ceil(this.allData.length / num))
      this.start = 0
      this.end = Number(num)
      this.data = []
      this.data = this.allData.slice(this.start, this.end)
    },


    toWriteMsg() {
      this.isShowSendMsg = true
      this.$nextTick(function () {
        window.scrollTo(0, 500);
      })
    },
    closeSendMsgWrapper() {
      this.isShowSendMsg = false
    }



  }
}
</script>


<style lang='stylus' scoped>
.message
  width 100%
  padding-top 20px
  box-sizing border-box
  font-size 1.4rem
  margin-bottom 20px
  .content
    width 80%
    margin 0 auto
    .banner
      img
        width 100%
        height 100%
    .search
      margin-top 10px
      display flex
      justify-content space-between
      input
        padding 3px 8px 
        border 1px solid #ccc
        outline none
        transition all .3s
        &:hover
          border 1px solid #6699CC
        &:focus
          border 1px solid #6699CC
      button
        padding 1px 5px 
        cursor pointer
        vertical-align top
        &.write
          background #FF9900 
          border none 
          outline none
          padding 3px 5px
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
            display flex
            flex 0  0 150px
            background #fff
            flex-direction column
            // justify-content center
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
    #isSearch
      span
        margin-right 10px
        strong 
          color red
      button
        border 0
        outline none 
        background #FF9900
        padding 1px 5px
        box-shadow 2px 2px 1px #666
        &:hover
          background #FF6600
          cursor pointer
  .note
    margin 40px 0 0 0
    width 100%
    text-align center
    color #006633    
    font-size 1.6rem

@media screen and (max-width:480px)
  .message
    padding-top 0
    box-sizing border-box
    font-size 1.4rem
    margin-bottom 80px
    .content
      width 100%
      .msglist
        margin-top 10px 
</style>
