<template>
    <div id="navbar">
    <b-navbar toggleable="sm" type="dark" variant="dark">
        <div class="container">
            <b-navbar-brand to="/">BlogApp</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav class="left-nav">
                    <b-nav-item to="/posts">Posts</b-nav-item>
                    <b-nav-item to="/about">About</b-nav-item>
                </b-navbar-nav>

                <b-navbar-nav class="ml-auto" v-if="!loadingUser">
                    <b-nav-item to="/login" v-if="!isAuthenticated">Login</b-nav-item>
                    <b-nav-item to="/register" v-if="!isAuthenticated">Register</b-nav-item>
                    <b-nav-item-dropdown :text="'Welcome ' + user.name" v-if="isAuthenticated">
                        <b-dropdown-item to="/dashboard" class="d-item">Dashboard</b-dropdown-item>
                        <b-dropdown-item @click="logout()">Logout</b-dropdown-item>   
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </div>
    </b-navbar>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Navbar",
  computed: mapGetters(["isAuthenticated", "loadingUser", "user"]),
  methods: {
      ...mapActions(["logout"])
    }
}
</script>

<style>
.left-nav .router-link-active {
    color: #fff !important
}

</style>