const store = new Vuex.Store({

  state: {
    currentUser: null,
    isLogin: false,
  },
  getters: {
    username: state => state.currentUser,
    isLogin: state => state.isLogin,
  },
  mutations: {
    userStatus(state, user) {
      if (user) {
        localStorage.setItem('username', user);
        state.currentUser = user;
        state.isLogin = true;
      } else if (user == null) {
        // clear data when logout
        localStorage.removeItem('username');
        state.currentUser = null;
        state.isLogin = false;
      }
    }
  },
  actions: {
    setUser({commit}, user) {
      commit('userStatus', user)
    }
  }
});

export default store;
