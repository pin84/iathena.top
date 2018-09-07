<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App abc"/> -->
    <Top />
    <router-view></router-view>
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  // color: #2c3e50;
  // margin-top: 60px;
  // height 100%
  min-width 1120px
}

</style>
