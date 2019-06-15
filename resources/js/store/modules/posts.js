import axios from 'axios';
import router from '../../router';
import { tokenConfig } from './auth';

const state = {
  posts: [],
  post: {},
  isLoading: false,
  pagination: {
    totPages: 9999,
  }
};

const getters = {
  allPosts: state => state.posts,
  singlePost: state => state.post,
  isLoading: state => state.isLoading,
  pagination: state => state.pagination
};

const actions = {
  async fetchPosts({ commit }, page) {
    commit('setPostLoading');

    const response = await axios.get(
      `api/posts?page=${page}`
    );

    commit('setPosts', response.data);
  },
  async fetchPost({ commit }, id) {
    commit('setPostLoading');

    const response = await axios.get(
        `/api/posts/${id}`
    );

    commit('setPostDetails', response.data);
  },
  async fetchUserPosts({ commit }, id) {
    commit('setPostLoading');

    const response = await axios.get(
        '/api/user/posts', tokenConfig()
    );

    commit('setUserPosts', response.data);
  },
  clearPostState({ commit }) {
      commit('clearPostState')
  },
  async createPost({ commit }, post) {
      try {
        const response = await axios.post(
        'api/posts', post, tokenConfig()
        );

        console.log(response);
    
        router.push('/dashboard');
        commit('setMessage', {"success": "Post Created"}); 
      }
      catch(err) {
        commit('setMessage', err.response.data);
      }
  }
};

const mutations = {
    setPosts: (state, res) => (
        state.posts = res.data,
        state.pagination.totPages = res.meta.last_page,
        state.isLoading = false
        ),
    setUserPosts: (state, res) => (
        state.posts = res,
        state.isLoading = false
        ),
    setPostDetails: (state, post) => (
        state.post = post,
        state.isLoading = false
        ),
    clearPostState: (state) => ( 
        state.posts = [],
        state.post = {}
    ),
    setPostLoading: state => (
        state.isLoading = true
    )
};

export default {
  state,
  getters,
  actions,
  mutations
};