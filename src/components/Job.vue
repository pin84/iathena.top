<template>
  <div class="job">
    <h3>作品集</h3>
    <div class="works">
      <SeaWave class='item' />
      <ThreeDImage class='item' />
      <Eclipse class='item' />
    </div>
   
  </div>
</template>
<script>
import SeaWave from './works/SeaWave'
import ThreeDImage from './works/ThreeDImage'
import Eclipse from './works/Eclipse'
export default {
  data() {
    return {
      liData: [
        {
          src: 'http://df.iathena.top/',
          title: '静态页面-企业官网',
          detail: '业务范围下的数据都是用ajax从后台请求'
        },
        {
          src: 'https://pin84.github.io/live/01_web/01_miaov/',
          title: '静态页面-企业官网',
          detail: ''
        },
        {
          src: 'https://pin84.github.io/live/05_css3/05_3dPictrues/',
          title: 'css3 3D旋转',
          detail: '请用 Google Chrome 浏览器打开(原因你懂的)'
        },
        {
          src: 'http://seller.iathena.top/',
          title: 'VUE 移动端，请将浏览器切换到手机端页面',
          detail: '仿 饿了吗APP，所有数据都用axios从后台请求'
        },
        {
          src: 'http://cxen.iathena.top/',
          title: 'VUE 移动端，请将浏览器切换到手机端页面',
          detail: '前后端分离，新时代英语APP。'
        },
        {
          src: 'https://pin84.github.io/live/01_web/03_ResponsiveWeb/',
          title: '理财网站-响应式页面',
          detail: ''
        },
        {
          src: 'https://pin84.github.io/live/01_web/08_magnifier/',
          title: '淘宝网的放大镜效果',
          detail: ''
        },
        {
          src: 'http://vuebase.iathena.top/#/todoList/',
          title: 'todoList',
          detail: 'VUE 数据版的TodoList'
        },
        {
          src: 'https://github.com/pin84/',
          title: '更多请访问我的github',
          detail: ''
        },
      ]
    }
  },
  components: {
    SeaWave,
    ThreeDImage,
    Eclipse
  }
};
</script>
<style lang="stylus" scoped>
.job
  width 80%
  padding-bottom 30px
  margin 0 auto
  h3
    display inline-block
    font-size 24px
    line-height 40px
    padding .5rem 0
    border-bottom 2px solid #E87E04
    margin-bottom 20px
  .works
    display flex
    justify-content space-around
    flex-wrap wrap
</style>
