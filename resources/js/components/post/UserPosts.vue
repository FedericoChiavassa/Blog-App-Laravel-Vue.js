<template>
    <div class="posts-list">
        <b-spinner v-if="isLoading" label="Loading..." variant="primary"></b-spinner>
        <b-list-group v-else>
            <b-list-group-item v-for="post in allPosts" :key="post.id">         
                <b-link :to="`/posts/${post.id}`">{{ post.title }}</b-link>
                <b-button 
                    size="sm" 
                    variant="danger" 
                    @click="deleteThis(post.id)"
                >Delete</b-button>
                <b-button 
                    size="sm" 
                    variant="primary" 
                    :to="`/posts/${post.id}/edit`" 
                >Edit Post</b-button>
            </b-list-group-item>
        </b-list-group>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "UserPosts",
  methods: {
    ...mapActions(["fetchUserPosts", "deletePost"]),
    deleteThis(id) {
        this.deletePost(id);
        this.fetchUserPosts();
    }
  },
  computed: mapGetters(["allPosts", "isLoading", "isAuthenticated"]),
  created() {
    this.fetchUserPosts();
  }
}
</script>

<style scoped>
    .list-group-item {
        background-color: #f9f9f9
    }

    .btn {
        float: right;
        margin-left: 1rem;
    }
</style>
