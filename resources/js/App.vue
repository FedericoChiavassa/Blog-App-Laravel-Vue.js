<template>
    <div id="app">
        <Navbar />
        <div class="container mt-4">
            <router-view/>
        </div>
    </div>
</template>

<script>
import Navbar from './components/layout/Navbar';
export default {
    name:"app",
    components: {
        Navbar
    }

}
</script>

<style>

</style>
