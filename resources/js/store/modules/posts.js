import axios from 'axios';

const state = {
  posts: []
};

const getters = {
  allPosts: state => state.posts
};

const actions = {
  async fetchPosts({ commit }) {
    const response = await axios.get(
      'api/posts'
    );

    commit('setPosts', response.data.data);
  }
};

const mutations = {
    setPosts: (state, posts) => (state.posts = posts)
};

export default {
  state,
  getters,
  actions,
  mutations
};
