<template>
    <div id="post-page">
        <PostDetails v-bind:postId="$route.params.id" />
    </div>
</template>

<script>
export default {
    name: 'Post',
    components: {
        PostDetails: () => import('../components/post/PostDetails')
    }
}
</script>

<style>

</style>