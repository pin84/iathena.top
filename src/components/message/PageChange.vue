<template>
  <div class="page-change">
    <a href="" @click.prevent="toFirstPage">第一页</a>
    <a href="" @click.prevent="toPre">上一页</a>
    <a href="" @click.prevent="toNext">下一页</a>
    <a href="" @click.prevent="toLastPage">最后一页</a>
    <span>第 </span>

    <select @change="changeCurPage" v-model="curPage">
      <option v-for="i of pages" :key="i">{{ i }}</option>
    </select>
    <span>页 共 {{ pages }} 页，每页显示</span>

    <select @change="changePageSize" v-model="curPageSize">
      <option v-for="num of pageSizeList" :key="num">{{ num }}</option>
    </select>
    <span>条</span>
  </div>
</template>


<script>
export default {
  data() {
    return {
      pages: 1,
      curPage: 1,
      curPageSize: 2,
      pageSizeList: [2, 4, 8, 16, 32],
      pageCount: 0,
    };
  },

  created() {
    this.getMsgCount();
  },

  methods: {
    async getMsgCount() {
      let { data } = await this.$get(this.$api.getmsgcount);
      this.pageCount = data;
      let pages = this.pageCount / this.curPageSize;
      this.pages = pages;
    },

    toFirstPage() {
      this.curPage = 1;
      this.sendtEvent();
    },

    toPre() {
      this.curPage--;
      if (this.curPage < 1) {
        this.curPage = 1;
        return;
      }
      this.sendtEvent();
    },

    toNext() {
      this.curPage++;
      if (this.curPage > this.pages) {
        this.curPage = this.pages;
        return;
      }
      this.sendtEvent();
    },

    toLastPage() {
      this.curPage = this.pages;
      this.sendtEvent();
    },

    changeCurPage() {
      this.sendtEvent();
    },
    changePageSize() {
      this.curPage = 1
      let pages = Math.ceil(this.pageCount / this.curPageSize);
      this.pages = pages;
      this.sendtEvent();
    },

    sendtEvent() {
      this.$emit("changeData", {
        curPage: this.curPage,
        curPageSize: this.curPageSize,
      });
    },
  },
};
</script>


<style lang='stylus' scoped>
.page-change {
  width: 100%;
  font-size: 1.4rem;
  line-height: 24px;
  color: #000;

  a {
    margin-right: 5px;
    color: #000;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
