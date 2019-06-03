import Vuex from 'vuex';
import Vue from 'vue';
import posts from './modules/posts.js';

// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
  modules: {
    posts
  }
});
