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
        v-else
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
    <div class="note">留言本于2018.12.1开放 </div>
  </div>
</template>

s
<script>
import config from '../../config/config'
import PageChange from './PageChange'
import SendMsg from './SendMsg'
import utils from '@/utils/dateFormat'

export default {
  data() {
    return {
      allData:[],//存后台所有的数据 
      data: [], //从后台拿回来的数据 
      isSearch: false,
      searchKeyword: '', // 搜索关键字
      searchRes: [],
      maxSearchResLength: 32,
    }
  },
  components: {
    PageChange,
    SendMsg
  },

  created() {
    this.initData()
    this.getAllData()
  },

  methods: {

    getAllData() {
      fetch(`${config.url}/getAllData`).then(res => {
        return res.json()
      }).then(json => {
        console.log(json);
        this.allData = json.data
        
      })
    },
    initData() {
      fetch(`${config.url}/initData?pageIndex=${this.$store.state.pageIndex}&pageNum=${this.$store.state.pageNum}`).then(res => {
        return res.json()
      }).then(json => {
        this.data = json.data
        this.$store.commit('setPages', json.pages)
        window.scrollTo(0, 180)
        if (this.isSearch) {  // isSearch 修改为false 显示分页条
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
        this.isSearch = true
        this.searchKeyword = ''
      })
    },

    refreshMsg() {
      this.$store.commit('toFirstPage')
      this.initData()
    },

    toPre() {
      if (this.$store.state.pageIndex === 0) return
      this.$store.commit('minus')

      console.log(this.data);


      // this.initData()
    },

    toNext() {
      if (this.$store.state.pageIndex === this.$store.state.pages - 1) return
      this.$store.commit('increment')

      // this.initData()
    },

    toFirstPage() {
      if (this.$store.state.pageIndex === 0) return
      this.$store.commit('toFirstPage')
      this.initData()
    },

    toLastPage() {
      if (this.$store.state.pageIndex === this.$store.state.pages - 1) return
      this.$store.commit('toLastPage')
      this.initData()
    },
    selectPage(s1) {
      this.$store.state.pageIndex = s1
      this.initData()
    },
    changePageNum(num) {
      this.$store.commit('toFirstPage')
      this.$store.commit('setPageNum', num)
      this.initData()
    },

    toWriteMsg() {
      let send = this.$refs.send.$el.offsetTop
      window.scrollTo(0, send - 85)
    },




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
