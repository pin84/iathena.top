<template>
  <div class="experience">
    <section
      class="item"
      v-for="(item,index) in data"
      :key="index"
      ref="item"
    >
      <time>{{item.time}} </time>

      <picture class="pic">
        <source
          srcset='../../assets/img/experience/df.webp'
          type="image/webp"
        >
        <img
          src="../../assets/img/experience/daofeng_1.jpg"
          alt=""
        >
      </picture>
      <div class="detail">
        <h2>{{item.name}}</h2>
        <p class="place">{{item.place}}</p>
        <p>{{item.duty}}</p>
      </div>
    </section>

    <!-- <ul class="list">
      <span class="line"></span>
      <li class="item end">
        <div class="show">
          <img
            src="../../assets/img/experience/daofeng_1.jpg"
            alt=""
          >
        </div>
        <div class="detail">
          <time>2017-3 ~ </time>
          <h2>广东道锋文化传媒</h2>
          <p>负责公司官网的日常维护及建设</p>
        </div>
      </li>
      <li class="item start">
        <div class="detail">
          <time>2014.05 ~ 2016.12</time>
          <h2>广州标际包装设备有限公司</h2>
          <p>公司主要生产检测仪器，用于检测包装袋中的水分，氧气等的含量。我主要负责公司生产的检测设备的安装培训以及售后服务.</p>
        </div>
        <div class="show">
          <img
            src="../../assets/img/experience/biaoji_1.jpg"
            alt=""
          >
        </div>
      </li>
      <li class="item end">
        <div class="show">
          <img
            src="../../assets/img/job/04.jpg"
            alt=""
          >
        </div>
        <div class="detail">
          <time>2012.10 ~ 2014.02</time>
          <h2>柳州市柳南区西江印刷厂</h2>
          <p>制版.设计室排好版的PS.pdf文件,制成锌版,并检查图文及网点正常.以及日常中制版机设备的维护.</p>
        </div>
      </li>
      <li class="item start">
        <div class="detail">
          <time>2011.07 ~ 2012.08</time>
          <h2>富士胶片(中国)投资有限公司</h2>
          <p>主要负责河南地区客户的CTP版材、软件以及设备的维护。在日常中，拜访客户，了解产品的使用情况。维护客户关系，为销售提供及时的信息</p>
        </div>
        <div class="show">
          <img
            src="../../assets/img/experience/fuji_1.jpg"
            alt=""
          >
        </div>
      </li>
      <li class="item end">
        <div class="show">
          <img
            src="../../assets/img/experience/dazhuang.jpg"
            alt=""
          >
        </div>
        <div class="detail">
          <time>2007.04 ~ 2011.05</time>
          <h2>广州大壮印刷科技有限公司</h2>
          <p>主要服务的对象是有日本网屏照排机和CTP的客户.以电话或是上门的方式为客户觖决在生产中遇到的问题。维修设备以及为新安装设备的客户进行软硬件的培训。协助销售同事维护好客户关系。</p>
        </div>
      </li>
      <li class="item start">
        <div class="detail">
          <time>2003.9 ~ 2006.7</time>
          <h2>广西南宁工业职业技术学院 </h2>
          <p>我的母校，在校的专业是化工机械。在校所学确定影响了我之后很长的一段工作时间。现如今，转做前端，似乎改变有点大，但这也正是乐趣所在。不是吗~~</p>
        </div>
        <div class="show">
          <img
            src="../../assets/img/experience/nanning.jpg"
            alt=""
          >
        </div>
      </li>
      <li class="item end">
        <div class="show">
          <img
            style="opacity:.5;"
            src="../../assets/img/experience/shiguang_1.jpg"
            alt=""
          >
        </div>
        <div class="detail">
          <time>2000.9 ~ 2003.7</time>
          <h2>广西柳州融安县高中</h2>
          <p style="opacity:.4;">不会再回来的时光</p>
        </div>
      </li>

    </ul> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: {
        df: {
          time: 2017.03,
          name: '广东道锋文化',
          place: '技术部/网站管理',
          duty: '公司主要生产检测仪器，用于检测包装袋中的水分，氧气等的含量。我主要负责公司生产的检测设备的安装培训以及售后服务.'
        },
        bj: {
          time: '2014.05 - 2016.12',
          name: '广州标际包装设备有限公司',
          place: '技术部/售后服务',
          duty: '公司主要生产检测仪器，用于检测包装袋中的水分，氧气等的含量。我主要负责公司生产的检测设备的安装培训以及售后服务.'
        },
        AB: {
          time: '2014.05 - 2016.12',
          name: '广州标际包装设备有限公司',
          place: '技术部/售后服务',
          duty: '公司主要生产检测仪器，用于检测包装袋中的水分，氧气等的含量。我主要负责公司生产的检测设备的安装培训以及售后服务.'
        },
        CD: {
          time: '2014.05 - 2016.12',
          name: '广州标际包装设备有限公司',
          place: '技术部/售后服务',
          duty: '公司主要生产检测仪器，用于检测包装袋中的水分，氧气等的含量。我主要负责公司生产的检测设备的安装培训以及售后服务.'
        },
      }
    }
  },
  components: {
  },
  methods: {
    move() {
      let item = this.$refs.item
      console.log(item[0]);
      item[0].style.border = '1px solid burlywood'


    }
  }
}
</script>
<style lang='stylus' scoped>
.experience
  position relative
  width 100%
  height 100vh
  padding 50px 0 
  background-color #efefef
  background-image  linear-gradient(#e7e6e6 1px, transparent 0), linear-gradient(90deg, #e7e6e6 1px, transparent 0)
  background-size 21px 21px, 21px 21px
  background-position center
  display flex
  flex-direction column
  align-items center
  user-select none
  .item
    // width 600px
    padding 25px 10px 40px 10px
    border-left 1px solid burlywood
    position relative
    display flex
    &::before
      content ''
      position absolute
      top 0
      left 0
      display block
      width 15px
      height 15px
      border-radius 50%
      background-color burlywood
      transform translate(-50%,-50%)
    time
      padding 5px 10px
      background burlywood
      position absolute
      left 30px
      top -14px
      &::before
        content ''  
        position absolute 
        left -40px
        top 0
        border-style solid 
        border-width calc(26px /2) 20px
        border-color transparent burlywood transparent transparent
    h2
      font-size 18px
      // line-height 36px
    .place
      color #FF9900
      font-size 16px
    .pic
      display block
      margin-right 10px
      width 150px
      align-self baseline   
      img 
        width 100%
        height 100%
      // height 100px
// @media screen and (max-width:480px)    
//   .experience
//     position relative
//     .item
//       box-sizing border-box
//       width 100%
//       padding 25px 0 40px 20px
//     .pic
//       flex 0 1 150px          
// @media screen and (max-width:320px)    
//   .experience
//     position relative
//     .item
//       box-sizing border-box
//       width 100%
//       padding 25px 0 40px 20px
//       display flex
//       flex-direction column
//     .pic
//       flex 0 1 150px  
</style>
