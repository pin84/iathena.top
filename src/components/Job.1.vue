<template>
  <div class="wrapper">
    <div class="title">
      <span>作品集</span>
    </div>
    <ul class="list">
      <li v-for="(li,index) in liData" :key="index">
        <img style="width:100%;height:100%;" :src="require(`../assets/img/job/0${Math.ceil(Math.random()*8)}.jpg`)" alt="">
        <a :href="li.src" target="_blank">
          <h4>{{li.title}}</h4>
          <p>{{li.detail}}</p>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
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
  }

};
</script>
<style lang="stylus" scoped>
// .wrapper
//   width 80%
//   padding-bottom 30px
//   margin 0 auto
//   display flex
//   flex-direction column
//   .title
//     font-size 3rem
//     margin 3rem 0
//     font-weight 600
//     span
//       padding .5rem 0
//       border-bottom 2px solid #E87E04
//   .list
//     display flex
//     flex-wrap wrap
//     justify-content  space-between
//     perspective 750px
//     li
//       width 24%
//       position relative
//       margin 4px
//       transition 300ms
//       transform-origin 50% 50%
//       transform-style preserve-3d
//       &:hover
//         transform scale(1.04)
//         a
//           opacity 1
          
//       img
//         width 100%
//         height 100%
//       a
//         position absolute
//         top 0
//         left 0
//         width 100%
//         height 100%
//         background rgba(0, 0, 0, 0.5)
//         color #fff
//         display flex
//         flex-direction column 
//         align-items center
//         justify-content center
//         font-size 1.4rem
//         opacity 0
//         box-sizing border-box
//         padding 30px
//         line-height 25px
//         h4
//           margin-bottom 10px  
//       // &:hover
//       //   transform scale(1.04)
//       //   a
//       //     opacity 1


// @media screen and (max-width:900px)
//   .wrapper
//     width 95%
//     .list
//       display flex
//       justify-content start
//       li
//         width 31%
//         margin 4px
        
// @media screen and (max-width:480px)
//   .wrapper
//     width 95%
//     .list
//       display flex
//       margin-bottom 80px
//       li
//         width 48%
//         margin 2px
//         a
//           opacity 1
//           font-size 1.3rem
//           line-height 18px
//           padding 15px
//           font-weight 100
//           h4
//             font-weight 100
//         &:hover  
//           transform scale(1)    
</style>
