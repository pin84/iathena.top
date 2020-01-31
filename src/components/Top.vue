<template>
  <nav id="print-nav">
    <div class="container">
      <a
        href="/"
        class="title"
      >
        Athena
      </a>

      <ul class="pc">
        <li
          v-for="(item ,index) in routes"
          :key="index"
          :class="{'router-link-active':i===index}"
          @click="routeTo(item,index)"
        >
       
          <a href="javascript:;">{{item}}</a>
        </li>


        <!-- <router-link
          tag="li"
          to='/job'
        >
          <a href="javascript:;">作品集</a>
        </router-link>
        <router-link
          tag="li"
          to='/skill'
        >
          <a href="javascript:;">技术栈</a>
        </router-link>
        <router-link
          tag="li"
          to='/experience'
        >
          <a href="javascript:;">我的经历</a>
        </router-link>
        <router-link
          tag="li"
          to='/message'

        >
          <a href="javascript:;">留言本</a>
        </router-link> -->
       
      </ul>
    </div>
  </nav>
</template>
<script>
export default {
  data(){
    return {
      i:0,
      routes:['关于我','技术栈','作品集','我的经历','留言本']
    }
  },
  methods:{
    routeTo(router,index){
      if(router === '留言本'){
        return alert('由于更换服务器。功能暂停使用.');
      }
      this.i = index
      switch(router){
        case '关于我':
          this.$router.push('about')
          break;
        case '技术栈':
          this.$router.push('/skill')
          break;
        case '作品集':
          this.$router.push('/job')
          break;
        case '我的经历':
          this.$router.push('/experience')
          break;
        case '留言本':
           alert('由于更换服务器。功能暂停使用.');
           
          // this.$router.push('/message')
          break;
      }
    }
  }
};
</script>
<style lang="stylus" scoped>
nav 
  width: 100%;
  height: 80px;
  background: #2c3e50;
  color: #fff;
  .container 
    width: 80%;
    // min-width: 800px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    a 
      display: block;
      color: #fff;
      font-size: 1.4rem;
      line-height: 80px;
      height: 80px;
      padding: 0 15px
      &:hover
        color #FFFFCC
      &.title 
        font-size: 2rem;
        font-weight: 600;
        padding: 0 
    .pc
      display flex
    .phone
      display none
   
@media screen and (max-width:768px)
  nav
    // position fixed
    z-index 2
    .container 
      width 95%
      justify-content space-between
      a
        padding 0 5px
        font-weight 200 
@media screen and (max-width:480px)
  nav
    position fixed
    bottom 0
    height 60px
    z-index 999
    .container 
      width 100%
      justify-content space-around
      a
        height 60px
        line-height 60px
        // padding 0 2px
        font-size 1.4rem
        font-weight 400 
        &.title
          display none
@media screen and (max-width:320px)    
  nav
    height 50px
    .container
      a
        height 50px
        line-height 50px
        font-size 1.4rem  
.router-link-active
  background #006699
</style>
