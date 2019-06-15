<template>
    <div id="posts">
        <h1 class="mb-4">Posts</h1>
        <b-button 
            size="sm" 
            variant="primary" 
            to="/create-post" 
            v-if="isAuthenticated"
        >+ New Post</b-button>
        <Pagination />
        <PostsList v-bind:page="$route.query.page"/>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import PostsList from '../components/post/PostsList';
import Pagination from '../components/layout/Pagination';

export default {
    name: 'Posts',
    components: {
        PostsList,
        Pagination
    },
    computed: mapGetters(["isAuthenticated"])
}
</script>

<style scoped>
.btn {
    float: right;
}
</style>