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

          <button @click="searchMsg" disabled>搜索</button>
        </div>
      </div>

      <ul class="msglist">
        <li
          class="item"
          v-for="(msg,i) in data"
          :key="i"
        >
          <div class="top">
            <span>标题:</span> <span>{{msg.title}}</span> <span class="name">{{msg.username}}</span> <time><span>发表于:</span>{{msg.created}}</time>
          </div>
          <div class="bottom">
            <div class="avatar">
              <img
                :src="require(`../../assets/img/message/avatar/${msg.avatar}.gif`)"
                alt=""
              >
              <h5>{{msg.username}}</h5>
            </div>
            <div class="detail">{{msg.msg}}</div>
          </div>
        </li>
      </ul>
      <p v-if='false'>搜索结果一共 3 条留言</p>
      <PageChange
        v-else
        :pages='pages'
        :currentPage='pageIndex'
        @toLastPage="toLastPage"
        @toFirstPage="toFirstPage"
        @toPre="toPre"
        @toNext="toNext"
        @selectPage="selectPage"
        @changePageNum="changePageNum"
      />

      <SendMsg
        @refreshMsg="refreshMsg"
        ref="send"
      />
    </div>
    <div class="note">留言本于2018.12.1开放</div>
  </div>
</template>


<script>
import config from '../../config/config'
import PageChange from './PageChange'
import SendMsg from './SendMsg'
export default {
  data() {
    return {
      data: [], //从后台拿回来的数据 
      isSearch: false,
      pageIndex: 0, //当前页面
      pageNum: 2, //每面显示 
      pages: 0, //传递给子组件的值(总的页码数)
      searchKeyword: '' // 搜索关键字
    }
  },
  components: {
    PageChange,
    SendMsg
  },


  mounted() {
    this.initData()

  },
  methods: {
    initData() {
      let pageIndex = window.localStorage.getItem('currentPage')
      console.log(pageIndex)
      fetch(`${config.url}/initData?pageIndex=${this.pageIndex}&pageNum=${this.pageNum}`).then(res => {
        return res.json()
      }).then(json => {
        this.data = json.data
        this.pages = json.pages
        window.scrollTo(0, 180)

        // let localStorage = window.localStorage
        // localStorage.setItem('currentPage', this.pageIndex)
      })
    },
    refreshMsg() {
      this.pageIndex = 0
      this.initData()
    },

    toPre() {
      if (this.pageIndex === 0) return
      this.pageIndex -= 1
      this.initData()
    },
    toNext() {
      if (this.pageIndex === this.pages - 1) return
      this.pageIndex += 1
      this.initData()
    },

    toFirstPage() {
      if (this.pageIndex === 0) return
      this.pageIndex = 0
      this.initData()
    },

    toLastPage() {
      if (this.pageIndex === this.pages - 1) return
      this.pageIndex = this.pages - 1
      this.initData()
    },
    selectPage(s1) {
      this.pageIndex = s1
      this.initData()
    },
    changePageNum(num) {
      this.pageIndex = 0
      this.pageNum = num
      this.initData()
    },

    toWriteMsg() {
      let send = this.$refs.send.$el.offsetTop
      window.scrollTo(0, send - 85)
    },
    searchMsg() {
      fetch(`${config.url}/searchmsg?keyword=${this.searchKeyword}`).then(res => {
        return res.json()
      }).then(json => {
        console.log(json);
        // this.data = json.data
        // this.isSearch = true

        // this.pages = Math.ceil(json.data.length / this.pageNum)

      })
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
  margin-bottom 60px
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
            word-break break-all
            
  .note
    margin 20px 0
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
