<template>
  <a
    href=""
    target="_brank"
    id="macBookWrapper"
  >
    <div class="macbook">
      <span class="screen"></span>
      <span class="base"></span>
    </div>
    <div class="desc">
      <p class="title">ToDoList</p>
      <p class="detail">数据库版的ToDoList</p>
    </div>

  </a>
</template>
<script>
export default {

}
</script>
<style lang='stylus' scoped>
@import './common.styl';
#macBookWrapper
  position relative
  display block
  width 260px
  height 260px
  border-radius 5px
  background-color lightskyblue
  box-shadow 0 2px 30px rgba(0,0,0,0.2)
  &:hover
    box-shadow 0 2px 30px #FF0033
  .macbook
    width 200px
    display flex
    flex-direction column
    align-items center 
    border 1px solid red 
    .screen
      position relative
      width 170px
      height calc(170px * 0.667)
      background-color black 
      border-radius 3% 3% 0 0 
      border 2px solid silver
      border-bottom none 
      &::before
        color #fff
        content 'sdfsdfs'
        position absolute
        top 0
        right 0
        bottom 0
        left 0
        background radial-gradient(circle at right bottom)

</style>