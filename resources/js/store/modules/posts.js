import axios from 'axios';

const state = {
  posts: [],
  post: {},
  isLoading: false
};

const getters = {
  allPosts: state => state.posts,
  singlePost: state => state.post,
  isLoading: state => state.isLoading
};

const actions = {
  async fetchPosts({ commit }) {
    commit('setLoading');

    const response = await axios.get(
      '/api/posts'
    );

    commit('setPosts', response.data.data);
  },
  async fetchPost({ commit }, id) {
    commit('setLoading');

    const response = await axios.get(
        `/api/posts/${id}`
    );

    commit('setPost', response.data);
  },
  clearPostState({ commit }) {
      commit('clearPostState')
  }
};

const mutations = {
    setPosts: (state, posts) => (
        state.posts = posts,
        state.isLoading = false
        ),
    setPost: (state, post) => (
        state.post = post,
        state.isLoading = false
        ),
    clearPostState: (state) => ( 
        state.posts = [],
        state.post = {}
    ),
    setLoading: state => (state.isLoading = true)

};

export default {
  state,
  getters,
  actions,
  mutations
};
