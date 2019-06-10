import Vue from 'vue'
import Router from 'vue-router'
import store from './store';
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
        path: '/posts',
        name: 'posts',
        component: () => import(/* webpackChunkName: "posts" */ './views/Posts.vue')
    },
    {
        path: '/posts/:id',
        name: 'post',
        props: true,
        component: () => import(/* webpackChunkName: "posts" */ './views/Post.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "auth" */ './views/Login.vue'),
        beforeEnter: noUserRequired
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import(/* webpackChunkName: "auth" */ './views/Dashboard.vue'),
        beforeEnter: authRequired
    }
    ]
})

function authRequired(to, from, next) {
    if (store.getters.isAuthenticated !== true) next('/login');
    next();
}

function noUserRequired(to, from, next) {
    store.dispatch( 'loadUser' );
    store.watch(() => store.getters.loadingUser, function() {
        if ( store.getters.loadingUser === false ) {
            store.getters.isAuthenticated === true ? next('/dashboard') : next();
        }
    });
}


