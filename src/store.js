import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const user = {
  state: {
    userinfo: {},
  },
  mutations: {
    userinfo(state, params) {
      state.userinfo = params
    },

  },
  actions: {

  }
}


export default new Vuex.Store({
  modules: {
    user,
    // india
  }
})
// export default new Vuex.Store({
//   state: {


//     pageIndex: 0, // 当前页码
//     pageNum: 2, // 每页显示的条数
//     pages: 0, // 总页数

//     //message
//     imgsrc:'' //传给cavas的src
//   },
//   mutations: {
//     increment(state) {
//       state.pageIndex++
//     },
//     minus(state) {
//       state.pageIndex--
//     },
//     toFirstPage(state) {
//       state.pageIndex = 0
//     },
//     toLastPage(state) {
//       state.pageIndex = state.pages - 1
//     },
//     setPages(state, num) {
//       state.pages = num
//     },
//     setPageNum(state, num) {
//       state.pageNum = num
//     },

//     //message
//     setImageSrc(state,str){
//       state.imgsrc = str
//     }
//   },
//   actions: {

//   }
// })
