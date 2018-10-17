<template>
  <div class="experience">
    <ul class="list">
      <span class="line"></span>
      <li class="item end">
        <div class="show">
          <img src="../assets/img/daofeng_1.jpg" alt="">
        </div>
        <div class="detail">
          <time>2017-3 ~ </time>
          <h2>广东道锋文化传媒</h2>
          <p>负责公司官网的日常维护及建设，配合公司出版物做移动端的APP</p>
        </div>
      </li>
      <li class="item start">
        <div class="detail">
          <time>2014.05 ~ 2016.12</time>
          <h2>广州标际包装设备有限公司</h2>
          <p>公司主要生产检测仪器，用于检测包装袋中的水分，氧气等的含量。我主要负责公司生产的检测设备的安装培训以及售后服务.</p>
        </div>
        <div class="show">
          <img src="../assets/img/biaoji.jpg" alt="">
        </div>
      </li>
      <li class="item end">
        <div class="show">
          <img src="../assets/img/04.jpg" alt="">
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
          <img src="../assets/img/fuji_1.jpg" alt="">
        </div>
      </li>
      <li class="item end">
        <div class="show">
          <img src="../assets/img/dazhuang.jpg" alt="">
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
          <img src="../assets/img/nanning.jpg" alt="">
        </div>
      </li>
      <li class="item end">
        <div class="show">
          <img style="opacity:.5;" src="../assets/img/shiguang_1.jpg" alt="">
        </div>
        <div class="detail">
          <time>2000.9 ~ 2003.7</time>
          <h2>广西柳州融安县高中</h2>
          <p style="opacity:.4;">不会再回来的时光</p>
        </div>
      </li>

    </ul>
  </div>
</template>


<script>
export default {

}
</script>


<style lang='stylus' scoped>
.experience
  padding-top 50px
  box-sizing border-box
  .list
    position relative
    width 80% 
    margin 0 auto 
    // border 1px solid red
    .line
      position absolute
      display block
      // width 1px
      border-left 2px solid #336699
      height 100%
      left 50%
      top 0
    .item
      display flex
      margin-bottom 60px
      // border 1px solid blue
      // justify-content center
      &.end
        justify-content flex-end
        .show 
          margin-right 50px
      &.start
        justify-content flex-start
        text-align right
        .detail 
          margin-right 50px
      .show
        flex 0 0 150px
        width 150px
        height 150px
        border-radius 50%
        overflow hidden
        img
          display block
          width 100%
          height 100%
      .detail
        width 48%
        font-size 1.4rem 
        h2
          margin 10px 0
        p
          text-indent 2em  
</style>
