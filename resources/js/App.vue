<template>
    <div id="app">
        <Navbar />
        <div class="container mt-5">
            <router-view/>
        </div>
    </div>
</template>

<script>
import Navbar from './components/layout/Navbar';
import { mapGetters, mapActions } from "vuex";

export default {
    name:"app",
    components: {
        Navbar
    },
    methods: {
      ...mapActions(["loadUser"])
    },
    created() {
        this.loadUser();
    }
}
</script>

<style>

</style>
