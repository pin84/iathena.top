<template>
  <div class="sendMsg">
    <!-- <hr style="margin-bottom:20px;"> -->
    <form action>
      <div class="userinfo">
        <div
          style="display: inline-block"
          v-if="isShowLoginWrapper === 0 || isShowLoginWrapper === 3"
        >
          <label for="username">昵称:</label>
          <input
            type="text"
            id="username"
            autocomplete="off"
            v-model="message.username"
            placeholder="访客"
            ref="userInput"
            v-if="isShowLoginWrapper === 0"
          />
          <span v-if="isShowLoginWrapper === 3"
            >&ensp;{{ message.username }} &ensp;|&ensp;
            <span @click="logout" class="logout">退出</span>
          </span>
        </div>
        <div id="login" v-if="isShowLoginWrapper === 1">
          <Login
            id="login-wrapper"
            @closeLogin="closeLogin"
            @loginSuccess="loginSuccess"
          ></Login>
        </div>

        <!-- <span v-if="isShowLoginWrapper === 0">
          <span>&ensp;或</span>
          <i class="btn-login" @click="showLogin">登录</i
          >&ensp;后,更多操作</span
        > -->
        <br />
        <br />
        <label for="title">标题:</label>
        <input
          type="text"
          id="title"
          autocomplete="off"
          v-model="message.title"
          placeholder="无标题"
        />
      </div>

      <br />
      <div class="avatar">
        <span v-if="isShowAvatarList">请选择头像 &ensp;</span>
        <!-- <CanvasSelectAvatar
          @hiddenAvatarList="hiddenAvatarList"
          @setAvatarName="setAvatarName"
          class="CanvasSelectAvatar"
        /> -->
        <ul class="list" v-show="isShowAvatarList">
          <li class="item" v-for="(item, i) in avatarSum" :key="i">
            <input
              ref="avatar"
              class="ra"
              type="radio"
              name="avatar"
              :value="item"
              v-model="message.avatar"
            />
            <!-- @click="selectedAvatar(item)" -->
            <img
              :src="require(`../../assets/img/message/avatar/${item}.gif`)"
            />
          </li>
        </ul>
      </div>
      <div class="content">
        <h4>
          留言内容 (
          <span class="red">必填</span>)
        </h4>
        <textarea
          class="textarea"
          name="msg"
          cols="80"
          rows="8"
          v-model="message.msg"
        ></textarea>
        <p id="silent">
          <span>是否为悄悄话(只有管理员才能看得见)：</span>
          <input type="checkbox" v-model="message.isSecret" />
        </p>
        <button id="send" @click.prevent="send">发表</button>
      </div>
    </form>
    <span class="close" @click="closeWrapper">X</span>
  </div>
</template>



<script>
import config from "../../config/config";
import CanvasSelectAvatar from "./CanvasSelectAvatar";
import Login from "../login";
import { Dialog } from "vant";
export default {
  data() {
    return {
      close: false,
      avatarSum: ["11", "15",  "04",'12','06','17'], //头像的总编号数
      message: {
        username: "访客",
        title: "无标题",
        avatar: "11",
        msg: "",
        isSecret: false, //是否为悄悄话
        isUploadAvatar: "0",
      },
      showSeletAvatar: false,
      isShowAvatarList: true,
      inputFile: "",
      isShowLoginWrapper: 0, //登录窗口隐藏
      currentUser: undefined, //给退出登陆用
    };
  },
  components: {
    CanvasSelectAvatar,
    Login,
  },
  created() {
    // //默认选择第一个头像
    // this.$nextTick(() => {
    //   this.$refs.avatar[0].checked = true;
    //   this.message.avatar = this.avatarSum[0];
    // })

    this.initData();
  },

  methods: {
    async send() {
      if (!this.message.msg) {
        Dialog({ message: "请输入留言信息" });
        return;
      }
      console.log(this.message);
      let { code, data, message } = await this.$post(
        this.$api.sendMsg,
        this.message
      );
      if (code < 0) {
        Dialog({ message });
        return;
      } else {
        Dialog({ message: "发表成功" });
        this.$emit("refreshMsg");
        this.message.msg = "";
        this.message.isSecret = false;
      }
    },
    async initData() {
      let token = localStorage.getItem("token");
      if (!token) return;
      let { code, data } = await this.$get(this.$api.getUserinfo, { token });
      if (code < 0) {
        localStorage.removeItem("token");
      } else {
        this.$store.commit("userinfo", data);
        this.isShowLoginWrapper = 3;
        this.message.username = data.name;
      }
    },

    async logout() {
      this.isShowLoginWrapper = 0;
      localStorage.removeItem("token");
      this.message.username = "";

      // location.reload()
      // this.$store.commit('userinfo',{})
      //     let token = localStorage.getItem('token')
      // let res = await this.$get(this.$api.userLogout,{token})

      // fetch(`${config.url}/logout`, {
      //   credentials: "include",
      // })
      //   .then((res) => {
      //     return res.json();
      //   })
      //   .then((data) => {
      //     console.log(data);
      //   });
      // this.reset();
    },

    loginSuccess(user) {
      this.isShowLoginWrapper = 3;
      this.$nextTick(() => {
        this.message.username = user;
      });
    },

    closeLogin() {
      this.isShowLoginWrapper = 0;
    },
    showLogin() {
      this.isShowLoginWrapper = 1;
      // let scroll = window.scrollTop
      // console.log(scroll);
    },

    hiddenAvatarList(boolean) {
      this.isShowAvatarList = boolean;
    },
    selectedAvatar(i) {
      console.log(i);

      this.message.avatar = i;
    },
    setAvatarName(filename) {
      //接收从CanvasSelectAvatar传过来的头像名，并写入message中
      this.message.avatar = filename;
      this.message.isUploadAvatar = "1";
    },

    closeWrapper() {
      this.$emit("closeSendMsgWrapper");
    },
    reset() {
      this.message.username = "";
    },
  },
};
</script>


<style lang='stylus' scoped>
.red {
  color: red;
}

.sendMsg {
  position: relative;
  width: 100%;
  margin-top: 20px;
  box-sizing: border-box;
  font-size: 1.3rem;
  box-shadow: 2px 2px 3px 3px #ccc;
  padding: 20px;

  .userinfo {
    display: inline-block;

    #username, #title {
      padding: 3px 5px;
    }

    #login {
      display: inline-block;
      vertical-align: top;
    }

    .btn-login {
      margin: 0 5px;
      color: blue;
      display: inline-block;

      &:hover {
        cursor: pointer;
        text-decoration: underline;
      }
    }

    .logout {
      text-decoration: underline;

      &:hover {
        cursor: pointer;
        color: #CC0033;
      }
    }
  }

  .avatar {
    margin-top: 10px;

    .CanvasSelectAvatar {
      display: inline-block;
    }

    .list {
      display: flex;
      flex-wrap: wrap;

      .item {
        margin: 10px 15px;

        .ra {
          width: 15px;
          height: 15px;
          vertical-align: top;
          margin: 20px 10px 0 0;

          &:hover {
            cursor: pointer;
          }
        }
      }
    }
  }

  .content {
    position: relative;
    margin-top: 10px;

    h4 {
      margin-bottom: 10px;
    }

    textarea {
      padding: 5px;
      text-indent: 1em;
      resize: none;
    }

    #silent {
      margin: 10px 0;

      input {
        width: 15px;
        height: 15px;
        vertical-align: middle;

        &:hover {
          cursor: pointer;
        }
      }
    }

    #send {
      padding: 0 5px;

      &:hover {
        cursor: pointer;
      }
    }
  }

  .close {
    position: absolute;
    top: 0px;
    right: 0;
    display: inline-block;
    text-align: center;
    width: 20px;
    height: 20px;
    line-height: 20px;
    background: #cccccc;

    &:hover {
      cursor: pointer;
      background: #888;
    }
  }
}

@media screen and (max-width: 480px) {
  .sendMsg {
    padding: 5px;
  }
}
</style>
