<template>
  <div id="app">
    <Top class="top"/>
    <router-view class="view"></router-view>
  </div>
</template>

<script>
import Top from "./components/top/top.vue";
import About from "./components/about.vue";
import Job from "./components/job.vue";
export default {
  name: "app",
  components: {
    Top,
    About,
    Job
  }
};
</script>

<style lang="stylus" scoped>
#app 
  font-family:'microsoft yahei', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  position relative
  overflow hidden
  .top
    position fixed
    z-index 9999
  .view
    margin-top 80px

// @media screen and (max-width:768px)
//   nav
//     z-index 2
   
@media screen and (max-width:480px)    
  #app
    .view
      margin-top 0
</style>
