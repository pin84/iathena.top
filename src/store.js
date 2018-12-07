import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)




export default new Vuex.Store({
  state: {
    pageIndex: 0, // 当前页码
    pageNum: 4, // 每页显示的条数
    pages: 0 // 总页数
  },
  mutations: {
    increment(state) {
      state.pageIndex++
    },
    minus(state) {
      state.pageIndex--
    },
    toFirstPage(state) {
      state.pageIndex = 0
    },
    toLastPage(state) {
      state.pageIndex = state.pages - 1
    },
    setPages(state, num) {
      state.pages = num
    },
    setPageNum(state, num) {
      state.pageNum = num
    }
  },
  actions: {

  }
})
