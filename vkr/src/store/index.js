import { createStore } from "vuex";
import { auth } from "./auth.module";
import { request } from "./request.module";
import { event } from './event.module'

const store = createStore({
  modules: {
    auth,
    request,
    event
  },
});

export default store;
