import axios from 'axios';

const state = {
    token: localStorage.token,
    user: null,
    isAuthenticated: false,
    isLoading: false
};

const getters = {
    isAuthenticated: state => state.isAuthenticated,
    loadingUser: state => state.isLoading,
    token: state => state.token
};

const actions = {
    async login({ commit }, user) {
        commit('setUserLoading');

        const response = await axios.post(
            '/api/login', user
        );

        commit('setUser', response.data);
    },
    async loadUser({ commit }) {
        commit('setUserLoading');

        const response = await axios.get(
            '/api/auth/user', tokenConfig()
        );

        commit('loadUser', response.data);
    },
    async logout({ commit }) {
        const response = await axios.post(
            '/api/logout', tokenConfig()
        );
        
        commit('logoutUser', response.data);
    },
};

const mutations = {
    setUser: (state, user) => (
        localStorage.token = user.api_token,
        state.token = user.api_token,
        state.user = user,
        state.isAuthenticated = true,
        state.isLoading = false
    ),
    loadUser: (state, user) => (
        state.token = user.api_token,
        state.user = user,
        state.isAuthenticated = true,
        state.isLoading = false
    ),
    setUserLoading: state => (
        state.isLoading = true
    ),
    logoutUser: state => (
        localStorage.token = null,
        state.isAuthenticated = false,
        state.user = null,
        state.token = null
    )
};

export default {
    state,
    getters,
    actions,
    mutations
};

// Setup config/headers and token for request
function tokenConfig () {
    const token = localStorage.token;

    const config = {
        headers: {
            "Content-type": "application/json"
        }
    }

    if (token) {
        config.headers['Authorization'] = 'Bearer ' + token;
    }

    return config;
};