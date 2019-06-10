const state = {
    msg: "",
    type: ""
};

const getters = {
    msg: state => state.msg,
    msgType: state => state.type
};

const actions = {
    setMessage({ commit }, message) {
        commit('setMessage', message);
    },
    clearMessage({ commit }) {
        commit("clearMessage")
    }
};

const mutations = {
    setMessage: (state, message) => (
        state.msg = message.error ? message.error : message.success,
        state.type = message.error ? "error" : "success"
    ),
    clearMessage: state => (
        state.msg = "",
        state.type = ""
    )
};

export default {
    state,
    getters,
    actions,
    mutations
};