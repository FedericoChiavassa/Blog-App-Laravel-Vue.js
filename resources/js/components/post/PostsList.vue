<template>
    <div class="posts-list">
        <b-list-group >
            <b-list-group-item v-for="post in allPosts" :key="post.id">         
                <b-link href="#">{{ post.title }}</b-link>
            </b-list-group-item>
        </b-list-group>
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
