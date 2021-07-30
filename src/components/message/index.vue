<template>
  <div class="message" ref="content">
    <div class="content">
      <picture class="banner">
        <source
          srcset="../../assets/img/message/banner.webp"
          type="image/webp"
        />
        <img src="../../assets/img/message/banner.jpg" alt="" />
      </picture>
      <div class="search">
        <BtnWriteMsg @toWriteMsg="toWriteMsg" />
        <SearchBtn @searchMsg="searchMsg" :ts='ts' />
      </div>
      <div class="msglist" v-if="msgList.length">
        <li class="item" v-for="(msg, i) in msgList" :key="i">
          <div>
            <div class="top">
              <span>标题:</span> <span>{{ msg.title }}</span>
              <!-- <span class="name">{{ msg.username }}</span> -->
              <time><span>发表于:</span>{{ msg.create_time }}</time>
              <!-- <span class="del" @click="delMsg(msg.id, msg.username)"
                >删除</span
              > -->
            </div>
            <div class="bottom">
              <div class="avatar">
                <div class="imgbox">
                  <img
                    :src="
                      require(`../../assets/img/message/avatar/${msg.avatar}.gif`)
                    "
                    alt=""
                  />
                </div>

                <h5>{{ msg.username }}</h5>
              </div>
              <div class="detail" :class="{ red: msg.isSecret === 1 }">
                {{ msg.content }}
              </div>
            </div>
          </div>
        </li>
      </div>

      <div class="nomsg" v-else>暂无留言</div>

      <div v-if="isSearch" id="isSearch">
        <span
          >搜索结果一共 <strong>{{ msgList.length }}</strong> 条留言</span
        >
        <button @click="hiddenSearchResult">确定</button>
      </div>

      <PageChange v-if="!isSearch" @changeData="changeData" />
      <SendMsg
        v-if="isShowSendMsg"
        @refreshMsg="initData"
        @closeSendMsgWrapper="closeSendMsgWrapper"
        ref="send"
      />
    </div>
    <div class="note">留言本于2018.12.1开放</div>
  </div>
</template>

<script>
import PageChange from "./PageChange";
import SendMsg from "./SendMsg";
import BtnWriteMsg from "./BtnWriteMsg";
import SearchBtn from "./SearchBtn";
import { Dialog } from "vant";
// import utils from '@/utils/dateFormat'

export default {
  data() {
    return {
      ts:0,
      value: 10,
      msgCount: 0,
      curPage: 1,
      curPageSize: 2,
      allPageNum: 0,
      msgList: [], //从后台拿回来的数据，只有前两条
      // {
      //   id: 1,
      //   title: "aa",
      //   username: "bb",
      //   create_time: "cc",
      //   isShow: true,
      //   avatar:'04'
      // },

      allData: [], //存后台所有的数据 用于上一页、下一页的操作，不从数据库取数据
      isSearch: false,
      searchKeyword: "", // 搜索关键字
      searchRes: [],
      maxSearchResLength: 32,
      start: this.currentPageIndex || Number(this.$store.state.pageIndex),
      end: this.currentPageNum || Number(this.$store.state.pageNum),
      isShowSendMsg: false,
      propsUserInfo: undefined,
      // url: config.avartorUrl
    };
  },
  components: {
    PageChange,
    SendMsg,
    BtnWriteMsg,
    SearchBtn,
  },

  created() {
    this.initData();

    let token = localStorage.getItem('token')
    console.log(token);
  },

  computed: {
    currentPageNum: function () {
      return Number(this.$store.state.pageNum);
    },
    currentPageIndex() {
      return Number(this.$store.state.pageIndex);
    },
  },

  methods: {
    hiddenSearchResult(){
      let ts = new Date().getTime()
      this.ts = ts
      this.initData()
    },
 
    async changeData(obj) {
      let { curPage, curPageSize } = obj;
      this.curPage = curPage;
      this.curPageSize = curPageSize;
      await this.initData();
    },

    async initData() {
      let { code, data } = await this.$get(this.$api.getmsg, {
        size: this.curPageSize,
        pageIndex: this.curPage,
      });
      this.msgList = data;
      this.isSearch = false;
      return true;
    },

    async searchMsg(keyword) {
      this.searchKeyword = keyword;

      if (!keyword) {
        Dialog({ message: "请输入关键字搜索" });
        return;
      }
      let { data } = await this.$get(this.$api.searchmsg, { keyword });
      console.log(data);
      this.msgList = data;
      this.searchKeyword = "";
      this.isSearch = true;
      this.isShowSendMsg = false;
    },

    async toWriteMsg() {
      this.isShowSendMsg = true;
      this.$nextTick(() => {
        let content = this.$refs.content;
        content.scrollIntoView(0, 5000);
      });
    },
    closeSendMsgWrapper() {
      this.isShowSendMsg = false;
    },
    delMsg(id, name) {
      alert("功能完善中。。。");
      return;
      fetch(`${config.url}/delMsg?id=${id}&name=${name}`, {
        credentials: "include",
      })
        .then((res) => {
          return res.json();
        })
        .then((json) => {
          alert(json.data);
          this.initData();
        });
    },
  },
};
</script>


<style lang='stylus' scoped>
.message {
  width: 100%;
  padding-top: 20px;
  box-sizing: border-box;
  font-size: 1.3rem;
  margin-bottom: 20px;

  .nomsg {
    padding: 60px;
    text-align: center;
    color: red;
  }

  .content {
    width: 80%;
    margin: 0 auto;

    .banner img {
      width: 100%;
      height: 100%;
    }

    .search {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .msglist {
      margin-top: 10px;
      line-height: 24px;

      .item {
        border: 1px dashed black;
        margin-bottom: 20px;

        .top {
          background: #FFA042;
          padding: 5px 10px;
          position: relative;
          user-select: none;

          span {
            margin-right: 10px;
            font-size: 12px;

            &.name {
              color: #fff;
            }

            &.del {
              position: absolute;
              right: 0;

              &:hover {
                color: red;
                cursor: pointer;
              }
            }
          }
        }

        .bottom {
          display: flex;
          text-align: center;
          background: url('../../assets/img/message/avatar/bg.webp');

          .avatar {
            display: flex;
            flex: 0 0 150px;
            background: #fff;
            flex-direction: column;
            // justify-content center
            align-items: center;
            padding: 5px;

            .imgbox {
              width: 100px;
              height: 100px;
              margin-bottom: 5px;

              img {
                width: 100%;
                height: 100%;
                border-radius: 50%;
              }
            }
          }

          .detail {
            padding: 10px;
            font-size: 1.4rem;
            text-indent: 1em;
            text-align: left;
            word-break: break-all;

            &.red {
              color: red;
            }
          }
        }
      }
    }

    #isSearch {
      span {
        margin-right: 10px;

        strong {
          color: red;
        }
      }

      button {
        border: 0;
        outline: none;
        background: #FF9900;
        padding: 1px 5px;
        box-shadow: 2px 2px 1px #666;

        &:hover {
          background: #FF6600;
          cursor: pointer;
        }
      }
    }
  }

  .note {
    margin: 40px 0 0 0;
    width: 100%;
    text-align: center;
    color: #006633;
    font-size: 1.2rem;
  }
}

@media screen and (max-width: 480px) {
  .message {
    padding-top: 0;
    box-sizing: border-box;
    font-size: 1.4rem;
    margin-bottom: 80px;

    .content {
      width: 100%;

      .msglist {
        margin-top: 10px;
      }
    }
  }
}
</style>
