export const request = {
  state: {
    reqField: [],
    userData: {},
    comments: {},
    status: '',
    nomination: ''
  },
  getters: {
    getReqField(state) {
      return state.reqField
    },
    getUserData(state) {
      return state.userData
    },
    getComments(state) {
      return state.comments
    },
    getStatus(state) {
      return state.status
    }
  },
  actions: {},
  mutations: {
    setReqField(state, payload) {
      state.reqField = payload
    },
    setUserData(state, payload) {
      state.userData = payload
    },
    setComments(state, payload) {
      state.comments = payload
    },
    setStatus(state, payload) {
      state.status = payload
    },
  }
}