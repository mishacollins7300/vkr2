import AuthService from '../services/auth.service';
import UserService from '../services/user.service';

const user = JSON.parse(localStorage.getItem('user'));
const initialState = user
  ? { status: { loggedIn: true }, user }
  : { status: { loggedIn: false }, user: null };

export const auth = {
  namespaced: true,
  state: {
    user: {},
    loggedIn: false
  },
  getters: {
    getUser(state) {
      return state.user
    },
    getLoggedIn(state) {
      return state.loggedIn
    }
  },
  actions: {
    login({ commit, dispatch }, user) {
      return AuthService.login(user).then(
        user => {
          dispatch('getUser')
          commit('loginSuccess', user);
          return Promise.resolve(user);
        },
        error => {
          commit('loginFailure');
          return Promise.reject(error);
        }
      );
    },
    logout({ commit }) {
      AuthService.logout();
      commit('logout');
    },
    register({ commit, dispatch }, user) {
      return AuthService.register(user).then(
        response => {
          dispatch('getUser')
          commit('registerSuccess');
          return Promise.resolve(response);
        },
        error => {
          commit('registerFailure');
          return Promise.reject(error);
        }
      );
    },
    getUser({ commit }) {
      return UserService.getCurrentUser().then(
          response => {
            commit('setUser', response.data)
          },
          error => {
            console.log(error)
          }
      )
    }
  },
  mutations: {
    loginSuccess(state) {
      state.loggedIn = true;
    },
    loginFailure(state) {
      state.loggedIn = false;
      state.user = null;
    },
    logout(state) {
      state.loggedIn = false;
      state.user = null;
    },
    registerSuccess(state) {
      state.loggedIn = false;
    },
    registerFailure(state) {
      state.loggedIn = false;
    },
    setUser(state, user) {
      state.user = user;
    }
  }
};
