<template>
    <div class="posts-list">
      <div
        v-for="post in allPosts"
        :key="post.id"
        class="post"
      >- {{ post.title }}</div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "PostsList",
  methods: {
    ...mapActions(["fetchPosts"])
  },
  computed: mapGetters(["allPosts"]),
  created() {
    this.fetchPosts();
  }
};
</script>

<style>
</style>
