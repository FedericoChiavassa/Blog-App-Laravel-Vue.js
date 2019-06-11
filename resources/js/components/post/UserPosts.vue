<template>
    <div class="posts-list">
        <b-spinner v-if="isLoading" label="Loading..." variant="primary"></b-spinner>
        <b-list-group v-else>
            <b-list-group-item v-for="post in allPosts" :key="post.id">         
                <b-link :to="`/posts/${post.id}`">{{ post.title }}</b-link>
            </b-list-group-item>
        </b-list-group>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "UserPosts",
  methods: {
    ...mapActions(["fetchUserPosts"])
  },
  computed: mapGetters(["allPosts", "isLoading"]),
  created() {
    this.fetchUserPosts();
  }
}
</script>

<style>
.list-group-item {
    background-color: #f9f9f9
}
</style>
