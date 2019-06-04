<template>
    <div class="post-details">
        <b-spinner v-if="isLoading" label="Loading..." variant="primary"></b-spinner>
        <div v-else>
            <h1>{{ singlePost.title }}</h1>
            <p>{{ singlePost.body }}</p>
            <small>Author: {{ singlePost.author }}</small><br>
            <small>Created: {{ singlePost.created_at }}</small><br>
            <small>Last update: {{ singlePost.updated_at }}</small>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "PostDetails",
  props: ['postId'],
  methods: {
    ...mapActions(["fetchPost", "clearPostState"])
  },
  computed: mapGetters(["singlePost", "isLoading"]),
  created() {
    this.fetchPost(this.postId);
  },
  destroyed() {
    this.clearPostState();
  }
};
</script>

<style>
</style>