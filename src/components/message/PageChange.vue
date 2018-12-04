<template>
  <div class="page-change">
    <a href="" @click.prevent="toFirstPage">第一页</a>
    <a href="" @click.prevent="toPre">上一页</a>
    <a href="" @click.prevent="toNext">下一页</a>
    <a href="" @click.prevent="toLastPage">最后一页</a>
    <span>第 </span>

    <select name="" id="" @change="selectPage" ref="select1">
      <option value="" v-for="i of pages" :key="i">{{i}}</option>
    </select>
    <span>页 共 {{pages}} 页，每页显示</span>

    <select name="" id="" @change="changePageNum" ref="select2">
      <option value="" v-for="num of pageNum" :key="num">{{num}}</option>
    </select>
    <span>条</span>
  </div>
</template>


<script>
export default {
  data() {
    return {
      pageNum: [2, 4, 8, 16, 32],
      v: 0
    }
  },

  mounted(){
    let s1 = this.$refs.select1
    s1.selectedIndex = this.$store.state.pageIndex

    let s2 = this.$refs.select2
    s2.selectedIndex = this.pageNum.findIndex((num) => {
      return num ===Number(this.$store.state.pageNum) 
    })
  },
  computed: {
    pages: function () {
      return this.$store.state.pages
    },
  },

  methods: {
    toFirstPage() {
      this.$emit('toFirstPage')
      let s1 = this.$refs.select1
      s1.selectedIndex = '0'
    },

    toPre() {
      this.$emit('toPre')
      let s1 = this.$refs.select1
      s1.selectedIndex = this.$store.state.pageIndex
    },

    toNext() {
      this.$emit('toNext')
      let s1 = this.$refs.select1
      s1.selectedIndex = this.$store.state.pageIndex
    },

    toLastPage(){

      console.log(this.$store.state.pages )
      this.$emit('toLastPage')
      let s1 = this.$refs.select1
      s1.selectedIndex = this.$store.state.pages -1
    },

    selectPage() {
      let s1 = this.$refs.select1.selectedIndex
      this.$emit('selectPage', s1)
    },
    changePageNum() {
      let s2 = this.$refs.select2
      let num = s2.options[s2.selectedIndex].text
      this.$emit('changePageNum', num)
    },
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
