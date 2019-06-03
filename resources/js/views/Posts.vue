<template>
    <div id="posts">
        <h1>Posts</h1>
        <PostsList />
    </div>
</template>

<script>
import PostsList from '../components/post/PostsList';

export default {
    name: 'Posts',
    components: {
        PostsList
    }
}
</script>

<style>

</style>