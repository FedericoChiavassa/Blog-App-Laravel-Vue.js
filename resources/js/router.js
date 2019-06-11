import Vue from 'vue'
import Router from 'vue-router'
import store from './store';
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    beforeRoutes: store.dispatch('loadUser'),
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
        component: () => import(/* webpackChunkName: "login" */ './views/Login.vue'),
        beforeEnter: checkUser
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import(/* webpackChunkName: "dashboard" */ './views/Dashboard.vue'),
        beforeEnter: authRequired,
    }
    ]
})

function checkUser(to, from, next) {
    if ( store.getters.loadingUser ) {
        store.watch(() => store.getters.loadingUser, function() {
            if ( store.getters.loadingUser === false ) {
                store.getters.isAuthenticated === true ? next('/dashboard') : next();
            }
        });
    }
    else {
        store.getters.isAuthenticated === true ? next('/dashboard') : next();
    }
}

function authRequired (to, from, next) {
    if ( store.getters.loadingUser ) {
        store.watch(() => store.getters.loadingUser, function() {
            if ( store.getters.loadingUser === false ) {
                store.getters.isAuthenticated === true ? next() : next('/login');
            }
        });
    }
    else {
        store.getters.isAuthenticated === true ? next() : next('/login');
    }
}

