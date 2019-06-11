<template>
    <div id="app">
        <Navbar />    
        <div class="container mt-5">
            <Message v-if="msg" class="mb-4"/>
            <router-view/>
        </div>
    </div>
</template>

<script>
import Navbar from './components/layout/Navbar';
import Message from './components/layout/Message';
import { mapGetters } from "vuex";

export default {
    name:"app",
    components: {
        Navbar,
        Message
    },
    computed: mapGetters(["msg"])
}
</script>

<style>

</style>
