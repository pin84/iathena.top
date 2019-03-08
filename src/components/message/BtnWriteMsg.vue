<template>
  <button @click="$emit('toWriteMsg')">签写留言</button>
</template>
<script>
export default {

  methods:{
    // write(){
    //   this.$emit('toWriteMsg')
    // }
  }
}
</script>
<style lang='stylus' scoped>


  // &.write
  //   background #FF9900 
  //   border none 
  //   outline none
  //   padding 3px 5px
  //   box-shadow 3px 3px 2px  #666
  // &.write:hover
  //   background #FF6600
</style>