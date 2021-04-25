<template>
  <div id="searchWrapper">
    <input
      type="text"
      v-model="keyword"
      placeholder="输入关键字搜索留言"
    >
    <input
      class="btn"
      type="button"
      value="搜索"
      @click="search"
    >
  </div>
</template>
<script>
export default {
  data() {
    return {
      keyword: ''
    }
  },
  methods: {
    search(){
      this.$emit('searchMsg',this.keyword)
    }
  }
}
</script>
<style lang='stylus' scoped>
#searchWrapper
  position relative
  input
    padding 3px 8px 
    border 1px solid #ccc
    outline none
    transition all .3s
    &:hover
      border 1px solid #6699CC
    &:focus
      border 1px solid #6699CC
  .btn
    cursor pointer 
</style>    