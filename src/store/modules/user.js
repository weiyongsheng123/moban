export default {
  state: {
    mobile: '233333',
  },
  mutations: {
    SET_USER_INFO(state, val) {
      state.mobile = val;
    },
  },
  actions: {
    set_user_info(context, val) {
      context.commit('SET_USER_INFO', val);
    },
  },
  namespaced: true
};
