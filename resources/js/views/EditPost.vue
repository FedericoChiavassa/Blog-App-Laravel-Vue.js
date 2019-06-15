<template>
    <div id="edit-post">
        <h1 class="mb-4">Edit Post</h1>
        <PostFormEdit v-bind:postId="$route.params.id"/>
    </div>
</template>

<script>
import PostFormEdit from '../components/post/PostFormEdit';

export default {
    name: 'edit-post',
    components: {
        PostFormEdit
    }
}
</script>

<style>

</style>