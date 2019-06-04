<template>
    <div id="posts">
        <h1 class="mb-4">Posts</h1>
        <Pagination />
        <PostsList v-bind:page="$route.query.page"/>
    </div>
</template>

<script>
import PostsList from '../components/post/PostsList';
import Pagination from '../components/layout/Pagination';

export default {
    name: 'Posts',
    components: {
        PostsList,
        Pagination
    }
}
</script>

<style>

</style>