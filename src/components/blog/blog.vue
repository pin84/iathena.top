<template>
  <div class="wrapper">
    <div class="container" ref="container">
      <div class="item">
        <h3 class="title">测试用的第一篇博文</h3>
        <div class="detail" ref="item">
          以后这里就是我的另一个数据库了。我会在这里记录一些日常到的问题以及解决的方法。也会有原创(可能有吧。。。) 我目前还是顺着巨人的大腿往上攀爬，远远没有达到肩膀的高度。所以，各位先行者们还请再借给我一些智慧吧。如果有一天我 能爬到肩膀的位置，那么我必将化身为钻头，即使粉身碎骨也要再前进哪怕是一毫米的距离。写到这里，忽然想以我很小时候， 我的梦想是当一个科学家.....
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',

  mounted() {
    this.showArticle()
  },
  methods: {
    showArticle() {
      let container = this.$refs.container
      let flag = true
      container.addEventListener('click', (e) => {
        if (!this.findParentNode(e.target)) {
          return
        }
        if (flag) {
          this.findParentNode(e.target).style.whiteSpace = 'normal'
          flag = false
        } else {
          this.findParentNode(e.target).style.whiteSpace = 'nowrap'
          flag = true
        }
      })
    },


    findParentNode(el) {
      if (el.className !== 'detail' && el.tagName !== 'P') {
        return false
      }
      if (el.className === 'detail') {
        return el
      } else {
        el = el.parentNode
        return this.findParentNode(el)
      }
    }



  }


}
</script>

<style lang='stylus' scoped>
.wrapper
  width 100%
  height 100vh
  .container
    width 80%
    margin 10px auto 
    .item
      margin-bottom 15px
      .title
        margin-bottom 5px
        font-size 2rem
      .detail
        text-indent 1em
        font-size 1.4rem
        white-space nowrap 
        text-overflow ellipsis 
        overflow hidden
        line-height 16px
        border-left 1px solid #2c3e50
        padding-left 5px
        &:hover
          cursor pointer
</style>
