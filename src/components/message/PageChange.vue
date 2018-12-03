<template>
  <div class="page-change">
    <!-- 为了修改 select 里的值而设，本身没有实际意义 -->
    <span v-show="false">{{cur}}</span> 
    <a
      href=""
      @click.prevent="$emit('toFirstPage')"
    >第一页</a>
    <a
      href=""
      @click.prevent="$emit('toPre')"
    >上一页</a>
    <a
      href=""
      @click.prevent="$emit('toNext')"
    >下一页</a>
    <a
      href=""
      @click.prevent="$emit('toLastPage')"
    >最后一页</a>
    <span>第 </span>

    <select
      name=""
      id=""
      @change="selectPage"
      ref="select1"
    >
      <option
        value=""
        v-for="i of pages"
        :key="i"
      >{{i}}</option>
    </select>
    <span>页 共 {{pages}} 页，每页显示</span>

    <select
      name=""
      id=""
      @change="changePageNum"
      ref="select2"
    >
      <option
        value=""
        v-for="num of pageNum"
        :key="num"
      >{{num}}</option>
    </select>
    <span>条</span>
  </div>
</template>


<script>
export default {
  props: {
    pages: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      pageNum: [2, 4, 8, 16, 32],
      aa:0
    }
  },

  computed: {
    cur: function () {
      let s1 = this.$refs.select1
      if (s1) {
        return s1.selectedIndex = this.currentPage
      }
      return this.currentPage
    }
  },
  mounted(){
    // this.setSelectValue()
  },
  methods: {
    selectPage() {
      let s1 = this.$refs.select1.selectedIndex
      this.$emit('selectPage', s1)
    },
    changePageNum() {
      let s2 = this.$refs.select2
      let num = s2.options[s2.selectedIndex].text
      this.$emit('changePageNum', num)
    },

    // setSelectValue(){
    //   let s1 = this.$refs.select1
    //   s1.selectedIndex = cur
    // }
  }
}
</script>


<style lang='stylus' scoped>
.page-change
  width 100%
  font-size 1.4rem
  line-height 24px
  color #000
  a
    margin-right 5px
    color #000
    &:hover
      text-decoration underline
</style>
