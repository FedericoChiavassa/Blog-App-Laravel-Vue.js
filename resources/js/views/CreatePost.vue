<template>
    <div id="create-post">
        <h1 class="mb-4">Create Post</h1>
        <PostFormCreate />
    </div>
</template>

<script>
import PostFormCreate from '../components/post/PostFormCreate';

export default {
    name: 'create-post',
    components: {
        PostFormCreate
    }
}
</script>

<style>

</style>