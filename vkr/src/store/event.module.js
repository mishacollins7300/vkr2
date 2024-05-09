export const event = {
  state: {
    events: {},
    curEvent: {}
  },
  getters: {
    getCurrentEvent(state) {
      return state.curEvent
    },
  },
  actions: {
    setCurrentEventApi({ commit }, domen) {
      const event = {
        id: "45e16e62-9523-4db5-b94f-e8259a62c2f1",
        city: "Саранск",
        dateBegin: "2024-05-23 00:00:00",
        dateEnd: "2024-05-23 00:00:00",
        description: '<h1>Ярмарка мыла!!!</h1><p>Только 23 мая в ТЦ "Аквамолл"</p><p><br></p>',
        domen: 'milo',
        name: "Ярмарка",
        type: 'Ярмарка',
        infoForParticipant: '<h1>Ярмарка мыла!!!</h1><p>Только 23 мая в ТЦ "Аквамолл"</p><p><br></p>',
        infoForVisitor: '<h1>Ярмарка мыла!!!</h1><p>Только 23 мая в ТЦ "Аквамолл"</p><p><br></p>',
        infoForPartner: '<h1>Ярмарка мыла!!!</h1><p>Только 23 мая в ТЦ "Аквамолл"</p><p><br></p>',
        meta: [],
      }
      commit('setCurrentEvent', event)
    }
  },
  mutations: {
    setCurrentEvent(state, payload) {
      state.curEvent = payload
    }
  }
}