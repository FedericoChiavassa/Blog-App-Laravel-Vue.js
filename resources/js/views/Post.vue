<template>
    <div id="post-page">
        <b-button size="sm" class="mb-4" v-on:click="goBack">← Go Back</b-button>
        <PostDetails v-bind:postId="$route.params.id" />
    </div>
</template>

<script>
export default {
    name: 'Post',
    components: {
        PostDetails: () => import('../components/post/PostDetails')
    },
    methods: {
        goBack () {
        window.history.length > 1
            ? this.$router.go(-1)
            : this.$router.push('/posts')
        }
    }
}
</script>

<style>

</style>