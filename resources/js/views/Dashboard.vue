<template>
    <div id="dashboard">
        <h1 class="mb-4">Dashboard</h1>
        <b-button class="mb-4" variant="primary" block>New Post</b-button>
        <h3 class="mb-3">Manage your posts:</h3>
        <UserPosts />
    </div>
</template>

<script>
import UserPosts from '../components/post/UserPosts';

export default {
    name: "Dashboard",
    components: {
        UserPosts
    }
}
</script>

<style>

</style>
