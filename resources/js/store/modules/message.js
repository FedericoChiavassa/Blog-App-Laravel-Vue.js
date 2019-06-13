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
        state.msg = getText(message),
        state.type = getType(message)
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

function getText(message) {
    if(message.errors) {
        return message.message
    }
    else {
        return message.error ? message.error : message.success
    }
}

function getType(message) {
    if(message.errors) {
        return "error"
    }
    else {
        return message.error ? "error" : "success"
    }
}